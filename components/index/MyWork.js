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
            name: 'Total Solution',
            title: 'A Full stack e-commerce web applicaion',
            image:'total-solution.png',
            website_url : 'https://total-solution-v2.herokuapp.com/', 
            github_url  : 'https://github.com/SUMIT746689/A-Ecommerce-Website-using-MERN/tree/update-29/04/2022',
            tools_and_technologies: [
                {html_icon : <AiOutlineHtml5/>}, 
                {css_icon : <DiCss3/>},
                {tailwind : <SiTailwindcss/>},
                {react : <DiReact/>},
                {redux : <SiRedux/>},
                {node : <DiNodejsSmall/>},
                {express : <SiExpress/>},
                {mongo : <SiMongodb/>},
                {firebase : <SiFirebase/>},
                {github : <AiFillGithub/>}
            ],
            features: 
            [
                'Authentication',
                'Verify using mobile OTP',
                'Fotgot password reset',
                'Login user Profile',
                'Dashboad with create, edit and delete products',
                'Store products data in database',
                'Upload products images in the cloud storage',
                'Search Products',
                'Find products by category'
            ],
            special_features: 
            [
                'Voice recognition system',
                '2-step Authentication',
                'Existing user verify when trying to login using the new browser on any device',
                'Dark mode enable or disable using user device default preference',
                
            ]
        },
        {
            name : 'Raw NodeJs CRUD project',
            title : 'Using raw nodeJs build read, create, update and delete files',
            github_url: 'https://github.com/SUMIT746689/Raw-Node.js-CRUD-project/tree/updated_2/2/22',
            tools_and_technologies: [
                {node : <DiNodejsSmall/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Home page',
                'Using raw NodeJS and no npm modules used', 
                'Authentication and authorization',
                'Create new user file', 
                'Authorized user upload, delete and edit file in server',
            ],
            special_features: 
            [
                'Token based authentication',
                'Created Restful API',
                'Token expire time auto update when user request server'
            ]
        },
        {
            name : 'A chat Application',
            title : 'A full stack chatting application with live message',
            image:'chat.png',
            website_url: 'https://my-first-chat-app-v1.herokuapp.com/',
            github_url: 'https://github.com/SUMIT746689/Mern-stack-Chat-application/tree/chat-updated-5/4/2022',
            tools_and_technologies: [
                {html_icon : <AiOutlineHtml5/>}, 
                {css_icon : <DiCss3/>},
                {node : <DiNodejsSmall/>},
                {express : <SiExpress/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Login',
                'Signup', 
                'Create new user', 
                'Add user image and upload in server', 
                'Previous chat', 
                'Auto update chat', 
                'Share image with message and save in server'
            ],
            special_features: 
            [
                'Live chat using Socket.io',
                'User send to image', 
                'User chat with available users', 
                'Created option available for new user'
            ]
        },
        {
            name  : 'A Restaurant App',
            title : 'Developing a Restaurant App in front end',
            image : 'resturant.png', 
            github_url: 'https://github.com/SUMIT746689/A-Resturant-app-using-React/tree/developed_6/2/22',
            tools_and_technologies: [
                {html_icon : <AiOutlineHtml5/>}, 
                {css_icon : <DiCss3/>},
                {react : <DiReact/>},
                {firebase : <SiFirebase/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Home Page', 
                'About us page', 
                'Our history', 
                'daily special item', 
                'Chef word', 
                'Awards and recognition', 
                'Photo gallery', 
                'Contact', 
                'Newsletter', 
                'Subscribe footer'
            ],
            // special_features: 
            // [
            //     'Awards and recognition',
            //     'User send to image', 
            //     'User chat with available users', 
            //     'Created option available for new user'
            // ]
        },
        {
            name : 'Amazon clone web application',
            title : 'Developing a front end web app using react, dedux and many more ',
            github_url: 'https://github.com/SUMIT746689/A-Resturant-app-using-React/tree/developed_6/2/22',
            tools_and_technologies: [
                {html_icon : <AiOutlineHtml5/>}, 
                {css_icon : <DiCss3/>},
                {bootstrap : <FaBootstrap/>},
                {react : <DiReact/>},
                {redux : <SiRedux/>},
                {firebase : <SiFirebase/>},
                {github : <AiFillGithub/>}
            ],
            features:
            [
                'Home page' , 
                'Product description', 
                'login page', 
                'Signup page', 
                'Cart', 
                'Routing', 
                'Products'
            ],
            // special_features: 
            // [
            //     'Awards and recognition',
            //     'User send to image', 
            //     'User chat with available users', 
            //     'Created option available for new user'
            // ]
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
            (showAllProjects || index < 2) && <div key={index} className='mx-auto grid grid-cols-6 justify-center align-middle  pb-6 md:max-w-screen-2xl border-t border-slate-400'>
                {/* for large device */}
                <div className={`${index %2 === 0 ? ' col-start-1 col-end-4 -right-20 ' : 'text-right col-start-4 col-end-7 -left-20'} hidden md:block relative row-start-1 my-auto overflow-hidden rounded-md xl:mx-6 bg-cover max-h-screen hover:scale-105 duration-150 blur-xs hover:blur-0`}>
                    <Image className='hover object-cover bg-center duration-300 grayscale hover:grayscale-0 hover:scale-105 ' src={project.image ? `/${project.image}`: '/total-solution.png'} width='900px' height='515px' alt='Total Solution'/>
                </div>
                
                {/* for small device */}
                <div className='hidden mx-10 col-start-1 text-right col-end-7 row-start-1 my-auto overflow-hidden rounded-md xl:mx-6 bg-cover max-h-screen hover:scale-105 duration-150 blur-xs hover:blur-0'>
                    <Image className='hover object-cover bg-center duration-300 grayscale hover:grayscale-0 hover:scale-105 ' src={project.image ? `/${project.image}`: '/total-solution.png'} width='900px' height='515px' alt='Total Solution'/>
                </div>
                {/* for large device */}
                <div className={`${index %2 === 0 ? 'text-right col-start-4 col-end-7 -left-20':'text-left col-start-1 col-end-4 -right-20' } hidden md:block relative row-start-1 z-0 `}>
                    <h1 className='text-slate-900 font-bold text-xl px-7 my-2'>{project.name}</h1>
                    <h1 className='text-slate-800 font-medium text-md px-7 '>{project.title}</h1>
                    <div className='text-slate-900  transition-transform duration-200 overflow-hidden p-2 mt-8 '>
                        <div className=' px-2 '>
                            <div className='text-md font-bold px-6 py-2'>
                            Features:
                            </div>
                            <div className=' px-10 shadow-md shadow-slate-800 backdrop-blur-3xl'>
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
                            <div className='text-md font-bold px-6 py-2 mt-1'>
                                Special Features:
                            </div>
                            }
                            <div className='px-10 shadow-md shadow-slate-800 backdrop-blur-3xl'>
                                
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
                                <a className='flex justify-center text-center gap-4 text-sky-700' href={project.website_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 rounded-lg flex gap-3 text-center'><CgWebsite className='mt-1'/> Website</button>
                                </a>
                            :''}
                                                    
                            {project.github_url ? 
                                
                                <a className='flex justify-center text-center gap-4 text-sky-700' href={project.github_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 rounded-lg flex gap-3 text-center'><VscGithub className='mt-1'/> Souce Code</button>
                                </a>
                            :''}
                        </div>
                        
                    </div>
                    <div className=' my-3 px-7'>
                        {
                            project.tools_and_technologies?.length > 0 &&
                            <div className='text-md font-bold text-slate-700 pb-2'>
                                Tools and technologies:
                            </div>
                        }
                        <div className={ `${index % 2 === 0 ? ' justify-end': 'justify-start'} flex text-lg lg:2xl px-2 gap-4 flex-wrap`}>
                        {
                            project.tools_and_technologies?.constructor === Array  
                            && Object.keys(project.tools_and_technologies)?.length > 0 
                            && project.tools_and_technologies.map((icon,index)=>(
                                <span className='text-sky-700 ' key={index}>
                                    {icon[Object.keys(icon)]}
                                </span>
                            )) 
                        }
                        </div>
                    </div>
                </div>
                
                {/* for small device */}
                <div className='md:hidden text-left col-start-1 col-end-7 relative row-start-1 z-0'>
                    <h1 className='text-slate-900 dark:text-slate-200 font-bold text-lg xs:text-xl px-7 my-2'>{project.name}</h1>
                    <h1 className='text-slate-800 dark:text-slate-400 font-medium text-base sm:text-lg px-7 '>{project.title}</h1>
                    <div className="text-slate-900 dark:text-slate-400  transition-transform duration-200 overflow-hidden p-2 ">
                        <div className=" px-2">
                            <div className='dark:text-slate-300 text-md font-bold py-2 pl-3'>
                            Features:
                            </div>
                            <div className=' shadow-md shadow-slate-800'>
                                <ul className='justify-start flex flex-grow flex-wrap text-xs marker:text-sky-300 font-medium'>
                                {
                                    project.features && project.features.map((list_item,index)=>(
                                        <li className='p-1 border m-1 border-slate-400 hover:scale-105 duration-75' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                        <div className='px-2 '> 
                            {project.special_features && 
                            <div className='dark:text-slate-300 text-md font-bold pl-3 py-2 mt-1'>
                                Special Features:
                            </div>
                            }
                            <div className=' shadow-md shadow-slate-800'>
                                
                            <ul className=' justify-start flex flex-grow flex-wrap text-xs marker:text-sky-300 font-medium'>
                                {
                                    project.special_features && project.special_features.map((list_item,index)=>(
                                        <li className='p-1 border m-1 border-slate-400 hover:scale-105 duration-75 hover: -translate-y-0.5' key={index}>{list_item}</li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className=' justify-start text-sky-700 dark:text-emerald-400 flex flex-wrap gap-2 sm:gap-4 px-2 sm:px-4 pt-2 sm:pt-4 font-medium text-sm sm:text-base'>
                            {project.website_url ? 
                                <a className='flex justify-center text-center gap-4 ' href={project.website_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 dark:border-emerald-400 rounded-lg flex gap-3 text-center'><CgWebsite className='mt-1'/> Website</button>
                                </a>
                            :''}
                                                    
                            {project.github_url ? 
                                
                                <a className='flex justify-center text-center gap-4 ' href={project.github_url}>
                                    <button className='transition duration-150 ease-in-out hover:scale-110 border-2 p-2 border-sky-700 dark:border-emerald-400 rounded-lg flex gap-3 text-center'><VscGithub className='mt-1'/> Souce Code</button>
                                </a>
                            :''}
                        </div>
                        
                    </div>
                    <div className=' my-3 px-7'>
                        {
                            project.tools_and_technologies?.length > 0 &&
                            <div className=' sm:text-md font-bold text-slate-700 dark:text-slate-300 pb-2'>
                                Tools and technologies:
                            </div>
                        }
                        <div className='justify-start flex text-lg lg:2xl xs:pl-2 gap-4 flex-wrap'>
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
        <div>
            <button onClick={()=>setShowAllPeojects((value)=>!value)} className=' text-pink-800 border-pink-800 dark:text-sky-300 dark:border-sky-300 hover:duration-300 hover:bg-pink-50 hover:bg-opacity-5 hover:animate-none md:text-xl font-bold py-1 sm:py-2 px-4 sm:px-6 border-2 sm:border-4 bg-opacity-10 hover:-translate-y-1 duration-200 text-lg'>{ !showAllProjects ? 'Show More':'Show Less'}</button>
        </div>
    </div>
  )
}

export default MyWork