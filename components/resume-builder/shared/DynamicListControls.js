'use client';

import { FiPlus, FiTrash2 } from 'react-icons/fi';

export function AddButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 bg-blue-50 dark:bg-cyan-950/40 hover:bg-blue-100 dark:hover:bg-cyan-900/50 px-3 py-1.5 rounded-lg border border-blue-200/60 dark:border-cyan-800/50 transition-all duration-150"
    >
      <FiPlus className="text-base" />
      {label}
    </button>
  );
}

export function RemoveButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1.5 text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-all duration-150"
      title="Remove"
    >
      <FiTrash2 className="text-sm" />
    </button>
  );
}
