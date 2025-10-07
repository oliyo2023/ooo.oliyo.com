// 会话管理服务

import { Session } from "$fresh/session.ts";
import type { SessionData } from "../types/admin.ts";

const SESSION_SECRET = Deno.env.get("SESSION_SECRET") || "change-this-in-production";

// 创建会话实例
export const session = new Session<SessionData>({
  name: "blog_session",
  secret: SESSION_SECRET,
  secure: false, // 在生产环境中设置为 true (HTTPS)
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000, // 24小时
  sameSite: "Lax",
});

// 会话管理中间件
export function requireAuth() {
  return async (req: Request, ctx: any) => {
    const sessionData = await session.get(req);

    if (!sessionData || !sessionData.userId) {
      // 重定向到登录页面
      const loginUrl = new URL("/admin/login", req.url);
      return Response.redirect(loginUrl, 302);
    }

    // 将用户信息添加到上下文中
    ctx.state.user = sessionData;
    return await ctx.next();
  };
}

// 创建会话
export async function createSession(
  req: Request,
  userData: SessionData
): Promise<Response> {
  return session.set(req, userData);
}

// 获取会话
export async function getSession(req: Request): Promise<SessionData | undefined> {
  return await session.get(req);
}

// 销毁会话
export async function destroySession(req: Request): Promise<Response> {
  return session.delete(req);
}

// 更新最后登录时间
export async function updateLastLogin(userId: number): Promise<void> {
  const { execute } = await import("./storage.ts");
  execute(
    "UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = ?",
    [userId]
  );
}