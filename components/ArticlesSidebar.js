"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { readTheme } from '../utilities/theme';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  MdExpandMore,
  MdChevronRight,
  MdStorage,
  MdDns,
  MdCode,
  MdLock,
  MdCloud,
  MdArticle,
  MdMenu,
  MdClose,
  MdLanguage,
  MdOutlineLightMode
} from 'react-icons/md';
import { GiNightSleep } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';

const ArticlesSidebar = () => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const [expandedCategories, setExpandedCategories] = useState(['architectures']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [currentThemeIcon, setCurrentThemeIcon] = useState(<RiComputerLine />);
  const themeMenuRef = useRef(null);

  const themeIcons = {
    system: <RiComputerLine />,
    light: <MdOutlineLightMode />,
    dark: <GiNightSleep />,
  };

  useEffect(() => {
    const theme = readTheme();
    if (theme === 'light') setCurrentThemeIcon(themeIcons.light);
    else if (theme === 'dark') setCurrentThemeIcon(themeIcons.dark);
    else setCurrentThemeIcon(themeIcons.system);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setShowThemeMenu(false);
      }
    };
    if (showThemeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showThemeMenu]);

  const categories = [
    {
      id: 'architectures',
      title: 'System Architecture',
      icon: MdDns,
      articles: [
        {
          id: 'postgres',
          title: 'PostgreSQL Database Architecture',
          slug: 'architectures/postgres',
          icon: MdStorage,
        },
        // Add more articles here
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: MdStorage,
      articles: [
        // Future articles
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: MdCode,
      articles: [
        // Future articles
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: MdCloud,
      articles: [
        // Future articles
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: MdLock,
      articles: [
        // Future articles
      ]
    },
  ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isActive = (slug) => {
    return pathname.includes(`/articles/${slug}`);
  };

  const handleLanguageChange = (newLocale) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
  };

  const themeChangeHandle = (mode) => {
    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
      setCurrentThemeIcon(themeIcons.light);
      localStorage.setItem('theme', JSON.stringify('light'));
    } else if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      setCurrentThemeIcon(themeIcons.dark);
      localStorage.setItem('theme', JSON.stringify('dark'));
    } else if (mode === 'system') {
      if (typeof window !== 'undefined') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        setCurrentThemeIcon(themeIcons.system);
        localStorage.setItem('theme', JSON.stringify('system'));
      }
    }
    setShowThemeMenu(false);
  };

  const SidebarContent = () => (
    <>
      <div className="p-4">
        <div className="mb-4">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-slate-800 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Language and Theme Switchers */}
        <div className="mb-6 space-y-3">
          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                locale === 'en'
                  ? 'bg-blue-600 dark:bg-cyan-700 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <MdLanguage size={16} />
              <span>English</span>
            </button>
            <button
              onClick={() => handleLanguageChange('bn')}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                locale === 'bn'
                  ? 'bg-blue-600 dark:bg-cyan-700 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              <span>বাংলা</span>
            </button>
          </div>

          {/* Theme Switcher */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setShowThemeMenu((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200"
            >
              <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                {currentThemeIcon}
                <span>Theme</span>
              </span>
              <MdChevronRight
                size={18}
                className={`text-slate-500 transition-transform duration-200 ${showThemeMenu ? 'rotate-90' : ''}`}
              />
            </button>
            {showThemeMenu && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden z-10">
                <button
                  onClick={() => themeChangeHandle('light')}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <MdOutlineLightMode className="mr-3" size={18} />
                  Light
                </button>
                <button
                  onClick={() => themeChangeHandle('dark')}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <GiNightSleep className="mr-3" size={18} />
                  Dark
                </button>
                <button
                  onClick={() => themeChangeHandle('system')}
                  className="flex items-center w-full px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <RiComputerLine className="mr-3" size={18} />
                  System
                </button>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
          <MdArticle size={24} />
          Articles
        </h2>

        <nav className="space-y-2">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            const isExpanded = expandedCategories.includes(category.id);
            const hasArticles = category.articles.length > 0;

            return (
              <div key={category.id} className="space-y-1">
                <button
                  onClick={() => hasArticles && toggleCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    hasArticles
                      ? 'hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!hasArticles}
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon
                      size={20}
                      className="text-slate-600 dark:text-slate-400"
                    />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {category.title}
                    </span>
                  </div>
                  {hasArticles && (
                    isExpanded
                      ? <MdExpandMore size={20} className="text-slate-500" />
                      : <MdChevronRight size={20} className="text-slate-500" />
                  )}
                </button>

                {isExpanded && hasArticles && (
                  <div className="ml-4 space-y-1">
                    {category.articles.map((article) => {
                      const ArticleIcon = article.icon;
                      const active = isActive(article.slug);

                      return (
                        <Link
                          key={article.id}
                          href={`/${locale}/articles/${article.slug}`}
                          className={`flex items-center gap-3 p-2 pl-4 rounded-lg transition-all ${
                            active
                              ? 'bg-cyan-500 text-white font-semibold shadow-md'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                          }`}
                        >
                          <ArticleIcon size={16} />
                          <span className="text-sm">{article.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}

                {!hasArticles && (
                  <div className="ml-11 text-xs text-slate-400 dark:text-slate-600 italic">
                    Coming soon...
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-cyan-500 text-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 h-screen sticky top-0 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-800 z-50 overflow-y-auto shadow-2xl">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
};

export default ArticlesSidebar;
