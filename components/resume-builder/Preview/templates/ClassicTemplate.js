'use client';

// Template 1: Classic — Dark sidebar + white main area
import { getInitials, filterEmpty, getContactItems } from './templateHelpers';

function SidebarSection({ title, children }) {
  return (
    <div>
      <div
        className="font-bold uppercase tracking-[0.12em] pb-1.5 mb-2.5"
        style={{ fontSize: '12px', color: '#60a5fa', borderBottom: '1px solid #1e3a5f' }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function MainSection({ title, accent, children }) {
  return (
    <div className="mb-3">
      <div className="mb-1.5">
        <h3 className="font-bold uppercase tracking-widest" style={{ fontSize: '13px', color: accent }}>
          {title}
        </h3>
        <div className="mt-0.5" style={{ height: '1.5px', background: accent, opacity: 0.35 }} />
      </div>
      {children}
    </div>
  );
}

export default function ClassicTemplate({ resume }) {
  const { contact, summary, experience, projects, education, skills, interests, photo, sectionOrder } = resume;
  const accent = '#2563eb';
  const contactItems = getContactItems(contact);

  const mainSections = {
    contact: null,
    skills: null,
    interests: null,
    summary: summary ? (
      <MainSection key="summary" title="Professional Summary" accent={accent}>
        <p className="leading-[1.5]" style={{ fontSize: '11px', color: '#475569' }}>{summary}</p>
      </MainSection>
    ) : null,
    experience: experience.length > 0 ? (
      <MainSection key="experience" title="Work Experience" accent={accent}>
        <div className="flex flex-col gap-2.5">
          {experience.map((exp, i) => (
            <div key={i} className="print-section">
              <div className="flex justify-between items-start">
                <div>
                  {exp.title && <div className="font-bold" style={{ fontSize: '12px', color: '#1e293b' }}>{exp.title}</div>}
                  {exp.company && <div className="italic" style={{ fontSize: '11px', color: '#64748b' }}>{exp.company}</div>}
                </div>
                {exp.period && <div className="shrink-0 ml-3 rounded px-2 py-0.5" style={{ fontSize: '10px', color: accent, background: '#eff6ff' }}>{exp.period}</div>}
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
      </MainSection>
    ) : null,
    projects: projects.length > 0 ? (
      <MainSection key="projects" title="Projects" accent={accent}>
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
                    <li key={j} className="flex items-start gap-1.5" style={{ fontSize: '10.5px', color: '#475569' }}>
                      <span className="shrink-0 mt-[5px] w-[3px] h-[3px] rounded-full" style={{ background: accent }} />
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </MainSection>
    ) : null,
    education: education.length > 0 ? (
      <MainSection key="education" title="Education" accent={accent}>
        <div className="flex flex-col gap-2">
          {education.map((edu, i) => (
            <div key={i} className="print-section flex justify-between items-start">
              <div>
                {edu.degree && <div className="font-bold" style={{ fontSize: '12px', color: '#1e293b' }}>{edu.degree}</div>}
                {edu.institution && <div className="italic" style={{ fontSize: '11px', color: '#64748b' }}>{edu.institution}</div>}
              </div>
              {edu.period && <div className="shrink-0 ml-3 rounded px-2 py-0.5" style={{ fontSize: '10px', color: accent, background: '#eff6ff' }}>{edu.period}</div>}
            </div>
          ))}
        </div>
      </MainSection>
    ) : null,
  };

  return (
    <div className="flex w-full h-full">
      {/* Sidebar */}
      <div className="w-[35%] min-h-full flex flex-col" style={{ background: '#0f172a' }}>
        <div className="flex flex-col items-center pt-8 pb-5 px-5" style={{ background: '#1a2742' }}>
          {photo ? (
            <img src={photo} alt="" className="w-[90px] h-[90px] rounded-full object-cover mb-3" style={{ border: '3px solid #334155' }} />
          ) : (
            <div className="w-[90px] h-[90px] rounded-full mb-3 flex items-center justify-center" style={{ background: '#1e293b', border: '3px solid #334155' }}>
              <span className="font-bold" style={{ fontSize: '28px', color: '#64748b' }}>{getInitials(contact.name)}</span>
            </div>
          )}
          {contact.name && <div className="text-white font-bold text-center leading-tight" style={{ fontSize: '17px' }}>{contact.name}</div>}
          {contact.title && <div className="text-center mt-0.5" style={{ fontSize: '11.5px', color: '#94a3b8' }}>{contact.title}</div>}
        </div>
        <div className="flex-1 px-5 py-4 flex flex-col gap-5">
          {contactItems.length > 0 && (
            <SidebarSection title="CONTACT">
              <div className="flex flex-col gap-2">
                {contactItems.map((item, i) => (
                  <div key={i} className="break-all leading-snug" style={{ fontSize: '10.5px', color: '#cbd5e1' }}>{item.value}</div>
                ))}
              </div>
            </SidebarSection>
          )}
          {skills.length > 0 && (
            <SidebarSection title="SKILLS">
              <div className="flex flex-col gap-3">
                {skills.map((cat, i) => (
                  <div key={i}>
                    {cat.category && <div className="font-semibold mb-1" style={{ fontSize: '11px', color: '#e2e8f0' }}>{cat.category}</div>}
                    <div className="flex flex-wrap gap-1">
                      {filterEmpty(cat.items).map((s, j) => (
                        <span key={j} className="rounded-sm px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#e2e8f0', background: '#162033', border: '1px solid #1e3a5f' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SidebarSection>
          )}
          {filterEmpty(interests).length > 0 && (
            <SidebarSection title="INTERESTS">
              <div className="flex flex-wrap gap-1">
                {filterEmpty(interests).map((int, i) => (
                  <span key={i} className="rounded-sm px-1.5 py-[3px]" style={{ fontSize: '10px', color: '#e2e8f0', background: '#162033', border: '1px solid #1e3a5f' }}>{int}</span>
                ))}
              </div>
            </SidebarSection>
          )}
        </div>
      </div>
      {/* Main */}
      <div className="w-[65%] p-6 flex flex-col">
        {sectionOrder.map((id) => mainSections[id])}
      </div>
    </div>
  );
}
