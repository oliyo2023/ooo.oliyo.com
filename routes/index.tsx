import LocaleNav from "../components/LocaleNav.tsx";

export const head = (
  <>
    <title>东方命理 · AI 八字算命平台</title>
    <meta
      name="description"
      content="输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。"
    />
    <meta property="og:title" content="东方命理 · AI 八字算命平台" />
    <meta
      property="og:description"
      content="输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。"
    />
    <meta property="og:url" content="https://ooo.oliyo.com/" />
  </>
);

export default function Home() {
  return (
    <main class="relative min-h-[100vh] bg-gradient-to-br from-purple-950 via-purple-900 to-purple-900 text-purple-100">
      <LocaleNav locale="zh" />
      <div class="absolute inset-0 -z-10">
        <div class="h-full w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900 opacity-90" />
        <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(126,59,255,0.25),_transparent_70%)]" />
        <div class="absolute inset-0 backdrop-blur-sm" />
        <div class="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20 animate-pulse" />
        <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30" />
        <div class="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/5" />
      </div>
      <section class="px-6 pt-28 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-purple-950/30 backdrop-blur-sm px-4 py-1 text-xs font-medium tracking-[0.35em] text-purple-200 uppercase shadow-lg shadow-purple-500/20">
            AI 八字算命
          </span>
          <h1 class="mt-8 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl drop-shadow-lg">
            数字化的紫微星光，洞悉八字乾坤
          </h1>
          <p class="mt-6 text-base text-purple-200 sm:text-lg leading-relaxed">
            结合云端大模型与传统命理，瞬间生成个人命盘、好运周期与专属指引。国风与科技交织，为新世代打造可信赖的八字顾问。
          </p>
          <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition-all hover:scale-105 hover:shadow-purple-400/60 hover:brightness-110"
              href="/register"
            >
              开启智能排盘
            </a>
            <a
              class="inline-flex items-center justify-center rounded-full border border-purple-400/40 bg-purple-950/20 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
              href="/login"
            >
              会员登录
            </a>
            <a
              class="inline-flex items-center justify-center rounded-full border border-purple-400/40 bg-purple-950/20 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
              href="/demo"
            >
              体验示例命盘
            </a>
          </div>
        </div>
      </section>
      <section class="px-6 pb-16 sm:px-10">
        <div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="group rounded-3xl border border-purple-400/20 bg-purple-950/30 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/20 transition-all hover:border-purple-400/40 hover:shadow-purple-500/30 hover:bg-purple-950/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 text-purple-100 shadow-lg">
              📊
            </div>
            <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
              全息命盘
            </h3>
            <p class="mt-3 text-sm text-purple-200 leading-relaxed">
              输入生辰八字，AI
              即时计算命宫、十神、运势走势，并绘制专属命盘视觉。
            </p>
            <div class="mt-6 text-xs text-purple-300 bg-purple-800/30 inline-flex rounded-full px-3 py-1">
              涵盖六十甲子与大运流年
            </div>
          </div>
          <div class="group rounded-3xl border border-purple-400/20 bg-purple-950/30 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/20 transition-all hover:border-purple-400/40 hover:shadow-purple-500/30 hover:bg-purple-950/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 text-purple-100 shadow-lg">
              📜
            </div>
            <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
              国风解读
            </h3>
            <p class="mt-3 text-sm text-purple-200 leading-relaxed">
              使用文心风格提示词，输出诗意化中文解读，兼具易经术语与现代语感。
            </p>
            <div class="mt-6 text-xs text-purple-300 bg-purple-800/30 inline-flex rounded-full px-3 py-1">
              支持自定义语气与篇幅
            </div>
          </div>
          <div class="group rounded-3xl border border-purple-400/20 bg-purple-950/30 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/20 transition-all hover:border-purple-400/40 hover:shadow-purple-500/30 hover:bg-purple-950/40">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 text-purple-100 shadow-lg">
              🔮
            </div>
            <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
              智能建议
            </h3>
            <p class="mt-3 text-sm text-purple-200 leading-relaxed">
              结合职业、情感与财富等主题，生成多维行动方案，内置时辰吉凶提醒。
            </p>
            <div class="mt-6 text-xs text-purple-300 bg-purple-800/30 inline-flex rounded-full px-3 py-1">
              配套日历与提醒服务
            </div>
          </div>
        </div>
      </section>
      <section class="px-6 pb-24 sm:px-10">
        <div class="mx-auto max-w-5xl rounded-3xl border border-purple-400/20 bg-purple-950/40 backdrop-blur-sm p-10 shadow-inner shadow-purple-500/30">
          <h2 class="text-2xl font-bold text-purple-100 sm:text-3xl bg-gradient-to-r from-purple-100 to-purple-50 bg-clip-text text-transparent">
            三步走，焕新你的命理体验
          </h2>
          <div class="mt-8 grid gap-6 sm:grid-cols-3">
            <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                1
              </div>
              <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                输入生辰
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                支持阴历阳历自动换算，智能校验出生地时区。
              </p>
            </div>
            <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                2
              </div>
              <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                生成命盘
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                云端大模型推演紫微斗数、四柱八字、十神能量图谱。
              </p>
            </div>
            <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                3
              </div>
              <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                获取指引
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                获得个性化行运策略，并同步至移动端提醒服务。
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="px-6 pb-12 sm:px-10">
        <div class="mx-auto max-w-4xl rounded-3xl border border-purple-400/20 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 backdrop-blur-sm p-8 text-center shadow-lg shadow-purple-500/20">
          <div class="flex justify-center mb-4">
            <span class="text-4xl">✨</span>
          </div>
          <h3 class="text-xl font-bold text-purple-100 bg-gradient-to-r from-purple-100 to-purple-50 bg-clip-text text-transparent">
            东方智慧，量子洞见
          </h3>
          <p class="mt-4 text-sm text-purple-200 leading-relaxed">
            已有 12,680+ 用户通过 AI
            八字算命制定人生规划，现在轮到你书写下一段佳话。
          </p>
          <a
            class="mt-6 inline-flex items-center justify-center rounded-full border border-purple-400/60 bg-purple-950/30 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/80 hover:shadow-purple-400/40"
            href="/stories"
          >
            查看真实故事
          </a>
        </div>
      </footer>
    </main>
  );
}
