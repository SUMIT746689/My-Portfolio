"use client"

const ArchitectureDiagram = ({ title, children }) => {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8 border-2 border-slate-300 dark:border-slate-600 shadow-lg">
        {title && (
          <h2 className="text-2xl font-bold text-center mb-6 text-slate-800 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
