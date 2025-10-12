# 项目上下文

## 当前项目状态
- 项目名称：东方命理 AI 平台
- 技术栈：Next.js + TypeScript + Tailwind CSS + Cloudflare Workers
- 部署平台：Cloudflare Workers
- 数据库：Cloudflare D1 (SQLite)

## 项目结构
```
ooo-oliyo.com/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局组件
│   │   ├── page.tsx         # 首页
│   │   ├── login/           # 登录页面
│   │   ├── register/        # 注册页面
│   │   ├── privacy/         # 隐私政策页面
│   │   ├── terms/           # 用户条款页面
│   │   ├── demo/            # 示例命盘页面
│   │   └── stories/         # 用户故事页面
│   ├── components/          # React 组件
│   │   └── LocaleNav.tsx    # 导航组件
│   ├── lib/                 # 工具库
│   └── styles/              # 样式文件
├── public/                  # 静态资源
├── docs/                    # 项目文档
├── .env.example             # 环境变量示例
├── next.config.ts           # Next.js 配置
├── tailwind.config.ts       # Tailwind CSS 配置
├── wrangler.jsonc           # Cloudflare Workers 配置
└── package.json             # 项目依赖
```

## 核心功能
- 用户认证和会话管理
- AI 八字算命和命盘生成
- 响应式 UI 设计
- API 路由管理
- 数据库迁移和初始化

## 最近更新
- 框架迁移：从 Fresh + Deno 迁移到 Next.js + Node.js (2025-10-11)
- 项目结构重组：采用 Next.js App Router 架构
- 页面迁移：完成所有主要页面的迁移和适配
- 样式系统：保留原有国风设计风格，优化 Tailwind CSS 配置
- 部署配置：更新 Cloudflare Workers 部署配置
- 首页重新设计：采用暗紫色东方神秘风格，增强视觉效果和用户体验 (2025-10-11)

## 设计风格
- 主题色：暗紫色东方神秘风格 (#0a0515, #1a0b2e, #2d1b69, #4a148c, #7e3bff)
- 视觉元素：神秘圆形装饰、东方符文、星光点缀、渐变背景
- 交互效果：玻璃态效果、悬停动画、渐变按钮、神秘阴影
- 字体风格：轻盈字体、宽字间距、渐变文字效果

## 开发环境
- Node.js 路径：/home/gemini/.config/nvm/versions/node/v22.20.0/bin/node
- Deno 路径：/home/gemini/.deno/bin/deno
- 开发服务器：`npm run dev`
- 构建命令：`npm run build`
- 部署命令：`npm run deploy`

## 部署配置
- 部署平台：Cloudflare Workers
- 构建输出：`.next`
- 环境变量：`.env.example`
- 适配器：@opennextjs/cloudflare