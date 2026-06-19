'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { MdLanguage } from 'react-icons/md';

function LanguageSwitcherMobile({ showLanguageMenu, setShowLanguageMenu }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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
      onClick={() => setShowLanguageMenu((v) => !v)}
      className="flex items-center p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 relative"
    >
      <MdLanguage className="mr-2" />
      <span>Language</span>
      {showLanguageMenu && (
        <div className="absolute bottom-full left-4 right-4 mb-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 z-50">
          <div
            onClick={() => handleLanguageChange('en')}
            className={`flex items-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded ${
              locale === 'en' ? 'bg-blue-50 dark:bg-slate-600' : ''
            }`}
          >
            {languages.en}
          </div>
          <div
            onClick={() => handleLanguageChange('bn')}
            className={`flex items-center p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded ${
              locale === 'bn' ? 'bg-blue-50 dark:bg-slate-600' : ''
            }`}
          >
            {languages.bn}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcherMobile;
