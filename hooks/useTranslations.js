import { useTranslations as useNextIntlTranslations, useLocale } from 'next-intl';

export function useTranslations() {
  const locale = useLocale();
  const translations = useNextIntlTranslations();

  const t = (key) => {
    return translations(key);
  };

  return { t, locale };
}
