'use client';

import { useTranslations } from '../../../../hooks/useTranslations';

export default function SummaryEditor({ summary, updateSummary }) {
  const { t } = useTranslations();

  const charCount = summary.length;

  return (
    <div>
      <textarea
        value={summary}
        onChange={(e) => updateSummary(e.target.value)}
        rows={4}
        className="w-full px-4 py-3 text-sm bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 resize-none leading-relaxed"
        placeholder={t('resumeBuilder.placeholders.summary')}
      />
      <div className="flex justify-end mt-1.5">
        <span
          className={`text-[11px] ${
            charCount > 300
              ? 'text-amber-500'
              : 'text-slate-400 dark:text-slate-500'
          }`}
        >
          {charCount}/300
        </span>
      </div>
    </div>
  );
}
