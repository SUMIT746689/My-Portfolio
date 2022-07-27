import Image from 'next/image'
import React from 'react'

export default function New() {
  return 
    {/*  About My Skills */}
    <>
      <div className='relative flex flex-col justify-center w-screen'>
      <div className=' absolute bg-slate-800 flex justify-center font-medium text-lg text-gray-100 px-4 pt-14 pb-40 text-center'>
        <div className=' text-center max-w-xl'>
          {`Since beginning my journey as a freelance designer over 11 years I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.`}
        </div>
      </div>


      <div className=' min-h-fit flex flex-col justify-center sm:flex-row -top-50 bg-slate-50 p-4 w-10/12 rounded-3xl shadow shadow-slate-900'>
        <div className='text-center sm:border-0 border-b border-gray-500 mt-6'>
          <div className='text-center'>
            <Image className='bg-slate-200 rounded-full' src='/front-end.svg' width='100px' height='100px' alt='Front-End' />
          </div>
          <div className='text-pink-700 text-xl font-semibold pt-8 pb-4'>
            Front-end Developer
          </div>
          <div className='text-slate-900 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 text-lg font-medium '> Languages:</div>
            <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'> 
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              
            </div>
          </div>
          <div className=' text-pink-900 text-lg font-medium '>
            Tools, Framewokrs Or Libraries:
          </div>
          <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'>
            <span>ReactJs</span>
            <span>Redux</span>
            <span>NextJs</span>
            <span>TailwindCSS</span>
            <span>Bootstrap</span>
          </div>
        </div>

        
        <div className=' text-center sm:border-0 border-b border-gray-500 mt-8'>
          <div className='text-center h-28'>
            <Image className='bg-slate-200 rounded-full border-2 border-fuchsia-700' src='/back-end.svg' width='100px' height='100px' alt='Back-end' />
          </div>
          <div  className='text-pink-700 text-xl font-semibold pt-8 pb-4'>
            Back-end Developer
          </div>
          <div className='text-slate-900 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 text-lg font-medium '>
              Languages:
            </div>
            <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'>
              JavaScript
            </div>
          </div>
          <div className=' text-pink-900 text-lg font-medium '>
            Runtime or Framewokrs:
          </div>
          <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'>
            <span>NodeJs</span>
            <span>ExpressJs</span>
            
          </div>
        </div>
        
      
        <div className='text-center'>
          <div className='text-pink-700 text-xl font-semibold pt-8 pb-4'>
            Others
          </div>
          <div className='text-slate-900 font-medium px-4 pb-8'>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
          </div>
          <div>
            <div className=' text-pink-900 text-lg font-medium '>
              Databases:
            </div>
            <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div>
            <div className=' text-pink-900 text-lg font-medium '>
              Tools:
            </div>
            <div className='flex flex-col text-slate-900 font-medium px-4 pb-8 pt-2'>
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>mongoose</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  
}
