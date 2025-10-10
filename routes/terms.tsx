import LocaleNav from "../components/LocaleNav.tsx";

export default function UserTerms() {
  return (
    <main class="relative min-h-screen bg-[#04040d] text-slate-100">
      <LocaleNav locale="zh" />
      <div class="absolute inset-0 -z-10">
        <div class="h-full w-full bg-gradient-to-br from-[#050515] via-[#0d1a3a] to-[#b8860b] opacity-90" />
        <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
        <div class="absolute inset-0 backdrop-blur-sm" />
        <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
        <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
      </div>
      <section class="px-6 pt-24 pb-16 sm:px-10">
        <div class="mx-auto flex max-w-5xl flex-col gap-8">
          <div class="text-center">
            <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
              用户守则
            </span>
            <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              共创可信赖的 AI 命理社区
            </h1>
            <p class="mt-6 text-base text-slate-200 sm:text-lg">
              使用本服务意味着你承诺遵守以下守则，维护良好秩序与信息安全。
            </p>
          </div>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <article class="space-y-6 text-sm leading-7 text-slate-200">
            <h2 class="text-2xl font-semibold text-white">1. 账号与身份</h2>
            <p>
              你需提供真实有效的注册信息，并对账号行为负责。禁止冒用他人身份、批量注册、或未经授权共享账号。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">2. 合法合规使用</h2>
            <p>
              不得利用平台发布违法、侵权、欺诈、色情、仇恨等内容；不得进行恶意攻击、传播病毒或破坏系统安全。发现异常，我们会采取限制功能或冻结账号的措施。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">3. 付费与权益</h2>
            <p>
              如涉及付费服务，请遵守付费协议与退款政策。账号权益仅限个人使用，禁止转售或共享。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">4. AI 内容声明</h2>
            <p>
              AI 生成的解读仅作为参考，不构成专业建议。你应基于自身判断进行决策，对使用结果自行负责。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">5. 社区互动</h2>
            <p>
              在论坛、评论等互动区域，请尊重他人、理性交流。发现违规行为，可通过举报功能或联系我们处理。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">6. 违规处理</h2>
            <p>
              对违反守则或法律法规的账号，我们可能采取警告、限制、封禁或移交监管机构等措施。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">7. 协议更新</h2>
            <p>
              用户守则可能根据业务调整更新，届时我们会通过站内通知告知。若你继续使用服务，即视为同意最新版本。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">8. 联系我们</h2>
            <p>
              如有疑问，请发送邮件至 support@ooo.oliyo.com，我们将尽快回复。
            </p>
          </article>
          <div class="rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-sm text-amber-100">
            <p>
              最近更新日期：2025 年 10 月 10 日。请定期查阅本守则了解最新内容。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
