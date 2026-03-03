'use client';

const accentColor = '#2563eb';

function SectionTitle({ children }) {
  return (
    <div className="mb-2">
      <h3
        className="font-bold uppercase tracking-widest"
        style={{ fontSize: '10px', color: accentColor }}
      >
        {children}
      </h3>
      <div
        className="mt-1"
        style={{
          height: '1.5px',
          background: accentColor,
          opacity: 0.4,
        }}
      />
    </div>
  );
}

export default function PreviewMain({ resume }) {
  const { contact, summary, experience, projects, education, sectionOrder } =
    resume;

  const mainSections = {
    contact: null,
    summary: summary ? (
      <div key="summary" className="mb-3">
        <SectionTitle>Professional Summary</SectionTitle>
        <p
          className="leading-[1.6]"
          style={{ fontSize: '8px', color: '#475569' }}
        >
          {summary}
        </p>
      </div>
    ) : null,
    experience:
      experience.length > 0 ? (
        <div key="experience" className="mb-3">
          <SectionTitle>Work Experience</SectionTitle>
          <div className="flex flex-col gap-3">
            {experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-start">
                  <div>
                    {exp.title && (
                      <div
                        className="font-bold"
                        style={{ fontSize: '9px', color: '#1e293b' }}
                      >
                        {exp.title}
                      </div>
                    )}
                    {exp.company && (
                      <div
                        className="italic"
                        style={{ fontSize: '8px', color: '#64748b' }}
                      >
                        {exp.company}
                      </div>
                    )}
                  </div>
                  {exp.period && (
                    <div
                      className="shrink-0 ml-3 rounded px-1.5 py-0.5"
                      style={{
                        fontSize: '7px',
                        color: accentColor,
                        background: '#eff6ff',
                      }}
                    >
                      {exp.period}
                    </div>
                  )}
                </div>
                {exp.responsibilities.filter(Boolean).length > 0 && (
                  <ul className="mt-1 flex flex-col gap-0.5">
                    {exp.responsibilities.filter(Boolean).map((resp, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-1.5"
                        style={{ fontSize: '7.5px', color: '#475569' }}
                      >
                        <span
                          className="shrink-0 mt-0.75 w-0.75 h-0.75 rounded-full"
                          style={{ background: accentColor }}
                        />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null,
    projects:
      projects.length > 0 ? (
        <div key="projects" className="mb-3">
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-col gap-2.5">
            {projects.map((proj, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-2">
                  {proj.name && (
                    <span
                      className="font-bold"
                      style={{ fontSize: '9px', color: '#1e293b' }}
                    >
                      {proj.name}
                    </span>
                  )}
                  {proj.url && (
                    <span
                      className="break-all"
                      style={{ fontSize: '7px', color: accentColor }}
                    >
                      {proj.url}
                    </span>
                  )}
                </div>
                {proj.description && (
                  <p
                    className="mt-0.5 leading-snug"
                    style={{ fontSize: '7.5px', color: '#475569' }}
                  >
                    {proj.description}
                  </p>
                )}
                {proj.features.filter(Boolean).length > 0 && (
                  <ul className="mt-1 flex flex-col gap-0.5">
                    {proj.features.filter(Boolean).map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-1.5"
                        style={{ fontSize: '7.5px', color: '#475569' }}
                      >
                        <span
                          className="shrink-0 mt-0.75 w-0.75 h-0.75 rounded-full"
                          style={{ background: accentColor }}
                        />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null,
    education:
      education.length > 0 ? (
        <div key="education" className="mb-3">
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col gap-2">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  {edu.degree && (
                    <div
                      className="font-bold"
                      style={{ fontSize: '9px', color: '#1e293b' }}
                    >
                      {edu.degree}
                    </div>
                  )}
                  {edu.institution && (
                    <div
                      className="italic"
                      style={{ fontSize: '8px', color: '#64748b' }}
                    >
                      {edu.institution}
                    </div>
                  )}
                </div>
                {edu.period && (
                  <div
                    className="shrink-0 ml-3 rounded px-1.5 py-0.5"
                    style={{
                      fontSize: '7px',
                      color: accentColor,
                      background: '#eff6ff',
                    }}
                  >
                    {edu.period}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null,
    skills: null,
    interests: null,
  };

  return (
    <div className="w-[65%] p-6 flex flex-col">
      {/* Header area - no name/title here since sidebar has it */}
      {/* If there's no photo, show name at top of main */}
      {!resume.photo && contact.name && (
        <div className="mb-4 pb-3" style={{ borderBottom: `2px solid ${accentColor}` }}>
          <h1
            className="font-bold leading-tight"
            style={{ fontSize: '20px', color: '#0f172a' }}
          >
            {contact.name}
          </h1>
          {contact.title && (
            <h2
              className="font-medium mt-0.5"
              style={{ fontSize: '10px', color: '#64748b' }}
            >
              {contact.title}
            </h2>
          )}
        </div>
      )}

      {/* Sections in order */}
      {sectionOrder.map((sectionId) => mainSections[sectionId])}
    </div>
  );
}
