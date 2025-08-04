import Image from 'next/image'

function Skills() {
  return (
    <>
    <div className='relative h-fit bg-slate-900'>
        <div className='relative bg-cyan-700 dark:bg-slate-800 flex justify-center font-light text-lg sm:text-xl md:text-2xl text-gray-100 px-4 pt-14 pb-40 min-w-fit'>
          <div className=' text-center md:px-14 max-w-6xl'>
            <div className='mb-4'>
              <span className='font-bold text-xl sm:text-2xl md:text-3xl'>3+ Years of Professional Experience</span>
            </div>
            <div className='text-base sm:text-lg md:text-xl leading-relaxed'>
              Proven track record in full-cycle development of enterprise systems including school management platforms,
              CRM solutions, and multi-vendor web applications. Experienced in Docker-based deployments and
              collaborating with product teams to deliver scalable SaaS applications.
            </div>
          </div>
        </div>
      </div>
      <div className='relative -top-28 ml- min-h-fit flex flex-col justify-center mx-auto sm:flex-row -top-50 bg-slate-50 dark:bg-slate-900 p-4 w-10/12 rounded-3xl shadow-md shadow-slate-700 dark:shadow-black'>

        <div className='text-center border-b sm:border-b-0 sm:border-r border-gray-500  mt-6'>
          <div className='text-center py-1'>
            <Image className=' dark:bg-inherit rounded-full' src='/front-end.webp' width='100px' height='100px' alt='Front-End' />
          </div>
          <div className='text-pink-700 px-1 dark:text-pink-500 text-xl font-semibold pt-8 pb-4'>
            Front end developer
          </div>
          <div className='text-slate-900 dark:text-slate-300 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 dark:text-pink-500 text-lg font-medium '> Languages:</div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className='px-1 text-pink-900 dark:text-pink-500 text-lg font-medium '>
            Frameworks & Libraries:
          </div>
          <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Redux</span>
            <span>RTK Query</span>
            <span>Tailwind CSS</span>
            <span>MUI</span>
            <span>Shadcn</span>
          </div>
        </div>

        <div className=' text-center sm:border-0 sm:border-r border-b border-gray-500 dark:border-slate-500 mt-8'>
          <div className='text-center'>
            <Image className='bg-slate-200 dark:bg-slate-900 rounded-full' src='/back-end.webp' width='100px' height='100px' alt='Front-End' />
          </div>
          <div  className='text-pink-700 px-1 dark:text-pink-500 text-xl font-semibold pt-8 pb-4'>
            Back end developer
          </div>
          <div className='text-slate-900 dark:text-slate-300 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 dark:text-pink-500 text-lg font-medium '>
              Languages:
            </div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Go</span>
            </div>
          </div>
          <div className='px-1 text-pink-900 dark:text-pink-500 text-lg font-medium '>
            Runtime & Frameworks:
          </div>
          <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>NestJS</span>
          </div>
        </div>
        
        <div className='text-center mt-8'>
          <div className='text-center'>
            <Image className='bg-slate-200 rounded-full' src='/other-tools.webp' width='100px' height='100px' alt='Front-End' />
          </div>
          <div className='text-pink-700 px-1 dark:text-pink-500 text-xl font-semibold pt-8 pb-4'>
            Others
          </div>
          <div className='text-slate-900 dark:text-slate-300 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 dark:text-pink-500 text-lg font-medium '>
              Databases & ORMs:
            </div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Prisma</span>
              <span>Drizzle ORM</span>
            </div>
          </div>
          <div>
            <div className=' text-pink-900 dark:text-pink-500 text-lg font-medium '>
              DevOps & Tools:
            </div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>Docker</span>
              <span>Podman</span>
              <span>NGINX</span>
              <span>Git</span>
              <span>Bitbucket</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Skills