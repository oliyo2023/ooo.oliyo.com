
import Link from "next/link";
import Image from "next/image";
import React from "react";

// I will define the icons as components for better readability
const Icon = ({ path, className = "w-6 h-6" }: { path: string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d={path} />
  </svg>
);

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-dark-border" style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="东方命理 Logo" width={36} height={36} />
        <span className="text-xl font-bold text-white">东方命理</span>
      </Link>
      <nav className="hidden md:flex items-center gap-x-8">
        <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">首页</Link>
        <Link href="#bazi" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">八字算命</Link>
        <Link href="#marriage" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">八字合婚</Link>
        <Link href="#divination" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">卜卦预测</Link>
        <Link href="#credit" className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
          积分充值 <Icon path="M12 6v12m-6-6h12" className="w-4 h-4 opacity-80" />
        </Link>
        <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">联系我们</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1.5">
          <Icon path="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" className="w-5 h-5" />
          登录
        </Link>
        <Link href="/register" className="text-sm font-semibold text-white bg-brand-primary rounded-full px-5 py-2 flex items-center gap-1.5 transition-all hover:-translate-y-0.5 hover:shadow-button">
          <Icon path="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M16 19h6 M19 16v6 M6 21v-2a4 4 0 0 1 4 -4h4" className="w-5 h-5" />
          注册
        </Link>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative text-center py-28 md:py-40 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold text-white">AI算命</h1>
      <h2 className="text-2xl md:text-3xl font-light mt-5 mb-8 text-gray-200">探索命运奥秘, 掌握人生方向</h2>
      <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg">
        我们融合传统命理学与现代人工智能技术, 通过精准的算法分析您的生辰八字, 为您提供全面、深入的命运解析, 帮助您更好地了解自己, 把握人生方向。
      </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <Link href="#bazi" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
            <Icon path="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
            <span className="ml-2">八字算命</span>
          </Link>
          <span className="text-sm text-gray-400">适合分析人生整体运势</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link href="#marriage" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
            <Icon path="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <span className="ml-2">八字合婚</span>
          </Link>
          <span className="text-sm text-gray-400">适合婚恋合婚分析</span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link href="#divination" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
            <Icon path="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
            <span className="ml-2">卜卦预测</span>
          </Link>
          <span className="text-sm text-gray-400">适合解答具体问题</span>
        </div>
      </div>
    </div>
  </section>
);

const Choice = () => {
  const baziPoints = [
    "您的整体人生运势",
    "性格特点和天赋潜能",
    "事业、财运、感情等长期发展",
    "适合的职业方向和人生规划",
  ];
  const divinationPoints = [
    "特定问题的解答和指引",
    "近期事件的发展趋势",
    "某个决策的吉凶和建议",
    "具体事项的时间和结果预测",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="card max-w-5xl mx-auto p-10 md:p-14">
          <h3 className="text-center text-3xl font-semibold mb-10 text-white">不知道选择哪种测算方式?</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-5 flex items-center gap-2 text-gray-100">
                <Icon path="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" className="text-brand-primary" />
                选择八字测算, 如果您想了解:
              </h4>
              <ul className="space-y-4 text-gray-300">
                {baziPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <Icon path="M5 12l5 5l10 -10" className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 flex items-center gap-2 text-gray-100">
                <Icon path="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" className="text-brand-primary" />
                选择卜卦预测, 如果您想了解:
              </h4>
              <ul className="space-y-4 text-gray-300">
                {divinationPoints.map(point => (
                  <li key={point} className="flex items-start gap-3">
                    <Icon path="M5 12l5 5l10 -10" className="w-5 h-5 text-brand-accent mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Relations = () => {
  const items = [
    { icon: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572", title: "八字合婚", desc: "全面分析双方八字契合度, 预测婚姻质量, 助您找到真爱良缘" },
    { icon: "M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2", title: "事业合盘", desc: "分析商业伙伴关系, 预测合作前景, 助您把握商机" },
    { icon: "M5 12l-2 0l9 -9l9 9l-2 0l0 8a2 2 0 0 1 -2 2l-10 0a2 2 0 0 1 -2 -2l0 -8", title: "婆媳合盘", desc: "解析婆媳缘分, 预测相处模式, 助您营造和谐家庭关系" },
    { icon: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M21 21v-2a4 4 0 0 0 -3 -3.85", title: "闺蜜合盘", desc: "分析闺蜜缘分, 预测友情质量, 助您找到知心好友" },
    { icon: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", title: "父子关系", desc: "解析父子缘分, 指导教育方式, 助您建立良好亲子关系" },
    { icon: "M10 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h4", title: "母子关系", desc: "分析母子缘分, 优化教育方式, 助您培养健康亲子关系" },
    { icon: "M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0 M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M21 21v-2a4 4 0 0 0 -3 -3.85", title: "朋友关系", desc: "分析朋友缘分, 预测友谊发展, 助您建立真诚友谊" },
    { icon: "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M6.5 17.5l3.5 -4.5v-5l-4 -3l4 -3 M17.5 17.5l-3.5 -4.5v-5l4 -3l-4 -3", title: "领导下属", desc: "分析职场关系, 优化管理方式, 助您提升工作效率" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-4 text-white">八字关系预测</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">专业解读各类人际关系, 助您把握人生机遇</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(item => (
            <div key={item.title} className="card text-center p-8 flex flex-col items-center transform hover:-translate-y-2">
              <div className="w-20 h-20 mb-5 rounded-full bg-brand-primary-light flex items-center justify-center border border-dark-border">
                <Icon path={item.icon} className="w-10 h-10 text-brand-accent" />
              </div>
              <h4 className="font-semibold text-xl mb-2 text-white">{item.title}</h4>
              <p className="text-sm text-gray-400 flex-grow mb-6">{item.desc}</p>
              <Link href="/register" className="w-full mt-auto text-white font-semibold bg-brand-primary/80 hover:bg-brand-primary rounded-full py-3 transition-colors inline-block text-center">
                立即测算
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const items = [
    { icon: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z", title: "精准算法", desc: "融合传统命理与现代大数据, AI深度学习技术分析命盘, 提供更精准的命运解读。" },
    { icon: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0 M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0 M3 6l0 13 M12 6l0 13 M21 6l0 13", title: "专业解读", desc: "提供深度命运分析报告, 涵盖事业、财运、感情等多个方面, 助您全面了解自己。" },
    { icon: "M5 11h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0 M8 11v-4a4 4 0 1 1 8 0v4", title: "隐私保护", desc: "采用银行级加密技术, 确保您的个人信息安全无忧, 让您放心使用我们的服务。" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">我们的优势</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(item => (
            <div key={item.title} className="card p-8 text-center flex flex-col items-center">
              <div className="w-24 h-24 mb-6 rounded-full bg-brand-primary-light flex items-center justify-center border-2 border-dark-border">
                <Icon path={item.icon} className="w-12 h-12 text-brand-accent" />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StartJourney = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold text-white mb-4">开启您的命运之旅</h2>
      <p className="max-w-3xl mx-auto text-gray-400 mb-8 text-lg">
        无论您是想了解自己的性格特点, 还是寻求事业、财运、感情方面的指引, AI命运测算都能为您提供专业的解读和建议。
      </p>
      <div className="flex justify-center items-center gap-8">
        <Link href="#bazi" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
          <Icon path="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
          <span className="ml-2">八字测算</span>
        </Link>
        <Link href="#marriage" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
          <Icon path="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          <span className="ml-2">八字合婚</span>
        </Link>
        <Link href="#divination" className="btn-primary w-52 h-16 text-lg inline-flex items-center justify-center">
          <Icon path="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
          <span className="ml-2">卜卦预测</span>
        </Link>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const topics = [
    "危机处理", "兄弟姐妹缘分", "疾病预防", "行为模式", "人格优势", "共同成长", "内在驱动力", "小人运", "缘分发展过程", "智慧发展"
  ];
  return (
    <footer className="text-gray-400 pt-16 pb-8 border-t border-dark-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              {topics.map(topic => <div key={topic} className="text-gray-400 hover:text-white transition-colors cursor-pointer">{topic}</div>)}
            </div>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">服务项目</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold text-white mb-4">联系我们</h4>
            <div className="flex items-center gap-2">
              <Icon path="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" className="w-5 h-5 text-brand-primary" />
              <span>400-888-8888</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image src="/logo.svg" alt="AI算命 Logo" width={28} height={28} />
            <span className="text-white font-semibold">AI算命</span>
            <p className="ml-4 text-gray-500">传统命理智慧与现代科技的完美结合, 为您揭示命运的奥秘。</p>
          </div>
          <p className="text-gray-500">© {new Date().getFullYear()} AI算命 - 科技解读命理 | 版权所有</p>
        </div>
      </div>
    </footer>
  );
};


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Choice />
        <Relations />
        <Advantages />
        <StartJourney />
      </main>
      <Footer />
    </div>
  );
}
