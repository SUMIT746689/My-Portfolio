'use client';

// Template 3: Elegant — Warm gray sidebar, serif-inspired, gold accents
import { getInitials, filterEmpty, getContactItems } from './templateHelpers';

const accent = '#92400e';
const sidebarBg = '#faf7f2';
const sidebarBorder = '#e7e0d5';
const tagBg = '#fef3c7';

function SectionTitle({ children }) {
  return (
    <div className="mb-1.5 pb-0.5" style={{ borderBottom: `1px solid #e5e7eb` }}>
      <h3 className="font-bold uppercase tracking-[0.15em]" style={{ fontSize: '12.5px', color: accent }}>{children}</h3>
    </div>
  );
}

export default function ElegantTemplate({ resume }) {
  const { contact, summary, experience, projects, education, skills, interests, photo, sectionOrder } = resume;
  const contactItems = getContactItems(contact);

  const mainSections = {
    contact: null,
    skills: null,
    interests: null,
    summary: summary ? (
      <div key="summary" className="mb-3">
        <SectionTitle>Profile</SectionTitle>
        <p className="leading-[1.5] italic" style={{ fontSize: '11px', color: '#57534e' }}>{summary}</p>
      </div>
    ) : null,
    experience: experience.length > 0 ? (
      <div key="experience" className="mb-3">
        <SectionTitle>Experience</SectionTitle>
        <div className="flex flex-col gap-2.5">
          {experience.map((exp, i) => (
            <div key={i} className="print-section">
              <div className="flex justify-between items-start">
                <div>
                  {exp.title && <div className="font-bold" style={{ fontSize: '12px', color: '#1c1917' }}>{exp.title}</div>}
                  {exp.company && <div className="italic" style={{ fontSize: '10.5px', color: '#78716c' }}>{exp.company}</div>}
                </div>
                {exp.period && <div className="shrink-0 ml-2 italic" style={{ fontSize: '10px', color: '#a8a29e' }}>{exp.period}</div>}
              </div>
              {filterEmpty(exp.responsibilities).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(exp.responsibilities).map((r, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10.5px', color: '#57534e' }}>
                      <span className="shrink-0" style={{ color: accent, fontSize: '10.5px', marginTop: '1px' }}>&mdash;</span>
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
                {p.name && <span className="font-bold" style={{ fontSize: '12px', color: '#1c1917' }}>{p.name}</span>}
                {p.url && <span className="break-all italic" style={{ fontSize: '10px', color: accent }}>{p.url}</span>}
              </div>
              {p.description && <p className="mt-0.5 leading-snug" style={{ fontSize: '10.5px', color: '#57534e' }}>{p.description}</p>}
              {filterEmpty(p.features).length > 0 && (
                <ul className="mt-1 flex flex-col gap-[2px]">
                  {filterEmpty(p.features).map((f, j) => (
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10px', color: '#78716c' }}>
                      <span style={{ color: accent, fontSize: '10px', marginTop: '1px' }}>&mdash;</span>
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
                {edu.degree && <div className="font-bold" style={{ fontSize: '12px', color: '#1c1917' }}>{edu.degree}</div>}
                {edu.institution && <div className="italic" style={{ fontSize: '11px', color: '#78716c' }}>{edu.institution}</div>}
              </div>
              {edu.period && <div className="shrink-0 ml-2 italic" style={{ fontSize: '10px', color: '#a8a29e' }}>{edu.period}</div>}
            </div>
          ))}
        </div>
      </div>
    ) : null,
  };

  return (
    <div className="flex w-full h-full" style={{ background: '#ffffff' }}>
      {/* Sidebar */}
      <div className="w-[33%] min-h-full flex flex-col" style={{ background: sidebarBg, borderRight: `1px solid ${sidebarBorder}` }}>
        <div className="flex flex-col items-center pt-8 pb-5 px-5">
          {photo ? (
            <img src={photo} alt="" className="w-[90px] h-[90px] rounded-full object-cover mb-3" style={{ border: '3px solid #d6d3d1' }} />
          ) : (
            <div className="w-[90px] h-[90px] rounded-full mb-3 flex items-center justify-center" style={{ background: '#f5f0e8', border: '3px solid #d6d3d1' }}>
              <span className="font-bold" style={{ fontSize: '28px', color: '#a8a29e' }}>{getInitials(contact.name)}</span>
            </div>
          )}
          {contact.name && <div className="font-bold text-center leading-tight" style={{ fontSize: '17px', color: '#1c1917' }}>{contact.name}</div>}
          {contact.title && <div className="text-center mt-1 uppercase tracking-[0.15em]" style={{ fontSize: '10.5px', color: accent }}>{contact.title}</div>}
        </div>

        <div className="flex-1 px-5 py-3 flex flex-col gap-5">
          {contactItems.length > 0 && (
            <div>
              <div className="font-bold uppercase tracking-[0.15em] pb-1 mb-2" style={{ fontSize: '11px', color: accent, borderBottom: `1px solid ${sidebarBorder}` }}>Contact</div>
              <div className="flex flex-col gap-1.5">
                {contactItems.map((item, i) => (
                  <div key={i} className="break-all leading-snug" style={{ fontSize: '10.5px', color: '#57534e' }}>{item.value}</div>
                ))}
              </div>
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <div className="font-bold uppercase tracking-[0.15em] pb-1 mb-2" style={{ fontSize: '11px', color: accent, borderBottom: `1px solid ${sidebarBorder}` }}>Skills</div>
              <div className="flex flex-col gap-2.5">
                {skills.map((cat, i) => (
                  <div key={i}>
                    {cat.category && <div className="font-semibold mb-1" style={{ fontSize: '10.5px', color: '#44403c' }}>{cat.category}</div>}
                    <div className="flex flex-wrap gap-1">
                      {filterEmpty(cat.items).map((s, j) => (
                        <span key={j} className="rounded-sm px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#78716c', background: tagBg }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {filterEmpty(interests).length > 0 && (
            <div>
              <div className="font-bold uppercase tracking-[0.15em] pb-1 mb-2" style={{ fontSize: '11px', color: accent, borderBottom: `1px solid ${sidebarBorder}` }}>Interests</div>
              <div className="flex flex-wrap gap-1">
                {filterEmpty(interests).map((int, i) => (
                  <span key={i} className="rounded-sm px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#78716c', background: tagBg }}>{int}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Main */}
      <div className="w-[67%] p-7 flex flex-col">
        {sectionOrder.map((id) => mainSections[id])}
      </div>
    </div>
  );
}
