import React from 'react'
import Image from 'next/image'
import logo from '../../asset/favicon.ico'
import styles from '../../styles/Home.module.css'
import { FiFacebook ,FiGithub, FiLinkedin, FiInstagram, } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight} from 'react-icons/bi';

function Footer({setShowClientForm}) {
  return (
    <footer className=' bg-cyan-700 border-t border-slate-500 dark:bg-slate-900 py-6 duration-150'>
        <div className='relative -top-20 text-center py-7 mx-auto w-5/6 bg-cyan-600 dark:bg-slate-800 shadow-md dark:shadow-md shadow-slate-700 dark:shadow-black rounded-xl'>
          <h1 className=' text-slate-100 font-bold text-lg sm:text-xl md:text-2xl font-mono'>Let’s Start a project</h1>
          <h3 className=' px-4 py-8 text-white text-sm sm:text-base max-w-sm sm:max-w-md m-auto'>
            Interested in working together ? We should queue up a time to chat. I’ll buy the coffee.
          </h3>
          <button onClick={()=>setShowClientForm((value)=>!value)} className=' duration-150 text-gray-50 cursor-pointer border-2 bg-gradient-to-r from-cyan-400 dark:from-sky-700 to-blue-500 dark:to-slate-800 hover:from-blue-500 dark:hover:from-sky-600 hover:to-cyan-400 dark:hover:to-slate-800 sm:px-7 px-5 py-2 sm:py-3 text-md sm:text-lg font-mono font-semibold rounded-full hover:scale-105'>
            Let’s do this
          </button>
        </div>
        <div className=' text-xl font-extrabold flex my-6 justify-center text-slate-300 dark:text-slate-400 duration-150 '>
          <a href='https://github.com/SUMIT746689'><FiGithub className='hover:text-slate-50 mx-4 cursor-pointer' />    </a>
          <a href='https://www.linkedin.com/in/mehedi-hasan-sumit-103621210'><FiLinkedin className='hover:text-slate-50 mx-4 cursor-pointer'/>   </a>
          <a href='https://www.instagram.com/mehedi_hasan_sumit/'><FiInstagram className='hover:text-slate-50 mx-4 cursor-pointer'/>  </a>
          <a href='https://www.facebook.com/mehedihasan.sumit.5'><FiFacebook className='hover:text-slate-50 mx-4 cursor-pointer'/>   </a>
        </div>
        <div className='text-center text-slate-200 dark:text-slate-300 font-semibold text-md pb-5'> 
          Designed & Built by Mehedi Hasan
        </div>
    </footer>
  )
}

export default Footer