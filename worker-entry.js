// Cloudflare Workers 入口点
// 这个文件是预编译的 JavaScript 版本，用于 Workers 部署

// 扩展 globalThis 类型
globalThis.Deno = globalThis.Deno || {};

// 设置 Workers 环境的全局变量
function setupWorkersEnv(env) {
  // 设置 Cloudflare 环境到全局作用域
  globalThis.cloudflare = { env };
  
  // 模拟 Deno.env API 以兼容 Fresh 框架
  globalThis.Deno.env = {
    get: (key) => {
      // 优先使用 Workers 环境变量
      const workersValue = env[key];
      if (workersValue !== undefined) return workersValue;
      
      // 默认值回退
      const defaults = {
        'DATABASE_PATH': 'd1',
        'SESSION_SECRET': env.SESSION_SECRET || 'change-this-secret',
        'DEV_MODE': 'false',
        'APP_NAME': 'Fresh Blog',
        'APP_URL': env.APP_URL || 'https://ooo.oliyo.com',
        'BCRYPT_ROUNDS': '12',
        'UPLOAD_MAX_SIZE': '10485760',
        'UPLOAD_ALLOWED_TYPES': 'image/jpeg,image/png,image/gif,image/webp',
        'POSTS_PER_PAGE': '10',
        'SEARCH_RESULTS_PER_PAGE': '20'
      };
      return defaults[key];
    },
    set: () => {},
    delete: () => {},
    toObject: () => ({})
  };
}

// 导出 Workers fetch handler
export default {
  async fetch(request, env, ctx) {
    try {
      // 设置 Workers 环境变量
      setupWorkersEnv(env);
      
      // 动态导入 Fresh 应用
      // 这里使用动态导入，因为 Fresh 需要先设置环境
      const { manifest } = await import('./fresh.gen.ts');
      const { createHandler } = await import('$fresh/server.ts');
      const { defineConfig } = await import('$fresh/server.ts');
      const tailwind = (await import('$fresh/plugins/tailwind.ts')).default;
      
      // Workers 环境配置
      const config = defineConfig({
        plugins: [tailwind()],
      });
      
      // 创建 Fresh handler
      const handler = await createHandler(manifest, config);
      
      // 处理请求
      const response = await handler(request);
      
      // 添加安全头
      const headers = new Headers(response.headers);
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('X-Frame-Options', 'DENY');
      headers.set('X-XSS-Protection', '1; mode=block');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers,
      });
    } catch (error) {
      console.error('Fresh application error:', error);
      console.error('Error stack:', error.stack);
      
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
          <div class="max-w-2xl mx-auto text-center p-6">
            <div class="mb-8">
              <h1 class="text-6xl font-bold text-red-300 mb-4">500</h1>
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">应用错误</h2>
              <p class="text-gray-600 mb-4">抱歉，应用遇到了问题。</p>
            </div>
            <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-left">
              <p class="text-sm text-red-700 font-mono">
                <strong>错误信息:</strong><br>
                ${error.message || '未知错误'}
              </p>
            </div>
            <div class="space-y-4">
              <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                返回首页
              </a>
            </div>
            <p class="text-xs text-gray-500 mt-6">请检查构建日志和 Cloudflare Workers 设置</p>
          </div>
        </body>
        </html>
      `, {
        status: 500,
        headers: { 
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }
  },
};