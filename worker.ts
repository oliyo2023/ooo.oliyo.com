/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

// Cloudflare Workers 配置
const config = defineConfig({
  plugins: [tailwind()],
  // Cloudflare Workers 特定配置
  server: {
    hostname: "ooo.oliyo.com",
    port: 8787,
  },
});

// Workers 环境变量处理
if (globalThis.navigator?.userAgent?.includes("Cloudflare-Workers")) {
  // 在 Cloudflare Workers 环境中设置默认环境变量
  globalThis.Deno = {
    env: {
      ...globalThis.Deno?.env,
      get: (key: string) => {
        // 优先使用 Workers 环境变量
        const workersValue = globalThis.__env?.[key];
        if (workersValue) return workersValue;

        // 回退到本地环境变量
        return globalThis.Deno?.env?.get?.(key);
      },
    },
  } as any;
}

// 启动服务器
await start(manifest, config);
