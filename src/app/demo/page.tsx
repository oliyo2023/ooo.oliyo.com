import LocaleNav from "@/components/LocaleNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "体验示例命盘 · 东方命理 AI 平台",
  description: "查看 AI 生成的八字命盘示例，了解我们的命理分析能力。",
};

export default function Demo() {
  return (
    <main className="relative min-h-screen bg-[#0f0b1a] text-slate-100">
      <LocaleNav locale="zh" />
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-[#1a152e] via-[#241f42] to-[#7e3bff] opacity-90" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(126,59,255,0.35),_transparent_65%)]" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30" />
      </div>
      <section className="px-6 pt-24 pb-16 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-purple-200 uppercase">
            示例命盘
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            AI 命理分析示例
          </h1>
          <p className="mt-6 text-base text-slate-200 sm:text-lg">
            以下是我们 AI 系统生成的八字命盘示例，展示传统命理与现代科技的完美融合。
          </p>
        </div>
      </section>
      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-purple-500/20">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-white">示例命盘：张先生</h2>
            <p className="mt-2 text-slate-200">1990年3月15日 上午8:30 北京</p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-purple-200">四柱八字</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">年柱：</span>
                  <span className="text-white">庚午 (金火)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">月柱：</span>
                  <span className="text-white">己卯 (土木)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">日柱：</span>
                  <span className="text-white">甲申 (木金)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">时柱：</span>
                  <span className="text-white">戊辰 (土土)</span>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-lg font-semibold text-purple-200">五行分析</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">金：</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-white/20">
                      <div className="h-2 w-12 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white">60%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">木：</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-white/20">
                      <div className="h-2 w-8 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white">40%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">水：</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-white/20">
                      <div className="h-2 w-4 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white">20%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">火：</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-white/20">
                      <div className="h-2 w-6 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white">30%</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">土：</span>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 rounded-full bg-white/20">
                      <div className="h-2 w-10 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-lg font-semibold text-purple-200">AI 解读摘要</h3>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              此命格金土相生，日主甲木生于卯月，得令而旺。年柱庚午，金火相济，主早年运势平顺，家庭背景良好。
              月柱己卯，土木相合，主中年事业有成，贵人相助。日柱甲申，金木相克，需注意人际关系，避免冲动决策。
              时柱戊辰，土土相帮，主晚年安稳，子女孝顺。整体而言，此命格宜从事金融、建筑、教育等行业，
              注意调节金木平衡，可佩戴木质饰品化解冲克。
            </p>
          </div>
          
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
            <h3 className="text-lg font-semibold text-purple-200">2025年运势</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <h4 className="font-medium text-white">事业财运</h4>
                <p className="mt-2 text-sm text-slate-300">
                  乙巳年，木火相生，事业运势上升，适合创业或转换职业方向。财运方面有意外收获的可能。
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <h4 className="font-medium text-white">感情健康</h4>
                <p className="mt-2 text-sm text-slate-300">
                  感情运势平稳，单身者有机会遇到心仪对象。健康方面注意肝胆调理，避免过度劳累。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="px-6 pb-12 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-slate-200">
            想要获取你的专属命盘分析？
          </p>
          <a
            href="/register"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-purple px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/30 transition hover:scale-105"
          >
            立即注册，生成命盘
          </a>
        </div>
      </section>
    </main>
  );
}