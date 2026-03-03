'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';
import { AddButton, RemoveButton } from '../../shared/DynamicListControls';

const inputClass =
  'w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

const smallInputClass =
  'flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

export default function ExperienceEditor({
  experience,
  addItem,
  updateItem,
  removeItem,
}) {
  const { t } = useTranslations();

  const addExperience = () => {
    addItem('experience', {
      title: '',
      company: '',
      period: '',
      responsibilities: [''],
    });
  };

  const updateField = (index, field, value) => {
    updateItem('experience', index, { ...experience[index], [field]: value });
  };

  const addResponsibility = (expIndex) => {
    const updated = { ...experience[expIndex] };
    updated.responsibilities = [...updated.responsibilities, ''];
    updateItem('experience', expIndex, updated);
  };

  const updateResponsibility = (expIndex, respIndex, value) => {
    const updated = { ...experience[expIndex] };
    updated.responsibilities = updated.responsibilities.map((r, i) =>
      i === respIndex ? value : r
    );
    updateItem('experience', expIndex, updated);
  };

  const removeResponsibility = (expIndex, respIndex) => {
    const updated = { ...experience[expIndex] };
    updated.responsibilities = updated.responsibilities.filter(
      (_, i) => i !== respIndex
    );
    updateItem('experience', expIndex, updated);
  };

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 space-y-3"
          >
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded-md">
                #{index + 1}
              </span>
              <RemoveButton onClick={() => removeItem('experience', index)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                value={exp.title}
                onChange={(e) => updateField(index, 'title', e.target.value)}
                className={inputClass}
                placeholder={t('resumeBuilder.placeholders.jobTitle')}
              />
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateField(index, 'company', e.target.value)}
                className={inputClass}
                placeholder={t('resumeBuilder.placeholders.company')}
              />
            </div>
            <input
              type="text"
              value={exp.period}
              onChange={(e) => updateField(index, 'period', e.target.value)}
              className={inputClass}
              placeholder={t('resumeBuilder.placeholders.period')}
            />
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 ml-1">
                {t('resumeBuilder.sections.responsibilities')}
              </span>
              {exp.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className="flex gap-2 items-center">
                  <span className="text-slate-300 dark:text-slate-600 text-xs">
                    &bull;
                  </span>
                  <input
                    type="text"
                    value={resp}
                    onChange={(e) =>
                      updateResponsibility(index, rIdx, e.target.value)
                    }
                    className={smallInputClass}
                    placeholder={t('resumeBuilder.placeholders.responsibility')}
                  />
                  {exp.responsibilities.length > 1 && (
                    <RemoveButton
                      onClick={() => removeResponsibility(index, rIdx)}
                    />
                  )}
                </div>
              ))}
              <AddButton
                onClick={() => addResponsibility(index)}
                label={t('resumeBuilder.actions.addResponsibility')}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <AddButton
        onClick={addExperience}
        label={t('resumeBuilder.actions.addExperience')}
      />
    </div>
  );
}
