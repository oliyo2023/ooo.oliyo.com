import { JSX } from "preact";

type Locale = "zh" | "en";

interface LocaleNavProps {
  locale: Locale;
}

const textMap: Record<Locale, {
  brand: string;
  homeHref: string;
  loginHref: string;
  registerHref: string;
  loginLabel: string;
  registerLabel: string;
  toggleLabel: string;
  toggleHref: string;
}> = {
  zh: {
    brand: "东方命理 · 首页",
    homeHref: "/",
    loginHref: "/login",
    registerHref: "/register",
    loginLabel: "登录",
    registerLabel: "注册",
    toggleLabel: "English",
    toggleHref: "/en",
  },
  en: {
    brand: "Oriental Astrology · Home",
    homeHref: "/en",
    loginHref: "/en/login",
    registerHref: "/en/register",
    loginLabel: "Sign In",
    registerLabel: "Sign Up",
    toggleLabel: "中文",
    toggleHref: "/",
  },
};

export default function LocaleNav({ locale }: LocaleNavProps): JSX.Element {
  const t = textMap[locale];
  return (
    <header class="relative z-10 flex flex-col gap-3 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <a class="inline-flex items-center gap-2 text-sm font-semibold text-amber-100 transition hover:text-white" href={t.homeHref}>
        <span class="h-8 w-8 rounded-full bg-white/10 text-center leading-8 text-amber-200">∞</span>
        <span>{t.brand}</span>
      </a>
      <div class="flex flex-wrap items-center gap-3 text-sm text-amber-100">
        <a class="rounded-full border border-amber-300/40 px-4 py-2 transition hover:bg-white/10" href={t.loginHref}>
          {t.loginLabel}
        </a>
        <a class="rounded-full border border-amber-300/40 px-4 py-2 transition hover:bg-white/10" href={t.registerHref}>
          {t.registerLabel}
        </a>
        <a class="rounded-full border border-amber-300/40 px-4 py-2 transition hover:bg-white/10" href={t.toggleHref}>
          {t.toggleLabel}
        </a>
      </div>
    </header>
  );
}
