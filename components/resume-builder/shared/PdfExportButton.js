'use client';

import { useState } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslations } from '../../../hooks/useTranslations';

export default function PdfExportButton({ previewRef }) {
  const { t } = useTranslations();
  const [exporting, setExporting] = useState(false);

  const handlePrint = async () => {
    if (exporting || !previewRef?.current) return;
    setExporting(true);

    try {
      // Clone the preview DOM
      const previewElement = previewRef.current;
      const clonedElement = previewElement.cloneNode(true);

      // Collect all stylesheets from the current page (Tailwind etc.)
      const styleSheets = Array.from(document.styleSheets);
      let cssText = '';
      for (const sheet of styleSheets) {
        try {
          const rules = Array.from(sheet.cssRules || []);
          cssText += rules.map((r) => r.cssText).join('\n');
        } catch {
          // Cross-origin sheets can't be read — skip them
        }
      }

      const printHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Resume</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <style>
    ${cssText}

    @page {
      size: A4;
      margin: 20mm 0 10mm 0;
    }

    @page :first {
      margin-top: 0;
    }

    @media print {
      html, body {
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      .resume-root {
        width: 100%;
        height: auto;
        overflow: visible;
      }

      /* Prevent individual entries from splitting across pages */
      .print-section {
        break-inside: avoid;
      }

      /* Keep section headings with their content */
      h3 {
        break-after: avoid;
      }

      /* Ensure images don't split */
      img {
        break-inside: avoid;
      }
    }

    html, body {
      margin: 0;
      padding: 0;
    }

    .resume-root {
      width: 794px;
      min-height: 1123px;
      font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #ffffff;
    }
  </style>
</head>
<body>
  <div class="resume-root">${clonedElement.innerHTML}</div>
  <script>
    // Wait for fonts to load, then trigger print
    document.fonts.ready.then(function() {
      window.print();
    }).catch(function() {
      // Fallback if fonts.ready is not supported
      window.print();
    });
  </script>
</body>
</html>`;

      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(printHtml);
        printWindow.document.close();
      }
    } catch (err) {
      console.error('Print failed:', err);
    } finally {
      setExporting(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handlePrint}
      disabled={exporting}
      className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 disabled:opacity-50 shadow-md hover:shadow-lg"
      style={{
        background: exporting
          ? '#94a3b8'
          : 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
      }}
    >
      <FiPrinter className={exporting ? 'animate-bounce' : ''} />
      {exporting
        ? t('resumeBuilder.exporting')
        : t('resumeBuilder.print')}
    </motion.button>
  );
}
