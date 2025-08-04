import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Home.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

function ClienForm({setShowClientForm}) {
    
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn'>
      <div className='relative w-full max-w-2xl max-h-[85vh] overflow-y-auto'>
        {/* Main container */}
        <div className='relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 dark:border-slate-700/50'>
          {/* Header */}
          <div className='relative p-4 text-center border-b border-slate-200 dark:border-slate-700'>
            <button
              onClick={() => setShowClientForm(false)}
              className='absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200'
            >
              <AiOutlineCloseCircle className='w-5 h-5' />
            </button>
            
            <h2 className='text-xl font-bold bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent mb-1'>
              Let's Start Your Project
            </h2>
            <p className='text-slate-600 dark:text-slate-400 text-sm'>
              Share your project details and I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form className='p-4 space-y-4'>
            {/* Name and Email */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                  Name *
                </label>
                <input
                  type='text'
                  name='name'
                  required
                  className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400'
                  placeholder='Your full name'
                />
              </div>
              
              <div>
                <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                  Email *
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400'
                  placeholder='your@email.com'
                />
              </div>
            </div>

            {/* Project Type and Budget */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                  Project Type *
                </label>
                <select
                  name='projectType'
                  required
                  className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
                >
                  <option value=''>Select type</option>
                  <option value='frontend'>Frontend</option>
                  <option value='backend'>Backend</option>
                  <option value='fullstack'>Full Stack</option>
                  <option value='mobile'>Mobile App</option>
                  <option value='ecommerce'>E-commerce</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              
              <div>
                <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                  Budget (USD)
                </label>
                <select
                  name='budget'
                  className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
                >
                  <option value=''>Select budget</option>
                  <option value='1000-5000'>$1K - $5K</option>
                  <option value='5000-10000'>$5K - $10K</option>
                  <option value='10000+'>$10K+</option>
                  <option value='discuss'>Let's discuss</option>
                </select>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                Project Details *
              </label>
              <textarea
                name='details'
                rows={3}
                required
                className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 resize-none'
                placeholder='Describe your project, requirements, and any specific technologies...'
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-gradient-to-r from-pink-600 to-sky-600 hover:from-pink-700 hover:to-sky-700 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group text-sm'
            >
              <span>Send Project Details</span>
              <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
              </svg>
            </button>

            {/* Contact Info */}
            <div className='text-center pt-2 border-t border-slate-200 dark:border-slate-700'>
              <p className='text-xs text-slate-500 dark:text-slate-400'>
                Or email directly:{' '}
                <a href='mailto:mehedihasansumit@gmail.com' className='text-pink-600 dark:text-sky-400 hover:underline font-medium'>
                  mehedihasansumit@gmail.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ClienForm