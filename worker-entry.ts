/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />

// Cloudflare Workers 入口点
import { manifest } from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// Workers 环境配置
const config = defineConfig({
  plugins: [tailwind()],
});

// 获取环境变量
const env = globalThis.cloudflare?.env || {};

// 启动 Fresh 应用
const handle = await start(manifest, config);

// 导出 Workers fetch handler
export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // 设置环境变量到全局作用域
    globalThis.cloudflare = { env };

    // 处理请求
    return handle(request);
  },
};