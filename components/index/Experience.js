import React from 'react'
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'

function Experience() {
  const experiences = [
    {
      title: "Software Engineer (Team Lead)",
      company: "V2 Technologies Limited",
      location: "Dhaka, Bangladesh",
      period: "Nov 2024 – Present",
      responsibilities: [
        "Leading backend development for an ECRM web application using Express.js, NestJS, and Go standard library",
        "Developing frontend features for a photo gallery sharing platform using React and Next.js",
        "Implemented server-side rendering (SSR), static site generation (SSG), incremental static regeneration (ISR), and Server Actions in Next.js",
        "Applied advanced MySQL concepts including views, transactions, stored procedures, and triggers",
        "Troubleshoot production issues and collaborate with product managers to refine requirements"
      ],
      current: true
    },
    {
      title: "Software Engineer",
      company: "Elitbuzz Technologies Limited",
      location: "Dhaka, Bangladesh",
      period: "Aug 2022 – Nov 2024",
      responsibilities: [
        "Developed and maintained a SAAS-based multi-vendor school management system using Next.js, Prisma, and MySQL",
        "Upgraded an e-commerce platform from Next.js v13 to v14, improving build time and runtime performance by 3–4x",
        "Optimized API response times through query optimization and caching strategies",
        "Designed and implemented database schemas for school management, SMS, and e-commerce systems",
        "Built a dynamic website generator allowing individual schools to have custom domains and branding",
        "Integrated text-to-speech functionality using Python scripts executed via Node.js backend",
        "Developed a static and dynamic SMS system supporting both text and voice message delivery",
        "Containerized applications using Docker and deployed images to cloud environments"
      ],
      current: false
    }
  ]

  return (
    <div className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4'>
            Work Experience
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
            Professional journey building scalable applications and leading development teams
          </p>
        </div>

        <div className='space-y-12'>
          {experiences.map((exp, index) => (
            <div key={index} className='relative'>
              {/* Timeline line */}
              <div className='absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-sky-500 dark:from-pink-400 dark:to-sky-400'></div>
              
              {/* Experience card */}
              <div className='relative bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-black/20 p-6 sm:p-8 ml-16 border-l-4 border-pink-500 dark:border-sky-400'>
                {/* Timeline dot */}
                <div className='absolute -left-20 top-8 w-4 h-4 bg-pink-500 dark:bg-sky-400 rounded-full border-4 border-white dark:border-slate-800'></div>
                
                {/* Current badge */}
                {exp.current && (
                  <div className='absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full'>
                    Current
                  </div>
                )}

                {/* Header */}
                <div className='mb-6'>
                  <h3 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2'>
                    {exp.title}
                  </h3>
                  <div className='flex flex-wrap gap-4 text-sm sm:text-base text-slate-600 dark:text-slate-400'>
                    <div className='flex items-center gap-2'>
                      <FiBriefcase className='text-pink-500 dark:text-sky-400' />
                      <span className='font-semibold'>{exp.company}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiMapPin className='text-pink-500 dark:text-sky-400' />
                      <span>{exp.location}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiCalendar className='text-pink-500 dark:text-sky-400' />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className='text-lg font-semibold text-slate-900 dark:text-slate-200 mb-4'>
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className='space-y-3'>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className='flex items-start gap-3 text-slate-700 dark:text-slate-300'>
                        <div className='w-2 h-2 bg-pink-500 dark:bg-sky-400 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-sm sm:text-base leading-relaxed'>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className='mt-20'>
          <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-200 mb-8 text-center'>
            Education
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-black/20 p-6 border-l-4 border-sky-500 dark:border-pink-400'>
              <h4 className='text-lg font-bold text-slate-900 dark:text-slate-200 mb-2'>
                B.Sc. in Computer Science and Engineering
              </h4>
              <p className='text-pink-600 dark:text-sky-400 font-semibold mb-1'>
                Green University of Bangladesh
              </p>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                2018 – 2022
              </p>
            </div>
            <div className='bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-black/20 p-6 border-l-4 border-sky-500 dark:border-pink-400'>
              <h4 className='text-lg font-bold text-slate-900 dark:text-slate-200 mb-2'>
                Diploma in Marine Engineering
              </h4>
              <p className='text-pink-600 dark:text-sky-400 font-semibold mb-1'>
                Shyamoli Ideal Polytechnic Institute
              </p>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                2013 – 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience