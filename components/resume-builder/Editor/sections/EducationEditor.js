'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';
import { AddButton, RemoveButton } from '../../shared/DynamicListControls';

const inputClass =
  'w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

export default function EducationEditor({
  education,
  addItem,
  updateItem,
  removeItem,
}) {
  const { t } = useTranslations();

  const addEducation = () => {
    addItem('education', { degree: '', institution: '', period: '' });
  };

  const updateField = (index, field, value) => {
    updateItem('education', index, { ...education[index], [field]: value });
  };

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 space-y-2.5"
          >
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded-md">
                #{index + 1}
              </span>
              <RemoveButton onClick={() => removeItem('education', index)} />
            </div>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateField(index, 'degree', e.target.value)}
              className={inputClass}
              placeholder={t('resumeBuilder.placeholders.degree')}
            />
            <input
              type="text"
              value={edu.institution}
              onChange={(e) =>
                updateField(index, 'institution', e.target.value)
              }
              className={inputClass}
              placeholder={t('resumeBuilder.placeholders.institution')}
            />
            <input
              type="text"
              value={edu.period}
              onChange={(e) => updateField(index, 'period', e.target.value)}
              className={inputClass}
              placeholder={t('resumeBuilder.placeholders.period')}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      <AddButton
        onClick={addEducation}
        label={t('resumeBuilder.actions.addEducation')}
      />
    </div>
  );
}
