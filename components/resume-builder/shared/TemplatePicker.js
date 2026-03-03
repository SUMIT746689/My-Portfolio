'use client';

import { useTranslations } from '../../../hooks/useTranslations';

const templateOptions = [
  {
    id: 'classic',
    labelKey: 'resumeBuilder.templates.classic',
    colors: ['#0f172a', '#2563eb', '#ffffff'],
  },
  {
    id: 'modern',
    labelKey: 'resumeBuilder.templates.modern',
    colors: ['#134e4a', '#0d9488', '#ffffff'],
  },
  {
    id: 'elegant',
    labelKey: 'resumeBuilder.templates.elegant',
    colors: ['#faf7f2', '#92400e', '#ffffff'],
  },
  {
    id: 'bold',
    labelKey: 'resumeBuilder.templates.bold',
    colors: ['#4c1d95', '#7c3aed', '#ffffff'],
  },
  {
    id: 'minimal',
    labelKey: 'resumeBuilder.templates.minimal',
    colors: ['#1e3a5a', '#e8eef4', '#ffffff'],
  },
];

export default function TemplatePicker({ selected, onSelect }) {
  const { t } = useTranslations();

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
      {templateOptions.map((tmpl) => (
        <button
          key={tmpl.id}
          onClick={() => onSelect(tmpl.id)}
          className={`flex flex-col items-center gap-1.5 px-2 py-2 rounded-xl border-2 transition-all duration-200 shrink-0 ${
            selected === tmpl.id
              ? 'border-blue-500 dark:border-cyan-400 bg-blue-50 dark:bg-cyan-950/40'
              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
          }`}
        >
          {/* Mini preview swatch */}
          <div
            className="w-12 h-16 rounded-md overflow-hidden flex"
            style={{ border: '1px solid #e2e8f0' }}
          >
            {tmpl.id === 'minimal' ? (
              // Single column preview for minimal
              <div className="w-full flex flex-col">
                <div className="h-[6px]" style={{ background: tmpl.colors[1] }} />
                <div className="flex-1" style={{ background: tmpl.colors[0] }}>
                  <div className="mx-1 mt-1" style={{ height: '1px', background: '#d1d5db' }} />
                  <div className="mx-1 mt-1" style={{ height: '1px', background: '#e5e7eb' }} />
                  <div className="mx-1 mt-1" style={{ height: '1px', background: '#e5e7eb' }} />
                </div>
              </div>
            ) : tmpl.id === 'modern' || tmpl.id === 'bold' ? (
              // Header + two column for modern/bold
              <div className="w-full flex flex-col">
                <div className="h-[10px]" style={{ background: tmpl.colors[0] }} />
                <div className="flex flex-1">
                  <div className="flex-1" style={{ background: tmpl.colors[2] }} />
                  <div className="w-[30%]" style={{ background: tmpl.colors[2], borderLeft: `1px solid #e5e7eb` }} />
                </div>
              </div>
            ) : (
              // Two column for classic/elegant
              <div className="w-full flex">
                <div className="w-[35%]" style={{ background: tmpl.colors[0] }} />
                <div className="flex-1" style={{ background: tmpl.colors[2] }} />
              </div>
            )}
          </div>
          <span
            className={`text-[10px] font-medium ${
              selected === tmpl.id
                ? 'text-blue-600 dark:text-cyan-400'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {t(tmpl.labelKey)}
          </span>
        </button>
      ))}
    </div>
  );
}
