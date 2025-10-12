import LocaleNav from "../../components/LocaleNav.tsx";

export default function PrivacyPolicyEn() {
  return (
    <main class="relative min-h-[100vh] bg-[#04040d] text-slate-100">
      <LocaleNav locale="en" />
      <div class="absolute inset-0 -z-10">
        <div class="h-full w-full bg-gradient-to-br from-[#050515] via-[#0d1a3a] to-[#b8860b] opacity-90" />
        <div class="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,215,128,0.35),_transparent_65%)]" />
        <div class="absolute inset-0 backdrop-blur-sm" />
        <div class="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/20" />
        <div class="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30" />
      </div>
      <section class="px-6 pt-24 pb-16 sm:px-10">
        <div class="mx-auto flex max-w-5xl flex-col gap-8">
          <div class="text-center">
            <span class="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-white/5 px-4 py-1 text-xs font-medium tracking-[0.35em] text-amber-200 uppercase">
              Privacy Policy
            </span>
            <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Safeguarding Your Birth Data & Personal Insights
            </h1>
            <p class="mt-6 text-base text-slate-200 sm:text-lg">
              We uphold stringent standards to secure your personal data, ensuring transparency, safety, and control across every AI astrology experience.
            </p>
          </div>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <article class="space-y-6 text-sm leading-7 text-slate-200">
            <h2 class="text-2xl font-semibold text-white">1. Data We Collect</h2>
            <p>
              When you register or use the service, we may collect account identifiers (display name, email, phone), natal data (birth date, hour, location), usage patterns, and necessary device metadata. Google/GitHub login is scoped to approved public profile fields only.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">2. How We Use Data</h2>
            <p>
              Data powers account creation, chart generation, fortune reminders, product analytics, and security monitoring. We never sell your information or use it for commercial outreach without explicit consent.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">3. Storage & Security</h2>
            <p>
              All records reside in encrypted databases; sensitive fields such as passwords or verification codes are hashed or encrypted. Access controls, audit trails, and continuous testing protect against leaks or tampering.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">4. Third-Party Services</h2>
            <p>
              Google, GitHub, and SMS providers follow their respective privacy policies. Authorization tokens can be revoked at any time. Verification codes are strictly used for authentication.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">5. Your Rights</h2>
            <p>
              You may access, correct, export, or delete your data and request account deletion. Upon verifying identity, we respond within legally mandated timeframes.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">6. Contact</h2>
            <p>
              For inquiries or requests, email support@ooo.oliyo.com. We typically reply within 15 business days.
            </p>
          </article>
          <div class="rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-sm text-amber-100">
            <p>
              Last updated: 10 Oct 2025. We will notify you in-app whenever significant changes occur.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
