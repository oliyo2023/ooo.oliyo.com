#!/usr/bin/env deno run --allow-read --allow-write --allow-env

import { DB } from "https://deno.land/x/sqlite3@0.8.0/mod.ts";
import { hash } from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

const DB_PATH = "./data/blog.db";

async function createAdminUser() {
  console.log("创建管理员用户...");

  // 检查数据库文件是否存在
  try {
    await Deno.stat(DB_PATH);
  } catch {
    console.error("错误: 数据库文件不存在。请先运行 'deno run --allow-read --allow-write scripts/init-db.ts'。");
    Deno.exit(1);
  }

  const db = new DB(DB_PATH);

  // 检查是否已存在管理员用户
  const existingAdmin = db.query("SELECT COUNT(*) as count FROM admin_users")[0] as { count: number };

  if (existingAdmin.count > 0) {
    console.log("已存在管理员用户。");
    const shouldContinue = prompt("是否要创建新的管理员用户？(y/N): ");
    if (shouldContinue?.toLowerCase() !== 'y') {
      db.close();
      return;
    }
  }

  // 获取用户输入
  const username = prompt("请输入用户名: ")?.trim();
  if (!username) {
    console.error("用户名不能为空。");
    db.close();
    Deno.exit(1);
  }

  const email = prompt("请输入邮箱: ")?.trim();
  if (!email) {
    console.error("邮箱不能为空。");
    db.close();
    Deno.exit(1);
  }

  const name = prompt("请输入显示名称: ")?.trim();
  if (!name) {
    console.error("显示名称不能为空。");
    db.close();
    Deno.exit(1);
  }

  const password = prompt("请输入密码: ", { password: true });
  if (!password) {
    console.error("密码不能为空。");
    db.close();
    Deno.exit(1);
  }

  if (password.length < 8) {
    console.error("密码长度至少8个字符。");
    db.close();
    Deno.exit(1);
  }

  try {
    // 生成密码哈希
    const passwordHash = await hash(password);

    // 插入管理员用户
    db.execute(
      "INSERT INTO admin_users (username, email, password_hash, name) VALUES (?, ?, ?, ?)",
      [username, email, passwordHash, name]
    );

    console.log("管理员用户创建成功！");
    console.log(`用户名: ${username}`);
    console.log(`邮箱: ${email}`);
    console.log(`显示名称: ${name}`);
    console.log("\n现在您可以使用这些凭据登录管理面板。");

  } catch (error) {
    console.error("创建管理员用户失败:", error.message);
    Deno.exit(1);
  } finally {
    db.close();
  }
}

// 运行创建管理员用户的函数
createAdminUser();