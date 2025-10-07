// 网站头部组件

import { JSX } from "preact";

interface HeaderProps {
  title?: string;
  showSearch?: boolean;
}

export default function Header({ title = "Fresh Blog", showSearch = true }: HeaderProps): JSX.Element {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo和标题 */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">{title}</span>
            </a>
          </div>

          {/* 导航菜单 */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              首页
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              关于
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              联系
            </a>
          </nav>

          {/* 搜索和登录 */}
          <div className="flex items-center space-x-4">
            {showSearch && (
              <button className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            )}
            <a
              href="/admin/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              登录
            </a>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
            首页
          </a>
          <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
            关于
          </a>
          <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
            联系
          </a>
          <a href="/admin/login" className="block px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-md">
            登录
          </a>
        </div>
      </div>
    </header>
  );
}