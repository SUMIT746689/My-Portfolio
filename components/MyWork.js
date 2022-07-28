import Image from 'next/image'
import { AiOutlineHtml5,AiFillGithub } from 'react-icons/ai'
import { DiCss3,DiReact,DiNodejsSmall } from 'react-icons/di'
import { SiRedux,SiMongodb,SiExpress,SiTailwindcss,SiFirebase } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'
import { FaBootstrap } from 'react-icons/fa'

function MyWork() {
    const projects = [
        {
            name: 'Total Solution',
            title: 'A Full stack e-commerce web applicaion',
            website_url: 'https://total-solution-v2.herokuapp.com/', 
            github_url: 'https://github.com/SUMIT746689/A-Ecommerce-Website-using-MERN/tree/update-29/04/2022',
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
            name : 'A Restaurant App',
            title : 'Developing a Restaurant App in front end',
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
    console.log(projects[0].tools_and_technologies.constructor === Array && Object.keys(...projects[0].tools_and_technologies))
  return (
    <div className='mb-20 text-center'>
        <div className=' text-slate-900 font-bold text-3xl my-4'>
            My Recent Works 
        </div>
        <div className='text-slate-800 font-medium text-lg'>
            Here are a few past projects i have worked on.
        </div>
        <div className='flex flex-wrap flex-grow justify-center align-middle gap-4 mt-10 '>
           {projects.length > 0 && projects.map ((project,index)=>(
             <div key={index} className=' max-w-md shadow-md shadow-slate-900 rounded-2xl py-10 md:max-w-sm 2xl:max-w-md '>
                <h1 className='text-slate-900 font-bold text-2xl my-2'>{project.name}</h1>
                <h1 className='text-slate-800 font-medium text-lg px-6 mb-4 sm: h-20'>{project.title}</h1>
                <div className='overflow-hidden rounded-2xl bg-slate-500 mx-6 mb bg-cover max-h-96'>
                    <Image className='' src={'/total-solution.png'} width='400px' height='650px' alt='Total Solution'/>
                </div>
                <div className='text-left px-4 my-3'>
                    <div className='flex flex-wrap gap-4 p-4 font-medium'>
                        {project.website_url ? 
                            <a className='flex justify-center text-center gap-4 text-sky-700' href={project.github_url}>
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
                
                <div className='text-left px-4 my-3'>
                    {
                        project.tools_and_technologies?.length > 0 &&
                        <div className='text-lg font-bold text-slate-700 px-6 py-4'>
                            Tools and technologies:
                        </div>
                    }
                    <div className='flex text-xl lg:2xl px-2 gap-4 flex-wrap'>
                    {
                        project.tools_and_technologies?.constructor === Array  
                        && Object.keys(project.tools_and_technologies)?.length > 0 
                        && project.tools_and_technologies.map((icon,index)=>(
                            <span className='text-sky-600 ' key={index}>
                                {icon[Object.keys(icon)]}
                            </span>
                        )) 
                    }
                    </div>
                </div>

                <div>
                    <div className='text-left px-4 my-3'>
                        <div className='text-lg font-bold text-slate-700 px-6 py-4'>
                            Features:
                        </div>
                        <div className=' text-left px-6'>
                            <ul role='list' className=" list-disc list-outside marker:text-green-600 font-medium">
                            {
                                project.features && project.features.map((list_item,index)=>(
                                    <li key={index}>{list_item}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    <div className='text-left px-4'> 
                        {project.special_features && <div className='text-lg font-bold text-slate-700 px-6 py-4'>
                            Special Features:
                        </div>
                        }
                        <div className='text-left marker:text-green-600 px-6'>
                            <ul  className="list-disc list-outside marker:bg-green-500 font-medium">
                            {
                                project.special_features && project.special_features.map((list_item,index)=>(
                                    <li key={index}>{list_item}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default MyWork