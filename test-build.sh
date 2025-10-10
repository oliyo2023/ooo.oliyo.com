#!/bin/bash

# 本地构建测试脚本
# 用于在部署前验证构建结果

set -e

echo "🧪 开始本地构建测试..."
echo "===================================================="

# 清理旧的构建输出
echo ""
echo "🧹 清理旧的构建输出..."
if [ -d "_fresh" ]; then
  rm -rf _fresh
  echo "✅ 已删除旧的 _fresh 目录"
fi

# 运行构建
echo ""
echo "🔨 运行构建脚本..."
./build.sh

# 验证构建结果
echo ""
echo "🔍 验证构建结果..."
echo "===================================================="

ERRORS=0

# 检查 _fresh 目录
if [ ! -d "_fresh" ]; then
  echo "❌ 错误: _fresh 目录不存在"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ _fresh 目录存在"
fi

# 检查 _worker.js
if [ ! -f "_fresh/_worker.js" ]; then
  echo "❌ 错误: _fresh/_worker.js 不存在"
  ERRORS=$((ERRORS + 1))
else
  echo "✅ _worker.js 存在"
  WORKER_SIZE=$(wc -c < "_fresh/_worker.js")
  echo "   大小: $WORKER_SIZE bytes"
  
  # 检查是否不是占位文件
  if grep -q "应用正在构建" "_fresh/_worker.js"; then
    echo "⚠️  警告: _worker.js 似乎是占位文件"
    ERRORS=$((ERRORS + 1))
  else
    echo "✅ _worker.js 内容正常"
  fi
fi

# 检查静态文件
if [ -d "_fresh/static" ]; then
  STATIC_COUNT=$(find _fresh/static -type f | wc -l)
  echo "✅ 静态文件目录存在 ($STATIC_COUNT 个文件)"
else
  echo "⚠️  警告: 没有静态文件目录"
fi

# 检查 _headers
if [ -f "_fresh/_headers" ]; then
  echo "✅ _headers 文件存在"
else
  echo "⚠️  警告: _headers 文件不存在"
fi

# 统计信息
echo ""
echo "📊 构建统计:"
echo "===================================================="
FILE_COUNT=$(find _fresh -type f | wc -l)
DIR_COUNT=$(find _fresh -type d | wc -l)
TOTAL_SIZE=$(du -sh _fresh | cut -f1)

echo "文件总数: $FILE_COUNT"
echo "目录总数: $DIR_COUNT"
echo "总大小: $TOTAL_SIZE"

# 显示目录结构
echo ""
echo "📁 _fresh 目录结构:"
echo "===================================================="
tree _fresh -L 2 2>/dev/null || ls -lR _fresh | head -40

# 总结
echo ""
echo "===================================================="
if [ $ERRORS -eq 0 ]; then
  echo "✅ 构建测试通过！可以部署到 Cloudflare Pages"
  echo ""
  echo "下一步："
  echo "1. 提交并推送代码: git add . && git commit -m 'Ready for deployment' && git push"
  echo "2. 在 Cloudflare Dashboard 创建 Pages 项目"
  echo "3. 配置构建命令: ./build.sh"
  echo "4. 配置输出目录: _fresh"
  echo "5. 添加环境变量并绑定 D1 数据库"
  echo ""
  echo "详细步骤请参考: docs/PAGES_DEPLOYMENT_COMPLETE.md"
  exit 0
else
  echo "❌ 构建测试失败！发现 $ERRORS 个错误"
  echo ""
  echo "请修复上述错误后重试"
  exit 1
fi
