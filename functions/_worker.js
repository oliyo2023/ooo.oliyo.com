// Cloudflare Pages Functions Worker
// 完整的 Fresh 应用入口点
// 注意：这个文件将在构建时被替换为真正的 Fresh 应用

// 这是一个占位文件，实际的 _worker.js 应该由 Fresh 构建生成
// 如果你看到这条消息，说明构建过程可能有问题

export default {
  async fetch(request, env, ctx) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>构建中 - Fresh Blog</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50 min-h-screen flex items-center justify-center">
        <div class="text-center max-w-2xl mx-auto p-6">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">🔨 应用正在构建</h1>
          <p class="text-gray-600 mb-4">如果你看到这个页面，说明：</p>
          <ul class="text-left space-y-2 mb-6">
            <li>✅ Cloudflare Pages 部署成功</li>
            <li>⚠️ Fresh 应用构建可能不完整</li>
          </ul>
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p class="text-sm text-yellow-700">
              <strong>注意：</strong>这是一个占位页面。真正的 Fresh 应用应该在构建时替换这个文件。
            </p>
          </div>
          <p class="text-sm text-gray-500">请检查构建日志确认 Fresh 构建是否成功完成。</p>
        </div>
      </body>
      </html>
    `, {
      status: 503,
      headers: { 
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  },
};
