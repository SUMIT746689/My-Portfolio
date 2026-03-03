'use client';

// Template 5: Minimal — Clean single-column, navy accent, strong typography
import { filterEmpty, getContactItems } from './templateHelpers';

const accent = '#0f2640';
const accentMedium = '#1a4a7a';
const textDark = '#0a0a1a';
const textBody = '#1f2937';
const textMuted = '#4b5563';

function SectionTitle({ children }) {
  return (
    <div className="mb-1.5">
      <h3 className="font-bold uppercase tracking-[0.18em]" style={{ fontSize: '13px', color: accent, letterSpacing: '0.18em' }}>
        {children}
      </h3>
      <div className="mt-0.5 flex gap-[2px]">
        <div style={{ width: '28px', height: '2px', background: accent }} />
        <div style={{ flex: 1, height: '1px', background: '#9ca3af', marginTop: '0.5px' }} />
      </div>
    </div>
  );
}

export default function MinimalTemplate({ resume }) {
  const { contact, summary, experience, projects, education, skills, interests, sectionOrder } = resume;
  const contactItems = getContactItems(contact);

  const mainSections = {
    contact: null,
    summary: summary ? (
      <div key="summary" className="mb-3">
        <SectionTitle>Professional Summary</SectionTitle>
        <p className="leading-[1.5]" style={{ fontSize: '11px', color: textBody }}>{summary}</p>
      </div>
    ) : null,
    experience: experience.length > 0 ? (
      <div key="experience" className="mb-3">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="flex flex-col gap-2.5">
          {experience.map((exp, i) => (
            <div key={i} className="print-section">
              <div className="flex justify-between items-start">
                <div>
                  {exp.title && <div className="font-bold" style={{ fontSize: '12px', color: textDark }}>{exp.title}</div>}
                  {exp.company && <div className="font-medium" style={{ fontSize: '11px', color: accentMedium }}>{exp.company}</div>}
                </div>
                {exp.period && <div className="shrink-0 ml-3 font-medium" style={{ fontSize: '10px', color: textMuted }}>{exp.period}</div>}
              </div>
              {filterEmpty(exp.responsibilities).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(exp.responsibilities).map((r, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10.5px', color: textBody }}>
                      <span className="shrink-0 mt-[5px] w-[3px] h-[3px] rounded-full" style={{ background: accent }} />
                      <span className="leading-snug">{r}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,
    projects: projects.length > 0 ? (
      <div key="projects" className="mb-3">
        <SectionTitle>Projects</SectionTitle>
        <div className="flex flex-col gap-2">
          {projects.map((p, i) => (
            <div key={i} className="print-section">
              <div className="flex items-baseline gap-2">
                {p.name && <span className="font-bold" style={{ fontSize: '12px', color: textDark }}>{p.name}</span>}
                {p.url && <span className="break-all" style={{ fontSize: '10px', color: accentMedium }}>{p.url}</span>}
              </div>
              {p.description && <p className="mt-0.5 leading-snug" style={{ fontSize: '10.5px', color: textBody }}>{p.description}</p>}
              {filterEmpty(p.features).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(p.features).map((f, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10px', color: textBody }}>
                      <span className="shrink-0 mt-[5px] w-[3px] h-[3px] rounded-full" style={{ background: accent }} />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : null,
    skills: skills.length > 0 ? (
      <div key="skills" className="mb-3">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="flex flex-col gap-2">
          {skills.map((cat, i) => (
            <div key={i} className="print-section flex items-start gap-2">
              {cat.category && (
                <span className="font-bold shrink-0 rounded px-2 py-0.5" style={{ fontSize: '10px', color: '#ffffff', background: accent, minWidth: '65px', textAlign: 'center' }}>
                  {cat.category}
                </span>
              )}
              <span className="leading-snug" style={{ fontSize: '10.5px', color: textDark }}>{filterEmpty(cat.items).join('  \u00B7  ')}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null,
    education: education.length > 0 ? (
      <div key="education" className="mb-3">
        <SectionTitle>Education</SectionTitle>
        <div className="flex flex-col gap-2">
          {education.map((edu, i) => (
            <div key={i} className="print-section flex justify-between items-start">
              <div>
                {edu.degree && <div className="font-bold" style={{ fontSize: '12px', color: textDark }}>{edu.degree}</div>}
                {edu.institution && <div className="font-medium" style={{ fontSize: '11px', color: accentMedium }}>{edu.institution}</div>}
              </div>
              {edu.period && <div className="shrink-0 ml-3 font-medium" style={{ fontSize: '10px', color: textMuted }}>{edu.period}</div>}
            </div>
          ))}
        </div>
      </div>
    ) : null,
    interests: filterEmpty(interests).length > 0 ? (
      <div key="interests" className="mb-3">
        <SectionTitle>Interests</SectionTitle>
        <div className="flex flex-wrap gap-1">
          {filterEmpty(interests).map((int, i) => (
            <span key={i} className="rounded px-2.5 py-1" style={{ fontSize: '10px', color: '#ffffff', background: accent, border: '1px solid #0a1c30' }}>
              {int}
            </span>
          ))}
        </div>
      </div>
    ) : null,
  };

  return (
    <div className="flex flex-col w-full h-full px-10 py-5" style={{ background: '#ffffff' }}>
      {/* Header */}
      <div className="text-center mb-4 pb-3" style={{ borderBottom: `3px solid ${accent}` }}>
        {contact.name && (
          <div className="font-bold uppercase tracking-[0.2em]" style={{ fontSize: '28px', color: accent }}>
            {contact.name}
          </div>
        )}
        {contact.title && (
          <div className="mt-1 font-medium uppercase tracking-[0.12em]" style={{ fontSize: '13px', color: textMuted }}>
            {contact.title}
          </div>
        )}
        {contactItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 mt-3">
            {contactItems.map((item, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mr-2" style={{ color: accent, fontSize: '10px' }}> | </span>}
                <span className="break-all font-medium" style={{ fontSize: '10px', color: textBody }}>{item.value}</span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Sections */}
      {sectionOrder.map((id) => mainSections[id])}
    </div>
  );
}
