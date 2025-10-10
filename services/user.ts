import { execute, getDb, getLastInsertId } from "./storage.ts";

interface UserRecord {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  role: string;
}

interface UserProfileRecord {
  user_id: number;
  nickname: string | null;
  birthdate: string | null;
  birthtime: string | null;
  birthplace: string | null;
  phone: string | null;
}

async function hashOtp(code: string): Promise<string> {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary);
}

export function ensureUserTables(): void {
  execute(
    "CREATE TABLE IF NOT EXISTS user_profiles (user_id INTEGER PRIMARY KEY, nickname TEXT, birthdate TEXT, birthtime TEXT, birthplace TEXT, phone TEXT UNIQUE, created_at INTEGER DEFAULT (strftime('%s','now')), updated_at INTEGER DEFAULT (strftime('%s','now')), FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE)",
  );
  execute(
    "CREATE TABLE IF NOT EXISTS phone_verification_codes (phone TEXT PRIMARY KEY, code_hash TEXT NOT NULL, expires_at INTEGER NOT NULL, attempts INTEGER DEFAULT 0, created_at INTEGER DEFAULT (strftime('%s','now')), updated_at INTEGER DEFAULT (strftime('%s','now')))"
  );
}

export function findUserByEmail(email: string): UserRecord | undefined {
  const db = getDb();
  const result = db.queryEntries<UserRecord>(
    "SELECT id, username, email, password_hash, role FROM users WHERE email = ? LIMIT 1",
    [email],
  );
  return result[0];
}

export function findUserByUsername(username: string): UserRecord | undefined {
  const db = getDb();
  const result = db.queryEntries<UserRecord>(
    "SELECT id, username, email, password_hash, role FROM users WHERE username = ? LIMIT 1",
    [username],
  );
  return result[0];
}

export function findUserById(id: number): UserRecord | undefined {
  const db = getDb();
  const result = db.queryEntries<UserRecord>(
    "SELECT id, username, email, password_hash, role FROM users WHERE id = ? LIMIT 1",
    [id],
  );
  return result[0];
}

export function findUserProfileByPhone(phone: string): UserProfileRecord | undefined {
  const db = getDb();
  const result = db.queryEntries<UserProfileRecord>(
    "SELECT user_id, nickname, birthdate, birthtime, birthplace, phone FROM user_profiles WHERE phone = ? LIMIT 1",
    [phone],
  );
  return result[0];
}

export function findUserProfile(userId: number): UserProfileRecord | undefined {
  const db = getDb();
  const result = db.queryEntries<UserProfileRecord>(
    "SELECT user_id, nickname, birthdate, birthtime, birthplace, phone FROM user_profiles WHERE user_id = ? LIMIT 1",
    [userId],
  );
  return result[0];
}

export function createUser(data: {
  username: string;
  email: string;
  passwordHash: string;
  role?: string;
  nickname?: string;
  birthdate?: string;
  birthtime?: string;
  birthplace?: string;
  phone?: string;
}): number {
  execute(
    "INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
    [data.username, data.email, data.passwordHash, data.role ?? "user"],
  );
  const userId = getLastInsertId();
  execute(
    "INSERT INTO user_profiles (user_id, nickname, birthdate, birthtime, birthplace, phone) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET nickname=excluded.nickname, birthdate=excluded.birthdate, birthtime=excluded.birthtime, birthplace=excluded.birthplace, phone=excluded.phone, updated_at=(strftime('%s','now'))",
    [
      userId,
      data.nickname ?? null,
      data.birthdate ?? null,
      data.birthtime ?? null,
      data.birthplace ?? null,
      data.phone ?? null,
    ],
  );
  return userId;
}

export function updateUserLastLogin(userId: number): void {
  execute(
    "UPDATE user_profiles SET updated_at=(strftime('%s','now')) WHERE user_id = ?",
    [userId],
  );
  execute(
    "UPDATE users SET updated_at=(strftime('%s','now')) WHERE id = ?",
    [userId],
  );
}

export async function savePhoneVerificationCode(phone: string, code: string, ttlSeconds: number): Promise<void> {
  const codeHash = await hashOtp(code);
  const expiresAt = Math.floor(Date.now() / 1000) + ttlSeconds;
  execute(
    "INSERT INTO phone_verification_codes (phone, code_hash, expires_at, attempts, created_at, updated_at) VALUES (?, ?, ?, 0, (strftime('%s','now')), (strftime('%s','now'))) ON CONFLICT(phone) DO UPDATE SET code_hash=excluded.code_hash, expires_at=excluded.expires_at, attempts=0, updated_at=excluded.updated_at",
    [phone, codeHash, expiresAt],
  );
}

export async function verifyPhoneCode(phone: string, code: string): Promise<boolean> {
  const db = getDb();
  const record = db.queryEntries<{ phone: string; code_hash: string; expires_at: number; attempts: number }>(
    "SELECT phone, code_hash, expires_at, attempts FROM phone_verification_codes WHERE phone = ? LIMIT 1",
    [phone],
  )[0];
  if (!record) {
    return false;
  }
  if (record.expires_at < Math.floor(Date.now() / 1000)) {
    execute("DELETE FROM phone_verification_codes WHERE phone = ?", [phone]);
    return false;
  }
  const codeHash = await hashOtp(code);
  if (codeHash !== record.code_hash) {
    execute(
      "UPDATE phone_verification_codes SET attempts = attempts + 1, updated_at = (strftime('%s','now')) WHERE phone = ?",
      [phone],
    );
    return false;
  }
  execute("DELETE FROM phone_verification_codes WHERE phone = ?", [phone]);
  return true;
}

export function upsertUserProfilePhone(userId: number, phone: string): void {
  execute(
    "INSERT INTO user_profiles (user_id, phone) VALUES (?, ?) ON CONFLICT(user_id) DO UPDATE SET phone = excluded.phone, updated_at=(strftime('%s','now'))",
    [userId, phone],
  );
}
