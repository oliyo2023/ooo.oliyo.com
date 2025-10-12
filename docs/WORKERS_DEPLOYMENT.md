# Cloudflare Workers 部署指南

本指南详细说明如何将 Next.js 东方命理平台部署到 Cloudflare Workers。

## 前置条件

- 安装 [Node.js](https://nodejs.org/) (版本 18+)
- 安装 [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)
- Cloudflare 账户

## 部署步骤

### 1. 准备 Cloudflare 资源

#### 1.1 安装和登录 Wrangler

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login
```

#### 1.2 创建 D1 数据库

```bash
# 创建 D1 数据库
wrangler d1 create blog-db

# 记录返回的 database_id，更新到 wrangler.toml 中

# 执行数据库迁移
wrangler d1 execute blog-db --file=./migrations/001_init.sql --remote
```

#### 1.3 创建 R2 存储桶

```bash
# 创建 R2 存储桶（用于文件上传）
wrangler r2 bucket create blog-uploads
```

#### 1.4 创建 KV 命名空间

```bash
# 创建 KV 命名空间（用于缓存）
wrangler kv:namespace create "CACHE"
wrangler kv:namespace create "CACHE" --preview

# 记录返回的 id 和 preview_id，更新到 wrangler.toml 中
```

### 2. 配置项目

#### 2.1 更新 wrangler.toml

将创建的资源 ID 更新到 `wrangler.toml` 文件中：

```toml
# D1 数据库配置
[[d1_databases]]
binding = "DB"
database_name = "blog-db"
database_id = "your-database-id-here"

# R2 存储配置
[[r2_buckets]]
binding = "UPLOADS"
bucket_name = "blog-uploads"

# KV 存储配置
[[kv_namespaces]]
binding = "CACHE"
id = "your-kv-namespace-id"
preview_id = "your-preview-kv-namespace-id"
```

#### 2.2 配置环境变量

复制 `.env.example` 到 `.env` 并配置必要的环境变量：

```env
# 数据库配置
DATABASE_PATH=d1

# 会话管理
SESSION_SECRET=your-secure-random-string-here

# 应用配置
NEXT_PUBLIC_APP_NAME=东方命理 AI 平台
NEXT_PUBLIC_APP_URL=https://ooo.oliyo.com
DEV_MODE=false

# 安全配置
BCRYPT_ROUNDS=12

# 文件上传配置
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp

# 分页配置
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

### 3. 构建和部署

#### 3.1 本地测试

```bash
# 启动本地开发服务器
npm run dev

# 构建并预览
npm run build
npm run start
```

#### 3.2 构建项目

```bash
# 构建生产版本
npm run build
```

#### 3.3 部署到 Cloudflare Workers

```bash
# 部署到 Cloudflare Workers
npm run deploy

# 预览部署
npm run preview
```

### 4. 自定义域名配置

#### 4.1 生产环境

在 `wrangler.toml` 中配置自定义域名：

```toml
[env.production]
routes = [
  { pattern = "ooo.oliyo.com/*", zone_name = "ooo.oliyo.com" }
]
```

#### 4.2 测试环境

```toml
[env.staging]
routes = [
  { pattern = "staging.ooo.oliyo.com/*", zone_name = "ooo.oliyo.com" }
]
```

### 5. 常用命令

```bash
# 开发
npm run dev                # 启动开发服务器
npm run build             # 构建生产版本
npm run start             # 启动生产服务器
npm run lint              # 代码检查
npm run check             # 类型检查

# Cloudflare Workers
npm run deploy            # 部署到 Cloudflare Workers
npm run preview           # 预览部署
npm run cf-typegen        # 生成 Cloudflare 类型

# 数据库
wrangler tail             # 查看 Workers 日志
wrangler d1 execute blog-db --command="SELECT * FROM posts LIMIT 10" --remote
```

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本是否为 18+
   - 确保所有依赖已正确安装 (`npm install`)
   - 检查 TypeScript 编译是否通过 (`npm run check`)

2. **部署失败**
   - 检查 `wrangler.toml` 配置是否正确
   - 确保已登录 Cloudflare
   - 检查资源 ID 是否正确配置

3. **运行时错误**
   - 检查环境变量是否正确设置
   - 查看 Workers 日志：`wrangler tail`
   - 确保数据库迁移已执行

### 调试技巧

1. **本地调试**
   ```bash
   # 启用详细日志
   DEBUG=* npm run dev
   ```

2. **远程调试**
   ```bash
   # 查看 Workers 实时日志
   wrangler tail --format pretty
   ```

3. **数据库调试**
   ```bash
   # 查询数据库
   wrangler d1 execute blog-db --command="SELECT COUNT(*) FROM posts" --remote
   ```

## 性能优化

### 1. 缓存策略

- 使用 KV 存储缓存频繁访问的数据
- 设置适当的 Cache-Control 头
- 利用 Cloudflare 的边缘缓存

### 2. 数据库优化

- 为常用查询添加索引
- 使用 D1 的查询缓存
- 考虑数据分页

### 3. 资源优化

- 压缩静态资源
- 使用 WebP 格式图片
- 启用 Brotli 压缩

## 安全考虑

1. **环境变量**
   - 不要在代码中硬编码敏感信息
   - 使用 Workers 的环境变量功能

2. **数据库安全**
   - 使用参数化查询防止 SQL 注入
   - 限制数据库权限

3. **CORS 配置**
   - 正确配置跨域资源共享
   - 限制允许的来源

## 监控和分析

1. **Cloudflare Analytics**
   - 监控请求量和响应时间
   - 分析流量模式

2. **Workers 日志**
   - 设置结构化日志
   - 监控错误和异常

3. **性能监控**
   - 设置性能预算
   - 监控 Core Web Vitals

## 更多资源

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [D1 数据库文档](https://developers.cloudflare.com/d1/)
- [R2 存储文档](https://developers.cloudflare.com/r2/)
- [KV 存储文档](https://developers.cloudflare.com/workers/runtime-apis/kv/)