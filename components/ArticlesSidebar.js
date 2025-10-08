"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
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
  MdClose
} from 'react-icons/md';

const ArticlesSidebar = () => {
  const params = useParams();
  const pathname = usePathname();
  const locale = params?.locale || 'en';

  const [expandedCategories, setExpandedCategories] = useState(['architectures']);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    {
      id: 'architectures',
      title: 'System Architecture',
      icon: MdDns,
      articles: [
        {
          id: 'postgres',
          title: 'PostgreSQL Database Architecture',
          slug: 'architectures',
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

  const SidebarContent = () => (
    <>
      <div className="p-4">
        <div className="mb-6">
          <Link
            href={`/${locale}`}
            className="text-xl font-bold text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
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
                      ? 'hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!hasArticles}
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon
                      size={20}
                      className="text-gray-600 dark:text-gray-400"
                    />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {category.title}
                    </span>
                  </div>
                  {hasArticles && (
                    isExpanded
                      ? <MdExpandMore size={20} className="text-gray-500" />
                      : <MdChevronRight size={20} className="text-gray-500" />
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
                              ? 'bg-pink-500 text-white font-semibold shadow-md'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
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
                  <div className="ml-11 text-xs text-gray-400 dark:text-gray-600 italic">
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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-pink-500 text-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 overflow-y-auto">
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
