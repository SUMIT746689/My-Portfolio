'use client';

// Template 2: Modern — Teal header banner, two-column body
import { getInitials, filterEmpty, getContactItems } from './templateHelpers';

const accent = '#0d9488';
const accentLight = '#ccfbf1';
const headerBg = '#134e4a';

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <div style={{ width: '16px', height: '2px', background: accent }} />
      <h3 className="font-bold uppercase tracking-[0.1em]" style={{ fontSize: '12.5px', color: accent }}>{children}</h3>
    </div>
  );
}

export default function ModernTemplate({ resume }) {
  const { contact, summary, experience, projects, education, skills, interests, photo, sectionOrder } = resume;
  const contactItems = getContactItems(contact);

  const mainSections = {
    contact: null,
    skills: null,
    interests: null,
    summary: summary ? (
      <div key="summary" className="mb-3">
        <SectionTitle>Summary</SectionTitle>
        <p className="leading-[1.5]" style={{ fontSize: '11px', color: '#475569' }}>{summary}</p>
      </div>
    ) : null,
    experience: experience.length > 0 ? (
      <div key="experience" className="mb-3">
        <SectionTitle>Experience</SectionTitle>
        <div className="flex flex-col gap-2.5">
          {experience.map((exp, i) => (
            <div key={i} className="print-section pl-2.5" style={{ borderLeft: `2px solid ${accentLight}` }}>
              <div className="flex justify-between items-start">
                <div>
                  {exp.title && <div className="font-bold" style={{ fontSize: '12px', color: '#1e293b' }}>{exp.title}</div>}
                  {exp.company && <div style={{ fontSize: '11px', color: '#64748b' }}>{exp.company}</div>}
                </div>
                {exp.period && <div className="shrink-0 ml-2" style={{ fontSize: '10px', color: accent }}>{exp.period}</div>}
              </div>
              {filterEmpty(exp.responsibilities).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(exp.responsibilities).map((r, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10.5px', color: '#475569' }}>
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
                {p.name && <span className="font-bold" style={{ fontSize: '12px', color: '#1e293b' }}>{p.name}</span>}
                {p.url && <span className="break-all" style={{ fontSize: '10px', color: accent }}>{p.url}</span>}
              </div>
              {p.description && <p className="mt-0.5 leading-snug" style={{ fontSize: '10.5px', color: '#475569' }}>{p.description}</p>}
              {filterEmpty(p.features).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(p.features).map((f, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10px', color: '#64748b' }}>
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
    education: education.length > 0 ? (
      <div key="education" className="mb-3">
        <SectionTitle>Education</SectionTitle>
        <div className="flex flex-col gap-2">
          {education.map((edu, i) => (
            <div key={i} className="print-section flex justify-between items-start">
              <div>
                {edu.degree && <div className="font-bold" style={{ fontSize: '12px', color: '#1e293b' }}>{edu.degree}</div>}
                {edu.institution && <div style={{ fontSize: '11px', color: '#64748b' }}>{edu.institution}</div>}
              </div>
              {edu.period && <div className="shrink-0 ml-2" style={{ fontSize: '10px', color: accent }}>{edu.period}</div>}
            </div>
          ))}
        </div>
      </div>
    ) : null,
  };

  return (
    <div className="flex flex-col w-full h-full" style={{ background: '#ffffff' }}>
      {/* Header banner */}
      <div className="flex items-center gap-5 px-7 py-5" style={{ background: headerBg }}>
        {photo ? (
          <img src={photo} alt="" className="w-[80px] h-[80px] rounded-full object-cover shrink-0" style={{ border: '3px solid #2dd4bf' }} />
        ) : contact.name ? (
          <div className="w-[80px] h-[80px] rounded-full shrink-0 flex items-center justify-center" style={{ background: '#0f3a36', border: '3px solid #2dd4bf' }}>
            <span className="font-bold" style={{ fontSize: '26px', color: '#5eead4' }}>{getInitials(contact.name)}</span>
          </div>
        ) : null}
        <div className="flex-1">
          {contact.name && <div className="font-bold leading-tight" style={{ fontSize: '24px', color: '#ffffff' }}>{contact.name}</div>}
          {contact.title && <div className="mt-0.5" style={{ fontSize: '13px', color: '#99f6e4' }}>{contact.title}</div>}
          {contactItems.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              {contactItems.map((item, i) => (
                <span key={i} className="break-all" style={{ fontSize: '10px', color: '#a7f3d0' }}>{item.value}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Body: two columns */}
      <div className="flex flex-1 px-7 pt-4 gap-5">
        {/* Main column */}
        <div className="flex-1">
          {sectionOrder.map((id) => mainSections[id])}
        </div>
        {/* Side column */}
        <div className="w-[28%] flex flex-col gap-4">
          {skills.length > 0 && (
            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="flex flex-col gap-2.5">
                {skills.map((cat, i) => (
                  <div key={i}>
                    {cat.category && <div className="font-semibold mb-0.5" style={{ fontSize: '11px', color: '#334155' }}>{cat.category}</div>}
                    <div className="flex flex-wrap gap-1">
                      {filterEmpty(cat.items).map((s, j) => (
                        <span key={j} className="rounded px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#134e4a', background: accentLight }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {filterEmpty(interests).length > 0 && (
            <div>
              <SectionTitle>Interests</SectionTitle>
              <div className="flex flex-wrap gap-1">
                {filterEmpty(interests).map((int, i) => (
                  <span key={i} className="rounded px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#134e4a', background: accentLight }}>{int}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
