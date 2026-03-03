'use client';

import { useRef } from 'react';
import { FiUpload, FiX, FiCamera } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslations } from '../../../../hooks/useTranslations';

export default function PhotoEditor({ photo, updatePhoto }) {
  const { t } = useTranslations();
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      updatePhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center gap-4">
      {photo ? (
        <div className="relative group">
          <img
            src={photo}
            alt="Profile"
            className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-200 dark:border-slate-600 shadow-sm"
          />
          <button
            type="button"
            onClick={() => updatePhoto(null)}
            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
          >
            <FiX className="text-xs" />
          </button>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="absolute inset-0 rounded-2xl bg-black/0 hover:bg-black/30 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <FiCamera className="text-white text-lg" />
          </button>
        </div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={() => inputRef.current?.click()}
          className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 dark:hover:border-cyan-500 hover:bg-blue-50/50 dark:hover:bg-cyan-950/20 transition-all"
        >
          <FiUpload className="text-lg text-slate-400 dark:text-slate-500 mb-1" />
          <span className="text-[10px] text-slate-400 dark:text-slate-500">
            {t('resumeBuilder.actions.uploadPhoto')}
          </span>
        </motion.div>
      )}
      <div className="flex-1">
        {photo && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="text-sm font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors"
          >
            {t('resumeBuilder.actions.changePhoto')}
          </button>
        )}
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          {t('resumeBuilder.photoHint')}
        </p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
