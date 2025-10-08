'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme'));

    const applyTheme = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (['light'].includes(theme)) {
      applyTheme(false);
    } else if (['dark'].includes(theme)) {
      applyTheme(true);
    } else if (typeof window !== 'undefined') {
      // System preference
      applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  return <>{children}</>;
}
