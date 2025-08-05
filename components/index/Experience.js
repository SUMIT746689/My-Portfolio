import React from 'react'
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'
import { motion } from 'framer-motion'

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

  const education = [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Green University of Bangladesh",
      period: "2018 – 2022"
    },
    {
      degree: "Diploma in Marine Engineering",
      institution: "Shyamoli Ideal Polytechnic Institute",
      period: "2013 – 2018"
    }
  ]

  return (
    <div className='py-20 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-4'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-500'>
              Work Experience
            </span>
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
            Professional journey building scalable applications and leading development teams
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='space-y-12 relative'>
          {/* Decorative elements */}
          <div className='absolute -top-10 -left-10 w-32 h-32 rounded-full bg-pink-500/10 dark:bg-pink-400/10 blur-3xl'></div>
          <div className='absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='relative group'
            >
              {/* Timeline line */}
              <div className='absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 to-cyan-500 dark:from-pink-400 dark:to-cyan-400'></div>
              
              {/* Experience card */}
              <div className='relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-black/20 p-6 sm:p-8 ml-16 border-l-4 border-pink-500 dark:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 dark:hover:shadow-cyan-400/10 hover:-translate-y-1'>
                {/* Timeline dot */}
                <div className='absolute -left-20 top-8 w-4 h-4 bg-pink-500 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-125 transition-transform duration-300'></div>
                
                {/* Current badge */}
                {exp.current && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className='absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md'
                  >
                    Current
                  </motion.div>
                )}

                {/* Header */}
                <div className='mb-6'>
                  <h3 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2 group-hover:text-pink-600 dark:group-hover:text-cyan-400 transition-colors'>
                    {exp.title}
                  </h3>
                  <div className='flex flex-wrap gap-4 text-sm sm:text-base text-slate-600 dark:text-slate-400'>
                    <div className='flex items-center gap-2'>
                      <FiBriefcase className='text-pink-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
                      <span className='font-semibold'>{exp.company}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiMapPin className='text-pink-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
                      <span>{exp.location}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiCalendar className='text-pink-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
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
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.05) }}
                        className='flex items-start gap-3 text-slate-700 dark:text-slate-300'
                      >
                        <div className='w-2 h-2 bg-pink-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-500 transition-all'></div>
                        <span className='text-sm sm:text-base leading-relaxed'>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mt-20 relative'
        >
          <div className='absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>
          
          <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-200 mb-8 text-center'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-600'>
              Education
            </span>
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-black/20 p-6 border-l-4 border-cyan-500 dark:border-pink-400 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-pink-400/10 transition-all duration-300 hover:-translate-y-1'
              >
                <h4 className='text-lg font-bold text-slate-900 dark:text-slate-200 mb-2'>
                  {edu.degree}
                </h4>
                <p className='text-cyan-600 dark:text-pink-400 font-semibold mb-1'>
                  {edu.institution}
                </p>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience