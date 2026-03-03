'use client';

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi';

export default function PreviewSidebar({ resume }) {
  const { contact, skills, interests, photo } = resume;

  const contactItems = [
    { icon: <FiMail />, value: contact.email },
    { icon: <FiPhone />, value: contact.phone },
    { icon: <FiMapPin />, value: contact.location },
    { icon: <FiGlobe />, value: contact.portfolio },
    { icon: <FiLinkedin />, value: contact.linkedin },
    { icon: <FiGithub />, value: contact.github },
  ].filter((item) => item.value);

  return (
    <div
      className="w-[35%] min-h-full flex flex-col"
      style={{ background: '#0f172a' }}
    >
      {/* Profile photo area */}
      <div
        className="flex flex-col items-center pt-8 pb-5 px-5"
        style={{ background: '#1a2742' }}
      >
        {photo ? (
          <img
            src={photo}
            alt=""
            className="w-[80px] h-[80px] rounded-full object-cover mb-3"
            style={{ border: '3px solid #334155' }}
          />
        ) : (
          <div
            className="w-[80px] h-[80px] rounded-full mb-3 flex items-center justify-center"
            style={{
              background: '#1e293b',
              border: '3px solid #334155',
            }}
          >
            <span
              className="font-bold"
              style={{ fontSize: '24px', color: '#64748b' }}
            >
              {contact.name
                ? contact.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)
                : '?'}
            </span>
          </div>
        )}
        {contact.name && (
          <div
            className="text-white font-bold text-center leading-tight"
            style={{ fontSize: '13px' }}
          >
            {contact.name}
          </div>
        )}
        {contact.title && (
          <div
            className="text-center mt-0.5"
            style={{ fontSize: '8.5px', color: '#94a3b8' }}
          >
            {contact.title}
          </div>
        )}
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col gap-5">
        {/* Contact */}
        {contactItems.length > 0 && (
          <div>
            <div
              className="font-bold uppercase tracking-[0.12em] pb-1.5 mb-2.5"
              style={{
                fontSize: '9px',
                color: '#60a5fa',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              CONTACT
            </div>
            <div className="flex flex-col gap-2">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className="mt-px shrink-0"
                    style={{ fontSize: '9px', color: '#60a5fa' }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="break-all leading-snug"
                    style={{ fontSize: '7.5px', color: '#cbd5e1' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <div
              className="font-bold uppercase tracking-[0.12em] pb-1.5 mb-2.5"
              style={{
                fontSize: '9px',
                color: '#60a5fa',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              SKILLS
            </div>
            <div className="flex flex-col gap-3">
              {skills.map((cat, i) => (
                <div key={i}>
                  {cat.category && (
                    <div
                      className="font-semibold mb-1"
                      style={{ fontSize: '8px', color: '#e2e8f0' }}
                    >
                      {cat.category}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-[3px]">
                    {cat.items.filter(Boolean).map((skill, j) => (
                      <span
                        key={j}
                        className="rounded-sm px-[5px] py-[2px]"
                        style={{
                          fontSize: '6.5px',
                          color: '#e2e8f0',
                          background: '#162033',
                          border: '1px solid #1e3a5f',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interests */}
        {interests.filter(Boolean).length > 0 && (
          <div>
            <div
              className="font-bold uppercase tracking-[0.12em] pb-1.5 mb-2.5"
              style={{
                fontSize: '9px',
                color: '#60a5fa',
                borderBottom: '1px solid #1e3a5f',
              }}
            >
              INTERESTS
            </div>
            <div className="flex flex-wrap gap-[3px]">
              {interests.filter(Boolean).map((interest, i) => (
                <span
                  key={i}
                  className="rounded-sm px-[5px] py-[2px]"
                  style={{
                    fontSize: '6.5px',
                    color: '#e2e8f0',
                    background: 'rgba(96,165,250,0.15)',
                    border: '1px solid rgba(96,165,250,0.2)',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
