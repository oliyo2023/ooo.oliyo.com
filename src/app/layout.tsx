import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "东方命理 · AI 八字算命平台",
  description: "输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。",
  keywords: ["八字算命", "AI命理", "紫微斗数", "四柱八字", "国风命理"],
  authors: [{ name: "东方命理团队" }],
  creator: "东方命理",
  publisher: "东方命理",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ooo.oliyo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "东方命理 · AI 八字算命平台",
    description: "输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。",
    url: "https://ooo.oliyo.com/",
    siteName: "东方命理",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "东方命理 · AI 八字算命平台",
    description: "输入生辰八字，生成专属命盘与行运指引，AI 加持的国风命理体验。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0a0515] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}