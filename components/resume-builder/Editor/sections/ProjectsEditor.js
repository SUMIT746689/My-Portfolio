'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';
import { AddButton, RemoveButton } from '../../shared/DynamicListControls';

const inputClass =
  'w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

const smallInputClass =
  'flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

export default function ProjectsEditor({
  projects,
  addItem,
  updateItem,
  removeItem,
}) {
  const { t } = useTranslations();

  const addProject = () => {
    addItem('projects', { name: '', url: '', description: '', features: [''] });
  };

  const updateField = (index, field, value) => {
    updateItem('projects', index, { ...projects[index], [field]: value });
  };

  const addFeature = (projIndex) => {
    const updated = { ...projects[projIndex] };
    updated.features = [...updated.features, ''];
    updateItem('projects', projIndex, updated);
  };

  const updateFeature = (projIndex, featIndex, value) => {
    const updated = { ...projects[projIndex] };
    updated.features = updated.features.map((f, i) =>
      i === featIndex ? value : f
    );
    updateItem('projects', projIndex, updated);
  };

  const removeFeature = (projIndex, featIndex) => {
    const updated = { ...projects[projIndex] };
    updated.features = updated.features.filter((_, i) => i !== featIndex);
    updateItem('projects', projIndex, updated);
  };

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {projects.map((proj, index) => (
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
              <RemoveButton onClick={() => removeItem('projects', index)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                value={proj.name}
                onChange={(e) => updateField(index, 'name', e.target.value)}
                className={inputClass}
                placeholder={t('resumeBuilder.placeholders.projectName')}
              />
              <input
                type="url"
                value={proj.url}
                onChange={(e) => updateField(index, 'url', e.target.value)}
                className={inputClass}
                placeholder={t('resumeBuilder.placeholders.projectUrl')}
              />
            </div>
            <textarea
              value={proj.description}
              onChange={(e) =>
                updateField(index, 'description', e.target.value)
              }
              rows={2}
              className="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 resize-none"
              placeholder={t('resumeBuilder.placeholders.projectDescription')}
            />
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 ml-1">
                {t('resumeBuilder.sections.features')}
              </span>
              {proj.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex gap-2 items-center">
                  <span className="text-slate-300 dark:text-slate-600 text-xs">
                    &bull;
                  </span>
                  <input
                    type="text"
                    value={feat}
                    onChange={(e) =>
                      updateFeature(index, fIdx, e.target.value)
                    }
                    className={smallInputClass}
                    placeholder={t('resumeBuilder.placeholders.feature')}
                  />
                  {proj.features.length > 1 && (
                    <RemoveButton
                      onClick={() => removeFeature(index, fIdx)}
                    />
                  )}
                </div>
              ))}
              <AddButton
                onClick={() => addFeature(index)}
                label={t('resumeBuilder.actions.addFeature')}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <AddButton
        onClick={addProject}
        label={t('resumeBuilder.actions.addProject')}
      />
    </div>
  );
}
