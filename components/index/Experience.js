'use client';

import React from 'react'
import { FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTranslations } from '../../hooks/useTranslations'

function Experience() {
  const { t } = useTranslations();
  const experiences = [
    {
      title: "Senior Software Engineer (Team Lead)",
      company: "V2 Technologies Limited",
      location: "Dhaka, Bangladesh",
      period: "Nov 2024 – Present",
      responsibilities: [
        "Leading backend development of a microservices-based ECRM for GrameenPhone — independent auth and campaign services built with Express.js, NestJS, and Go",
        "Architected inter-service communication using Redis, BullMQ and AWS SQS job queues, and Socket.io for real-time updates",
        "Designed PostgreSQL schemas and applied advanced concepts (transactions, views, stored procedures, triggers) for data integrity",
        "Built frontend features for the Neodesk photo-gallery platform with React and Next.js (SSR, SSG, ISR, Server Actions)",
        "Integrated BigQuery campaign analytics with scheduled jobs, plus Sentry and Winston for monitoring and logging",
        "Set up CI/CD pipelines with Jenkins and containerized services using Docker and Podman behind NGINX",
        "Leading a development team, troubleshooting production issues, and collaborating with product managers to refine requirements"
      ],
      current: true
    },
    {
      title: "Software Engineer",
      company: "Elitbuzz Technologies Limited",
      location: "Dhaka, Bangladesh",
      period: "Aug 2016 – Nov 2024",
      responsibilities: [
        "Built and maintained a multi-tenant SaaS school management system (Edu360) using Next.js, Prisma, and MySQL with role-based access control",
        "Upgraded an e-commerce platform from Next.js v13 to v14, improving build time and runtime performance by 3–4x",
        "Optimized API response times through query optimization and Redis caching strategies",
        "Designed relational database schemas (MySQL, Prisma) for school management, SMS, and e-commerce systems",
        "Built a dynamic website generator giving individual schools custom domains and branding",
        "Integrated Python text-to-speech via Node.js and a static/dynamic SMS system with text and voice delivery",
        "Containerized applications with Docker and automated deployments through CI/CD pipelines",
        "Contributed to a desktop POS application using Electron"
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

  // Education section hidden — set to true to show it again
  const showEducation = false;

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
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-500'>
              {t('experience.title')}
            </span>
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
            {t('experience.description')}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className='space-y-12 relative'>
          {/* Decorative elements */}
          <div className='absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>
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
              <div className='absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-cyan-500 dark:from-cyan-400 dark:to-cyan-400'></div>
              
              {/* Experience card */}
              <div className='relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-black/20 p-6 sm:p-8 ml-16 border-l-4 border-cyan-500 dark:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 hover:-translate-y-1'>
                {/* Timeline dot */}
                <div className='absolute -left-20 top-8 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-125 transition-transform duration-300'></div>
                
                {/* Current badge */}
                {exp.current && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className='absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md'
                  >
                    {t('experience.current')}
                  </motion.div>
                )}

                {/* Header */}
                <div className='mb-6'>
                  <h3 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors'>
                    {exp.title}
                  </h3>
                  <div className='flex flex-wrap gap-4 text-sm sm:text-base text-slate-600 dark:text-slate-400'>
                    <div className='flex items-center gap-2'>
                      <FiBriefcase className='text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
                      <span className='font-semibold'>{exp.company}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiMapPin className='text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
                      <span>{exp.location}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FiCalendar className='text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform' />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className='text-lg font-semibold text-slate-900 dark:text-slate-200 mb-4'>
                    {t('experience.responsibilities')}
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
                        <div className='w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-cyan-500 transition-all'></div>
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
        {showEducation && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mt-20 relative'
        >
          <div className='absolute -top-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>
          
          <h3 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-200 mb-8 text-center'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-cyan-600'>
              {t('experience.education')}
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
                className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-black/20 p-6 border-l-4 border-cyan-500 dark:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1'
              >
                <h4 className='text-lg font-bold text-slate-900 dark:text-slate-200 mb-2'>
                  {edu.degree}
                </h4>
                <p className='text-cyan-600 dark:text-cyan-400 font-semibold mb-1'>
                  {edu.institution}
                </p>
                <p className='text-slate-600 dark:text-slate-400 text-sm'>
                  {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}
      </div>
    </div>
  )
}

export default Experience