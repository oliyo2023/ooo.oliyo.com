# Fresh 架构说明

## 🤔 为什么没有 index.html？

### Fresh 框架的特点

Fresh 是一个现代化的全栈 Web 框架，它采用**服务器端渲染 (SSR)** 架构，不同于传统的静态站点生成器。

#### 传统静态站点 vs Fresh

**传统静态站点生成器**（如 Hugo、Jekyll）：
```
输入: Markdown 文件
处理: 预生成 HTML 文件
输出: index.html, about.html 等静态文件
```

**Fresh 框架**：
```
输入: TypeScript/JSX 组件
处理: 运行时渲染
输出: JavaScript bundles + 服务器端运行时
```

### Fresh 的工作流程

1. **请求到达** → Cloudflare Pages Functions
2. **服务器端渲染** → Fresh 在服务器端生成 HTML
3. **发送响应** → 完整的 HTML 页面 + JavaScript
4. **客户端 hydration** → JavaScript 接管交互

## 📁 构建输出结构

你的 `_fresh` 目录包含：

```
_fresh/
├── _worker.js          # 🚀 服务器端入口点（最重要的文件）
├── fresh.gen.ts        # 📋 Fresh 路由清单
├── routes/             # 🛣️ 页面路由组件
├── islands/            # 🏝️ 交互式组件
├── components/         # 🧩 可复用组件
├── utils/              # 🔧 工具函数
├── fresh.config.ts     # ⚙️ Fresh 配置
├── static/             # 📁 静态资源
│   ├── styles.css      # 🎨 样式文件
│   └── *.svg           # 🖼️ 图片资源
├── main.js             # 📦 主要 JavaScript bundle
├── chunk-*.js          # 📦 代码分割的 chunks
├── _headers            # 🔒 HTTP 头配置
└── *.json              # 📊 构建元数据
```

## 🚀 关键文件说明

### `_worker.js` - 服务器端运行时

这是整个应用的核心，它：
- 导入 Fresh 框架
- 启动服务器端渲染
- 处理所有传入的请求
- 动态生成 HTML 响应

### `fresh.gen.ts` - 路由清单

包含所有路由和岛屿的映射信息：
```typescript
export const manifest = {
  routes: {
    "/": "./routes/index.tsx",
    "/greet/[name]": "./routes/greet/[name].tsx",
    // ...
  },
  islands: {
    "./islands/Counter.tsx": "./islands/Counter.tsx",
    // ...
  }
};
```

### `routes/` - 页面组件

每个 `.tsx` 文件对应一个路由：
- `routes/index.tsx` → 首页
- `routes/about.tsx` → 关于页面
- `routes/api/joke.ts` → API 路由

### `islands/` - 交互式组件

这些组件会在客户端"激活"，提供交互功能。

## 🌐 部署架构

### Cloudflare Pages + Fresh

```
用户请求 → Cloudflare CDN → Pages Functions → Fresh 应用 → HTML 响应
```

1. **Cloudflare CDN**：全球边缘网络
2. **Pages Functions**：服务器端运行环境
3. **Fresh 应用**：你的业务逻辑
4. **D1 数据库**：数据存储

## 🔧 环境变量处理

### 构建时 vs 运行时

**构建时环境变量**（在 `build.sh` 中设置）：
```bash
export DATABASE_PATH="d1"
export DEV_MODE="true"
# ... 其他构建时变量
```

**运行时环境变量**（在 Cloudflare Pages 设置中配置）：
```env
SESSION_SECRET=your-production-secret
APP_URL=https://your-domain.com
# ... 其他运行时变量
```

## 🎨 渲染过程

1. **服务器端渲染**：
   - Fresh 接收请求
   - 渲染 React 组件为 HTML
   - 发送完整页面给客户端

2. **客户端 Hydration**：
   - JavaScript 加载
   - React "激活"静态 HTML
   - 添加交互功能

3. **岛屿激活**：
   - 交互式组件获得响应性
   - 事件监听器绑定

## 🚀 性能优势

1. **首次加载快速**：服务器端渲染提供完整 HTML
2. **SEO 友好**：搜索引擎可以直接读取内容
3. **交互流畅**：岛屿提供局部交互，无需整页刷新
4. **全球 CDN**：Cloudflare 提供快速内容分发

## 🔍 调试技巧

### 本地开发
```bash
deno task start  # 本地开发服务器
```

### 构建检查
```bash
npm run build    # 模拟 Cloudflare Pages 构建
ls -la _fresh/   # 检查构建输出
```

### 运行时日志
- 在 Cloudflare Pages Dashboard 查看实时日志
- 使用 `console.log()` 在 `_worker.js` 中调试

---

**总结**：Fresh 不生成 `index.html` 文件是因为它是一个动态的 SSR 框架，而不是静态站点生成器。`_worker.js` 文件充当了整个应用的服务器端入口点，负责动态生成每个请求的 HTML 响应。