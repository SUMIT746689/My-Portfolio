'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';
import { AddButton, RemoveButton } from '../../shared/DynamicListControls';

export default function InterestsEditor({
  interests,
  addItem,
  updateItem,
  removeItem,
}) {
  const { t } = useTranslations();

  const addInterest = () => {
    addItem('interests', '');
  };

  const updateInterest = (index, value) => {
    updateItem('interests', index, value);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-3 pr-1 py-1"
            >
              <input
                type="text"
                value={interest}
                onChange={(e) => updateInterest(index, e.target.value)}
                className="w-28 bg-transparent text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                placeholder={t('resumeBuilder.placeholders.interest')}
              />
              <RemoveButton onClick={() => removeItem('interests', index)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AddButton
        onClick={addInterest}
        label={t('resumeBuilder.actions.addInterest')}
      />
    </div>
  );
}
