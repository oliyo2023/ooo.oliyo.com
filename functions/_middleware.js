// Cloudflare Pages Functions 中间件
export async function onRequest(context) {
  // 可以在这里添加全局中间件逻辑
  const response = await context.next();

  // 添加安全头
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}