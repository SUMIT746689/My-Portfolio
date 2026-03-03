'use client';

import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export default function SectionHeader({ title, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex items-center justify-between w-full text-left"
    >
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
        {title}
      </span>
      {isOpen ? (
        <FiChevronDown className="text-slate-500 dark:text-slate-400" />
      ) : (
        <FiChevronRight className="text-slate-500 dark:text-slate-400" />
      )}
    </button>
  );
}
