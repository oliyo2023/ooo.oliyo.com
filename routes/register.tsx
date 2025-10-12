import { Head } from "https://deno.land/x/fresh@1.6.1/runtime.ts";
import LocaleNav from "../components/LocaleNav.tsx";

export default function Register() {
  return (
    <>
      <Head>
        <title>注册账号 · 东方命理 AI 平台</title>
        <meta
          name="description"
          content="注册东方命理 AI 平台，保存命盘、开启云端同步与运势提醒。"
        />
        <meta property="og:title" content="注册东方命理 AI 平台" />
        <meta
          property="og:description"
          content="创建账号，生成专属命盘并解锁 AI 行运指引。"
        />
        <meta property="og:url" content="https://ooo.oliyo.com/register" />
      </Head>
      <main class="relative min-h-[100vh] bg-[#04040d] text-slate-100">
        <LocaleNav locale="zh" />
        <div class="absolute inset-0 -z-10">
          <div class="h-full w-full bg-gradient-to-br from-[#050515] via-[#0d1a3a] to-[#b8860b] opacity-90" />
          <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
          <div class="absolute inset-0 backdrop-blur-sm" />
          <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
          <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
        </div>
        <section class="px-6 pt-24 pb-16 sm:px-10">
          <div class="mx-auto max-w-4xl text-center">
            <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
              注册账户
            </span>
            <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              加入数字命理社群，定制你的专属命盘
            </h1>
            <p class="mt-6 text-base text-slate-200 sm:text-lg">
              注册后可保存命盘、开启云端同步与周期提醒，享受 AI
              命理顾问的全方位服务。
            </p>
          </div>
        </section>
        <section class="px-6 pb-20 sm:px-10">
          <div class="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
            <form class="space-y-6">
              <div class="grid gap-6 sm:grid-cols-2">
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  昵称
                  <input
                    type="text"
                    name="nickname"
                    placeholder="请输入昵称"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  />
                </label>
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  邮箱
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  />
                </label>
              </div>
              <div class="grid gap-6 sm:grid-cols-2">
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  出生日期
                  <input
                    type="date"
                    name="birthdate"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  />
                </label>
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  出生时辰
                  <select
                    name="birthtime"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  >
                    <option class="bg-[#04040d]">子时 (23:00-00:59)</option>
                    <option class="bg-[#04040d]">丑时 (01:00-02:59)</option>
                    <option class="bg-[#04040d]">寅时 (03:00-04:59)</option>
                    <option class="bg-[#04040d]">卯时 (05:00-06:59)</option>
                    <option class="bg-[#04040d]">辰时 (07:00-08:59)</option>
                    <option class="bg-[#04040d]">巳时 (09:00-10:59)</option>
                    <option class="bg-[#04040d]">午时 (11:00-12:59)</option>
                    <option class="bg-[#04040d]">未时 (13:00-14:59)</option>
                    <option class="bg-[#04040d]">申时 (15:00-16:59)</option>
                    <option class="bg-[#04040d]">酉时 (17:00-18:59)</option>
                    <option class="bg-[#04040d]">戌时 (19:00-20:59)</option>
                    <option class="bg-[#04040d]">亥时 (21:00-22:59)</option>
                  </select>
                </label>
              </div>
              <div class="grid gap-6 sm:grid-cols-2">
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  出生地点
                  <input
                    type="text"
                    name="birthplace"
                    placeholder="请输入城市"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  />
                </label>
                <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                  密码
                  <input
                    type="password"
                    name="password"
                    placeholder="设置登录密码"
                    class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                  />
                </label>
              </div>
              <label class="flex items-start gap-3 text-left text-sm text-slate-200">
                <input
                  type="checkbox"
                  class="mt-1 h-5 w-5 rounded border border-white/20 bg-black/40 text-amber-300 focus:ring-amber-300"
                />
                我同意{" "}
                <a
                  class="mx-1 text-amber-200 underline-offset-2 hover:underline"
                  href="/privacy"
                >
                  《隐私协议》
                </a>{" "}
                与{" "}
                <a
                  class="mx-1 text-amber-200 underline-offset-2 hover:underline"
                  href="/terms"
                >
                  《用户守则》
                </a>，授权平台进行命盘生成与运势分析。
              </label>
              <button
                type="submit"
                class="w-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4a637] to-[#f4d47c] px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:shadow-yellow-300/50"
              >
                完成注册，生成命盘
              </button>
            </form>
            <div class="mt-8 rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-left text-sm text-slate-200">
              <h2 class="text-lg font-semibold text-white">注册后你将获得</h2>
              <ul class="mt-4 space-y-2 text-amber-100">
                <li>• 专属 AI 命盘档案与图谱</li>
                <li>• 运势提醒与吉日推送</li>
                <li>• 个性化问题咨询通道</li>
              </ul>
            </div>
          </div>
        </section>
        <footer class="px-6 pb-12 sm:px-10">
          <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/10 p-8 text-center">
            <p class="text-sm text-slate-200">
              已注册的用户可直接{" "}
              <a
                class="text-amber-200 underline-offset-2 hover:underline"
                href="/login"
              >
                前往登录
              </a>，继续探索个人命理旅程。
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
