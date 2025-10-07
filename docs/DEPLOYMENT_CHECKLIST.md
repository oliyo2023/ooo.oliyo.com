# Cloudflare Pages 部署检查清单

## 🚀 部署前检查

### ✅ 代码准备
- [ ] 所有代码已提交到 Git 仓库
- [ ] `package.json` 文件存在且配置正确
- [ ] `build.sh` 脚本有执行权限
- [ ] `wrangler.toml` 配置文件正确
- [ ] 环境变量示例文件存在

### ✅ 数据库准备
- [ ] D1 数据库已创建 (`blog-db`)
- [ ] 数据库表已初始化
- [ ] 数据库 ID 已更新到配置文件

### ✅ 构建测试
- [ ] 本地构建成功：`npm run build`
- [ ] 构建输出目录 `_fresh` 存在
- [ ] 静态文件正确复制到输出目录

## 🔧 Cloudflare Pages 配置

### ✅ 项目设置
- [ ] 连接了正确的 Git 仓库
- [ ] 设置了正确的构建命令：`npm run build`
- [ ] 设置了正确的输出目录：`_fresh`
- [ ] Node.js 版本设置为 `18` 或更高

### ✅ 环境变量
在 Pages 项目设置中添加以下环境变量：

```env
DATABASE_PATH=d1
SESSION_SECRET=your-very-secure-random-string-here-change-this
DEV_MODE=false
APP_NAME=Fresh Blog
APP_URL=https://your-domain.pages.dev
BCRYPT_ROUNDS=12
UPLOAD_MAX_SIZE=10485760
UPLOAD_ALLOWED_TYPES=image/jpeg,image/png,image/gif,image/webp
POSTS_PER_PAGE=10
SEARCH_RESULTS_PER_PAGE=20
```

- [ ] 所有环境变量已添加
- [ ] `SESSION_SECRET` 已替换为强随机字符串
- [ ] `APP_URL` 已更新为正确的域名

### ✅ 数据库绑定
- [ ] 进入 Pages 项目设置
- [ ] 找到 "D1 database bindings" 部分
- [ ] 添加数据库绑定：
  - **变量名**: `DB`
  - **D1 数据库**: 选择 `blog-db`

## 🚀 部署步骤

1. **推送代码**：
   ```bash
   git add .
   git commit -m "feat: prepare for Cloudflare Pages deployment"
   git push origin main
   ```

2. **触发部署**：
   - [ ] Cloudflare Pages 自动检测到推送
   - [ ] 构建过程开始
   - [ ] 构建日志显示成功

3. **验证部署**：
   - [ ] 部署状态显示 "成功"
   - [ ] 可以访问提供的 `.pages.dev` 域名
   - [ ] 页面正常加载，无 404 错误
   - [ ] 样式和脚本正常加载

## 🌐 自定义域名（可选）

### ✅ 域名配置
- [ ] 在 Pages 项目中添加自定义域名
- [ ] 配置 DNS 记录（CNAME 或 A 记录）
- [ ] SSL 证书自动生成
- [ ] 域名正常解析到 Pages 项目

### ✅ 更新环境变量
- [ ] 更新 `APP_URL` 环境变量为自定义域名
- [ ] 重新部署以应用更改

## 🔍 故障排除

如果部署失败，请检查：

1. **构建日志**：查看具体的错误信息
2. **环境变量**：确保所有必需变量都已设置
3. **数据库绑定**：确保 D1 数据库正确绑定
4. **构建脚本**：确保 `build.sh` 有执行权限
5. **代码错误**：本地测试是否有语法错误

## 📞 获取帮助

- [故障排除指南](TROUBLESHOOTING.md)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Fresh 框架文档](https://fresh.deno.dev/)

---

## 🎉 部署成功后

- [ ] 测试所有页面功能
- [ ] 检查数据库连接
- [ ] 验证环境变量正确加载
- [ ] 设置监控和日志
- [ ] 配置自定义域名（如需要）