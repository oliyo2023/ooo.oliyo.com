#!/bin/bash

# Cloudflare Pages 构建脚本
# 安装 Deno 并构建 Fresh 应用

set -e

echo "🚀 开始构建 Fresh 应用..."

# 设置环境变量
export DENO_INSTALL="/tmp/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"

# 安装 Deno 到临时目录
echo "📦 安装 Deno..."
curl -fsSL https://deno.land/install.sh | sh -s -- --install-dir=/tmp/.deno

# 验证 Deno 安装
echo "✅ 验证 Deno 安装..."
/tmp/.deno/bin/deno --version

# 复制静态文件到输出目录
echo "📁 复制静态文件..."
mkdir -p _fresh
cp -r static/* _fresh/ 2>/dev/null || true

# 构建应用
echo "🔨 构建 Fresh 应用..."
/tmp/.deno/bin/deno task build

# 验证构建结果
echo "🔍 验证构建结果..."
if [ -d "_fresh" ]; then
  echo "✅ 构建目录存在: _fresh/"
  ls -la _fresh/ | head -10
else
  echo "❌ 构建失败: _fresh 目录不存在"
  exit 1
fi

echo "✅ 构建完成!"