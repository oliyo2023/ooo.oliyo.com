"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LocaleNavProps {
  locale: string;
}

export default function LocaleNav({ locale }: LocaleNavProps) {
  // locale 参数可用于未来的国际化功能
  console.log('Current locale:', locale);
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-400/20 glass-mystic shadow-mystic">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="group flex items-center space-x-3 transition-all">
              <Image src="/logo.svg" alt="东方命理 Logo" width={36} height={36} />
              <span className="text-xl font-light tracking-wide text-gradient-purple">东方命理</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`relative text-sm font-light tracking-wide transition-all duration-300 ${
                  isActive("/")
                    ? "text-purple-200"
                    : "text-purple-300/70 hover:text-purple-200"
                }`}
              >
                首页
                {isActive("/") && <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />}
              </Link>
              <Link
                href="/demo"
                className={`relative text-sm font-light tracking-wide transition-all duration-300 ${
                  isActive("/demo")
                    ? "text-purple-200"
                    : "text-purple-300/70 hover:text-purple-200"
                }`}
              >
                体验示例
                {isActive("/demo") && <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />}
              </Link>
              <Link
                href="/stories"
                className={`relative text-sm font-light tracking-wide transition-all duration-300 ${
                  isActive("/stories")
                    ? "text-purple-200"
                    : "text-purple-300/70 hover:text-purple-200"
                }`}
              >
                用户故事
                {isActive("/stories") && <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-light tracking-wide text-purple-300/80 transition-all duration-300 hover:text-purple-200"
            >
              登录
            </Link>
            <Link
              href="/register"
              className="btn-mystic text-sm"
            >
              注册
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}