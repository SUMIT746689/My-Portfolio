import Link from 'next/link';
import {
  MdStorage,
  MdDns,
  MdCode,
  MdLock,
  MdCloud,
  MdArrowForward,
  MdArticle
} from 'react-icons/md';

export default function ArticlesPage() {
  const categories = [
    {
      id: 'architectures',
      title: 'System Architecture',
      description: 'Deep dives into system design patterns, architectural decisions, and best practices for building scalable applications.',
      icon: MdDns,
      articleCount: 1,
      color: 'from-blue-500 to-cyan-500',
      featured: 'PostgreSQL Database Architecture'
    },
    {
      id: 'databases',
      title: 'Databases',
      description: 'Explore database internals, optimization techniques, and data modeling strategies across different database systems.',
      icon: MdStorage,
      articleCount: 0,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Server-side development patterns, API design, performance optimization, and backend best practices.',
      icon: MdCode,
      articleCount: 0,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      description: 'Container orchestration, CI/CD pipelines, infrastructure as code, and cloud-native development.',
      icon: MdCloud,
      articleCount: 0,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Application security, authentication patterns, encryption techniques, and security best practices.',
      icon: MdLock,
      articleCount: 0,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <MdArticle size={48} className="text-pink-500" />
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
              Technical Articles
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In-depth technical articles covering system architecture, databases, backend development, and more.
            Dive deep into the internals and learn how things work under the hood.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 rounded-full">
              <span className="font-semibold text-pink-600 dark:text-pink-400">1 Published</span>
            </div>
            <div className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <span className="font-semibold">More Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const hasArticles = category.articleCount > 0;

            return (
              <div
                key={category.id}
                className={`group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                  hasArticles
                    ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
                    : 'opacity-75'
                }`}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />

                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      <Icon size={24} />
                    </div>
                    {hasArticles ? (
                      <span className="px-2 py-1 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                        {category.articleCount} Article{category.articleCount !== 1 ? 's' : ''}
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Featured Article */}
                  {category.featured && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                        FEATURED
                      </p>
                      <p className="text-sm font-medium text-pink-600 dark:text-pink-400">
                        {category.featured}
                      </p>
                    </div>
                  )}

                  {/* Call to Action */}
                  {hasArticles && (
                    <div className="mt-4 flex items-center text-pink-500 dark:text-pink-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      <span>Explore Articles</span>
                      <MdArrowForward className="ml-2" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Getting Started Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start Exploring</h2>
          <p className="text-lg mb-6 opacity-90">
            Select a category from the sidebar or click on a category card above to dive into the articles
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="text-sm font-semibold">✨ Deep Technical Insights</p>
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="text-sm font-semibold">🔍 Detailed Explanations</p>
            </div>
            <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="text-sm font-semibold">💡 Real-world Examples</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
