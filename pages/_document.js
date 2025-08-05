// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    var parsedTheme = JSON.parse(theme);
                    if (['light'].includes(parsedTheme)) {
                      document.documentElement.classList.remove('dark');
                      return;
                    }
                    if (['dark'].includes(parsedTheme)) {
                      document.documentElement.classList.add('dark');
                      return;
                    }
                  }
                  
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}