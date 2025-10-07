// Cloudflare Pages Functions 入口点
import { manifest } from "./fresh.gen.ts";
import { start } from "$fresh/server.ts";
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// 配置 Fresh
const config = defineConfig({
  plugins: [tailwind()],
});

// 启动 Fresh 应用
const handle = await start(manifest, config);

// 导出 fetch handler
export default {
  async fetch(request, env, ctx) {
    return handle(request);
  },
};