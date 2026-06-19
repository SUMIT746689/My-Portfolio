'use client';

import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiReact, DiNodejsSmall } from 'react-icons/di'
import { SiRedux, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiNestjs, SiPostgresql, SiRedis, SiNextdotjs, SiTypescript, SiGooglecloud, SiSocketdotio, SiDrizzle } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'
import { FaBootstrap } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '../../hooks/useTranslations'

function MyWork() {
    const { t } = useTranslations();
    const [showAllProjects, setShowAllProjects] = useState(false);

    const projects = [
        {
            id: 'ecrm-grameenphone',
            name: 'ECRM for GrameenPhone',
            title: 'Enterprise CRM built on a microservices backend (auth + campaign services)',
            image: 'total-solution.png',
            website_url: 'https://cockpit-stg.ppl.how/',
            tools_and_technologies: [
                { node: <DiNodejsSmall /> },
                { express: <SiExpress /> },
                { postgres: <SiPostgresql /> },
                { redis: <SiRedis /> },
                { 'socket.io': <SiSocketdotio /> },
                { bigquery: <SiGooglecloud /> },
                { react: <DiReact /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Dedicated auth microservice (JWT + bcrypt)',
                'Redis-backed sessions & caching',
                'Socket.io real-time updates',
                'Campaign management microservice',
                'Scheduled campaigns via node-schedule',
                'BigQuery campaign analytics',
                'SMS gateway + email notifications',
                'Onboarding, training & GPC visit modules'
            ],
            special_features: [
                'Service-split architecture (login + campaign managers)',
                'Device-binding for Android accounts',
                'Sentry + Winston monitoring & logging',
                'Backend powering web and Android apps',
                'Enterprise-grade security & RBAC'
            ]
        },
        {
            id: 'neodesk-photo-galleries',
            name: 'Neodesk — Photo Galleries Platform',
            title: 'Microservices photo-sharing SaaS (13-container Bildlogistik stack)',
            image: 'resturant-app.png',
            website_url: 'https://stage.neodesk.io/',
            tools_and_technologies: [
                { node: <DiNodejsSmall /> },
                { express: <SiExpress /> },
                { react: <DiReact /> },
                { next: <SiNextdotjs /> },
                { postgres: <SiPostgresql /> },
                { redis: <SiRedis /> },
                { tailwind: <SiTailwindcss /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Microservices: 7 APIs + 3 background workers + 2 frontends',
                'Gallery, file, user, account & login services',
                'Async image-resize workers',
                'Stripe payment service',
                'Scheduling & messaging services',
                'Real-time upload progress indicators',
                'Multi-language (English & German)',
                'AWS-backed cloud storage'
            ],
            special_features: [
                'Service-oriented architecture (13 containers)',
                'Redis-backed queues & caching',
                'Dockerized staging stack (Docker Compose)',
                'Decoupled, independently deployable services'
            ]
        },
        {
            id: 'edu360-school-management',
            name: 'SAAS Multi-Vendor School Management System',
            title: 'Comprehensive educational institution management platform',
            image: 'raw-node.png',
            website_url: 'https://admin.edu360.com.bd/',
            tools_and_technologies: [
                { react: <DiReact /> },
                { node: <DiNodejsSmall /> },
                { express: <SiExpress /> },
                { mongo: <SiMongodb /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Multi-tenant architecture',
                'Role-based access control',
                'Individual user permissions',
                'Organization-level roles',
                'Custom domain support',
                'Dynamic website generator',
                'SMS system integration'
            ],
            special_features: [
                'Python-based text-to-speech engine',
                'Automated voice notifications',
                'Custom branding for schools',
                'Used by 30+ educational institutions',
                'Full-stack development contribution (60%)'
            ]
        },
        {
            id: 'ecommerce-nextjs-upgrade',
            name: 'E-commerce Platform Upgrade',
            title: 'Next.js performance optimization and modernization',
            image: 'chat-app.png',
            tools_and_technologies: [
                { react: <DiReact /> },
                { node: <DiNodejsSmall /> },
                { express: <SiExpress /> },
                { mongo: <SiMongodb /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Next.js v13 to v14 upgrade',
                'Build time optimization',
                'Runtime performance improvement',
                'API response optimization',
                'Query optimization',
                'Caching strategies implementation',
                'Database schema design'
            ],
            special_features: [
                '3-4x performance improvement',
                'Significantly enhanced user experience',
                'Advanced caching implementation',
                'Production deployment optimization'
            ]
        },
        {
            id: 'desktop-pos',
            name: 'Desktop POS Application',
            title: 'Point of Sale system using Electron framework',
            image: 'amazon-clone.png',
            tools_and_technologies: [
                { react: <DiReact /> },
                { node: <DiNodejsSmall /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Desktop application development',
                'Point of Sale functionality',
                'Inventory management',
                'Sales tracking',
                'Receipt generation',
                'Cross-platform compatibility',
                'Offline capability'
            ],
            special_features: [
                'Electron-based desktop app',
                'Cross-platform support',
                'Offline-first architecture',
                'Real-time inventory updates'
            ]
        },
        {
            id: 'buying-house-management',
            name: 'Buying House Management System',
            title: 'Garment sourcing ERP connecting international buyers with BD factories',
            image: 'raw-node.png',
            tools_and_technologies: [
                { next: <SiNextdotjs /> },
                { nestjs: <SiNestjs /> },
                { typescript: <SiTypescript /> },
                { postgres: <SiPostgresql /> },
                { drizzle: <SiDrizzle /> },
                { redis: <SiRedis /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Multi-role system (Admin, Manager, Merchandiser, QC, Accountant)',
                'Buyer & supplier/factory management',
                'Order & production tracking',
                'Document repository per buyer/factory',
                'JWT + OAuth 2.0 authentication',
                'Role-based access control (RBAC)',
                'AWS S3 file storage',
                'Socket.io real-time updates'
            ],
            special_features: [
                'NestJS + Next.js 14 monorepo',
                'Drizzle ORM (type-safe SQL) + Zod validation',
                'User activity logs & audit trails',
                'Compliance certificate tracking (BSCI, WRAP, ISO)'
            ]
        },
        {
            id: 'music-distribution-saas',
            name: 'Music Distribution SaaS',
            title: 'Full-stack music distribution platform with B2B delivery & agreements',
            image: 'chat-app.png',
            tools_and_technologies: [
                { nestjs: <SiNestjs /> },
                { next: <SiNextdotjs /> },
                { typescript: <SiTypescript /> },
                { postgres: <SiPostgresql /> },
                { redis: <SiRedis /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Music & video distribution workflows',
                'B2B delivery pipeline',
                'Digital agreement generation & exports',
                'S3-compatible object storage (RustFS)',
                'Redis-backed caching & queues',
                'API documentation (Swagger)',
                'Role-based dashboards'
            ],
            special_features: [
                'NestJS + Next.js full-stack architecture',
                'Containerized with Podman & Docker',
                'NGINX reverse proxy deployment',
                'Async background processing'
            ]
        },
        {
            id: 'quickdrop-ecommerce',
            name: 'QuickDROP — Cross-border E-commerce',
            title: 'Chinese-products e-commerce with 1688.com sourcing integration',
            image: 'amazon-clone.png',
            tools_and_technologies: [
                { next: <SiNextdotjs /> },
                { react: <DiReact /> },
                { typescript: <SiTypescript /> },
                { postgres: <SiPostgresql /> },
                { drizzle: <SiDrizzle /> },
                { tailwind: <SiTailwindcss /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Product sourcing via 1688.com integration',
                'Persistent shopping cart & checkout',
                'Full order lifecycle management',
                'Admin dashboard with reports & analytics',
                'Coupon & shipping-charge management',
                'NextAuth v5 authentication + RBAC',
                'Bilingual UI (Bengali / English)'
            ],
            special_features: [
                'Next.js 15 / React 19 + Drizzle ORM',
                'shadcn/ui component system',
                'Monthly reporting with daily breakdowns',
                'Auth-aware dynamic navigation'
            ]
        }
    ]

    return (
        <div className='pb-20 text-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'>
            {/* Decorative elements */}
            <div className='absolute top-0 left-0 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl -z-10'></div>
            <div className='absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl -z-10'></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='pt-16 pb-10'
            >
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-2'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-500'>
                        {t('projects.title')}
                    </span>
                </h2>
                <p className='text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto'>
                    {t('projects.description')}
                </p>
            </motion.div>
            <div className='flex flex-col mt-10 px-4 sm:px-6 max-w-6xl mx-auto w-full'>
                <AnimatePresence>
                    {projects.map((project, index) => (
                        (showAllProjects || index < 2) && (
                            <motion.div
                                key={project.id}
                                id={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className={`scroll-mt-24 w-full md:w-4/5 mb-10 ${index % 2 === 0 ? 'md:self-start md:mr-auto' : 'md:self-end md:ml-auto'}`}
                            >
                                {/* Project Details */}
                                <div className={`w-full text-left bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-black/20 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 ${index % 2 === 0 ? 'border-l-4' : 'border-r-4'} border-cyan-500 dark:border-cyan-400`}>
                                    <div className='mb-4'>
                                        <h3 className='text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-200'>{project.name}</h3>
                                        <p className='text-slate-700 dark:text-slate-400'>{project.title}</p>
                                    </div>

                                    <div className='mb-6'>
                                        <h4 className='text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-2'>{t('projects.features')}:</h4>
                                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                            {project.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    whileHover={{ x: 5 }}
                                                    className='flex items-start text-sm sm:text-base text-slate-700 dark:text-slate-300'
                                                >
                                                    <span className='w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 mr-2'></span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.special_features && (
                                        <div className='mb-6'>
                                            <h4 className='text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-2'>{t('projects.specialFeatures')}:</h4>
                                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                                {project.special_features.map((feature, i) => (
                                                    <motion.li
                                                        key={i}
                                                        whileHover={{ x: 5 }}
                                                        className='flex items-start text-sm sm:text-base text-slate-700 dark:text-slate-300'
                                                    >
                                                        <span className='w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-2 mr-2'></span>
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className='flex flex-wrap gap-4 mb-4'>
                                        {project.website_url && (
                                            <motion.a
                                                href={project.website_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className='flex items-center gap-2 px-4 py-2 border border-cyan-500 dark:border-cyan-400 text-cyan-700 dark:text-cyan-400 rounded-lg hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-colors'
                                            >
                                                <CgWebsite /> {t('projects.visitWebsite')}
                                            </motion.a>
                                        )}
                                        {project.github_url && (
                                            <motion.a
                                                href={project.github_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className='flex items-center gap-2 px-4 py-2 border border-cyan-500 dark:border-cyan-400 text-cyan-700 dark:text-cyan-400 rounded-lg hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-colors'
                                            >
                                                <VscGithub /> {t('projects.sourceCode')}
                                            </motion.a>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className='text-md font-semibold text-slate-700 dark:text-slate-300 mb-2'>{t('projects.builtWith')}:</h4>
                                        <div className='flex flex-wrap gap-4 text-2xl'>
                                            {project.tools_and_technologies.map((tech, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5 }}
                                                    className='text-cyan-600 dark:text-cyan-400'
                                                    title={Object.keys(tech)[0]}
                                                >
                                                    {tech[Object.keys(tech)[0]]}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='mt-8'
                >
                    <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className={`px-6 py-2 border-2 font-semibold rounded-lg transition-all duration-300 ${
                            showAllProjects
                                ? 'border-cyan-500 dark:border-cyan-400 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10'
                                : 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white border-transparent hover:shadow-lg hover:shadow-cyan-500/30'
                        }`}
                    >
                        {showAllProjects ? t('projects.showLess') : t('projects.showMore')}
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default MyWork