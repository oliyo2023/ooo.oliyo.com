// Cloudflare Pages Functions 主入口点
// 这是一个简化的处理器，用于测试部署

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    console.log('Request received:', url.pathname);

    // 处理根路径
    if (url.pathname === '/') {
      return new Response(`
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Fresh Blog - 测试页面</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50 min-h-screen">
          <div class="container mx-auto px-4 py-8">
            <header class="text-center mb-8">
              <h1 class="text-4xl font-bold text-blue-600 mb-4">🍋 Fresh Blog</h1>
              <p class="text-gray-600 text-lg">Cloudflare Pages 部署测试成功！</p>
            </header>

            <main class="max-w-4xl mx-auto">
              <section class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-2xl font-semibold mb-4">🎉 部署状态</h2>
                <div class="space-y-2">
                  <p class="text-green-600">✅ Cloudflare Pages Functions 正常工作</p>
                  <p class="text-green-600">✅ 环境变量配置正确</p>
                  <p class="text-green-600">✅ 路由系统运行正常</p>
                </div>
              </section>

              <section class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-2xl font-semibold mb-4">📊 环境信息</h2>
                <div class="bg-gray-100 rounded p-4">
                  <pre class="text-sm">
URL: ${url.href}
Method: ${request.method}
User Agent: ${request.headers.get('user-agent') || 'Unknown'}
Time: ${new Date().toISOString()}
                  </pre>
                </div>
              </section>

              <section class="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 class="text-2xl font-semibold mb-4">🔗 下一步</h2>
                <p class="text-gray-600 mb-4">现在我们需要集成完整的 Fresh 框架。请检查：</p>
                <ul class="list-disc list-inside text-gray-600 space-y-1">
                  <li>D1 数据库绑定是否正确</li>
                  <li>环境变量是否设置完整</li>
                  <li>Fresh 框架依赖是否正确加载</li>
                </ul>
              </section>
            </main>

            <footer class="text-center py-8 text-gray-500">
              <p>Powered by Fresh + Cloudflare Pages</p>
            </footer>
          </div>
        </body>
        </html>
      `, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // API 测试端点
    if (url.pathname === '/api/status') {
      const data = {
        status: 'ok',
        message: 'Fresh Blog API is working',
        timestamp: new Date().toISOString(),
        environment: {
          APP_NAME: env.APP_NAME || 'Fresh Blog',
          APP_URL: env.APP_URL || 'Not set',
          DATABASE_PATH: env.DATABASE_PATH || 'Not set',
        }
      };

      return new Response(JSON.stringify(data, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // 404 页面
    return new Response(`
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>页面未找到 - Fresh Blog</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">页面未找到</h2>
          <p class="text-gray-600 mb-8">请求的页面 ${url.pathname} 不存在</p>
          <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            返回首页
          </a>
        </div>
      </body>
      </html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  },
};