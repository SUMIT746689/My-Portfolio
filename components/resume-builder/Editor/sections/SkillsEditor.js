'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';
import { AddButton, RemoveButton } from '../../shared/DynamicListControls';

const inputClass =
  'flex-1 px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

const smallInputClass =
  'flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

export default function SkillsEditor({
  skills,
  addItem,
  updateItem,
  removeItem,
}) {
  const { t } = useTranslations();

  const addSkillCategory = () => {
    addItem('skills', { category: '', items: [''] });
  };

  const updateCategory = (index, value) => {
    updateItem('skills', index, { ...skills[index], category: value });
  };

  const addSkillItem = (catIndex) => {
    const updated = { ...skills[catIndex] };
    updated.items = [...updated.items, ''];
    updateItem('skills', catIndex, updated);
  };

  const updateSkillItem = (catIndex, itemIndex, value) => {
    const updated = { ...skills[catIndex] };
    updated.items = updated.items.map((s, i) => (i === itemIndex ? value : s));
    updateItem('skills', catIndex, updated);
  };

  const removeSkillItem = (catIndex, itemIndex) => {
    const updated = { ...skills[catIndex] };
    updated.items = updated.items.filter((_, i) => i !== itemIndex);
    updateItem('skills', catIndex, updated);
  };

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {skills.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="p-4 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/30 rounded-xl border border-slate-200/80 dark:border-slate-700/60 space-y-3"
          >
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={cat.category}
                onChange={(e) => updateCategory(index, e.target.value)}
                className={inputClass}
                placeholder={t('resumeBuilder.placeholders.skillCategory')}
              />
              <RemoveButton onClick={() => removeItem('skills', index)} />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex gap-1.5 items-center">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        updateSkillItem(index, iIdx, e.target.value)
                      }
                      className="w-32 px-3 py-1.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                      placeholder={t('resumeBuilder.placeholders.skill')}
                    />
                    {cat.items.length > 1 && (
                      <RemoveButton
                        onClick={() => removeSkillItem(index, iIdx)}
                      />
                    )}
                  </div>
                ))}
              </div>
              <AddButton
                onClick={() => addSkillItem(index)}
                label={t('resumeBuilder.actions.addSkill')}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <AddButton
        onClick={addSkillCategory}
        label={t('resumeBuilder.actions.addSkillCategory')}
      />
    </div>
  );
}
