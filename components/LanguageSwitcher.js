'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLanguageMenu(false);
      }
    };
    if (showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLanguageMenu]);

  const handleLanguageChange = (newLocale) => {
    // Remove current locale from pathname and add new locale
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath}`);
    setShowLanguageMenu(false);
  };

  const languages = {
    en: 'English',
    bn: 'বাংলা'
  };

  return (
    <div
      ref={menuRef}
      className="relative group p-2 mr-2 md:mx-2 my-1 cursor-pointer rounded-full shadow transition-all duration-200 bg-white/90 dark:bg-gray-800/90 text-blue-900 dark:text-cyan-300 shadow-gray-900/10 dark:shadow-gray-600/10 hover:shadow-blue-700/30 hover:scale-[1.03]"
      onClick={() => setShowLanguageMenu((v) => !v)}
    >
      <div className="flex items-center justify-center">
        <MdLanguage />
      </div>
      <span className="absolute left-full ml-2 px-2 py-1 text-xs font-normal rounded bg-white/90 dark:bg-gray-800/90 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
        Language
      </span>
      <div
        className={`${
          showLanguageMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        } bg-white dark:bg-gray-800 text-xs text-slate-900 dark:text-slate-300 z-50 absolute top-12 md:top-0 right-0 md:left-12 w-28 rounded-lg overflow-hidden shadow transition-all duration-150 origin-top`}
      >
        <div
          onClick={() => handleLanguageChange('en')}
          className={`flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer px-3 py-1.5 font-medium transition-colors duration-150 ${
            locale === 'en' ? 'bg-blue-50 dark:bg-gray-700' : ''
          }`}
        >
          {languages.en}
        </div>
        <div
          onClick={() => handleLanguageChange('bn')}
          className={`flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer px-3 py-1.5 font-medium transition-colors duration-150 ${
            locale === 'bn' ? 'bg-blue-50 dark:bg-gray-700' : ''
          }`}
        >
          {languages.bn}
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
