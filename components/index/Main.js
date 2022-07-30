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
      <main id='home' className='z-50 min-h-screen flex flex-col justify-center align-middle px-5 xs:px-10 md:px-28 xl:px-40 2xl:pl-52'>
          <div className=' text-sm sm:text-lg text-green-900 font-bold'>
            Hi, my name is 
          </div>
          <div className='flex flex-wrap text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 my-3 sm:my-6'>
            {my_Name}
          </div>
          <div className='flex w-full flex-wrap text-xl xs:text-2xl  sm:text-4xl lg:text-6xl font-bold text-slate-600 '>
            <div className='flex flex-wrap'>{developer}</div>
            <div className='flex flex-wrap'>{textAnimation(data2)}</div>
          </div>
          <div className='font-bold text-left text-xs xs:text-sm sm:text-lg lg:text-xl max-w-xl 2xl:max-w-2xl my-5 sm:my-10 text-slate-900'>
            I’m a professional front-end and back-end developer.
            I believe in transparency and communication.
            I guide my clients with process and keep them updated with progress.
          </div>
      </main>
      {/* <div className='absolute scale-90 hover:scale-100 duration-500 overflow-hidden  rounded-sm top-52 right-20 backdrop-blur-sm shadow-lg shadow-black'>
        <Image className='border-2 border-green-500' src='/2.png' width='400' height='520' alt='Mehedi Hasan'/>
      </div> */}
      <div className={`${styles.slide_left} absolute right-2 sm:right-5 md:right-10 2xl:right-32 -bottom-2 w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-h-fit `}>
        <Image className='border-2 border-green-500 hover:scale-105 duration-200' src='/2.png' width='400' height='520' alt='Mehedi Hasan'/>
      
      </div>
    </div>
  )
}

export default Main