/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />

// Cloudflare Workers 入口点
import manifest from "./fresh.gen.ts";
import { createHandler } from "$fresh/server.ts";
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// 扩展 globalThis 类型
declare global {
  // deno-lint-ignore no-var
  var cloudflare: { env: any } | undefined;
}

// Workers 环境配置
const config = defineConfig({
  plugins: [tailwind()],
});

// 创建 Fresh handler
const handler = await createHandler(manifest, config);

// 导出 Workers fetch handler
export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // 设置环境变量到全局作用域
    globalThis.cloudflare = { env };

    // 处理请求
    return handler(request);
  },
};
