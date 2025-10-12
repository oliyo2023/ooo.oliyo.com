import LocaleNav from "../components/LocaleNav.tsx";

export default function PrivacyPolicy() {
  return (
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
        <div class="mx-auto flex max-w-5xl flex-col gap-8">
          <div class="text-center">
            <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
              隐私协议
            </span>
            <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              守护你的八字隐私与个人信息
            </h1>
            <p class="mt-6 text-base text-slate-200 sm:text-lg">
              我们致力于以最高标准保护你的个人数据，确保 AI 命理服务的透明、安全与可控。
            </p>
          </div>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <article class="space-y-6 text-sm leading-7 text-slate-200">
            <h2 class="text-2xl font-semibold text-white">1. 信息收集范围</h2>
            <p>
              注册与使用服务时，我们可能收集你的账号信息（昵称、邮箱、手机号）、命理数据（出生日期、时辰、城市）、使用行为（访问记录、偏好设置）以及必要的设备信息（浏览器类型、网络环境）。Google、GitHub 登录只会在你授权的范围内获取公开资料，不会未经许可访问其他隐私数据。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">2. 信息使用方式</h2>
            <p>
              我们使用这些信息用于账号注册、命盘生成、运势提醒、功能优化及安全风控。未经你的同意，我们不会将个人信息用于商业推广或出售给第三方，并将对外共享控制在合法合规范围内。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">3. 存储与安全</h2>
            <p>
              所有数据存储在加密的数据库中，敏感字段（例如密码、验证码）会进行哈希或加密处理。我们实施访问控制、日志审计与漏洞检测，避免数据泄露、篡改或丢失。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">4. 第三方服务</h2>
            <p>
              Google、GitHub 登录以及短信服务将遵循各自的隐私政策。你在授权登录时，可随时取消授权；短信验证码仅用于登录验证，不会目的外使用。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">5. 用户权利</h2>
            <p>
              你可以随时访问、更新或删除账号信息，申请注销账号，并导出你的命理数据。在合理验证身份后，我们会在法定期限内处理。
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">6. 联系方式</h2>
            <p>
              如需了解更多或行使上述权利，请联系 support@ooo.oliyo.com。我们将在 15 个工作日内响应。
            </p>
          </article>
          <div class="rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-sm text-amber-100">
            <p>
              最近更新日期：2025 年 10 月 10 日。我们会在政策更新时通过站内通知提示你查看。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
