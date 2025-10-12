import LocaleNav from "../../components/LocaleNav.tsx";

export default function UserTermsEn() {
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
              User Terms
            </span>
            <h1 class="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Nurturing a Trusted AI Astrology Community
            </h1>
            <p class="mt-6 text-base text-slate-200 sm:text-lg">
              By using this service, you commit to the guidelines below to maintain integrity, safety, and mutual respect.
            </p>
          </div>
        </div>
      </section>
      <section class="px-6 pb-20 sm:px-10">
        <div class="mx-auto max-w-4xl space-y-12 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-amber-500/20">
          <article class="space-y-6 text-sm leading-7 text-slate-200">
            <h2 class="text-2xl font-semibold text-white">1. Account Responsibility</h2>
            <p>
              Provide accurate registration details and safeguard your credentials. Impersonation, bulk registrations, or unauthorized sharing are prohibited.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">2. Lawful Use</h2>
            <p>
              Do not publish unlawful, infringing, fraudulent, explicit, or hateful content, nor attempt to disrupt system security. Violations may result in feature limits or account suspension.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">3. Payments & Benefits</h2>
            <p>
              Paid services follow published billing and refund policies. Membership rights are personal, non-transferable, and non-resellable.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">4. AI Guidance Notice</h2>
            <p>
              AI-generated readings are for reference only and do not replace professional counsel. You are responsible for decisions taken from insights provided.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">5. Community Conduct</h2>
            <p>
              Interact respectfully in forums and comments. Report violations through in-app tools or contact us for assistance.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">6. Enforcement</h2>
            <p>
              We may issue warnings, restrict access, ban accounts, or notify authorities when policies or laws are violated.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">7. Updates</h2>
            <p>
              We may amend these terms as services evolve. Continued use signifies acceptance of the latest version.
            </p>
            <h2 class="pt-4 text-2xl font-semibold text-white">8. Contact</h2>
            <p>
              Questions? Email support@ooo.oliyo.com and we will respond promptly.
            </p>
          </article>
          <div class="rounded-2xl border border-amber-300/20 bg-black/30 p-6 text-sm text-amber-100">
            <p>
              Last updated: 10 Oct 2025. Please review periodically for future revisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
