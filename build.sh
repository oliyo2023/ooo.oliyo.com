#!/bin/bash

# Cloudflare Pages 构建脚本
# 安装 Deno 并构建 Fresh 应用

set -e

echo "🚀 开始构建 Fresh 应用..."

# 安装 Deno
echo "📦 安装 Deno..."
curl -fsSL https://deno.land/install.sh | sh

# 将 Deno 添加到 PATH
export PATH="$HOME/.deno/bin:$PATH"

# 验证 Deno 安装
echo "✅ 验证 Deno 安装..."
deno --version

# 构建应用
echo "🔨 构建 Fresh 应用..."
deno task build

echo "✅ 构建完成!"