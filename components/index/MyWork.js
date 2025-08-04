import Image from 'next/image'
import { AiOutlineHtml5,AiFillGithub } from 'react-icons/ai'
import { DiCss3,DiReact,DiNodejsSmall } from 'react-icons/di'
import { SiRedux,SiMongodb,SiExpress,SiTailwindcss,SiFirebase } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'
import { FaBootstrap } from 'react-icons/fa'
import { useState } from 'react'

function MyWork() {
    const [showAllProjects,setShowAllPeojects] = useState(false);

    const projects = [
        {
            name: 'ECRM for GrameenPhone',
            title: 'Enterprise Customer Relationship Management System',
            image:'total-solution.png',
            website_url : 'https://cockpit-stg.ppl.how/',
            tools_and_technologies: [
                {node : <DiNodejsSmall/>},
                {express : <SiExpress/>},
                {react : <DiReact/>},
                {mongo : <SiMongodb/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Backend APIs for web and Android applications',
                'Database architecture design',
                'Onboarding module implementation',
                'Campaign training system',
                'GPC visit tracking',
                'Secure data flow management',
                'User authentication & authorization'
            ],
            special_features:
            [
                'Device-binding system for Android devices',
                'Multi-platform support (Web & Mobile)',
                'Enterprise-grade security',
                'Real-time data synchronization'
            ]
        },
        {
            name  : 'Professional Photo Galleries Platform',
            title : 'Multi-language photo sharing platform with real-time features',
            image : 'resturant-app.png',
            website_url : 'https://stage.neodesk.io/',
            tools_and_technologies: [
                {react : <DiReact/>},
                {node : <DiNodejsSmall/>},
                {tailwind : <SiTailwindcss/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Multi-language support (English & German)',
                'Professional photo gallery management',
                'Real-time upload progress indicators',
                'File transfer optimization',
                'User feedback enhancement',
                'Responsive design',
                'Cloud storage integration'
            ],
            special_features:
            [
                'Real-time upload progress tracking',
                'Multi-language internationalization',
                'Professional gallery layouts',
                'Enhanced user experience design'
            ]
        },
        {
            name : 'SAAS Multi-Vendor School Management System',
            title : 'Comprehensive educational institution management platform',
            image : 'raw-node.png',
            website_url: 'https://admin.edu360.com.bd/',
            tools_and_technologies: [
                {react : <DiReact/>},
                {node : <DiNodejsSmall/>},
                {express : <SiExpress/>},
                {mongo : <SiMongodb/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Multi-tenant architecture',
                'Role-based access control',
                'Individual user permissions',
                'Organization-level roles',
                'Custom domain support',
                'Dynamic website generator',
                'SMS system integration'
            ],
            special_features:
            [
                'Python-based text-to-speech engine',
                'Automated voice notifications',
                'Custom branding for schools',
                'Used by 30+ educational institutions',
                'Full-stack development contribution (60%)'
            ]
        },
        {
            name : 'E-commerce Platform Upgrade',
            title : 'Next.js performance optimization and modernization',
            image:'chat-app.png',
            tools_and_technologies: [
                {react : <DiReact/>},
                {node : <DiNodejsSmall/>},
                {express : <SiExpress/>},
                {mongo : <SiMongodb/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Next.js v13 to v14 upgrade',
                'Build time optimization',
                'Runtime performance improvement',
                'API response optimization',
                'Query optimization',
                'Caching strategies implementation',
                'Database schema design'
            ],
            special_features:
            [
                '3-4x performance improvement',
                'Significantly enhanced user experience',
                'Advanced caching implementation',
                'Production deployment optimization'
            ]
        },
        {
            name : 'Desktop POS Application',
            title : 'Point of Sale system using Electron framework',
            image : 'amazon-clone.png',
            tools_and_technologies: [
                {react : <DiReact/>},
                {node : <DiNodejsSmall/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Desktop application development',
                'Point of Sale functionality',
                'Inventory management',
                'Sales tracking',
                'Receipt generation',
                'Cross-platform compatibility',
                'Offline capability'
            ],
            special_features:
            [
                'Electron-based desktop app',
                'Cross-platform support',
                'Offline-first architecture',
                'Real-time inventory updates'
            ]
        }
    ]
    
  return (
    <div className='pb-20 text-center dark:bg-slate-900'>
        <div className=' text-slate-900 dark:text-slate-200 font-bold text-3xl py-4'>
            My Recent Works 
        </div>
        <div className='text-slate-800 dark:text-slate-400 font-medium text-lg'>
            Here are a few past projects i have worked on.
        </div>
        <div className='flex flex-col flex-grow justify-center align-middle mt-10 '>
           {projects.length > 0 && projects.map((project,index)=>(
            (showAllProjects || index < 2) && <div key={index} className='mx-auto grid grid-cols-6 justify-center align-middle pb-6 w-full md:max-w-screen-2xl md:border-t md:border-slate-400 overflow-hidden'>
                {/* for large device */}
                <div className={`${index %2 === 0 ? ' col-start-1 col-end-4 -right-20 ' : ' col-start-4 col-end-7 -left-20'} hidden md:flex relative row-start-1 my-auto overflow-hidden rounded-md xl:mx-6 lg:py-4 bg-cover max-h-80 hover:scale-105 duration-150 blur-xs hover:blur-0 dark:opacity-50 dark:hover:opacity-80`}>
                    <Image className='hover object-cover bg-center duration-300 grayscale hover:grayscale-0 hover:scale-105 ' src={project.image ? `/${project.image}`: '/total-solution.png'} width='900px' height='515px' alt='Total Solution'/>
                </div>
                
                {/* for small device */}
                <div className='hidden mx-10 col-start-1 text-right col-end-7 row-start-1 my-auto overflow-hidden rounded-md xl:mx-6 bg-cover max-h-screen hover:scale-105 duration-150 blur-xs hover:blur-0'>
                    <Image className='hover object-cover bg-center duration-300 grayscale hover:grayscale-0 hover:scale-105 ' src={project.image ? `/${project.image}`: '/total-solution.png'} width='900px' height='515px' alt='Total Solution'/>
                </div>
                {/* for large device */}
                <div className={`${index %2 === 0 ? 'text-right col-start-4 col-end-7 -left-20':'text-left col-start-1 col-end-4 -right-20' } hidden md:block relative row-start-1 z-0 `}>
                    <h1 className='text-slate-900 dark:text-slate-200 font-bold text-xl px-7 my-2'>{project.name}</h1>
                    <h1 className='text-slate-800 dark:text-slate-400 font-medium text-md px-7 '>{project.title}</h1>
                    <div className='text-slate-900 dark:text-slate-400 transition-transform duration-200 overflow-hidden p-2 mt-8 '>
                        <div className=' px-2 '>
                            <div className='text-md font-bold px-6 py-2 dark:text-slate-300'>
                            Features:
                            </div>
                            <div className=' px-10 shadow-md shadow-slate-800 dark:shadow-black backdrop-blur-3xl'>
                                <ul className={`${index %2 === 0 ? ' justify-end ' : ' justify-start ' } flex flex-grow flex-wrap text-sm list-outside marker:text-sky-300 font-medium`}>
                                {
                                    project.features && project.features.map((list_item,index)=>(
                                        <li className='p-1 border m-1' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                        <div className='px-2 '> 
                            {project.special_features && 
                            <div className='dark:text-slate-300 text-md font-bold px-6 py-2 mt-1'>
                                Special Features:
                            </div>
                            }
                            <div className='px-10 shadow-md shadow-slate-800 dark:shadow-black backdrop-blur-3xl'>
                                
                            <ul className={`${index %2 === 0 ? ' justify-end ' : ' justify-start ' } flex flex-grow flex-wrap text-sm list-outside marker:text-sky-300 font-medium`}>
                                {
                                    project.special_features && project.special_features.map((list_item,index)=>(
                                        <li className='p-1 border m-1' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <div className={`${index % 2 === 0 ? ' justify-end': ' justify-start'} flex flex-wrap gap-4 px-4 pt-4 font-medium`}>
                            {project.website_url ? 
                                <a className='flex justify-center text-center gap-4 text-sky-700 dark:text-sky-400' href={project.website_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 dark:border-sky-400 rounded-lg flex gap-3 text-center'><CgWebsite className='mt-1'/> Website</button>
                                </a>
                            :''}
                                                    
                            {project.github_url ? 
                                
                                <a className='flex justify-center text-center gap-4 text-sky-700 dark:text-sky-400' href={project.github_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 dark:border-sky-400 rounded-lg flex gap-3 text-center'><VscGithub className='mt-1'/> Souce Code</button>
                                </a>
                            :''}
                        </div>
                        
                    </div>
                    <div className=' my-3 px-7'>
                        {
                            project.tools_and_technologies?.length > 0 &&
                            <div className='text-md font-bold text-slate-700 dark:text-slate-300 pb-2'>
                                Tools and technologies:
                            </div>
                        }
                        <div className={ `${index % 2 === 0 ? ' justify-end': 'justify-start'} flex text-lg lg:2xl px-2 gap-4 flex-wrap`}>
                        {
                            project.tools_and_technologies?.constructor === Array  
                            && Object.keys(project.tools_and_technologies)?.length > 0 
                            && project.tools_and_technologies.map((icon,index)=>(
                                <span className='text-sky-700 dark:text-slate-400 ' key={index}>
                                    {icon[Object.keys(icon)]}
                                </span>
                            )) 
                        }
                        </div>
                    </div>
                </div>
                
                {/* for small device */}
                <div className='md:hidden text-left col-start-1 col-end-7 relative row-start-1 w-11/12 mx-auto p-3 sm:p-6 dark:bg-slate-800 shadow-md dark:shadow shadow-slate-900 dark:shadow-black'>
                    <div className='absolute flex justify-center top-0 left-0 my-auto h-full mx-auto bg-center bg-cover'>
                        <Image className=' h-full bg-mint text-mint fill-current hover:scale-105 duration-150 opacity-10 dark:opacity-5 ' src={`/${project.image ? project.image : 'total-solution.png'}`} width='900' height='515' objectFit='cover' alt='Project Image'/>
                    </div>
                    <h1 className='text-slate-900 dark:text-slate-200 font-bold text-lg xs:text-xl my-2'>{project.name}</h1>
                    <h1 className='text-slate-800 dark:text-slate-400 font-medium text-base sm:text-lg  '>{project.title}</h1>
                    <div className="text-slate-900 dark:text-slate-400  transition-transform duration-200 overflow-hidden ">
                        <div className="">
                            <div className='dark:text-slate-300 text-md font-semibold py-2'>
                            Features:
                            </div>
                            <div className=''>
                                <ul className='justify-start flex flex-grow flex-wrap text-xs marker:text-sky-300 font-medium'>
                                {
                                    project.features && project.features.map((list_item,index)=>(
                                        <li className='p-1 border m-1 border-slate-400 duration-150 hover:-translate-y-0.5' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                        <div className=""> 
                            {project.special_features && 
                            <div className='dark:text-slate-300 text-md font-semibold py-2 mt-1'>
                                Special Features:
                            </div>
                            }
                            <div className=''>
                                
                            <ul className=' justify-start flex flex-grow flex-wrap text-xs marker:text-sky-300 font-medium'>
                                {
                                    project.special_features && project.special_features.map((list_item,index)=>(
                                        <li className='p-1 border m-1 border-slate-400 duration-150 hover:-translate-y-0.5' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' justify-start text-sky-700 dark:text-emerald-400 flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4 font-medium text-sm sm:text-base'>
                            {project.website_url ? 
                                <a className='z-10 flex justify-center text-center gap-4 ' href={project.website_url}>
                                    <button className='transition duration-75 ease-in-out hover:scale-105 border-2 p-2 border-sky-700 dark:border-emerald-400 rounded-lg flex gap-3 text-center'><CgWebsite className='mt-1'/> Website</button>
                                </a>
                            :''}
                                                    
                            {project.github_url ? 
                                
                                <a className='z-10 bg- flex justify-center text-center gap-4 ' href={project.github_url}>
                                    <button className='transition duration-75 ease-in-out hover:scale-105 border-2 p-2 border-sky-700 dark:border-emerald-400 rounded-lg flex gap-3 text-center'><VscGithub className='mt-1'/> Souce Code</button>
                                </a>
                            :''}
                        </div>
                        
                    </div>
                    <div className='my-3'>
                        {
                            project.tools_and_technologies?.length > 0 &&
                            <div className=' sm:text-md font-semibold text-slate-700 dark:text-slate-300 pb-2'>
                                Tools and technologies:
                            </div>
                        }
                        <div className='justify-start flex text-lg lg:2xl xs:pl-1 gap-4 flex-wrap'>
                        {
                            project.tools_and_technologies?.constructor === Array  
                            && Object.keys(project.tools_and_technologies)?.length > 0 
                            && project.tools_and_technologies.map((icon,index)=>(
                                <span className='text-sky-700 dark:text-slate-400 ' key={index}>
                                    {icon[Object.keys(icon)]}
                                </span>
                            )) 
                        }
                        </div>
                    </div>
                </div>
            
            </div>
           ))}
        </div>
        <div className=' pt-4 md:pt-8 pb-10 md:pb-20'>
            <button onClick={()=>setShowAllPeojects((value)=>!value)} className=' text-pink-800 border-pink-800 dark:text-sky-300 dark:border-sky-300 hover:duration-300 hover:bg-pink-50 hover:bg-opacity-5 hover:animate-none md:text-xl font-bold py-1 sm:py-2 px-4 sm:px-6 border-2 sm:border-2 bg-opacity-10 hover:-translate-y-1 duration-200 text-lg'>{ !showAllProjects ? 'Show More':'Show Less'}</button>
        </div>
    </div>
  )
}

export default MyWork