'use client';

import {
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi';
import { useTranslations } from '../../../../hooks/useTranslations';

const fields = [
  { key: 'name', type: 'text', icon: FiUser },
  { key: 'title', type: 'text', icon: FiBriefcase },
  { key: 'email', type: 'email', icon: FiMail },
  { key: 'phone', type: 'tel', icon: FiPhone },
  { key: 'location', type: 'text', icon: FiMapPin },
  { key: 'portfolio', type: 'url', icon: FiGlobe },
  { key: 'linkedin', type: 'url', icon: FiLinkedin },
  { key: 'github', type: 'url', icon: FiGithub },
];

const inputClass =
  'w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-cyan-400/30 focus:border-blue-400 dark:focus:border-cyan-500 outline-none transition-all duration-200 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500';

export default function ContactEditor({ contact, updateContact }) {
  const { t } = useTranslations();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {fields.map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.key} className="relative">
            <label className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
              {t(`resumeBuilder.fields.${field.key}`)}
            </label>
            <div className="relative">
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm" />
              <input
                type={field.type}
                value={contact[field.key]}
                onChange={(e) => updateContact(field.key, e.target.value)}
                className={inputClass}
                placeholder={t(`resumeBuilder.placeholders.${field.key}`)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
