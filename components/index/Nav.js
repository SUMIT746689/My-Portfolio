import { useEffect, useState } from 'react'
import { AiOutlineHome,AiOutlineProject,AiOutlineMessage} from 'react-icons/ai'
import { GiSkills,GiNightSleep} from 'react-icons/gi'
import { MdOutlineLightMode} from 'react-icons/md'
import { RiComputerLine} from 'react-icons/ri'
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook} from 'react-icons/fi'

function Nav({changeTheme,setChangeTheme}) {
  const data = {
    system : <RiComputerLine />,
    light  : <MdOutlineLightMode/>,
    dark   : <GiNightSleep/>
  }
  const [showThemeCard,setShowThemeCard] = useState(false);
  const [toggleCheckBox,setoggleCheckBox] = useState(false);
  const [showCurrentThemeIcon,setShowCurrentThemeIcon] = useState(data.system);

  useEffect(()=>{
    const theme =JSON.parse(localStorage.getItem('theme'));
    
    if(['light'].includes(theme)) return setShowCurrentThemeIcon(()=>data.light);
    if(['dark'].includes(theme)) return setShowCurrentThemeIcon(()=>data.dark);
    if(['system'].includes(theme)) return setShowCurrentThemeIcon(()=>data.system);
  },[])

  const themeChangeHandle =(mode)=>{
    //light mode
    if(['light'].includes(mode)) return setChangeTheme(()=>false),setShowCurrentThemeIcon(()=>data.light),localStorage.setItem('theme',JSON.stringify('light'));

    //dark mode
    if(['dark'].includes(mode))  return setChangeTheme(()=>true),setShowCurrentThemeIcon(()=>data.dark),localStorage.setItem('theme',JSON.stringify('dark'));

    //system preference mode 
    if(['system'].includes(mode)) { 
      
      if (typeof window !== "undefined") {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          setChangeTheme(()=>true);
        }
        else{
          setChangeTheme(()=>false);
        }
        setShowCurrentThemeIcon(()=>data.system);
        localStorage.setItem('theme',JSON.stringify('system'))
      }
    }
  }

  return (
    <>
    {/* nav bar */}
    <div className="fixed z-10 text-xl xs:text-2xl md:text-2xl lg:text-3xl text-pink-900 dark:text-gray-800 w-screen md:w-fit md:h-screen pl-4 lg:pl-7 xl:pl-8 2xl:pl-9 ">
        <ul className='flex md:flex-col justify-center align-middle my-auto font-bold w-full md:h-full -lg'>
            <a onClick={()=>setShowThemeCard((value)=>false)} href='#home'><li className='p-2 mr-4 md:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 dark:shadow-slate-600 hover:shadow-pink-900 dark:hover:shadow-pink-900 bg-white bg-opacity-80 dark:bg-opacity-60 md:bg-opacity-50 hover:scale-105 backdrop-blur-sm'><AiOutlineHome/></li></a>
            <a onClick={()=>setShowThemeCard((value)=>false)} href='#skills'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 dark:shadow-slate-600 hover:shadow-pink-900 dark:hover:shadow-pink-900 bg-white bg-opacity-80 dark:bg-opacity-60 md:bg-opacity-50 hover:scale-105'><GiSkills/></li></a>
            <a onClick={()=>setShowThemeCard((value)=>false)} href='#projects'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 dark:shadow-slate-600 hover:shadow-pink-900 dark:hover:shadow-pink-900 bg-white bg-opacity-80 dark:bg-opacity-60 md:bg-opacity-50 hover:scale-105'><AiOutlineProject/></li></a>
            <a onClick={()=>setShowThemeCard((value)=>false)} href='#message'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 dark:shadow-slate-600 hover:shadow-pink-900 dark:hover:shadow-pink-900 bg-white bg-opacity-80 dark:bg-opacity-60 md:bg-opacity-50 hover:scale-105'><AiOutlineMessage/></li></a>
            <div onClick={()=>setShowThemeCard((value)=>!value)} htmlFor="checked-toggle" className='relative p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md dark:shadow-slate-600 shadow-slate-900 hover:shadow-pink-900 dark:hover:shadow-pink-900 bg-white dark:bg-opacity-60 bg-opacity-80 md:bg-opacity-50 '>
              
              <div>
                {showCurrentThemeIcon}
              </div>

              <div className={` ${showThemeCard ? '' : 'hidden '} bg-white dark:bg-slate-800 text-sm sm:text-md md:text-lg hover:scale-105 duration-150 text-slate-900 dark:text-slate-300 z-50 absolute top-14 md:top-0 right-0 md:left-16 w-fit rounded-lg overflow-hidden shadow-md shadow-slate-900 dark:shadow-slate-600 `}>
                <div onClick={()=>themeChangeHandle('light')  } className='flex hover:bg-slate-300 dark:hover:bg-slate-900 cursor-pointer px-5 py-2 font-semibold duration-200'><MdOutlineLightMode className=' relative top-1 mr-2 '/>Light</div>
                <div onClick={()=>themeChangeHandle('dark')   } className='flex hover:bg-slate-300 dark:hover:bg-slate-900 cursor-pointer px-5 py-2 font-semibold duration-200'><GiNightSleep className=' relative top-1 mr-2 '/>Dark</div>
                <div onClick={()=>themeChangeHandle('system') } className='flex hover:bg-slate-300 dark:hover:bg-slate-900 cursor-pointer px-5 py-2 font-semibold duration-200'><RiComputerLine className=' relative top-1 mr-2 '/>System</div>
              </div>
            </div>
        </ul>
    </div>
    
    {/* social icon*/}
    <div className='hidden md:fixed z-10 right-0 md:flex md:justify-center align-middle h-full my-auto'>
      <div className='text-2xl font-extrabold flex flex-col xl:mr-8 justify-center text-slate-900 dark:text-slate-400 '>
        <a href='https://github.com/SUMIT746689'><FiGithub className='hover:text-slate-700 dark:hover:text-slate-200 m-4 cursor-pointer duration-150' />    </a>
        <a href='https://www.linkedin.com/in/mehedi-hasan-sumit-103621210'><FiLinkedin className='hover:text-slate-700 dark:hover:text-slate-200 m-4 cursor-pointer duration-150'/>   </a>
        <a href='https://www.instagram.com/mehedi_hasan_sumit/'><FiInstagram className='hover:text-slate-700 dark:hover:text-slate-200 m-4 cursor-pointer duration-150'/>  </a>
        <a href='https://www.facebook.com/mehedihasan.sumit.5'><FiFacebook className='hover:text-slate-700 dark:hover:text-slate-200 m-4 cursor-pointer duration-150'/>   </a>
      </div>
    </div>

    {/* resume buttton */}
    <div className='absolute right-0 top-6 z-50'>
      <a onClick={()=>setShowThemeCard((value)=>false)} href='/Mehedi-Hasan-Resume.pdf' className='p-2 mr-4 sm:mr-8 xs:mx-4 my-4 cursor-pointer border-2 text-slate-900 border-slate-900 font-semibold hover:text-slate-600 hover:border-slate-600 rounded-md duration-150'>Resume</a>
    </div>
    </>
  )
}

export default Nav