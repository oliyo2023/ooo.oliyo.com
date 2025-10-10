import { Head } from "$fresh/runtime.ts";
import LocaleNav from "../../components/LocaleNav.tsx";

export default function HomeEn() {
  return (
    <>
      <Head>
        <title>Oriental Astrology · AI BaZi Platform</title>
        <meta name="description" content="AI-powered BaZi astrology with instant natal charts, fortune cycles, and personalized guidance." />
        <meta property="og:title" content="Oriental Astrology · AI BaZi Platform" />
        <meta property="og:description" content="AI-powered BaZi astrology with instant natal charts, fortune cycles, and personalized guidance." />
        <meta property="og:url" content="https://ooo.oliyo.com/en" />
      </Head>
      <main class="relative min-h-screen bg-[#0f0b1a] text-slate-100">
        <LocaleNav locale="en" />
        <div class="absolute inset-0 -z-10">
          <div class="h-full w-full bg-gradient-to-br from-[#1a152e] via-[#241f42] to-[#7e3bff] opacity-90" />
          <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(126,59,255,0.35),_transparent_65%)]" />
          <div class="absolute inset-0 backdrop-blur-sm" />
          <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20" />
          <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border紫色-400/30" />
        </div>
      <section class="px-6 pt-28 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-purple-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-purple-200 uppercase">
            AI BaZi Astrology
          </span>
          <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Digital Starlight Guides Your Destiny
          </h1>
          <p class="mt-6 text-base text-slate-200 sm:text-lg">
            Merge ancient metaphysics with modern AI to craft instant natal charts, fortune cycles, and personal guidance. Tradition meets innovation for a trustworthy astrology companion.
          </p>
          <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7e3bff] via-[#6a26d9] to-[#5220a3] px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/30 transition hover:scale-105 hover:shadow-purple-300/50" href="/en/register">
              Begin My Chart
            </a>
            <a class="inline-flex items-center justify-center rounded-full border border-purple-300/40 px-8 py-3 text-sm font-semibold text-purple-200 transition hover:bg-white/10" href="/en/login">
              Member Login
            </a>
            <a class="inline-flex items-center justify-center rounded-full border border-purple-300/40 px-8 py-3 text-sm font-semibold text-purple-200 transition hover:bg-white/10" href="/en/demo">
              Try Demo Chart
            </a>
          </div>
        </div>
      </section>
      <section class="px-6 pb-16 sm:px-10">
        <div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">Holistic Chart</h3>
            <p class="mt-3 text-sm text-slate-200">
              Provide your birth details and receive full palace mapping, Ten Gods analysis, and dynamic destiny insights instantly.
            </p>
            <div class="mt-6 text-xs text-purple-200">Covers sixty JiaZi and major luck cycles</div>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">Poetic Readings</h3>
            <p class="mt-3 text-sm text-slate-200">
              Elegant bilingual narratives blending classical terminology with modern tone, ready for sharing or reflection.
            </p>
            <div class="mt-6 text-xs text-purple-200">Customize tone, depth, and length</div>
          </div>
          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10">
            <h3 class="text-lg font-semibold text-white">Intelligent Guidance</h3>
            <p class="mt-3 text-sm text-slate-200">
              Receive actionable plans across career, love, and wealth with auspicious timing reminders built in.
            </p>
            <div class="mt-6 text-xs text-purple-200">Includes calendar sync and alerts</div>
          </div>
        </div>
      </section>
      <section class="px-6 pb-24 sm:px-10">
        <div class="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-inner shadow-purple-500/20">
          <h2 class="text-2xl font-semibold text-white sm:text-3xl">Three Steps to a New Journey</h2>
          <div class="mt-8 grid gap-6 sm:grid-cols-3">
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">1</div>
              <h3 class="mt-4 text-lg font-semibold text-white">Enter Birth Details</h3>
              <p class="mt-3 text-sm text-slate-300">Automatic lunar-solar conversion and timezone validation for precise start.</p>
            </div>
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">2</div>
              <h3 class="mt-4 text-lg font-semibold text-white">Generate Charts</h3>
              <p class="mt-3 text-sm text-slate-300">AI maps Zi Wei Dou Shu, Four Pillars, and Ten Gods energy visuals in seconds.</p>
            </div>
            <div class="rounded-2xl bg-black/20 p-6">
              <div class="text-4xl font-bold text-purple-200">3</div>
              <h3 class="mt-4 text-lg font-semibold text-white">Receive Guidance</h3>
              <p class="mt-3 text-sm text-slate-300">Personalized strategies delivered with imminent luck alerts and reminders.</p>
            </div>
          </div>
        </div>
      </section>
      <footer class="px-6 pb-12 sm:px-10">
        <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-8 text-center">
          <h3 class="text-xl font-semibold text-white">Eastern Wisdom, Quantum Clarity</h3>
          <p class="mt-4 text-sm text-slate-200">
            12,680+ seekers have planned their journey with AI BaZi guidance. Yours could be the next success story.
          </p>
          <a class="mt-6 inline-flex items-center justify-center rounded-full border border-purple-300/60 px-6 py-3 text-sm font-semibold text-purple-100 transition hover:bg-white/10" href="/en/stories">
            Explore Real Stories
          </a>
        </div>
      </footer>
    </main>
    </>
  );
}
