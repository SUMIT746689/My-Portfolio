'use client';

import { forwardRef } from 'react';
import ClassicTemplate from './templates/ClassicTemplate';
import ModernTemplate from './templates/ModernTemplate';
import ElegantTemplate from './templates/ElegantTemplate';
import BoldTemplate from './templates/BoldTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

const templates = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  elegant: ElegantTemplate,
  bold: BoldTemplate,
  minimal: MinimalTemplate,
};

const ResumePreview = forwardRef(function ResumePreview(
  { resume, template = 'classic' },
  ref
) {
  const TemplateComponent = templates[template] || ClassicTemplate;

  return (
    <div
      ref={ref}
      style={{
        width: '794px',
        minHeight: '1123px',
        fontFamily:
          "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        background: '#ffffff',
        boxShadow: '0 4px 24px 0 #00000022',
        borderRadius: '4px',
      }}
    >
      <TemplateComponent resume={resume} />
    </div>
  );
});

export default ResumePreview;
