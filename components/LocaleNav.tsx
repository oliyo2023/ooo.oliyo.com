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

export default function LocaleNav({ locale }: LocaleNavProps) {
  const t = textMap[locale];
  return (
    <header className="relative z-10 flex flex-col gap-3 px-6 pt-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <a
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f1eeff] transition hover:text-white"
        href={t.homeHref}
      >
        <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#8b3cff] to-[#5220a3] text-center leading-8 text-[#f1eeff] shadow-[0_10px_25px_rgba(168,100,255,0.3)]">
          ☯
        </span>
        <span>{t.brand}</span>
      </a>
      <div className="flex flex-wrap items-center gap-3 text-sm text-[#f1eeff]">
        <a
          className="rounded-full border border-[rgba(189,140,255,0.4)] px-4 py-2 transition hover:bg-[rgba(168,100,255,0.1)]"
          href={t.loginHref}
        >
          {t.loginLabel}
        </a>
        <a
          className="rounded-full border border-[rgba(189,140,255,0.4)] px-4 py-2 transition hover:bg-[rgba(168,100,255,0.1)]"
          href={t.registerHref}
        >
          {t.registerLabel}
        </a>
        <a
          className="rounded-full border border-[rgba(189,140,255,0.4)] px-4 py-2 transition hover:bg-[rgba(168,100,255,0.1)]"
          href={t.toggleHref}
        >
          {t.toggleLabel}
        </a>
      </div>
    </header>
  );
}
