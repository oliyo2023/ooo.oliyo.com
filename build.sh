#!/bin/bash

# Cloudflare Pages 构建脚本
# 为 Fresh 应用生成 Cloudflare Pages 兼容的构建输出

set -e

echo "🚀 开始构建 Fresh 应用 for Cloudflare Pages..."
echo "=================================================="

# 设置环境变量
export DENO_INSTALL="/tmp/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

# 为构建过程提供必要的环境变量（这些在运行时会被 Cloudflare 环境变量覆盖）
export DATABASE_PATH="d1"
export SESSION_SECRET="build-session-secret-not-used-in-build"
export DEV_MODE="false"
export APP_NAME="Fresh Blog"
export APP_URL="https://ooo.oliyo.com"
export BCRYPT_ROUNDS="12"
export UPLOAD_MAX_SIZE="10485760"
export UPLOAD_ALLOWED_TYPES="image/jpeg,image/png,image/gif,image/webp"
export POSTS_PER_PAGE="10"
export SEARCH_RESULTS_PER_PAGE="20"

# 安装 Deno 到临时目录
echo ""
echo "📦 安装 Deno..."
if [ ! -f "/tmp/.deno/bin/deno" ]; then
  curl -fsSL https://deno.land/install.sh | sh -s -- --install-dir=/tmp/.deno
else
  echo "✅ Deno 已经安装"
fi

# 验证 Deno 安装
echo ""
echo "✅ 验证 Deno 安装..."
/tmp/.deno/bin/deno --version

# 生成 Fresh manifest
echo ""
echo "📋 生成 Fresh manifest..."
/tmp/.deno/bin/deno task manifest || {
  echo "⚠️  Manifest 生成失败，尝试继续构建..."
}

# 构建 Fresh 应用（生成 _fresh 目录）
echo ""
echo "🔨 构建 Fresh 应用..."
/tmp/.deno/bin/deno task build

# 检查 _fresh 目录
if [ ! -d "_fresh" ]; then
  echo "❌ 错误: _fresh 目录未生成"
  echo "Fresh 构建失败，请检查构建日志"
  exit 1
fi

echo ""
echo "📦 _fresh 目录内容:"
ls -lah _fresh/ | head -15

# 复制静态资源到 _fresh
echo ""
echo "📁 复制静态资源..."
if [ -d "static" ]; then
  mkdir -p _fresh/static
  cp -r static/* _fresh/static/ 2>/dev/null || true
  echo "✅ 静态文件已复制"
fi

# 复制 _headers 文件
if [ -f "public/_headers" ]; then
  cp public/_headers _fresh/ 2>/dev/null || true
  echo "✅ _headers 文件已复制"
fi

# Fresh 1.7+ 不需要自定义 _worker.js
# Cloudflare Pages 会自动使用 Fresh 的内置机制
echo ""
echo "✅ Fresh 1.7+ 使用内置 Cloudflare Pages 支持"

# 验证最终构建结果
echo ""
echo "🔍 验证构建结果..."
echo "=================================================="

if [ -d "_fresh" ]; then
  echo "✅ 构建目录存在: _fresh/"
  echo ""
  echo "📊 构建输出统计:"
  echo "   文件总数: $(find _fresh -type f | wc -l)"
  echo "   目录总数: $(find _fresh -type d | wc -l)"
  
  if [ -f "_fresh/main.js" ]; then
    echo "   ✅ main.js 存在 (Fresh 主文件)"
    echo "   大小: $(du -h _fresh/main.js | cut -f1)"
  else
    echo "   ❌ 错误: main.js 不存在"
    exit 1
  fi
  
  echo ""
  echo "📁 _fresh 目录结构:"
  ls -lah _fresh/ | head -20
else
  echo "❌ 构建失败: _fresh 目录不存在"
  exit 1
fi

echo ""
echo "✅ 构建完成！"
echo "=================================================="
echo "📤 输出目录: _fresh/"
echo "🌐 可以部署到 Cloudflare Pages 了"
