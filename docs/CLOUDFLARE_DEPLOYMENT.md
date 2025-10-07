# Cloudflare 部署指南

本指南说明如何将 Fresh 博客应用部署到 Cloudflare Pages（推荐）或 Cloudflare Workers。

## 部署方式对比

### Cloudflare Pages（推荐）
- ✅ 原生支持 Fresh 框架
- ✅ 自动构建和部署
- ✅ 预览部署支持
- ✅ 无需复杂配置

### Cloudflare Workers
- ✅ 全球边缘计算
- ✅ 完全控制运行环境
- ❌ 需要复杂配置
- ❌ 构建过程复杂

---

## 方法一：Cloudflare Pages 部署（推荐）

### 前提条件

1. **准备代码仓库**：
   - 将代码推送到 GitHub/GitLab/Bitbucket

2. **准备 D1 数据库**：
   ```bash
   # 安装 Wrangler CLI
   npm install -g wrangler

   # 登录 Cloudflare
   wrangler login

   # 创建 D1 数据库
   wrangler d1 create blog-db

   # 初始化数据库表
   wrangler d1 execute blog-db --file=./migrations/001_init.sql --remote
   ```

### 部署步骤

#### 1. 创建 Cloudflare Pages 项目

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages" 部分
3. 点击 "Create a project"
4. 连接你的 Git 仓库

#### 2. 配置构建设置

在 Pages 设置中配置：

**构建配置**：
- **构建命令**: `deno task build`
- **构建输出目录**: `_fresh`
- **Root目录**: `/`（默认）

**环境变量**：
```env
DATABASE_PATH=d1
SESSION_SECRET=your-secure-secret-here
DEV_MODE=false
APP_NAME=Fresh Blog
APP_URL=https://your-domain.pages.dev
BCRYPT_ROUNDS=12
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

#### 3. 配置 D1 数据库

1. 在 Pages 项目设置中，进入 "D1 database bindings"
2. 添加数据库绑定：
   - **变量名**: `DB`
   - **D1 数据库**: 选择你创建的 `blog-db`

#### 4. 部署

1. 提交代码到 Git 仓库
2. Pages 会自动触发构建和部署
3. 部署完成后，你将获得一个 `.pages.dev` 域名

#### 5. 自定义域名（可选）

1. 在 Pages 项目设置中，点击 "Custom domains"
2. 添加你的自定义域名，如 `ooo.oliyo.com`
3. 按提示配置 DNS 记录

---

## 方法二：Cloudflare Workers 部署（高级）

### 前提条件

1. 安装必要工具：
   ```bash
   # 安装 Deno
   curl -fsSL https://deno.land/install.sh | sh

   # 安装 Wrangler CLI
   npm install -g wrangler
   ```

2. 登录 Cloudflare：
   ```bash
   wrangler login
   ```

## 配置步骤

### 1. 数据库设置

#### 选项 A: 使用 D1 数据库（推荐）

```bash
# 创建 D1 数据库
wrangler d1 create blog-db

# 记下返回的 database_id，更新 wrangler.toml 中的配置
```

初始化数据库表：

```bash
# 创建数据库迁移
wrangler d1 execute blog-db --file=./migrations/001_init.sql

# 或者直接执行 SQL
wrangler d1 execute blog-db --command="CREATE TABLE IF NOT EXISTS posts (...)"
```

#### 选项 B: 使用 KV 存储

```bash
# 创建 KV namespace
wrangler kv:namespace create "BLOG_DB"
wrangler kv:namespace create "BLOG_DB" --preview

# 记下返回的 ID，更新 wrangler.toml 中的配置
```

### 2. R2 存储设置（文件上传）

```bash
# 创建 R2 bucket
wrangler r2 bucket create blog-uploads
```

### 3. 环境变量配置

创建环境变量文件：

**`.env.production`**:

```env
# 生产环境配置
DATABASE_PATH=d1
SESSION_SECRET=your-production-secret-here
DEV_MODE=false
APP_NAME=Fresh Blog
APP_URL=https://ooo.oliyo.com
BCRYPT_ROUNDS=12
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

**`.env.staging`**:

```env
# 测试环境配置
DATABASE_PATH=d1
SESSION_SECRET=your-staging-secret-here
DEV_MODE=false
APP_NAME=Fresh Blog (Staging)
APP_URL=https://staging.ooo.oliyo.com
BCRYPT_ROUNDS=12
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

### 4. 自定义域名设置

```bash
# 添加自定义域名
wrangler custom-domains add ooo.oliyo.com

# 测试环境
wrangler custom-domains add staging.ooo.oliyo.com --env staging
```

## 部署命令

### 开发环境测试

```bash
# 本地开发（模拟 Workers 环境）
wrangler dev

# 或者使用 Deno 任务
deno task workers-dev
```

### 部署到测试环境

```bash
# 使用脚本
./scripts/deploy-workers.sh staging

# 或者直接使用 wrangler
deno task deploy-staging
```

### 部署到生产环境

```bash
# 使用脚本
./scripts/deploy-workers.sh production

# 或者直接使用 wrangler
deno task deploy-production
```

## 配置文件说明

### `wrangler.toml`

主要的 Cloudflare Workers 配置文件，包含：

- 应用名称和入口点
- 环境变量配置
- 数据库和存储配置
- 构建设置

### `worker.ts`

Cloudflare Workers 的入口点文件，处理：

- Workers 环境适配
- 环境变量处理
- 服务器启动配置

### `utils/cloudflare-db.ts`

数据库适配器，支持：

- D1 数据库适配器（完整 SQL 支持）
- KV 存储适配器（简单键值存储）
- 自动环境检测

## 监控和调试

### 查看日志

```bash
# 实时日志
wrangler tail

# 特定环境
wrangler tail --env production
```

### 性能监控

访问 Cloudflare Dashboard 查看应用 analytics 和性能指标。

### 常见问题

1. **构建错误**: 确保所有依赖都兼容 Workers 环境
2. **数据库连接**: 检查 D1/KV 配置是否正确
3. **环境变量**: 确保敏感信息通过 Workers 环境变量设置，不要提交到代码库

## 注意事项

1. **数据库限制**: Workers 环境不支持本地文件系统，必须使用 D1 或 KV 存储
2. **文件上传**: 使用 R2 存储替代本地文件系统
3. **会话管理**: 使用 KV 存储或 D1 数据库存储会话信息
4. **环境变量**: 生产环境的敏感信息通过 Workers Dashboard 设置

## 成本估算

- Workers: 免费（每天 100,000 请求）
- D1: 免费（每天 25,000 存储读取，5,000 写入）
- KV: 免费（每天 100,000 读取， 1,000 写入）
- R2: 免费（每月 10GB 存储， 1000万 Class A 操作）

对于个人博客项目，免费额度通常足够。
