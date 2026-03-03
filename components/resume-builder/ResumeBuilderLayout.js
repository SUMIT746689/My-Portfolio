'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiRefreshCw,
  FiDatabase,
  FiEdit3,
  FiEye,
} from 'react-icons/fi';
import { useTranslations } from '../../hooks/useTranslations';
import { useLocale } from 'next-intl';
import { useResumeState } from './hooks/useResumeState';
import EditorPanel from './Editor/EditorPanel';
import ResumePreview from './Preview/ResumePreview';
import PdfExportButton from './shared/PdfExportButton';
import TemplatePicker from './shared/TemplatePicker';

export default function ResumeBuilderLayout() {
  const { t } = useTranslations();
  const locale = useLocale();
  const previewRef = useRef(null);
  const previewContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('editor');
  const [previewScale, setPreviewScale] = useState(1);
  const [previewHeight, setPreviewHeight] = useState(1123);
  const [template, setTemplate] = useState('classic');

  const resumeState = useResumeState();
  const { resume, loadSampleData, resetData } = resumeState;

  useEffect(() => {
    const updateScale = () => {
      if (previewContainerRef.current) {
        const containerWidth = previewContainerRef.current.clientWidth;
        const scale = Math.min(containerWidth / 794, 0.85);
        setPreviewScale(scale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [activeTab]);

  // Track the actual content height of the preview
  useEffect(() => {
    if (!previewRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setPreviewHeight(entry.contentRect.height);
      }
    });
    observer.observe(previewRef.current);
    return () => observer.disconnect();
  }, [template]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
      {/* Top Bar */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700"
            >
              <FiArrowLeft className="text-xl" />
            </Link>
            <div>
              <h1 className="text-lg font-bold bg-linear-to-r from-blue-700 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {t('resumeBuilder.title')}
              </h1>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:block">
                {t('resumeBuilder.subtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadSampleData}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/50 border border-blue-200 dark:border-cyan-800 rounded-xl hover:bg-blue-100 dark:hover:bg-cyan-900/50 transition-all duration-200"
            >
              <FiDatabase className="text-sm" />
              {t('resumeBuilder.loadSample')}
            </button>
            <button
              onClick={resetData}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200"
            >
              <FiRefreshCw className="text-sm" />
              {t('resumeBuilder.reset')}
            </button>
            <PdfExportButton
              resume={resume}
              template={template}
            />
          </div>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden sticky top-[57px] z-30 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80">
        <div className="flex p-1.5 mx-3 my-2 bg-slate-100 dark:bg-slate-700/50 rounded-xl">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeTab === 'editor'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <FiEdit3 className="text-sm" />
            {t('resumeBuilder.editor')}
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeTab === 'preview'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-cyan-400 shadow-sm'
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <FiEye className="text-sm" />
            {t('resumeBuilder.preview')}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto">
        <div className="lg:flex lg:gap-6 p-4 lg:p-6">
          {/* Editor */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`lg:w-[45%] lg:block ${
              activeTab === 'editor' ? 'block' : 'hidden'
            }`}
          >
            <div className="max-h-[calc(100vh-160px)] lg:max-h-[calc(100vh-90px)] overflow-y-auto pr-1 pb-24 lg:pb-6 scrollbar-thin">
              <EditorPanel {...resumeState} />
            </div>
          </motion.div>

          {/* Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab === 'preview' ? 'preview-mobile' : 'preview-desktop'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className={`lg:w-[55%] lg:block ${
                activeTab === 'preview' ? 'block' : 'hidden'
              }`}
            >
              <div
                ref={previewContainerRef}
                className="lg:sticky lg:top-[76px]"
              >
                {/* Template picker + live label */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="hidden lg:flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {t('resumeBuilder.livePreview')}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      {t('resumeBuilder.chooseTemplate')}
                    </span>
                  </div>
                  <TemplatePicker selected={template} onSelect={setTemplate} />
                </div>

                <div
                  className="origin-top-left"
                  style={{
                    transform: `scale(${previewScale})`,
                    height: `${previewHeight * previewScale}px`,
                  }}
                >
                  <ResumePreview
                    ref={previewRef}
                    resume={resume}
                    template={template}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-700/80 px-4 py-3 flex gap-2">
        <button
          onClick={loadSampleData}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800 rounded-xl"
        >
          <FiDatabase className="text-sm" />
          {t('resumeBuilder.loadSample')}
        </button>
        <button
          onClick={resetData}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl"
        >
          <FiRefreshCw className="text-sm" />
        </button>
      </div>
    </div>
  );
}
