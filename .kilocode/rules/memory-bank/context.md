# 项目上下文

## 当前项目状态
- 项目名称：基于 Fresh 框架的博客系统
- 技术栈：Deno + Fresh + TypeScript + Tailwind CSS
- 部署平台：Cloudflare Pages
- 数据库：Cloudflare D1 (SQLite)

## 项目结构
```
ooo.oliyo.com/
├── components/         # Fresh 组件
├── functions/         # Cloudflare Functions
├── islands/          # Fresh Islands (交互组件)
├── migrations/       # 数据库迁移文件
├── pages/           # 静态页面
├── routes/          # API 路由和页面路由
├── services/        # 业务逻辑服务
├── static/          # 静态资源
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数
└── docs/            # 项目文档
```

## 核心功能
- 用户认证和会话管理
- 博客文章的 CRUD 操作
- 响应式 UI 设计
- API 路由管理
- 数据库迁移和初始化

## 最近更新
- 内存库系统初始化 (2025-10-10)
- 项目结构完善和文档更新

## 开发环境
- 运行命令：`deno task start`
- 开发服务器：http://localhost:8000
- 构建命令：`deno task build`

## 部署配置
- 部署平台：Cloudflare Pages
- 构建输出：`./build.sh`
- 环境变量：`.env.example` 和 `.env.pages.example`