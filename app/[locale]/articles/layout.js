import ArticlesSidebar from '../../../components/ArticlesSidebar';

export default function ArticlesLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      <ArticlesSidebar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
