# Cloudflare Pages 完整部署指南

本指南提供 Fresh 博客应用到 Cloudflare Pages 的完整部署步骤和问题解决方案。

## 🎯 为什么选择 Cloudflare Pages

- ✅ **原生支持 Deno 和 Fresh**：无需复杂配置
- ✅ **自动构建部署**：连接 Git 自动部署
- ✅ **完全支持 SSR**：服务端渲染和动态路由
- ✅ **集成 D1/R2/KV**：无缝数据库和存储支持
- ✅ **预览部署**：每个 PR 自动生成预览环境
- ✅ **免费额度充足**：适合个人和小型项目

## 📋 前置准备

### 1. 准备 Cloudflare 账号

1. 注册 [Cloudflare](https://dash.cloudflare.com/sign-up)
2. 确认邮箱并登录

### 2. 安装 Wrangler CLI

```bash
npm install -g wrangler

# 登录 Cloudflare
wrangler login
```

### 3. 创建 D1 数据库

```bash
# 创建数据库
wrangler d1 create blog-db

# 记录返回的 database_id，示例输出：
# ✅ Successfully created DB 'blog-db' (a7c5ed5e-654e-41ae-8343-aa3e0d4f0ba0)
# 复制这个 ID：a7c5ed5e-654e-41ae-8343-aa3e0d4f0ba0
```

### 4. 初始化数据库表

```bash
# 执行迁移脚本
wrangler d1 execute blog-db --file=./migrations/001_init.sql --remote

# 验证数据库
wrangler d1 execute blog-db --command="SELECT name FROM sqlite_master WHERE type='table';" --remote
```

### 5. 创建 R2 存储桶（可选，用于文件上传）

```bash
wrangler r2 bucket create blog-uploads
```

---

## 🚀 部署步骤

### 方法 A：通过 Cloudflare Dashboard（推荐）

#### 1. 推送代码到 Git

```bash
# 如果还没有 git 仓库
git init
git add .
git commit -m "Initial commit"

# 推送到 GitHub/GitLab
git remote add origin <your-repo-url>
git push -u origin main
```

#### 2. 在 Cloudflare Dashboard 创建 Pages 项目

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 **Workers & Pages**
3. 点击 **Create application** → **Pages** → **Connect to Git**
4. 授权并选择你的仓库

#### 3. 配置构建设置

在构建配置页面填写：

```
项目名称: ooo-oliyo-com (或你喜欢的名称)

构建配置:
  - Framework preset: None
  - Build command: ./build.sh
  - Build output directory: _fresh
  
环境变量 (Environment variables):
  点击 "Add variable" 添加以下变量
```

**必需的环境变量：**

| 变量名 | 值 | 说明 |
|--------|-----|------|
| `DATABASE_PATH` | `d1` | 使用 D1 数据库 |
| `SESSION_SECRET` | `<生成一个强随机字符串>` | 会话加密密钥 |
| `DEV_MODE` | `false` | 生产环境模式 |
| `APP_NAME` | `Fresh Blog` | 应用名称 |
| `APP_URL` | `https://your-domain.pages.dev` | 你的域名（先用临时域名，后续可改） |

**生成 SESSION_SECRET：**
```bash
openssl rand -base64 32
# 或
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

#### 4. 绑定 D1 数据库

在项目设置页面：

1. 进入 **Settings** → **Functions**
2. 找到 **D1 database bindings** 部分
3. 点击 **Add binding**
4. 填写：
   - Variable name: `DB`
   - D1 database: 选择 `blog-db`
5. 点击 **Save**

#### 5. 绑定 R2 存储（可选）

如果需要文件上传功能：

1. 在 **Settings** → **Functions**
2. 找到 **R2 bucket bindings**
3. 添加：
   - Variable name: `UPLOADS`
   - R2 bucket: `blog-uploads`

#### 6. 部署

1. 点击 **Save and Deploy**
2. Cloudflare 会自动：
   - 克隆仓库
   - 安装 Deno
   - 运行 `./build.sh`
   - 部署到全球 CDN

#### 7. 查看部署状态

- 在 **Deployments** 页面查看构建日志
- 构建成功后，会显示部署 URL
- 点击 URL 访问你的网站

---

### 方法 B：通过 Wrangler CLI

```bash
# 1. 更新 wrangler.toml 中的 database_id
# 编辑 wrangler.toml，将 database_id 改为你的实际 ID

# 2. 设置环境变量
wrangler pages secret put SESSION_SECRET
# 输入你的 session secret

# 3. 部署
wrangler pages deploy _fresh --project-name=ooo-oliyo-com

# 4. 绑定 D1 数据库
wrangler pages deployment tail
```

---

## 🔧 本地测试

在部署之前，你可以在本地测试构建：

```bash
# 1. 运行构建脚本
./build.sh

# 2. 检查输出
ls -la _fresh/
cat _fresh/_worker.js

# 3. 使用 wrangler 本地测试
wrangler pages dev _fresh --binding DB=<your-database-id>
```

---

## ✅ 验证部署

### 1. 检查首页

访问 `https://your-project.pages.dev`，应该看到博客首页。

### 2. 测试 API 端点

```bash
# 测试状态 API
curl https://your-project.pages.dev/api/status

# 应该返回 JSON 响应
```

### 3. 检查数据库连接

尝试访问需要数据库的页面（如注册、登录）。

---

## 🐛 常见问题和解决方案

### 问题 1: 部署后显示 404 Page Not Found

**原因：**
- `_worker.js` 未正确生成或复制
- Fresh 构建失败
- 输出目录配置错误

**解决方案：**

1. **检查构建日志**
   - 在 Cloudflare Dashboard → Deployments → View details
   - 查看是否有错误信息

2. **验证 _worker.js 存在**
   ```bash
   # 本地测试
   ./build.sh
   ls -la _fresh/_worker.js
   ```

3. **确认输出目录**
   - 构建输出目录必须是 `_fresh`
   - 检查 build.sh 是否正确复制了 _worker.js

4. **手动修复**
   ```bash
   # 如果 _fresh/_worker.js 不存在
   cp _worker.js _fresh/
   ```

### 问题 2: 500 Internal Server Error

**原因：**
- 环境变量未设置
- D1 数据库未绑定
- Fresh 依赖加载失败

**解决方案：**

1. **检查环境变量**
   - 在 Pages 设置中确认所有必需变量已添加
   - 特别注意 `SESSION_SECRET`

2. **验证 D1 绑定**
   - Settings → Functions → D1 database bindings
   - 变量名必须是 `DB`

3. **查看实时日志**
   ```bash
   wrangler pages deployment tail
   ```

### 问题 3: Fresh 依赖加载失败

**错误信息：** `Cannot find module '$fresh/server.ts'`

**解决方案：**

这通常意味着 Deno 依赖未正确缓存。Fresh 在 Cloudflare Pages 上会自动处理依赖。

1. **确保 deno.json 正确**
   - 检查 imports 映射是否正确
   
2. **重新部署**
   - 有时需要清空缓存重新部署
   - 在 Dashboard 中选择 "Retry deployment"

### 问题 4: 样式未加载（Tailwind CSS）

**原因：**
- 静态文件未正确复制
- Tailwind 插件未加载

**解决方案：**

1. **检查静态文件**
   ```bash
   ls -la _fresh/static/
   ```

2. **验证 fresh.config.ts**
   ```typescript
   import tailwind from "$fresh/plugins/tailwind.ts";
   
   export default defineConfig({
     plugins: [tailwind()],
   });
   ```

### 问题 5: 数据库连接失败

**错误信息：** `No database configured`

**解决方案：**

1. **确认 D1 绑定**
   - Variable name: `DB` （必须大写）
   - 选择正确的数据库

2. **检查数据库是否已初始化**
   ```bash
   wrangler d1 execute blog-db --command="SELECT COUNT(*) FROM sqlite_master;" --remote
   ```

3. **验证环境变量**
   - `DATABASE_PATH` 应该设置为 `d1`

---

## 🔄 持续部署

Cloudflare Pages 支持自动部署：

### Git 集成

- **主分支**：推送到 `main`/`master` 自动部署到生产环境
- **其他分支**：每个分支和 PR 自动生成预览环境

### 部署钩子

可以添加 GitHub Actions 进行额外的测试：

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Deno
        uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x
      
      - name: Build
        run: ./build.sh
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: ooo-oliyo-com
          directory: _fresh
```

---

## 🎨 自定义域名

### 添加自定义域名

1. 进入项目 **Settings** → **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `ooo.oliyo.com`）
4. 按照提示添加 DNS 记录

### DNS 配置

如果域名在 Cloudflare：
- 会自动添加 CNAME 记录

如果域名在其他服务商：
- 添加 CNAME 记录指向 `<project-name>.pages.dev`

---

## 📊 性能优化

### 缓存策略

`public/_headers` 文件已配置：
- 静态资源：1年缓存
- HTML：无缓存
- API：无缓存

### CDN 分发

Cloudflare Pages 自动：
- 部署到全球 300+ 数据中心
- 自动 HTTPS
- 自动 HTTP/2 和 HTTP/3

---

## 🔐 安全最佳实践

1. **SESSION_SECRET**
   - 使用强随机字符串
   - 定期轮换

2. **环境变量**
   - 不要在代码中硬编码敏感信息
   - 使用 Pages 环境变量功能

3. **数据库访问**
   - D1 数据库只能通过 Cloudflare 网络访问
   - 使用绑定而不是连接字符串

---

## 📝 完整配置检查清单

部署前请确认：

- [ ] Git 仓库已创建并推送
- [ ] D1 数据库已创建
- [ ] 数据库已执行迁移脚本
- [ ] Pages 项目已创建
- [ ] 构建命令设置为 `./build.sh`
- [ ] 输出目录设置为 `_fresh`
- [ ] 所有环境变量已添加
- [ ] D1 数据库已绑定（变量名：`DB`）
- [ ] R2 存储已绑定（如需要）
- [ ] 本地测试构建成功
- [ ] `_fresh/_worker.js` 文件存在

---

## 🆘 获取帮助

如果遇到问题：

1. **查看构建日志**
   - Cloudflare Dashboard → Deployments → View details

2. **查看运行时日志**
   ```bash
   wrangler pages deployment tail
   ```

3. **本地调试**
   ```bash
   ./build.sh
   wrangler pages dev _fresh
   ```

4. **参考资源**
   - [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
   - [Fresh 官方文档](https://fresh.deno.dev/)
   - [D1 数据库文档](https://developers.cloudflare.com/d1/)

---

## 🎉 成功！

如果一切顺利，你的 Fresh 博客现在应该：
- ✅ 在 Cloudflare Pages 上运行
- ✅ 支持服务端渲染（SSR）
- ✅ 连接到 D1 数据库
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS

享受你的博客吧！ 🚀
