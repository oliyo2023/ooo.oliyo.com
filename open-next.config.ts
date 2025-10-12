import type { OpenNextConfig } from "opennext";

export default {
  buildCommand: "npm run build",
  buildOutputPath: ".next",
  appBuildOutputPath: ".next",
  routes: {
    static: "static",
    image: "_next/image",
    api: "api",
  },
  splitRoutes: true,
  functionPerRoute: false,
  edgeMiddleware: false,
  experimental: {
    logging: true,
  },
} satisfies OpenNextConfig;