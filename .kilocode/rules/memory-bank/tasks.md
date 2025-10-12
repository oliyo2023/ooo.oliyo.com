# 项目常用任务

## 开发任务
- 启动开发服务器：`pnpm dev`
- 构建项目：`pnpm build`
- 安装依赖：`pnpm install`
- 初始化数据库：`deno run -A scripts/init-db.ts`
- 创建管理员账户：`deno run -A scripts/create-admin.ts`

## 部署任务
- 构建 Workers：`pnpm build`
- 部署到 Workers 测试环境：`pnpm preview`
- 部署到 Workers 生产环境：`pnpm deploy`
- 本地 Workers 开发：`pnpm dev`

## 框架迁移任务（已完成）
- 从 Fresh + Deno 迁移到 Next.js + Node.js
- 重组项目结构为 Next.js App Router
- 迁移所有页面组件到 Next.js
- 保留原有国风设计风格
- 更新 Tailwind CSS 配置
- 配置 Cloudflare Workers 部署

## 内存库任务
- 初始化内存库系统：创建 `.kilocode/rules/memory-bank/` 文件夹及相关文件
- 更新内存库：记录项目当前状态和上下文信息
- 同步内存库：确保内存库内容与项目实际状态一致

## 维护任务
- 更新依赖：检查和更新 npm 依赖
- 数据库迁移：运行新的迁移文件
- 代码检查：运行 TypeScript 类型检查和代码格式化

## 文档任务
- 更新 API 文档
- 更新部署文档
- 更新项目 README