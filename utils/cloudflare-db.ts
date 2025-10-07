// Cloudflare Workers 数据库适配器
// 支持 D1 和 KV 存储作为 SQLite 的替代

export interface CloudflareDB {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T, ttl?: number): Promise<void>;
  delete(key: string): Promise<void>;
  list(prefix?: string): Promise<string[]>;
  query<T>(sql: string, params?: any[]): Promise<T[]>;
}

// D1 数据库适配器
export class D1Adapter implements CloudflareDB {
  constructor(private d1: D1Database) {}

  async get<T>(key: string): Promise<T | null> {
    const result = await this.d1.prepare(
      "SELECT value FROM kv_store WHERE key = ?",
    ).bind(key).first();
    return result ? JSON.parse(result.value as string) : null;
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const stringValue = JSON.stringify(value);
    await this.d1.prepare(
      "INSERT OR REPLACE INTO kv_store (key, value, expires_at) VALUES (?, ?, ?)",
    )
      .bind(key, stringValue, ttl ? Date.now() + ttl * 1000 : null)
      .run();
  }

  async delete(key: string): Promise<void> {
    await this.d1.prepare("DELETE FROM kv_store WHERE key = ?").bind(key).run();
  }

  async list(prefix?: string): Promise<string[]> {
    const sql = prefix
      ? "SELECT key FROM kv_store WHERE key LIKE ?"
      : "SELECT key FROM kv_store";
    const result = await this.d1.prepare(sql).bind(
      prefix ? `${prefix}%` : undefined,
    ).all();
    return result.results.map((row) => row.key as string);
  }

  async query<T>(sql: string, params: any[] = []): Promise<T[]> {
    const stmt = this.d1.prepare(sql);
    const result = await stmt.bind(...params).all();
    return result.results as T[];
  }
}

// KV 存储适配器（用于简单键值存储）
export class KVAdapter implements CloudflareDB {
  constructor(private kv: KVNamespace) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.kv.get(key);
    return value ? JSON.parse(value) : null;
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const stringValue = JSON.stringify(value);
    await this.kv.put(key, stringValue, { expirationTtl: ttl });
  }

  async delete(key: string): Promise<void> {
    await this.kv.delete(key);
  }

  async list(prefix?: string): Promise<string[]> {
    const list = await this.kv.list({ prefix });
    return list.keys.map((key) => key.name);
  }

  async query<T>(_sql: string, _params?: any[]): Promise<T[]> {
    throw new Error(
      "KV storage doesn't support SQL queries. Use D1 database for complex queries.",
    );
  }
}

// 获取数据库实例
export function getDB(env: any): CloudflareDB {
  if (env.DB) {
    return new D1Adapter(env.DB);
  } else if (env.BLOG_DB) {
    return new KVAdapter(env.BLOG_DB);
  } else {
    throw new Error("No database configured. Please set up D1 or KV storage.");
  }
}

// 初始化 D1 数据库表
export async function initD1Tables(d1: D1Database): Promise<void> {
  // 创建 KV 存储表（如果使用 KV 作为简单存储）
  await d1.exec(`
    CREATE TABLE IF NOT EXISTS kv_store (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      expires_at INTEGER,
      created_at INTEGER DEFAULT (strftime('%s', 'now'))
    )
  `);

  // 创建博客文章表
  await d1.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      excerpt TEXT,
      status TEXT DEFAULT 'draft',
      published_at INTEGER,
      created_at INTEGER DEFAULT (strftime('%s', 'now')),
      updated_at INTEGER DEFAULT (strftime('%s', 'now'))
    )
  `);

  // 创建用户表
  await d1.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT DEFAULT 'user',
      created_at INTEGER DEFAULT (strftime('%s', 'now'))
    )
  `);

  // 创建会话表
  await d1.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at INTEGER DEFAULT (strftime('%s', 'now')),
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `);
}
