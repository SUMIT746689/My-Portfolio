import React from 'react'
import Image from 'next/image'
import logo from '../../asset/favicon.ico'
import styles from '../../styles/Home.module.css'
import { FiFacebook ,FiGithub, FiLinkedin, FiInstagram, } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight} from 'react-icons/bi';

function Footer({setShowClientForm}) {
  return (
    <footer className='relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 duration-150 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-gradient-to-r from-pink-500 to-sky-500'></div>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Call to Action Card */}
      <div className='relative -top-16 z-10'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 p-1 rounded-2xl shadow-2xl'>
            <div className='bg-white dark:bg-slate-900 rounded-xl p-8 sm:p-12 text-center'>
              <div className='mb-6'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent mb-4'>
                  Let's Build Something Amazing Together
                </h2>
                <p className='text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed'>
                  Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences.
                  Let's discuss your project over a virtual coffee!
                </p>
              </div>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <button
                  onClick={()=>setShowClientForm((value)=>!value)}
                  className='group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden'
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    <span>Start Your Project</span>
                    <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                    </svg>
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-sky-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </button>
                
                <a
                  href='mailto:mehedihasansumit@gmail.com'
                  className='px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-pink-500 dark:hover:border-sky-400 hover:text-pink-600 dark:hover:text-sky-400 transition-all duration-300 flex items-center gap-2'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Footer Info */}
      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center space-y-8'>
          {/* Social Links */}
          <div className='flex space-x-6'>
            {[
              { href: 'https://github.com/mehedihasansumit', icon: FiGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/mehedi-hasan-103621210', icon: FiLinkedin, label: 'LinkedIn' },
              { href: 'https://www.instagram.com/mehedi_hasan_sumit/', icon: FiInstagram, label: 'Instagram' },
              { href: 'https://www.facebook.com/mehedihasan.sumit.5', icon: FiFacebook, label: 'Facebook' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group p-3 bg-slate-800 dark:bg-slate-700 rounded-full hover:bg-gradient-to-r hover:from-pink-600 hover:to-sky-600 transition-all duration-300 transform hover:scale-110'
                aria-label={social.label}
              >
                <social.icon className='w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300' />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className='text-center space-y-2'>
            <p className='text-slate-400 dark:text-slate-500 text-sm'>
              📍 Trimohoni, Khilgaon, Dhaka 1214, Bangladesh
            </p>
            <p className='text-slate-400 dark:text-slate-500 text-sm'>
              📧 mehedihasansumit@gmail.com | 📱 +8801776912033
            </p>
          </div>

          {/* Copyright */}
          <div className='border-t border-slate-700 dark:border-slate-600 pt-8 w-full text-center'>
            <p className='text-slate-400 dark:text-slate-500 text-sm'>
              © 2024 Mehedi Hasan. Crafted with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer