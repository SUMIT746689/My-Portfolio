import React from 'react'
import Image from 'next/image'
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Footer({ setShowClientForm }) {
  const socialLinks = [
    { href: 'https://github.com/mehedihasansumit', icon: FiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mehedi-hasan-103621210', icon: FiLinkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/mehedi_hasan_sumit/', icon: FiInstagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/mehedihasan.sumit.5', icon: FiFacebook, label: 'Facebook' }
  ]

  return (
    <footer className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-sky-500 animate-gradient-shift'></div>
      </div>
      <div className='absolute inset-0' style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Call to Action Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative -top-16 z-10'
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 p-1 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500'>
            <div className='bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-8 sm:p-12 text-center'>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className='mb-6'
              >
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent mb-4'>
                  {"Let's Build Something Amazing Together"}
                </h2>
                <p className='text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed'>
                  {`Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences.
                  Let's discuss your project over a virtual coffee!`}
                </p>
              </motion.div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowClientForm((value) => !value)}
                  className='group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    <span>Start Your Project</span>
                    <motion.svg 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className='w-5 h-5' 
                      fill='none' 
                      stroke='currentColor' 
                      viewBox='0 0 24 24'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </motion.svg>
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-sky-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href='mailto:mehedihasansumit@gmail.com'
                  className='px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-pink-500 dark:hover:border-sky-400 hover:text-pink-600 dark:hover:text-sky-400 transition-all duration-300 flex items-center gap-2'
                >
                  <FiMail className='w-5 h-5' />
                  Send Email
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Links & Footer Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'
      >
        <div className='flex flex-col items-center space-y-8'>
          {/* Social Links */}
          <div className='flex flex-wrap justify-center gap-4'>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group p-3 bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-sky-600 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20'
                aria-label={social.label}
              >
                <social.icon className='w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300' />
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className='text-center space-y-2'
          >
            <p className='text-slate-400 dark:text-slate-500 text-sm'>
              📍 Trimohoni, Khilgaon, Dhaka 1214, Bangladesh
            </p>
            <p className='text-slate-400 dark:text-slate-500 text-sm'>
              📧 mehedihasansumit@gmail.com | 📱 +8801776912033
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className='border-t border-slate-700/50 dark:border-slate-600/50 pt-8 w-full text-center'
          >
            <p className='text-slate-400/80 dark:text-slate-500/80 text-sm'>
              © {new Date().getFullYear()} Mehedi Hasan. Crafted with ❤️ using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </motion.div>

    </footer>
  )
}

export default Footer