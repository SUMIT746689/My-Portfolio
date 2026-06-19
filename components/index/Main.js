'use client';

import styles from '../../styles/Home.module.css'
import { textAnimation } from '../../utilities/textAnimation'
import { motion } from "motion/react"
import { FiMail } from 'react-icons/fi'
import { useTranslations } from '../../hooks/useTranslations'

function Main() {
  const { t } = useTranslations();
  // Name animation with enhanced styling
  // Use Intl.Segmenter for proper Unicode grapheme splitting (Bangla support)
  const nameText = t('main.name').replace(' ', '-');
  const nameCharacters = typeof Intl !== 'undefined' && Intl.Segmenter
    ? Array.from(new Intl.Segmenter().segment(nameText)).map(s => s.segment)
    : Array.from(nameText);

  const my_Name = nameCharacters.map((value, index) => {
    return (
      <motion.p
        key={index}
        className={`${value === '-' ? 'opacity-0' : ''} ${styles.name} text-cyan-700 dark:text-cyan-400`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
      >
        {value}
      </motion.p>
    )
  })

  // Profession animation
  const data = t('main.profession').replace(/\s/g, '.')
  const developer = textAnimation(data);

  return (
    <div className='relative overflow-hidden'>
      {/* Decorative background elements */}
      <div className='absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>
      <div className='absolute bottom-0 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 blur-3xl'></div>

      <main
        id='home'
        className='bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm min-h-screen flex flex-col justify-center align-middle px-5 xs:pl-10 sm:pl-16 md:pl-24 xl:px-40 2xl:pl-52'
      >
        {/* Greeting */}
        <motion.div
          className='text-sm sm:text-lg text-cyan-600 dark:text-cyan-300 font-bold mb-2'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('main.greeting')}
        </motion.div>

        {/* Name */}
        <div className='flex flex-wrap text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold my-3 sm:my-6'>
          {my_Name}
        </div>

        {/* Profession */}
        <motion.div
          className='flex w-full flex-wrap text-xl xs:text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-slate-600 dark:text-slate-500 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className='flex flex-wrap'>{developer}</div>
        </motion.div>

        {/* Current Role */}
        <motion.div
          className='font-medium text-left text-xs xs:text-sm sm:text-lg lg:text-xl max-w-2xl xl:max-w-4xl my-4 sm:my-5 text-slate-700 dark:text-slate-400'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className='mb-3'>
            <span className='text-cyan-700 dark:text-cyan-400 font-bold'>{t('main.currentRole')}</span> {t('main.currentRoleTitle')}
          </div>
          <div className='text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed'>
            {t('main.description')}
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className='flex gap-4 py-4 flex-wrap'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='mailto:mehedihasansumit@gmail.com'
            className='flex gap-2 justify-center align-middle py-1 px-4 cursor-pointer border-2 text-cyan-700 dark:text-cyan-400 border-cyan-700 dark:border-cyan-400 font-semibold rounded-lg hover:bg-cyan-700/10 dark:hover:bg-cyan-400/10 transition-all duration-300'
          >
            <FiMail className='w-5 h-5 my-auto' />
            {t('main.sendEmail')}
          </motion.a>

          <a
            href='/Mehedi-Hasan-Resume.pdf'
            className='sm:hidden py-1 px-4 cursor-pointer border-2 text-cyan-700 dark:text-cyan-400 border-cyan-700 dark:border-cyan-400 font-semibold rounded-lg hover:bg-cyan-700/10 dark:hover:bg-cyan-400/10 transition-all duration-300'
          >
            {t('main.resume')}
          </a>
        </motion.div>
      </main>

      {/* Optional image (commented out) */}
      {/* <motion.div 
        className={`${styles.slide_left} absolute right-2 sm:right-5 md:right-10 2xl:right-32 -bottom-2 w-40 sm:w-48 md:w-48 lg:w-64 xl:w-72 max-h-fit grayscale hover:grayscale-0`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Image 
          className='hover:scale-105 duration-200 dark:opacity-80 rounded-lg' 
          src='/2.png' 
          width='400' 
          height='520' 
          alt='Mehedi Hasan'
          priority
        />
      </motion.div> */}
    </div>
  )
}

export default Main