// Cloudflare Pages Functions 入口点
import { manifest } from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// 配置 Fresh
const config = defineConfig({
  plugins: [tailwind()],
});

// 启动 Fresh 应用
const handle = await start(manifest, config);

// 导出 fetch handler
export default {
  async fetch(request, env, ctx) {
    try {
      // 设置全局环境变量供 Fresh 使用
      if (typeof globalThis !== 'undefined') {
        globalThis.Deno = {
          env: {
            get: (key) => {
              // 优先使用 Cloudflare Pages 环境变量
              const value = env[key];
              if (value !== undefined) return value;

              // 回退到默认值
              const defaults = {
                'DATABASE_PATH': 'd1',
                'SESSION_SECRET': env.SESSION_SECRET || 'default-secret-change-this',
                'DEV_MODE': 'false',
                'APP_NAME': env.APP_NAME || 'Fresh Blog',
                'APP_URL': env.APP_URL || 'https://your-domain.pages.dev',
                'BCRYPT_ROUNDS': '12',
                'UPLOAD_MAX_SIZE': '10485760',
                'UPLOAD_ALLOWED_TYPES': 'image/jpeg,image/png,image/gif,image/webp',
                'POSTS_PER_PAGE': '10',
                'SEARCH_RESULTS_PER_PAGE': '20'
              };
              return defaults[key];
            }
          }
        };

        // 添加数据库到全局作用域
        globalThis.cloudflare = { env };
      }

      // 处理请求
      const response = await handle(request);

      // 添加安全头
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('X-XSS-Protection', '1; mode=block');
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

      return response;

    } catch (error) {
      console.error('Fresh application error:', error);

      // 返回错误页面
      return new Response(`
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>应用错误 - Fresh Blog</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50 min-h-screen flex items-center justify-center">
          <div class="max-w-md mx-auto text-center p-6">
            <div class="mb-8">
              <h1 class="text-6xl font-bold text-red-300 mb-4">500</h1>
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">应用错误</h2>
              <p class="text-gray-600 mb-8">抱歉，应用遇到了问题。请稍后重试。</p>
            </div>
            <div class="space-y-4">
              <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                返回首页
              </a>
            </div>
          </div>
        </body>
        </html>
      `, {
        status: 500,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  },
};