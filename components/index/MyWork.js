import Image from 'next/image'
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiReact, DiNodejsSmall } from 'react-icons/di'
import { SiRedux, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'
import { FaBootstrap } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function MyWork() {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const projects = [
        {
            name: 'ECRM for GrameenPhone',
            title: 'Enterprise Customer Relationship Management System',
            image: 'total-solution.png',
            website_url: 'https://cockpit-stg.ppl.how/',
            tools_and_technologies: [
                { node: <DiNodejsSmall /> },
                { express: <SiExpress /> },
                { react: <DiReact /> },
                { mongo: <SiMongodb /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Backend APIs for web and Android applications',
                'Database architecture design',
                'Onboarding module implementation',
                'Campaign training system',
                'GPC visit tracking',
                'Secure data flow management',
                'User authentication & authorization'
            ],
            special_features: [
                'Device-binding system for Android devices',
                'Multi-platform support (Web & Mobile)',
                'Enterprise-grade security',
                'Real-time data synchronization'
            ]
        },
        {
            name: 'Professional Photo Galleries Platform',
            title: 'Multi-language photo sharing platform with real-time features',
            image: 'resturant-app.png',
            website_url: 'https://stage.neodesk.io/',
            tools_and_technologies: [
                { react: <DiReact /> },
                { node: <DiNodejsSmall /> },
                { tailwind: <SiTailwindcss /> },
                { github: <AiFillGithub /> }
            ],
            features: [
                'Multi-language support (English & German)',
                'Professional photo gallery management',
                'Real-time upload progress indicators',
                'File transfer optimization',
                'User feedback enhancement',
                'Responsive design',
                'Cloud storage integration'
            ],
            special_features: [
                'Real-time upload progress tracking',
                'Multi-language internationalization',
                'Professional gallery layouts',
                'Enhanced user experience design'
            ]
        },
        {
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
        }
    ]

    return (
        <div className='pb-20 text-center dark:bg-slate-900/50 backdrop-blur-sm'>
            {/* Decorative elements */}
            <div className='absolute top-0 left-0 w-64 h-64 rounded-full bg-pink-500/10 dark:bg-pink-400/10 blur-3xl -z-10'></div>
            <div className='absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl -z-10'></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='pt-16 pb-10'
            >
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200 mb-2'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-500'>
                        My Recent Works
                    </span>
                </h2>
                <p className='text-lg text-slate-700 dark:text-slate-400 max-w-2xl mx-auto'>
                    {"Here are a few past projects I've worked on."}
                </p>
            </motion.div>

            <div className='flex flex-col items-center mt-10 px-4 sm:px-6'>
                <AnimatePresence>
                    {projects.map((project, index) => (
                        (showAllProjects || index < 2) && (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`w-full max-w-6xl mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:items-center gap-8`}
                            >
                                {/* Project Image */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className='relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg'
                                >
                                    <Image
                                        src={`/${project.image || 'total-solution.png'}`}
                                        layout='fill'
                                        objectFit='cover'
                                        className='grayscale hover:grayscale-0 transition-all duration-300'
                                        alt={project.name}
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6'>
                                        <h3 className='text-white text-xl font-bold'>{project.name}</h3>
                                    </div>
                                </motion.div>

                                {/* Project Details */}
                                <div className='w-full md:w-1/2 text-left'>
                                    <div className='mb-4'>
                                        <h3 className='text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-200'>{project.name}</h3>
                                        <p className='text-slate-700 dark:text-slate-400'>{project.title}</p>
                                    </div>

                                    <div className='mb-6'>
                                        <h4 className='text-lg font-semibold text-pink-700 dark:text-cyan-400 mb-2'>Features:</h4>
                                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                            {project.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    whileHover={{ x: 5 }}
                                                    className='flex items-start text-sm sm:text-base text-slate-700 dark:text-slate-300'
                                                >
                                                    <span className='w-2 h-2 rounded-full bg-pink-500 dark:bg-cyan-400 mt-2 mr-2'></span>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.special_features && (
                                        <div className='mb-6'>
                                            <h4 className='text-lg font-semibold text-pink-700 dark:text-cyan-400 mb-2'>Special Features:</h4>
                                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                                                {project.special_features.map((feature, i) => (
                                                    <motion.li
                                                        key={i}
                                                        whileHover={{ x: 5 }}
                                                        className='flex items-start text-sm sm:text-base text-slate-700 dark:text-slate-300'
                                                    >
                                                        <span className='w-2 h-2 rounded-full bg-pink-500 dark:bg-cyan-400 mt-2 mr-2'></span>
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
                                                className='flex items-center gap-2 px-4 py-2 border border-pink-500 dark:border-cyan-400 text-pink-700 dark:text-cyan-400 rounded-lg hover:bg-pink-500/10 dark:hover:bg-cyan-400/10 transition-colors'
                                            >
                                                <CgWebsite /> Visit Website
                                            </motion.a>
                                        )}
                                        {project.github_url && (
                                            <motion.a
                                                href={project.github_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className='flex items-center gap-2 px-4 py-2 border border-pink-500 dark:border-cyan-400 text-pink-700 dark:text-cyan-400 rounded-lg hover:bg-pink-500/10 dark:hover:bg-cyan-400/10 transition-colors'
                                            >
                                                <VscGithub /> Source Code
                                            </motion.a>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className='text-md font-semibold text-slate-700 dark:text-slate-300 mb-2'>Built With:</h4>
                                        <div className='flex flex-wrap gap-4 text-2xl'>
                                            {project.tools_and_technologies.map((tech, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -5 }}
                                                    className='text-pink-600 dark:text-cyan-400'
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
                                ? 'border-pink-500 dark:border-cyan-400 text-pink-700 dark:text-cyan-400 hover:bg-pink-500/10 dark:hover:bg-cyan-400/10'
                                : 'bg-gradient-to-r from-pink-600 to-cyan-500 text-white border-transparent hover:shadow-lg hover:shadow-pink-500/30'
                        }`}
                    >
                        {showAllProjects ? 'Show Less' : 'Show More'}
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default MyWork