import LocaleNav from "@/components/LocaleNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "用户故事 · 东方命理 AI 平台",
  description: "查看真实用户的命理体验和人生改变故事。",
};

export default function Stories() {
  const stories = [
    {
      id: 1,
      name: "李小姐",
      age: "28岁",
      profession: "互联网产品经理",
      avatar: "👩‍💼",
      title: "AI命理帮我找到了职业方向",
      content: "去年事业遇到瓶颈，通过AI八字分析了解到自己五行缺火，适合从事创意类工作。今年转岗做产品设计，不仅薪资提升30%，工作也更有成就感了。",
      result: "职业转型成功，薪资提升30%"
    },
    {
      id: 2,
      name: "王先生",
      age: "35岁",
      profession: "创业者",
      avatar: "👨‍💼",
      title: "择吉日创业，事业蒸蒸日上",
      content: "准备创业时，通过AI命理分析选择了2024年3月15日作为开业日期。结合个人八字运势，公司发展顺利，半年内就实现了盈利。",
      result: "创业半年实现盈利"
    },
    {
      id: 3,
      name: "张女士",
      age: "42岁",
      profession: "家庭主妇",
      avatar: "👩‍🦰",
      title: "改善家庭关系，重获幸福",
      content: "通过AI命理分析了解到丈夫和自己的五行相克，按照建议调整了家居布局和相处方式，家庭关系明显改善，孩子学习也更专注了。",
      result: "家庭关系和谐，孩子成绩提升"
    },
    {
      id: 4,
      name: "陈先生",
      age: "31岁",
      profession: "金融分析师",
      avatar: "👨‍💻",
      title: "投资决策更精准",
      content: "结合AI命理的运势提醒，在投资时机选择上更加精准。去年按照建议在特定时间段加仓某股票，收益超过了市场平均水平。",
      result: "投资收益超越市场平均"
    },
    {
      id: 5,
      name: "赵小姐",
      age: "26岁",
      profession: "设计师",
      avatar: "👩‍🎨",
      title: "找到真爱，步入婚姻",
      content: "通过AI命理分析了解到自己的桃花运年份，并在那段时间积极参加社交活动。现在不仅找到了心仪的另一半，还计划明年结婚。",
      result: "找到理想伴侣，即将结婚"
    },
    {
      id: 6,
      name: "刘先生",
      age: "39岁",
      profession: "销售总监",
      avatar: "👨‍💼",
      title: "健康改善，精力充沛",
      content: "AI命理分析指出我五行失衡，需要注意肝胆调理。按照建议调整作息和饮食，半年后体检指标明显改善，工作效率也提高了。",
      result: "健康状况显著改善"
    }
  ];

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
            用户故事
          </span>
          <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            真实用户的命理体验
          </h1>
          <p className="mt-6 text-base text-slate-200 sm:text-lg">
            12,680+ 用户通过 AI 八字算命改变人生轨迹，以下是他们的真实故事。
          </p>
        </div>
      </section>
      
      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <div key={story.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-purple text-2xl">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{story.name}</h3>
                    <p className="text-sm text-slate-400">{story.age} · {story.profession}</p>
                  </div>
                </div>
                
                <h4 className="mt-4 text-lg font-medium text-purple-200">{story.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-200">{story.content}</p>
                
                <div className="mt-4 rounded-xl border border-purple-300/20 bg-black/30 p-3">
                  <p className="text-xs font-medium text-purple-200">结果：{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="px-6 pb-12 sm:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-8 text-center">
          <h3 className="text-xl font-semibold text-white">分享你的故事</h3>
          <p className="mt-4 text-sm text-slate-200">
            如果你也有通过 AI 命理改变人生的经历，欢迎与我们分享，让更多人受益。
          </p>
          <a
            href="/register"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-purple px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/30 transition hover:scale-105"
          >
            开始你的命理之旅
          </a>
        </div>
      </section>
    </main>
  );
}