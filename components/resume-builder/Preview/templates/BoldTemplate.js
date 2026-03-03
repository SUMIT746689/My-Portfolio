'use client';

// Template 4: Bold — Large colorful header block, single column layout
import { getInitials, filterEmpty, getContactItems } from './templateHelpers';

const accent = '#7c3aed';
const accentLight = '#ede9fe';
const headerBg = '#4c1d95';

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <div className="rounded-full" style={{ width: '6px', height: '6px', background: accent }} />
      <h3 className="font-extrabold uppercase tracking-[0.08em]" style={{ fontSize: '13px', color: '#1e1b4b' }}>{children}</h3>
      <div className="flex-1" style={{ height: '1px', background: '#e5e7eb' }} />
    </div>
  );
}

export default function BoldTemplate({ resume }) {
  const { contact, summary, experience, projects, education, skills, interests, photo, sectionOrder } = resume;
  const contactItems = getContactItems(contact);

  const mainSections = {
    contact: null,
    skills: null,
    interests: null,
    summary: summary ? (
      <div key="summary" className="mb-3">
        <SectionTitle>About Me</SectionTitle>
        <p className="leading-[1.5]" style={{ fontSize: '11px', color: '#4b5563' }}>{summary}</p>
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
                  {exp.title && <div className="font-extrabold" style={{ fontSize: '12px', color: '#1e1b4b' }}>{exp.title}</div>}
                  {exp.company && <div className="font-medium" style={{ fontSize: '11px', color: accent }}>{exp.company}</div>}
                </div>
                {exp.period && <div className="shrink-0 ml-2 rounded-full px-2.5 py-0.5" style={{ fontSize: '10px', color: '#ffffff', background: accent }}>{exp.period}</div>}
              </div>
              {filterEmpty(exp.responsibilities).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(exp.responsibilities).map((r, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10.5px', color: '#4b5563' }}>
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
                {p.name && <span className="font-extrabold" style={{ fontSize: '12px', color: '#1e1b4b' }}>{p.name}</span>}
                {p.url && <span className="break-all" style={{ fontSize: '10px', color: accent }}>{p.url}</span>}
              </div>
              {p.description && <p className="mt-0.5 leading-snug" style={{ fontSize: '10.5px', color: '#4b5563' }}>{p.description}</p>}
              {filterEmpty(p.features).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(p.features).map((f, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10px', color: '#6b7280' }}>
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
                {edu.degree && <div className="font-extrabold" style={{ fontSize: '12px', color: '#1e1b4b' }}>{edu.degree}</div>}
                {edu.institution && <div className="font-medium" style={{ fontSize: '11px', color: accent }}>{edu.institution}</div>}
              </div>
              {edu.period && <div className="shrink-0 ml-2" style={{ fontSize: '10px', color: '#9ca3af' }}>{edu.period}</div>}
            </div>
          ))}
        </div>
      </div>
    ) : null,
  };

  return (
    <div className="flex flex-col w-full h-full" style={{ background: '#ffffff' }}>
      {/* Header */}
      <div className="px-8 pt-7 pb-5" style={{ background: headerBg }}>
        <div className="flex items-center gap-5">
          {photo ? (
            <img src={photo} alt="" className="w-[80px] h-[80px] rounded-2xl object-cover shrink-0" style={{ border: '3px solid #8b5cf6' }} />
          ) : contact.name ? (
            <div className="w-[80px] h-[80px] rounded-2xl shrink-0 flex items-center justify-center" style={{ background: '#3b0764', border: '3px solid #8b5cf6' }}>
              <span className="font-extrabold" style={{ fontSize: '28px', color: '#c4b5fd' }}>{getInitials(contact.name)}</span>
            </div>
          ) : null}
          <div>
            {contact.name && <div className="font-extrabold leading-tight" style={{ fontSize: '26px', color: '#ffffff' }}>{contact.name}</div>}
            {contact.title && <div className="font-medium mt-0.5" style={{ fontSize: '13px', color: '#c4b5fd' }}>{contact.title}</div>}
          </div>
        </div>
        {contactItems.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 pt-3" style={{ borderTop: '1px solid #6d28d9' }}>
            {contactItems.map((item, i) => (
              <span key={i} className="break-all" style={{ fontSize: '10px', color: '#ddd6fe' }}>{item.value}</span>
            ))}
          </div>
        )}
      </div>

      {/* Body: two columns */}
      <div className="flex flex-1 gap-5 px-8 pt-5">
        <div className="flex-1">
          {sectionOrder.map((id) => mainSections[id])}
        </div>
        {/* Skills sidebar */}
        <div className="w-[26%] flex flex-col gap-4">
          {skills.length > 0 && (
            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="flex flex-col gap-2.5">
                {skills.map((cat, i) => (
                  <div key={i}>
                    {cat.category && <div className="font-bold mb-0.5" style={{ fontSize: '11px', color: '#1e1b4b' }}>{cat.category}</div>}
                    <div className="flex flex-wrap gap-1">
                      {filterEmpty(cat.items).map((s, j) => (
                        <span key={j} className="rounded px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#4c1d95', background: accentLight }}>{s}</span>
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
                  <span key={i} className="rounded px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#4c1d95', background: accentLight }}>{int}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
