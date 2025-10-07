// 基础Fresh路由中间件，用于错误处理

import { MiddlewareHandler } from "$fresh/server.ts";

// 错误页面接口
interface ErrorPageProps {
  title: string;
  message: string;
  statusCode?: number;
}

// 全局错误处理中间件
export const errorHandler: MiddlewareHandler = async (req, ctx) => {
  try {
    // 继续处理请求
    const resp = await ctx.next();
    return resp;
  } catch (error) {
    console.error("全局错误处理:", error);

    // 根据错误类型返回适当的响应
    if (error instanceof Error) {
      if (
        error.message.includes("not found") || error.message.includes("404")
      ) {
        return new Response(
          renderNotFoundPage(error.message),
          {
            status: 404,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          },
        );
      }
    }

    // 默认服务器错误页面
    return new Response(
      renderServerErrorPage("服务器内部错误，请稍后重试。"),
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      },
    );
  }
};

// 404页面渲染
function renderNotFoundPage(message = "页面未找到"): string {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>页面未找到 - Fresh Blog</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="max-w-md mx-auto text-center p-6">
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">页面未找到</h2>
      <p class="text-gray-600 mb-8">${message}</p>
    </div>
    <div class="space-y-4">
      <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        返回首页
      </a>
      <div class="text-sm text-gray-500">
        <a href="/search" class="hover:text-blue-600 transition-colors">搜索内容</a>
        <span class="mx-2">•</span>
        <a href="/sitemap.xml" class="hover:text-blue-600 transition-colors">站点地图</a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

// 服务器错误页面渲染
function renderServerErrorPage(message: string): string {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>服务器错误 - Fresh Blog</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="max-w-md mx-auto text-center p-6">
    <div class="mb-8">
      <h1 class="text-6xl font-bold text-red-300 mb-4">500</h1>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">服务器错误</h2>
      <p class="text-gray-600 mb-8">${message}</p>
    </div>
    <div class="space-y-4">
      <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        返回首页
      </a>
      <div class="text-sm text-gray-500">
        <p>如果问题持续存在，请联系网站管理员。</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

// 安全头添加中间件
export const securityHeaders: MiddlewareHandler = async (req, ctx) => {
  const resp = await ctx.next();

  // 添加安全头
  resp.headers.set("X-Content-Type-Options", "nosniff");
  resp.headers.set("X-Frame-Options", "DENY");
  resp.headers.set("X-XSS-Protection", "1; mode=block");
  resp.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return resp;
};

// 默认导出的处理器，按顺序应用中间件链
export const handler: MiddlewareHandler[] = [
  securityHeaders,
  errorHandler,
];
