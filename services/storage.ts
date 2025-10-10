// 数据库连接和查询工具

import { DB } from "https://deno.land/x/sqlite3@0.8.0/mod.ts";

// 数据库配置
const DB_PATH = Deno.env.get("DATABASE_PATH") || "./data/blog.db";

// 数据库连接池（简单实现）
let dbInstance: DB | null = null;

export function getDb(): DB {
  if (!dbInstance) {
    dbInstance = new DB(DB_PATH);
    dbInstance.execute("PRAGMA foreign_keys = ON");
  }
  return dbInstance;
}

// 关闭数据库连接
export function closeDb(): void {
  if (dbInstance) {
    dbInstance.close();
    dbInstance = null;
  }
}

// 数据库查询辅助函数
export function queryOne<T = any>(
  sql: string,
  params: any[] = [],
): T | undefined {
  const db = getDb();
  try {
    const result = db.queryEntries<T>(sql, params);
    return result.length > 0 ? result[0] : undefined;
  } catch (error) {
    console.error("查询错误:", error);
    throw error;
  }
}

export function queryMany<T = any>(sql: string, params: any[] = []): T[] {
  const db = getDb();
  try {
    const result = db.queryEntries<T>(sql, params);
    return result;
  } catch (error) {
    console.error("查询错误:", error);
    throw error;
  }
}

export function execute(sql: string, params: any[] = []): number {
  const db = getDb();
  try {
    db.execute(sql, params);
    return db.changes || 0;
  } catch (error) {
    console.error("执行错误:", error);
    throw error;
  }
}

export function getLastInsertId(): number {
  const db = getDb();
  return db.lastInsertRowId || 0;
}

// 事务处理
export function transaction<T>(fn: () => T): T {
  const db = getDb();
  try {
    db.execute("BEGIN TRANSACTION");
    const result = fn();
    db.execute("COMMIT");
    return result;
  } catch (error) {
    db.execute("ROLLBACK");
    throw error;
  }
}

// 分页查询辅助函数
export interface PaginationOptions {
  page: number;
  limit: number;
  orderBy?: string;
  orderDirection?: "ASC" | "DESC";
}

export interface PaginationResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export function paginateQuery<T>(
  baseQuery: string,
  countQuery: string,
  params: any[] = [],
  options: PaginationOptions,
): PaginationResult<T> {
  const { page, limit, orderBy = "created_at", orderDirection = "DESC" } =
    options;

  // 计算偏移量
  const offset = (page - 1) * limit;

  // 添加排序和分页
  const query =
    `${baseQuery} ORDER BY ${orderBy} ${orderDirection} LIMIT ? OFFSET ?`;
  const finalParams = [...params, limit, offset];

  // 执行查询
  const data = queryMany<T>(query, finalParams);

  // 获取总数
  const [{ total }] = queryMany<{ total: number }>(countQuery, params);

  // 计算分页信息
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    page,
    limit,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
}
