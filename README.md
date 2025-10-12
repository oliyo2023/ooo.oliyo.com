# 东方命理 · AI 八字算命平台

基于 Next.js 和 Cloudflare Workers 构建的现代化 AI 命理平台，融合传统八字命理与人工智能技术，为用户提供个性化的命盘分析和运势指引。

## 🌟 项目特色

- **AI 驱动的命理分析**：结合大语言模型与传统命理知识，提供精准的八字解读
- **现代化用户界面**：采用 Tailwind CSS 设计的响应式界面，支持多终端访问
- **全栈 TypeScript**：类型安全的开发体验，提高代码质量和维护性
- **Cloudflare 部署**：全球 CDN 加速，提供稳定可靠的服务
- **数据隐私保护**：用户数据加密存储，确保个人信息安全

## 🚀 技术栈

- **前端框架**：Next.js 15.3.3
- **开发语言**：TypeScript 5.8.3
- **样式方案**：Tailwind CSS 4.1.1
- **部署平台**：Cloudflare Workers
- **数据库**：Cloudflare D1 (SQLite)
- **运行时**：Node.js 兼容环境

## 📦 项目结构

```
ooo-oliyo-com/
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

## 🛠️ 开发指南

### 环境准备

1. 安装 Node.js 18+ 版本
2. 安装 Wrangler CLI：`npm install -g wrangler`
3. 克隆项目并安装依赖

```bash
git clone <repository-url>
cd ooo-oliyo-com
npm install
```

### 本地开发

```bash
# 启动开发服务器
npm run dev

# 代码检查
npm run lint

# 类型检查
npm run check
```

### 构建部署

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview

# 部署到 Cloudflare Workers
npm run deploy
```

## 🔧 配置说明

### 环境变量

复制 `.env.example` 为 `.env.local` 并配置以下变量：

```env
# 应用配置
NEXT_PUBLIC_APP_URL=https://ooo.oliyo.com
NEXT_PUBLIC_APP_NAME=东方命理 AI 平台

# Cloudflare 配置
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token
CLOUDFLARE_ACCOUNT_ID=your-cloudflare-account-id

# AI 服务配置
AI_API_KEY=your-ai-api-key
AI_API_URL=your-ai-api-url
```

### Cloudflare Workers 配置

1. 登录 Cloudflare Dashboard
2. 创建 Workers 服务
3. 配置 D1 数据库
4. 更新 `wrangler.jsonc` 中的数据库 ID

## 📱 功能特性

### 核心功能

- **用户认证**：支持邮箱注册登录，第三方 OAuth 集成
- **命盘生成**：基于生辰八字自动生成个人命盘
- **AI 解读**：智能分析命盘，提供个性化建议
- **运势提醒**：定期推送吉凶运势和行动建议
- **数据同步**：云端存储用户数据，多设备同步

### 页面功能

- **首页**：平台介绍和功能展示
- **登录/注册**：用户账号管理
- **示例命盘**：展示 AI 分析能力
- **用户故事**：真实案例分享
- **隐私政策/用户条款**：法律合规文档

## 🎨 设计理念

- **国风美学**：融合传统东方元素与现代设计语言
- **沉浸体验**：渐变背景和动态效果营造神秘氛围
- **响应式布局**：适配各种屏幕尺寸，确保最佳浏览体验
- **无障碍设计**：遵循 WCAG 标准，提供平等访问体验

## 🔒 安全措施

- **数据加密**：敏感信息采用 AES-256 加密存储
- **访问控制**：基于角色的权限管理系统
- **安全审计**：定期进行安全漏洞扫描和修复
- **隐私保护**：遵循 GDPR 和相关数据保护法规

## 📈 性能优化

- **代码分割**：按需加载页面组件，减少初始加载时间
- **图片优化**：Next.js Image 组件自动优化图片资源
- **缓存策略**：利用 Cloudflare CDN 提供全球加速
- **SEO 优化**：完善的元数据和结构化数据标记

## 🤝 贡献指南

1. Fork 项目仓库
2. 创建功能分支：`git checkout -b feature/amazing-feature`
3. 提交更改：`git commit -m 'Add amazing feature'`
4. 推送分支：`git push origin feature/amazing-feature`
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 邮箱：support@ooo.oliyo.com
- 官网：https://ooo.oliyo.com
- 微信公众号：东方命理

---

⭐ 如果这个项目对你有帮助，请给我们一个 Star！