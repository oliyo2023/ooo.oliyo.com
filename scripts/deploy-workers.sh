#!/bin/bash

# Cloudflare Workers 部署脚本
# 使用方法: ./scripts/deploy-workers.sh [staging|production]

set -e

ENVIRONMENT=${1:-staging}
echo "🚀 部署到 Cloudflare Workers (环境: $ENVIRONMENT)"

# 检查必要工具
command -v wrangler >/dev/null 2>&1 || { echo "❌ 错误: wrangler 未安装。请运行: npm install -g wrangler"; exit 1; }
command -v deno >/dev/null 2>&1 || { echo "❌ 错误: deno 未安装"; exit 1; }

# 构建项目
echo "📦 构建 Fresh 项目..."
deno task build

# 生成 manifest
echo "📋 生成 manifest..."
deno task manifest

# 检查环境变量
if [ "$ENVIRONMENT" = "production" ]; then
    if [ ! -f ".env.production" ]; then
        echo "⚠️  警告: .env.production 文件不存在，使用默认配置"
    fi
else
    if [ ! -f ".env.staging" ]; then
        echo "⚠️  警告: .env.staging 文件不存在，使用默认配置"
    fi
fi

# 部署到 Workers
echo "🌐 部署到 Cloudflare Workers..."
if [ "$ENVIRONMENT" = "production" ]; then
    wrangler deploy --env production
else
    wrangler deploy --env staging
fi

echo "✅ 部署成功!"
echo "🔗 部署地址: https://ooo-oliyo-com.${ENVIRONMENT}.workers.dev"

# 如果有自定义域名，显示自定义域名地址
if [ "$ENVIRONMENT" = "production" ]; then
    echo "🌍 生产环境: https://ooo.oliyo.com"
else
    echo "🌍 测试环境: https://staging.ooo.oliyo.com"
fi