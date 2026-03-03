'use client';

import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoreVertical, FiChevronDown, FiChevronRight } from 'react-icons/fi';

export default function SortableSectionItem({ id, title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-2xl border transition-shadow duration-200 ${
        isDragging
          ? 'shadow-xl shadow-blue-500/10 dark:shadow-cyan-500/10 ring-2 ring-blue-400/40 dark:ring-cyan-400/40 bg-white dark:bg-slate-800 opacity-95 border-blue-300 dark:border-cyan-600'
          : 'bg-white dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3.5">
        <button
          type="button"
          className="cursor-grab active:cursor-grabbing p-1 rounded-md text-slate-300 hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors touch-none"
          {...attributes}
          {...listeners}
        >
          <FiMoreVertical className="text-lg" />
        </button>
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex-1 flex items-center justify-between text-left group"
        >
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.15 }}
            className="text-slate-400 dark:text-slate-500"
          >
            <FiChevronDown className="text-base" />
          </motion.span>
        </button>
      </div>

      {/* Collapsible content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0.5 border-t border-slate-100 dark:border-slate-700/50">
              <div className="pt-3">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
