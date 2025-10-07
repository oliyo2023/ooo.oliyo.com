# ooo.oliyo.com - Fresh Blog

基于 Fresh 框架构建的博客系统，支持本地开发及 Cloudflare Workers 部署。

## 本地开发

### 前置条件

确保已安装 Deno: https://deno.land/manual/getting_started/installation

### 启动开发服务器

```bash
# 安装依赖
cp .env.example .env

# 启动开发服务器
deno task start
```

这将监视项目目录并在必要时重启服务器。

### 其他开发命令

```bash
# 代码检查和格式化
deno task check

# 构建项目
deno task build

# 预览构建结果
deno task preview
```

## Cloudflare 部署

本项目支持两种部署方式，推荐使用 **Cloudflare Pages**：

### 🚀 方法一：Cloudflare Pages（推荐）

**优势**：原生支持 Fresh，自动构建部署，配置简单

#### 快速部署

1. **准备数据库**：
   ```bash
   npm install -g wrangler
   wrangler login
   wrangler d1 create blog-db
   wrangler d1 execute blog-db --file=./migrations/001_init.sql --remote
   ```

2. **部署到 Pages**：
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 创建 Pages 项目，连接 Git 仓库
   - 设置构建命令：`deno task build`
   - 设置输出目录：`_fresh`
   - 绑定 D1 数据库（变量名：`DB`）

3. **环境变量**：
   ```env
   DATABASE_PATH=d1
   SESSION_SECRET=your-secure-secret-here
   DEV_MODE=false
   APP_NAME=Fresh Blog
   APP_URL=https://ooo.oliyo.com
   ```

### ⚙️ 方法二：Cloudflare Workers（高级）

适合需要完全控制运行环境的场景。

#### 设置命令

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 创建数据库
wrangler d1 create blog-db
wrangler r2 bucket create blog-uploads

# 更新 wrangler.toml 配置后部署
./scripts/deploy-workers.sh production
```

### 📚 详细文档

- [完整部署指南](docs/CLOUDFLARE_DEPLOYMENT.md)
- [部署检查清单](docs/DEPLOYMENT_CHECKLIST.md)
- [故障排除指南](docs/TROUBLESHOOTING.md)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [D1 数据库文档](https://developers.cloudflare.com/d1/)

## 项目结构

```
├── components/          # Fresh 组件
├── islands/            # Preact 岛屿组件
├── routes/             # 路由页面
├── utils/              # 工具函数
│   └── cloudflare-db.ts # Cloudflare 数据库适配器
├── scripts/            # 部署脚本
├── migrations/         # 数据库迁移
├── docs/              # 文档
├── static/            # 静态资源
├── functions/         # Cloudflare Functions（Pages）
├── public/            # 公共资源（headers 等）
├── build.sh           # Cloudflare Pages 构建脚本
├── package.json       # Node.js 构建配置
├── worker-entry.ts    # Cloudflare Workers 入口点
├── wrangler.toml      # Cloudflare Workers 配置
├── .github/workflows/ # GitHub Actions（自动部署）
└── fresh.config.ts    # Fresh 框架配置
```

## 环境变量

复制 `.env.example` 到 `.env` 并配置以下变量：

```env
# 数据库配置
DATABASE_PATH=./data/blog.db

# 会话管理
SESSION_SECRET=your-secure-random-string-here

# 应用配置
APP_NAME=Fresh Blog
APP_URL=http://localhost:8000

# 安全配置
BCRYPT_ROUNDS=12

# 文件上传配置
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
```

## 详细文档

- [Cloudflare 部署指南](docs/CLOUDFLARE_DEPLOYMENT.md)
- [Fresh 官方文档](https://fresh.deno.dev/docs/getting-started)

## 技术栈

- **前端**: Fresh + Preact + TypeScript
- **样式**: Tailwind CSS
- **状态管理**: @preact/signals
- **部署**: Cloudflare Workers
- **数据库**: Cloudflare D1 / KV Storage
- **存储**: Cloudflare R2

## License

MIT
