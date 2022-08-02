import Image from 'next/image'

function Skills() {
  return (
    <>
    <div className='relative h-fit bg-slate-900'>
        <div className='relative bg-cyan-700 dark:bg-slate-800 flex justify-center font-light text-lg sm:text-xl md:text-2xl text-gray-100 px-4 pt-14 pb-40 min-w-fit'>
          <div className=' text-center md:px-14 max-w-6xl'>
            {
              `Since late 2020 I have been trying to learn MERN 
              stack development alongside my studies.
             I search and learned those technologies on my own.
             I'm quietly confident, naturally curious, and perpetually
              working on improving my chops one problem at a time.`
            }
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
              
            </div>
          </div>
          <div className='px-1 text-pink-900 dark:text-pink-500 text-lg font-medium '>
            Tools, Framewokrs Or Libraries:
          </div>
          <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
            <span>ReactJs</span>
            <span>Redux</span>
            <span>NextJs</span>
            <span>TailwindCSS</span>
            <span>Bootstrap</span>
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
              JavaScript
            </div>
          </div>
          <div className='px-1 text-pink-900 dark:text-pink-500 text-lg font-medium '>
            Runtime or Framewokrs:
          </div>
          <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
            <span>NodeJs</span>
            <span>ExpressJs</span>
            
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
              Databases:
            </div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div>
            <div className=' text-pink-900 dark:text-pink-500 text-lg font-medium '>
              Tools:
            </div>
            <div className='flex flex-col text-slate-900 dark:text-slate-300 font-medium px-4 pb-8 pt-2'>
              <span>Git</span>
              <span>GitHub</span>
              {/* <span>Ansible</span> */}
              <span>Docker</span>
              <span>mongoose</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Skills