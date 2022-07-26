import Head from 'next/head'
import Image from 'next/image'
import logo from '../asset/favicon.ico'
import styles from '../styles/Home.module.css'
import { FiFacebook ,FiGithub, FiLinkedin, FiInstagram, } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight} from 'react-icons/bi';
import { useState } from 'react';
export default function Home() {

  const [menuOpen,setMenuOpen] = useState(false);

  const myName = 'Mehedi Hasan';
  const splitMyName = myName.split('');
  console.log(splitMyName);

  const name = splitMyName.map((value,index)=>{
    return(
    <div key={index} className='hover:bg-name-text bg-cover'>
      {value}
    </div>
  )})

  return (
    <div className=' bg-slate-50 min-h-screen'>
      <Head>
        <title>My Portfolio</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* for large device navbar */}
      <nav className='z-50 hidden sm:visible sm:flex justify-between px-8 sm:px-11 lg:px-20 xl:px-28 sticky top-0  backdrop-blur-lg'>
        <div className='flex text-slate-900 py-2 lg:py-4 font-medium text-xl md:text-2xl text-center uppercase '>
          <Image src={logo} width='40px' height='40px' alt='Mehedi Portfolio' />
        </div>
        <ul className='w-1/2 font-semibold text-center flex justify-end uppercase text-base md:text-lg text-slate-900'>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Home</li>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>About</li>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Contact</li>
        </ul>
      </nav>

      {/* for small device navbar */}
      <nav className=' z-50 sm:hidden flex justify-between px-8 sm:mx-11 lg:mx-20 xl:mx-28 sticky top-0 backdrop-blur-md'>
        <div className='flex text-slate-900 p-2 lg:py-4 font-medium text-xl md:text-2xl text-center uppercase '>
          <Image src={logo} width='40px' height='40px' alt='Mehedi Portfolio' />
        </div>
        <div className=''>
          <BiMenuAltRight onClick={()=> setMenuOpen((value)=>!value)} className='text-4xl m-4 duration-150 rounded-lg hover:bg-slate-300 text-slate-900 my-3 cursor-pointer'/>
        </div>
        <ul className={ `${!menuOpen ? '-right-40 opacity-0 hidden': '-right-8 opacity-100 '} duration-400 z-50 absolute top-0  h-screen font-semibold text-center flex flex-col justify-start uppercase text-base md:text-lg text-slate-900 bg-slate-400 backdrop-blur-25`}>
          <li className=' relative text-right py-4 lg:py-4  duration-150'>
            <AiOutlineCloseCircle onClick={()=> setMenuOpen((value)=>!value)} className='absolute text-center right-3 top-2 text-3xl'/>
          </li>
          <li className='w-44 cursor-pointer text-left mt-4 px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Home</li>
          <li className='w-44 cursor-pointer text-left px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>About</li>
          <li className='w-44 cursor-pointer text-left px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Contact</li>
        </ul>
      </nav>

      <main className='mt-28 flex flex-col justify-center sm:px-24 px-10'>
        <div className='text-lg text-green-900 font-bold my-2'>
          Hi, my name is 
        </div>
        <div className='text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 my-3 sm:my-6'>
          Mehedi Hasan.
        </div>
        <div className='text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-600 '>
          A full stack or MERN stack developer. 
        </div>
        <div className='font-bold text-base sm:text-lg max-w-xl my-5 sm:my-10 text-slate-900'>
        I am a professional front-end and back-end developer. I believe in transparency and communication. I guide my clients with process and keep them updated with progress.
        </div>
      </main>

      {/*  About My Skills */}
      <div className='relative flex justify-center'>
        <div className='bg-slate-800 font-medium tracking-wide text-lg text-gray-100 px-4 pt-14 pb-40 text-center'>
        Since beginning my journey as a freelance designer over 11 years I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
        </div>

        <div className='absolute top-52 bg-slate-50 p-4 w-10/12 rounded-3xl'>
          <div className=''>
            <div className=''>
              
              <Image className='' src='/front-end.svg' width='100px' height='100px' alt='Front-End' />
            </div>
            <div>
              Front-end Developer
            </div>
            <div>
              I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </div>
            <div>
              <div> Languages:</div>
              <div> HTML5, CSS3, JavaScript</div>
            </div>
            <div>
              Framewokrs Or Libraries:
            </div>
            <div>
              <span>ReactJs</span>
              <span>NextJs</span>
              <span>TailwindCSS</span>
              <span>Bootstrap</span>
            </div>
          </div>
          
          <div>
            <div>
              Back-end Developer
            </div>
            <div>
              <div>
                Languages:
              </div>
              <div>
                JavaScript
              </div>
            </div>
            <div>
              Runtime or Framewokrs:
            </div>
            <div>
              NodeJs
              ExpressJs
            </div>
          </div>
          
        
          <div>
            <div>
              Others
            </div>
            <div>
              <div>
                Databases:
              </div>
              <div>
                <span>SQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div>
              <div>
                Tools:
              </div>
              <div>
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>mongoose</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* footer area */}
      <footer>
        <div className=' text-xl font-extrabold flex my-6 justify-center text-slate-900 duration-150 '>
          <a href='https://github.com/SUMIT746689'><FiGithub className='hover:text-slate-700 mx-4 cursor-pointer' />    </a>
          <a href='https://www.linkedin.com/in/mehedi-hasan-sumit-103621210'><FiLinkedin className='hover:text-slate-700 mx-4 cursor-pointer'/>   </a>
          <a href='https://www.instagram.com/mehedi_hasan_sumit/'><FiInstagram className='hover:text-slate-700 mx-4 cursor-pointer'/>  </a>
          <a href='https://www.facebook.com/mehedihasan.sumit.5'><FiFacebook className='hover:text-slate-700 mx-4 cursor-pointer'/>   </a>
        </div>
        <div className='text-center text-slate-900 font-bold text-sm pb-5'> 
          Designed & Built by Mehedi Hasan
        </div>
      </footer>
    </div>
  )
}
