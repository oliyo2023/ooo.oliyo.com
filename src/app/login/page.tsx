import LocaleNav from "@/components/LocaleNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "安全登录 · 东方命理 AI 平台",
  description: "登录以查看专属命盘、运势提醒与个性化命理指引。",
  openGraph: {
    title: "登录东方命理 AI 平台",
    description: "登录后继续探索你的专属命盘与 AI 行运建议。",
    url: "https://ooo.oliyo.com/login",
  },
};

export default function Login() {
  return (
    <main className="relative min-h-screen bg-[#04040d] text-slate-100">
      <LocaleNav locale="zh" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-[#050515]/80 via-[#0d1a3a]/80 to-[#b8860b]/60 backdrop-blur-sm" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
      </div>
      <section className="px-6 pt-24 pb-16 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
            安全登录
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            欢迎回到 AI 命理空间
          </h1>
          <p className="mt-6 text-base text-slate-200 sm:text-lg">
            登录以继续查看个性化命盘、接收运势提醒，并与 AI 命理顾问互动。
          </p>
        </div>
      </section>
      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <form className="space-y-8">
            <div className="space-y-6">
              <label className="flex flex-col text-left text-sm font-medium text-amber-100">
                邮箱或手机号
                <input
                  type="text"
                  name="identifier"
                  placeholder="请输入登录邮箱或手机号"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label className="flex flex-col text-left text-sm font-medium text-amber-100">
                密码
                <input
                  type="password"
                  name="password"
                  placeholder="请输入密码"
                  className="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-3 text-left text-sm text-slate-200">
                <input type="checkbox" className="h-5 w-5 rounded border border-white/20 bg-black/40 text-amber-300 focus:ring-amber-300" />
                记住我，下次自动登录
              </label>
              <a className="text-sm text-amber-200 underline-offset-2 hover:underline" href="/reset-password">
                忘记密码？
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4a637] to-[#f4d47c] px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:shadow-yellow-300/50"
            >
              登录并继续探索
            </button>
          </form>
          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-left text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-white">首次使用？</h2>
            <p className="mt-3 text-amber-100">
              你可以 <a className="text-amber-200 underline-offset-2 hover:underline" href="/register">注册新账户</a>，并同步你的八字与紫微资料。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}