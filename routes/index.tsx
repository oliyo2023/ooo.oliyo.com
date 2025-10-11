import LocaleNav from "../components/LocaleNav.tsx";

export const head = (
  <>
    <title>东方命理 · AI 八字算命平台</title>
    <meta name="description" content="输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。" />
    <meta property="og:title" content="东方命理 · AI 八字算命平台" />
    <meta property="og:description" content="输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。" />
    <meta property="og:url" content="https://ooo.oliyo.com/" />
  </>
);

export default function Home() {
  return (
    <main class="relative min-h-screen bg-[#0f0b1a] text-slate-100">
      <LocaleNav locale="zh" />
      <div class="absolute inset-0 -z-10">
        <div class="h-full w-full bg-gradient-to-br from-[#1a152e] via-[#241f42] to-[#7e3bff] opacity-90" />
        <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(126,59,255,0.35),_transparent_65%)]" />
        <div class="absolute inset-0 backdrop-blur-sm" />
        <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20" />
        <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30" />
      </div>
      <section class="px-6 pt-28 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-purple-200 uppercase">
            AI 八字算命
          </span>
          <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            数字化的紫微星光，洞悉八字乾坤
          </h1>
          <p class="mt-6 text-base text-slate-200 sm:text-lg">
            结合云端大模型与传统命理，瞬间生成个人命盘、好运周期与专属指引。国风与科技交织，为新世代打造可信赖的八字顾问。
          </p>
          <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7e3bff] via-[#6a26d9] to-[#5220a3] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/30 transition hover:scale-105 hover:shadow-purple-300/50" href="/register">
              开启智能排盘
            </a>
            <a class="inline-flex items-center justify-center rounded-full border border-purple-300/40 px-8 py-3 text-sm font-semibold text-purple-200 transition hover:bg-white/10" href="/login">
              会员登录
            </a>
            <a class="inline-flex items-center justify-center rounded-full border border-purple-300/40 px-8 py-3 text-sm font-semibold text-purple-200 transition hover:bg-white/10" href="/demo">
              体验示例命盘
            </a>
          </div>
        </div>
      </section>
      <section class="px-6 pb-16 sm:px-10">
        <div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">全息命盘</h3>
            <p class="mt-3 text-sm text-slate-200">
              输入生辰八字，AI 即时计算命宫、十神、运势走势，并绘制专属命盘视觉。
            </p>
            <div class="mt-6 text-xs text-purple-200">涵盖六十甲子与大运流年</div>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">国风解读</h3>
            <p class="mt-3 text-sm text-slate-200">
              使用文心风格提示词，输出诗意化中文解读，兼具易经术语与现代语感。
            </p>
            <div class="mt-6 text-xs text-purple-200">支持自定义语气与篇幅</div>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">智能建议</h3>
            <p class="mt-3 text-sm text-slate-200">
              结合职业、情感与财富等主题，生成多维行动方案，内置时辰吉凶提醒。
            </p>
            <div class="mt-6 text-xs text-purple-200">配套日历与提醒服务</div>
          </div>
        </div>
      </section>
      <section class="px-6 pb-24 sm:px-10">
        <div class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-inner shadow-purple-500/20">
          <h2 class="text-2xl font-semibold text-white sm:text-3xl">三步走，焕新你的命理体验</h2>
          <div class="mt-8 grid gap-6 sm:grid-cols-3">
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">1</div>
              <h3 class="mt-4 text-lg font-semibold text-white">输入生辰</h3>
              <p class="mt-3 text-sm text-slate-300">支持阴历阳历自动换算，智能校验出生地时区。</p>
            </div>
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">2</div>
              <h3 class="mt-4 text-lg font-semibold text-white">生成命盘</h3>
              <p class="mt-3 text-sm text-slate-300">云端大模型推演紫微斗数、四柱八字、十神能量图谱。</p>
            </div>
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">3</div>
              <h3 class="mt-4 text-lg font-semibold text-white">获取指引</h3>
              <p class="mt-3 text-sm text-slate-300">获得个性化行运策略，并同步至移动端提醒服务。</p>
            </div>
          </div>
        </div>
      </section>
      <footer class="px-6 pb-12 sm:px-10">
        <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-8 text-center">
          <h3 class="text-xl font-semibold text-white">东方智慧，量子洞见</h3>
          <p class="mt-4 text-sm text-slate-200">
            已有 12,680+ 用户通过 AI 八字算命制定人生规划，现在轮到你书写下一段佳话。
          </p>
          <a class="mt-6 inline-flex items-center justify-center rounded-full border border-purple-300/60 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-white/10" href="/stories">
            查看真实故事
          </a>
        </div>
      </footer>
    </main>
  );
}
