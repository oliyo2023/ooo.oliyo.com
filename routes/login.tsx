import { Head } from "$fresh/runtime.ts";
import LocaleNav from "../components/LocaleNav.tsx";

export default function Login() {
  return (
    <>
      <Head>
        <title>安全登录 · 东方命理 AI 平台</title>
        <meta name="description" content="登录以查看专属命盘、运势提醒与个性化命理指引。" />
        <meta property="og:title" content="登录东方命理 AI 平台" />
        <meta property="og:description" content="登录后继续探索你的专属命盘与 AI 行运建议。" />
        <meta property="og:url" content="https://ooo.oliyo.com/login" />
      </Head>
      <main class="relative min-h-screen bg-[#04040d] text-slate-100">
        <LocaleNav locale="zh" />
        <div class="absolute inset-0 -z-10">
          <img src="/login-bg.svg" alt="登录背景" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-[#050515]/80 via-[#0d1a3a]/80 to-[#b8860b]/60 backdrop-blur-sm" />
          <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_透明_65%)]" />
          <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
          <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
        </div>
      <section class="px-6 pt-24 pb-16 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
            安全登录
          </span>
          <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            欢迎回到 AI 命理空间
          </h1>
          <p class="mt-6 text-base text-slate-200 sm:text-lg">
            登录以继续查看个性化命盘、接收运势提醒，并与 AI 命理顾问互动。
          </p>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <form class="space-y-8">
            <div class="space-y-6">
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                邮箱或手机号
                <input
                  type="text"
                  name="identifier"
                  placeholder="请输入登录邮箱或手机号"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                密码
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label class="flex items-center gap-3 text-left text-sm text-slate-200">
                <input type="checkbox" class="h-5 w-5 rounded border border-white/20 bg-black/40 text-amber-300 focus:ring-amber-300" />
                记住我，下次自动登录
              </label>
              <a class="text-sm text-amber-200 underline-offset-2 hover:underline" href="/reset-password">
                忘记密码？
              </a>
            </div>
            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4a637] to-[#f4d47c] px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:shadow-yellow-300/50"
            >
              登录并继续探索
            </button>
          </form>
          <div class="mt-8 rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-left text-sm text-slate-200">
            <h2 class="text-lg font-semibold text-white">首次使用？</h2>
            <p class="mt-3 text-amber-100">
              你可以 <a class="text-amber-200 underline-offset-2 hover:underline" href="/register">注册新账户</a>，并同步你的八字与紫微资料。
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
