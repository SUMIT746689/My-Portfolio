import React from 'react'
import Image from 'next/image'
import logo from '../asset/favicon.ico'
import styles from '../styles/Home.module.css'
import { FiFacebook ,FiGithub, FiLinkedin, FiInstagram, } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight} from 'react-icons/bi';

function Footer({setShowClientForm}) {
  return (
    <footer className=' bg-cyan-700 py-6 duration-150'>
        <div className='relative -top-20 text-center py-7 mx-auto w-5/6 bg-cyan-600 shadow-md shadow-slate-800 rounded-xl'>
          <h1 className=' text-slate-100 font-bold text-2xl font-mono'>{`Let's Start a project`}</h1>
          <h3 className=' px-4 py-8 text-white '>
            Interested in working together ? We should queue up a time to chat. I’ll buy the coffee.
          </h3>
          <button onClick={()=>setShowClientForm((value)=>!value)} className=' duration-150 text-gray-50 cursor-pointer border-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 px-7 py-3 text-xl font-mono font-semibold rounded-full hover:scale-105'>
            {`Let's do this`}
          </button>
        </div>
        <div className=' text-xl font-extrabold flex my-6 justify-center text-slate-300 duration-150 '>
          <a href='https://github.com/SUMIT746689'><FiGithub className='hover:text-slate-50 mx-4 cursor-pointer' />    </a>
          <a href='https://www.linkedin.com/in/mehedi-hasan-sumit-103621210'><FiLinkedin className='hover:text-slate-50 mx-4 cursor-pointer'/>   </a>
          <a href='https://www.instagram.com/mehedi_hasan_sumit/'><FiInstagram className='hover:text-slate-50 mx-4 cursor-pointer'/>  </a>
          <a href='https://www.facebook.com/mehedihasan.sumit.5'><FiFacebook className='hover:text-slate-50 mx-4 cursor-pointer'/>   </a>
        </div>
        <div className='text-center text-slate-200 font-semibold text-md pb-5'> 
          Designed & Built by Mehedi Hasan
        </div>
    </footer>
  )
}

export default Footer