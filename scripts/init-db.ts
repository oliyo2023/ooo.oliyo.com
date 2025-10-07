#!/usr/bin/env deno run --allow-read --allow-write

import { DB } from "https://deno.land/x/sqlite3@0.8.0/mod.ts";

const DB_PATH = "./data/blog.db";

console.log("初始化数据库...");

// 创建数据目录
try {
  Deno.mkdirSync("./data", { recursive: true });
} catch (error) {
  if (!(error instanceof Deno.errors.AlreadyExists)) {
    throw error;
  }
}

// 打开数据库连接
const db = new DB(DB_PATH);

// 创建管理员用户表
db.execute(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
  );
`);

// 创建分类表
db.execute(`
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

// 创建标签表
db.execute(`
  CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

// 创建文章表
db.execute(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    status TEXT NOT NULL CHECK (status IN ('draft', 'published')),
    author_id INTEGER NOT NULL,
    published_at DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    FOREIGN KEY (author_id) REFERENCES admin_users(id)
  );
`);

// 创建文章分类关联表
db.execute(`
  CREATE TABLE IF NOT EXISTS post_categories (
    post_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
  );
`);

// 创建文章标签关联表
db.execute(`
  CREATE TABLE IF NOT EXISTS post_tags (
    post_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id, tag_id),
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
  );
`);

// 创建全文搜索虚拟表
db.execute(`
  CREATE VIRTUAL TABLE IF NOT EXISTS posts_fts USING fts5(
    title,
    content,
    excerpt,
    content=posts,
    content_rowid=id
  );
`);

// 创建触发器维护FTS索引
db.execute(`
  CREATE TRIGGER IF NOT EXISTS posts_fts_insert AFTER INSERT ON posts BEGIN
    INSERT INTO posts_fts(rowid, title, content, excerpt)
    VALUES (new.id, new.title, new.content, new.excerpt);
  END;
`);

db.execute(`
  CREATE TRIGGER IF NOT EXISTS posts_fts_delete AFTER DELETE ON posts BEGIN
    INSERT INTO posts_fts(posts_fts, rowid, title, content, excerpt)
    VALUES ('delete', old.id, old.title, old.content, old.excerpt);
  END;
`);

db.execute(`
  CREATE TRIGGER IF NOT EXISTS posts_fts_update AFTER UPDATE ON posts BEGIN
    INSERT INTO posts_fts(posts_fts, rowid, title, content, excerpt)
    VALUES ('delete', old.id, old.title, old.content, old.excerpt);
    INSERT INTO posts_fts(rowid, title, content, excerpt)
    VALUES (new.id, new.title, new.content, new.excerpt);
  END;
`);

// 创建性能索引
db.execute(`
  CREATE INDEX IF NOT EXISTS idx_posts_status_published ON posts(status, published_at DESC);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags(slug);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
`);

db.execute(`
  CREATE INDEX IF NOT EXISTS idx_admin_users_email ON admin_users(email);
`);

console.log("数据库初始化完成！");
console.log(`数据库文件位置: ${DB_PATH}`);
console.log("请运行 'deno run --allow-read --allow-write scripts/create-admin.ts' 创建管理员用户。");

// 关闭数据库连接
db.close();