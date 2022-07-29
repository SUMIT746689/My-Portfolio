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
  const developer = textAnimation('Heollosdsfa')
  return (
    <main id='home' className='h-screen flex flex-col justify-center align-middle sm:px-24 px-10'>
        <div className='text-lg text-green-900 font-bold'>
          Hi, my name is 
        </div>
        <div className='flex text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 my-3 sm:my-6'>
          {my_Name}
        </div>
        <div className='flex flex-wrap text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-600 '>
          {developer}
        </div>
        <div className='font-bold text-left sm:text-lg max-w-xl my-5 sm:my-10 text-slate-900'>
        I am a professional front-end and back-end developer. I believe in transparency and communication. I guide my clients with process and keep them updated with progress.
        </div>
    </main>
  )
}

export default Main