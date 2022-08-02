import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { textAnimation } from '../../utilities/textAnimation'

function Main() {

    // my name animation 
  const my_Name = ('Mehedi Hasan.').replace(' ','-').split('').map((value,index)=>{
    return(
      <p key={index} className={`${value ==='-' ?'opacity-0': ''} ${styles.name}`}>
        {value}
      </p>
    )
  })
  console.log(my_Name)

  //my next text animation
  const data  = 'I’m.a.full.stack.or.' 
  const data2 = 'mern.stack.developer'

  const developer = textAnimation(data);
  return (
    <div className='relative'>
      <main id='home' className='dark:bg-slate-900 min-h-screen flex flex-col justify-center align-middle px-5 xs:pl-10 sm:pl-16 md:pl-24 xl:px-40 2xl:pl-52'>
        <div className=' before:-translate-x-10 duration-700 text-sm sm:text-lg text-green-900 dark:text-sky-300 font-bold'>
          Hi, my name is 
        </div>
        <div className='flex flex-wrap text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-300 my-3 sm:my-6'>
          {my_Name}
        </div>
        <div className='flex w-full flex-wrap text-xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-slate-600 dark:text-slate-500 '>
          <div className='flex flex-wrap'>{developer}</div>
          <div className='flex flex-wrap'>{textAnimation(data2)}</div>
        </div>
        <div className='font-semibold text-left text-xs xs:text-md sm:text-xl lg:text-2xl max-w-xl xl:max-w-3xl my-5 sm:my-6 text-slate-900 dark:text-slate-500'>
          I’m a professional front-end and back-end developer.
          I believe in transparency and communication.
          I guide my clients with process and keep them updated with progress.
        </div>
        <div className=' py-4'>
          <button className=' z-10 text-pink-800 dark:text-sky-300 border-pink-800 dark:border-sky-300 animate-bounce hover:duration-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:animate-none md:text-xl font-semibold py-1 sm:py-2 px-4 sm:px-6 border-2 sm:border-4 bg-opacity-10'>Message Me</button>
        </div>
        <div>
        <a href='/Mehedi-Hasan-Resume.pdf' className='sm:hidden py-1 px-4 my-4 cursor-pointer border-2 text-slate-900 dark:text-slate-400 border-slate-800 dark:border-slate-400 font-semibold hover:text-slate-600 dark:hover:text-slate-300 hover:border-slate-600 dark:hover:border-slate-300 duration-150'>Resume</a>
        </div>
      </main>
      <div className={`${styles.slide_left} absolute right-2 sm:right-5 md:right-10 2xl:right-32 -bottom-2 w-40 sm:w-48 md:w-48 lg:w-64 xl:w-72 max-h-fit grayscale hover:grayscale-0 `}>
        <Image className=' hover:scale-105 duration-200 dark:opacity-80' src='/2.png' width='400' height='520' alt='Mehedi Hasan'/>
      </div>
    </div>
  )
}

export default Main