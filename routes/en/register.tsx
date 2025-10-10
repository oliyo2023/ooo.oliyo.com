import LocaleNav from "../../components/LocaleNav.tsx";

export default function RegisterEn() {
  return (
    <main class="relative min-h-screen bg-[#04040d] text-slate-100">
      <LocaleNav locale="en" />
      <div class="absolute inset-0 -z-10">
        <div class="h-full w-full bg-gradient-to-br from-[#050515] via-[#0d1a3a] to-[#b8860b] opacity-90" />
        <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
        <div class="absolute inset-0 backdrop-blur-sm" />
        <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
        <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
      </div>
      <section class="px-6 pt-24 pb-16 sm:px-10">
        <div class="mx-auto max-w-4xl text-center">
          <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
            Create Account
          </span>
          <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Join the Digital Astrology Collective
          </h1>
          <p class="mt-6 text-base text-slate-200 sm:text-lg">
            Save your natal charts, enable cloud syncing, and unlock AI-guided fortune alerts tailored to your life path.
          </p>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <form class="space-y-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Display Name
                <input
                  type="text"
                  name="nickname"
                  placeholder="Enter a public nickname"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Birth Date
                <input
                  type="date"
                  name="birthdate"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Birth Hour
                <select
                  name="birthtime"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                >
                  <option class="bg-[#04040d]">Rat (23:00-00:59)</option>
                  <option class="bg-[#04040d]">Ox (01:00-02:59)</option>
                  <option class="bg-[#04040d]">Tiger (03:00-04:59)</option>
                  <option class="bg-[#04040d]">Rabbit (05:00-06:59)</option>
                  <option class="bg-[#04040d]">Dragon (07:00-08:59)</option>
                  <option class="bg-[#04040d]">Snake (09:00-10:59)</option>
                  <option class="bg-[#04040d]">Horse (11:00-12:59)</option>
                  <option class="bg-[#04040d]">Goat (13:00-14:59)</option>
                  <option class="bg-[#04040d]">Monkey (15:00-16:59)</option>
                  <option class="bg-[#04040d]">Rooster (17:00-18:59)</option>
                  <option class="bg-[#04040d]">Dog (19:00-20:59)</option>
                  <option class="bg-[#04040d]">Pig (21:00-22:59)</option>
                </select>
              </label>
            </div>
            <div class="grid gap-6 sm:grid-cols-2">
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Birth Place
                <input
                  type="text"
                  name="birthplace"
                  placeholder="City and country"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
              <label class="flex flex-col text-left text-sm font-medium text-amber-100">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Set a secure password"
                  class="mt-2 w-full rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
                />
              </label>
            </div>
            <label class="flex items-start gap-3 text-left text-sm text-slate-200">
              <input type="checkbox" class="mt-1 h-5 w-5 rounded border border-white/20 bg-black/40 text-amber-300 focus:ring-amber-300" />
              I agree to the <a class="mx-1 text-amber-200 underline-offset-2 hover:underline" href="/en/privacy">Privacy Policy</a> and <a class="mx-1 text-amber-200 underline-offset-2 hover:underline" href="/en/terms">User Terms</a>, and consent to chart generation services.
            </label>
            <button
              type="submit"
              class="w-full rounded-full bg-gradient-to-r from-[#b8860b] via-[#d4a637] to-[#f4d47c] px-8 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:scale-[1.02] hover:shadow-yellow-300/50"
            >
              Complete Sign Up & Generate Chart
            </button>
          </form>
          <div class="mt-8 rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-left text-sm text-slate-200">
            <h2 class="text-lg font-semibold text-white">Your membership unlocks:</h2>
            <ul class="mt-4 space-y-2 text-amber-100">
              <li>• Personalized AI natal profiles and visuals</li>
              <li>• Fortune alerts and auspicious-day reminders</li>
              <li>• Priority channel for tailored guidance</li>
            </ul>
          </div>
        </div>
      </section>
      <footer class="px-6 pb-12 sm:px-10">
        <div class="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-transparent to-white/10 p-8 text-center">
          <p class="text-sm text-slate-200">
            Already have an account? <a class="text-amber-200 underline-offset-2 hover:underline" href="/en/login">Sign in</a> to continue your cosmic exploration.
          </p>
        </div>
      </footer>
    </main>
  );
}
