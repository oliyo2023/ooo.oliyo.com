# Cloudflare Pages 部署故障排除

## 常见问题和解决方案

### 1. 构建失败：`deno: not found`

**问题**：构建环境中没有安装 Deno。

**解决方案**：
- 确保使用 `npm run build` 作为构建命令
- 确保项目根目录有 `package.json` 和 `build.sh` 文件
- 检查构建脚本是否有执行权限

### 2. 构建失败：环境变量缺失

**问题**：构建时出现 `MissingEnvVarsError`。

**解决方案**：
- 构建脚本已经内置了构建时所需的环境变量
- 确保使用最新版本的 `build.sh` 脚本
- 如果问题仍然存在，检查是否所有必需的环境变量都在构建脚本中设置

### 3. 构建失败：权限错误

**问题**：构建脚本没有执行权限。

**解决方案**：
```bash
# 在本地设置执行权限
chmod +x build.sh

# 提交到 Git
git add build.sh
git commit -m "fix: add execute permission to build script"
git push
```

### 4. 数据库连接失败

**问题**：应用无法连接到 D1 数据库。

**解决方案**：
1. 检查 D1 数据库绑定配置：
   - 变量名：`DB`
   - 数据库：选择正确的 `blog-db`

2. 确保环境变量设置：
   ```env
   DATABASE_PATH=d1
   ```

3. 检查数据库表是否已初始化：
   ```bash
   wrangler d1 execute blog-db --file=./migrations/001_init.sql --remote
   ```

### 5. 环境变量错误

**问题**：应用启动时缺少必要的环境变量。

**解决方案**：
在 Cloudflare Pages 项目设置中添加所有必需的环境变量：

```env
DATABASE_PATH=d1
SESSION_SECRET=your-very-secure-random-string-here
DEV_MODE=false
APP_NAME=Fresh Blog
APP_URL=https://your-domain.pages.dev
BCRYPT_ROUNDS=12
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

### 6. 静态资源 404

**问题**：CSS、JS 文件无法加载。

**解决方案**：
1. 确保构建输出目录设置为 `_fresh`
2. 检查 `public/_headers` 文件是否存在
3. 验证构建输出包含静态文件：
   ```bash
   # 本地测试
   npm run build
   ls -la _fresh/static/
   ```

### 7. 路由问题

**问题**：页面刷新后 404。

**解决方案**：
1. 确保所有路由都配置正确
2. 检查 `functions/_middleware.js` 文件
3. 确保 Fresh 应用正确处理所有路由

### 8. 构建超时

**问题**：构建过程超时。

**解决方案**：
1. 在 Pages 设置中增加构建超时时间
2. 优化构建脚本性能
3. 检查网络连接和依赖下载速度

## 调试技巧

### 查看构建日志

1. 在 Cloudflare Dashboard 中进入 Pages 项目
2. 点击 "Deployments" 标签
3. 选择失败的部署，查看详细日志

### 本地调试

```bash
# 本地运行构建脚本
npm run build

# 检查构建输出
ls -la _fresh/

# 本地预览（如果可能）
deno task start
```

### 实时日志

```bash
# 查看 Pages 函数实时日志
wrangler pages deployment tail

# 或者使用 Cloudflare Dashboard 的实时日志功能
```

## 性能优化

### 1. 缓存配置

使用 `public/_headers` 文件配置合适的缓存策略：

```
# 静态资源长期缓存
/static/*
  Cache-Control: public, max-age=31536000, immutable

# HTML 文件短期缓存
/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### 2. 资源压缩

确保 Fresh 构建过程启用了资源压缩和优化。

### 3. CDN 配置

利用 Cloudflare 的全球 CDN 来加速内容分发。

## 联系支持

如果遇到无法解决的问题：

1. 查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
2. 搜索 [Cloudflare 社区论坛](https://community.cloudflare.com/)
3. 查看 [Fresh 框架文档](https://fresh.deno.dev/)
4. 提交 GitHub Issue 到项目仓库