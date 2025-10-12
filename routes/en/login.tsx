import { Head } from "https://deno.land/x/fresh@1.6.1/runtime.ts";
import LocaleNav from "../../components/LocaleNav.tsx";

export default function LoginEn() {
  return (
    <>
      <Head>
        <title>Sign In · Oriental Astrology AI</title>
        <meta name="description" content="Sign in to view your personalized BaZi charts, fortune alerts, and AI guidance." />
        <meta property="og:title" content="Sign in to Oriental Astrology" />
        <meta property="og:description" content="Access your AI-generated natal charts and multi-dimensional guidance." />
        <meta property="og:url" content="https://ooo.oliyo.com/en/login" />
      </Head>
      <main class="relative min-h-[100vh] bg-[#04040d] text-slate-100">
        <LocaleNav locale="en" />
        <div class="absolute inset-0 -z-10">
          <img src="/login-bg.svg" alt="Login background" class="h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-[#050515]/80 via-[#0d1a3a]/80 to-[#b8860b]/60 backdrop-blur-sm" />
          <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
          <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
          <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
        </div>
      <section class="px-6 pt-24 pb-16 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
            Secure Login
          </span>
          <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Welcome Back to Your Cosmic Compass
          </h1>
          <p class="mt-6 text-base text-slate-200 sm:text-lg">
            Sign in to continue exploring your personalized chart, receive cycle alerts, and consult your AI astrology advisor.
          </p>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <form class="space-y-8">
            <div class="space-y-6">
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Email or Phone
                <input
                  type="text"
                  name="identifier"
                  placeholder="Enter your email or phone"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label class="flex items-center gap-3 text-left text-sm text-slate-200">
                <input type="checkbox" class="h-5 w-5 rounded border border-white/20 bg-black/40 text-amber-300 focus:ring-amber-300" />
                Remember me for next time
              </label>
              <a class="text-sm text-amber-200 underline-offset-2 hover:underline" href="/en/reset-password">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4a637] to-[#f4d47c] px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:shadow-yellow-300/50"
            >
              Sign In and Continue
            </button>
          </form>
          <div class="mt-8 rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-left text-sm text-slate-200">
            <h2 class="text-lg font-semibold text-white">First time here?</h2>
            <p class="mt-3 text-amber-100">
              <a class="text-amber-200 underline-offset-2 hover:underline" href="/en/register">Create an account</a> to sync your BaZi and Zi Wei insights across devices.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
