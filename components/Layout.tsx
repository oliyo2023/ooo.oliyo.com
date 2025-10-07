// 主布局组件

import { JSX } from "preact";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
  title?: string;
  description?: string;
  children: JSX.Element | JSX.Element[];
  showSearch?: boolean;
}

export default function Layout({
  title = "Fresh Blog",
  description = "基于Fresh框架的现代化博客系统",
  children,
  showSearch = true
}: LayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 头部 */}
      <Header title={title} showSearch={showSearch} />

      {/* 主要内容 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 底部 */}
      <Footer />
    </div>
  );
}