import { Head } from "https://deno.land/x/fresh@1.6.1/runtime.ts";
import LocaleNav from "../../components/LocaleNav.tsx";

export default function HomeEn() {
  return (
    <>
      <Head>
        <title>Oriental Astrology · AI BaZi Platform</title>
        <meta
          name="description"
          content="AI-powered BaZi astrology with instant natal charts, fortune cycles, and personalized guidance."
        />
        <meta
          property="og:title"
          content="Oriental Astrology · AI BaZi Platform"
        />
        <meta
          property="og:description"
          content="AI-powered BaZi astrology with instant natal charts, fortune cycles, and personalized guidance."
        />
        <meta property="og:url" content="https://ooo.oliyo.com/en" />
      </Head>
      <main class="relative min-h-[100vh] bg-gradient-to-br from-purple-950 via-purple-900 to-purple-900 text-purple-100">
        <LocaleNav locale="en" />
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
              AI BaZi Astrology
            </span>
            <h1 class="mt-8 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl drop-shadow-lg">
              Digital Starlight Guides Your Destiny
            </h1>
            <p class="mt-6 text-base text-purple-200 sm:text-lg leading-relaxed">
              Merge ancient metaphysics with modern AI to craft instant natal
              charts, fortune cycles, and personal guidance. Tradition meets
              innovation for a trustworthy astrology companion.
            </p>
            <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/40 transition-all hover:scale-105 hover:shadow-purple-400/60 hover:brightness-110"
                href="/en/register"
              >
                Begin My Chart
              </a>
              <a
                class="inline-flex items-center justify-center rounded-full border border-purple-400/40 bg-purple-950/20 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
                href="/en/login"
              >
                Member Login
              </a>
              <a
                class="inline-flex items-center justify-center rounded-full border border-purple-400/40 bg-purple-950/20 backdrop-blur-sm px-8 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/60"
                href="/en/demo"
              >
                Try Demo Chart
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
                Holistic Charts
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                Provide birth details to receive palace mapping, Ten Gods
                analysis, and dynamic destiny visuals instantly.
              </p>
              <div class="mt-6 inline-flex rounded-full bg-purple-800/30 px-3 py-1 text-xs text-purple-300">
                Covers sixty JiaZi & major luck cycles
              </div>
            </div>
            <div class="group rounded-3xl border border-purple-400/20 bg-purple-950/30 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/20 transition-all hover:border-purple-400/40 hover:shadow-purple-500/30 hover:bg-purple-950/40">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 text-purple-100 shadow-lg">
                📜
              </div>
              <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                Poetic Readings
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                Bilingual narratives blend classical terminology with modern
                tone for reflection or sharing.
              </p>
              <div class="mt-6 inline-flex rounded-full bg-purple-800/30 px-3 py-1 text-xs text-purple-300">
                Custom tone, depth, and cadence
              </div>
            </div>
            <div class="group rounded-3xl border border-purple-400/20 bg-purple-950/30 backdrop-blur-sm p-6 shadow-xl shadow-purple-500/20 transition-all hover:border-purple-400/40 hover:shadow-purple-500/30 hover:bg-purple-950/40">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-indigo-800 text-purple-100 shadow-lg">
                🔮
              </div>
              <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                Intelligent Guidance
              </h3>
              <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                Get action plans across career, love, and wealth with built-in
                timing alerts and reminders.
              </p>
              <div class="mt-6 inline-flex rounded-full bg-purple-800/30 px-3 py-1 text-xs text-purple-300">
                Calendar sync & proactive alerts
              </div>
            </div>
          </div>
        </section>
        <section class="px-6 pb-24 sm:px-10">
          <div class="mx-auto max-w-5xl rounded-3xl border border-purple-400/20 bg-purple-950/40 backdrop-blur-sm p-10 shadow-inner shadow-purple-500/30">
            <h2 class="text-2xl font-bold text-purple-100 sm:text-3xl bg-gradient-to-r from-purple-100 to-purple-50 bg-clip-text text-transparent">
              Three Steps to a New Journey
            </h2>
            <div class="mt-8 grid gap-6 sm:grid-cols-3">
              <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                  1
                </div>
                <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                  Enter Birth Details
                </h3>
                <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                  Automatic lunar-solar conversion and timezone validation
                  ensure precision.
                </p>
              </div>
              <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                  2
                </div>
                <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                  Generate Charts
                </h3>
                <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                  AI simulates Zi Wei Dou Shu, Four Pillars, and Ten Gods energy
                  maps in seconds.
                </p>
              </div>
              <div class="group rounded-2xl bg-purple-800/30 border border-purple-400/20 p-6 transition-all hover:bg-purple-800/40 hover:border-purple-400/30">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-800 text-2xl font-bold text-purple-100 shadow-lg">
                  3
                </div>
                <h3 class="mt-4 text-lg font-semibold text-purple-100 group-hover:text-white transition-colors">
                  Receive Guidance
                </h3>
                <p class="mt-3 text-sm text-purple-200 leading-relaxed">
                  Unlock personalized strategies with reminders delivered at
                  auspicious timing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="px-6 pb-12 sm:px-10">
          <div class="mx-auto max-w-4xl rounded-3xl border border-purple-400/20 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 backdrop-blur-sm p-8 text-center shadow-lg shadow-purple-500/20">
            <div class="mb-4 flex justify-center">
              <span class="text-4xl">✨</span>
            </div>
            <h3 class="text-xl font-bold text-purple-100 bg-gradient-to-r from-purple-100 to-purple-50 bg-clip-text text-transparent">
              Eastern Wisdom, Quantum Clarity
            </h3>
            <p class="mt-4 text-sm text-purple-200 leading-relaxed">
              12,680+ seekers have planned their journey with AI BaZi insights.
              You could be the next transformation story.
            </p>
            <a
              class="mt-6 inline-flex items-center justify-center rounded-full border border-purple-400/60 bg-purple-950/30 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-purple-100 transition-all hover:bg-purple-500/20 hover:border-purple-400/80 hover:shadow-purple-400/40"
              href="/en/stories"
            >
              Explore Real Stories
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
