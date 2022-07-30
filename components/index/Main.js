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
  const data  = 'I’m.a.Full.stack.or.' 
  const data2 = 'MERN.stack.developer'

  const developer = textAnimation(data);
  return (
    <div className='relative'>
      <main id='home' className='z-50 min-h-screen flex flex-col justify-center align-middle px-5 xs:pl-10 sm:pl-16 md:pl-24 xl:px-40 2xl:pl-52'>
        <div className=' text-sm sm:text-lg text-green-900 font-bold'>
          Hi, my name is 
        </div>
        <div className='flex flex-wrap text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 my-3 sm:my-6'>
          {my_Name}
        </div>
        <div className='flex w-full flex-wrap text-xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-slate-600 '>
          <div className='flex flex-wrap'>{developer}</div>
          <div className='flex flex-wrap'>{textAnimation(data2)}</div>
        </div>
        <div className='font-bold text-left text-xs xs:text-md sm:text-xl lg:text-2xl max-w-xl xl:max-w-3xl my-5 sm:my-6 text-slate-900'>
          I’m a professional front-end and back-end developer.
          I believe in transparency and communication.
          I guide my clients with process and keep them updated with progress.
        </div>
        <div>
          <button className='text-slate-800 border-slate-800 animate-bounce duration-150 hover:bg-slate-200 hover:scale-105 hover:animate-none xs:text-xl font-bold py-2 px-6 border xs:border-4 bg-opacity-10'>Message Me</button>
        </div>
      </main>
      {/* <div className='absolute scale-90 hover:scale-100 duration-500 overflow-hidden  rounded-sm top-52 right-20 backdrop-blur-sm shadow-lg shadow-black'>
        <Image className='border-2 border-green-500' src='/2.png' width='400' height='520' alt='Mehedi Hasan'/>
      </div> */}
      <div className={`${styles.slide_left} absolute right-2 sm:right-5 md:right-10 2xl:right-32 -bottom-2 w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-h-fit grayscale hover:grayscale-0`}>
        <Image className='border-2 border-green-500 hover:scale-105 duration-200' src='/2.png' width='400' height='520' alt='Mehedi Hasan'/>
      </div>
    </div>
  )
}

export default Main