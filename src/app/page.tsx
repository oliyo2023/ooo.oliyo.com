import LocaleNav from "@/components/LocaleNav";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0a0515] via-[#1a0b2e] to-[#2d1b69] text-slate-100 overflow-hidden">
      <LocaleNav locale="zh" />
      
      {/* 背景装饰层 */}
      <div className="absolute inset-0 -z-10">
        {/* 主渐变背景 */}
        <div className="h-full w-full bg-gradient-to-br from-[#1a0b2e] via-[#241f42] to-[#4a148c] opacity-95" />
        
        {/* 顶部光晕 */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(126,59,255,0.25),_transparent_70%)]" />
        
        {/* 底部光晕 */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_bottom,_rgba(74,20,140,0.2),_transparent_60%)]" />
        
        {/* 神秘圆形装饰 */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/15" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/20" />
        
        {/* 东方神秘符文装饰 */}
        <div className="absolute top-20 left-10 text-6xl text-purple-600/20 font-serif">八卦</div>
        <div className="absolute top-40 right-20 text-5xl text-purple-500/15 font-serif">阴阳</div>
        <div className="absolute bottom-32 left-16 text-4xl text-purple-600/10 font-serif">五行</div>
        <div className="absolute bottom-20 right-10 text-5xl text-purple-500/15 font-serif">天干</div>
        
        {/* 星光点缀 */}
        <div className="absolute top-32 left-1/4 h-1 w-1 rounded-full bg-purple-300/60 animate-pulse" />
        <div className="absolute top-52 right-1/3 h-1 w-1 rounded-full bg-purple-200/50 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/3 h-1 w-1 rounded-full bg-purple-300/40 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 h-1 w-1 rounded-full bg-purple-200/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/2 h-1 w-1 rounded-full bg-purple-300/50 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      {/* 主标题区域 */}
      <section className="relative px-6 pt-32 pb-20 sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* 东方神秘装饰线 */}
          <div className="mx-auto mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            <span className="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-900/30 to-purple-800/30 px-6 py-2 text-xs font-medium tracking-[0.35em] text-purple-200 uppercase shadow-lg shadow-purple-500/20">
              ✦ AI 八字算命 ✦
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-400/50 to-transparent" />
          </div>
          
          {/* 主标题 */}
          <h1 className="mt-6 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 bg-clip-text text-5xl font-extralight leading-tight text-transparent sm:text-6xl lg:text-7xl tracking-wide">
            数字化的紫微星光
          </h1>
          <h2 className="mt-2 text-3xl font-light leading-tight text-purple-200 sm:text-4xl lg:text-5xl tracking-wide">
            洞悉八字乾坤
          </h2>
          
          {/* 副标题 */}
          <p className="mt-8 mx-auto max-w-3xl text-base text-purple-100/80 sm:text-lg leading-relaxed">
            结合云端大模型与传统命理，瞬间生成个人命盘、好运周期与专属指引。国风与科技交织，为新世代打造可信赖的八字顾问。
          </p>
          
          {/* 行动按钮 */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7e3bff] via-[#6a26d9] to-[#5220a3] px-10 py-4 text-sm font-semibold text-slate-900 shadow-xl shadow-purple-500/40 transition-all hover:scale-105 hover:shadow-purple-400/60" href="/register">
              <span className="relative z-10">开启智能排盘</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a className="group inline-flex items-center justify-center rounded-full border border-purple-300/40 bg-gradient-to-r from-purple-900/20 to-purple-800/20 px-10 py-4 text-sm font-semibold text-purple-200 transition-all hover:bg-purple-800/30 hover:border-purple-300/60 hover:shadow-lg hover:shadow-purple-500/20" href="/login">
              会员登录
            </a>
            <a className="group inline-flex items-center justify-center rounded-full border border-purple-300/40 bg-gradient-to-r from-purple-900/20 to-purple-800/20 px-10 py-4 text-sm font-semibold text-purple-200 transition-all hover:bg-purple-800/30 hover:border-purple-300/60 hover:shadow-lg hover:shadow-purple-500/20" href="/demo">
              体验示例命盘
            </a>
          </div>
        </div>
      </section>
      {/* 特色功能区域 */}
      <section className="relative px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          {/* 区域标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-purple-100 sm:text-4xl tracking-wide">神秘功能</h2>
            <div className="mt-4 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 全息命盘卡片 */}
            <div className="group relative rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 via-purple-800/15 to-purple-900/20 p-8 shadow-2xl shadow-purple-500/10 transition-all hover:border-purple-400/40 hover:shadow-purple-500/25">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4 text-2xl text-purple-300">✧</div>
                <h3 className="text-xl font-light text-purple-100">全息命盘</h3>
                <p className="mt-4 text-sm text-purple-200/80 leading-relaxed">
                  输入生辰八字，AI 即时计算命宫、十神、运势走势，并绘制专属命盘视觉。
                </p>
                <div className="mt-6 text-xs text-purple-300/80 font-medium">涵盖六十甲子与大运流年</div>
              </div>
            </div>
            
            {/* 国风解读卡片 */}
            <div className="group relative rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 via-purple-800/15 to-purple-900/20 p-8 shadow-2xl shadow-purple-500/10 transition-all hover:border-purple-400/40 hover:shadow-purple-500/25">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4 text-2xl text-purple-300">✦</div>
                <h3 className="text-xl font-light text-purple-100">国风解读</h3>
                <p className="mt-4 text-sm text-purple-200/80 leading-relaxed">
                  使用文心风格提示词，输出诗意化中文解读，兼具易经术语与现代语感。
                </p>
                <div className="mt-6 text-xs text-purple-300/80 font-medium">支持自定义语气与篇幅</div>
              </div>
            </div>
            
            {/* 智能建议卡片 */}
            <div className="group relative rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-900/20 via-purple-800/15 to-purple-900/20 p-8 shadow-2xl shadow-purple-500/10 transition-all hover:border-purple-400/40 hover:shadow-purple-500/25">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-4 text-2xl text-purple-300">✧</div>
                <h3 className="text-xl font-light text-purple-100">智能建议</h3>
                <p className="mt-4 text-sm text-purple-200/80 leading-relaxed">
                  结合职业、情感与财富等主题，生成多维行动方案，内置时辰吉凶提醒。
                </p>
                <div className="mt-6 text-xs text-purple-300/80 font-medium">配套日历与提醒服务</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-inner shadow-purple-500/20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">三步走，焕新你的命理体验</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-black/20 p-6">
              <div className="text-4xl font-bold text-purple-200">1</div>
              <h3 className="mt-4 text-lg font-semibold text-white">输入生辰</h3>
              <p className="mt-3 text-sm text-slate-300">支持阴历阳历自动换算，智能校验出生地时区。</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-6">
              <div className="text-4xl font-bold text-purple-200">2</div>
              <h3 className="mt-4 text-lg font-semibold text-white">生成命盘</h3>
              <p className="mt-3 text-sm text-slate-300">云端大模型推演紫微斗数、四柱八字、十神能量图谱。</p>
            </div>
            <div className="rounded-2xl bg-black/20 p-6">
              <div className="text-4xl font-bold text-purple-200">3</div>
              <h3 className="mt-4 text-lg font-semibold text-white">获取指引</h3>
              <p className="mt-3 text-sm text-slate-300">获得个性化行运策略，并同步至移动端提醒服务。</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-6 pb-12 sm:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">东方智慧，量子洞见</h3>
          <p className="mt-4 text-sm text-slate-200">
            已有 12,680+ 用户通过 AI 八字算命制定人生规划，现在轮到你书写下一段佳话。
          </p>
          <a className="mt-6 inline-flex items-center justify-center rounded-full border border-purple-300/60 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-white/10" href="/stories">
            查看真实故事
          </a>
        </div>
      </footer>
    </main>
  );
}