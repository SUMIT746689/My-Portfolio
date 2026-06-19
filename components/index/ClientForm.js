'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { FiSend, FiMail } from 'react-icons/fi';

function ClientForm({ setShowClientForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowClientForm(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowClientForm(false)}
        className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm'
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className='relative w-full max-w-lg max-h-[90vh] overflow-hidden'
        >
          {/* Background Gradient Card */}
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl'></div>

          {/* Main Container */}
          <div className='relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden'>
            {/* Header with Gradient */}
            <div className='relative bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 px-5 py-4 sm:px-6 sm:py-5'>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowClientForm(false)}
                className='absolute top-3 right-3 p-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-colors duration-200'
                aria-label='Close form'
              >
                <AiOutlineClose className='w-5 h-5' />
              </motion.button>

              <div className='pr-8'>
                <h2 className='text-xl sm:text-2xl font-bold text-white mb-1'>
                  {"Let's Work Together"}
                </h2>
                <p className='text-white/90 text-xs sm:text-sm'>
                  {"Share your project details and I'll respond within 24 hours"}
                </p>
              </div>
            </div>

            {/* Form Content */}
            <div className='overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar'>
              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className='p-8 sm:p-10 text-center'
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                    className='mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 mb-4 shadow-lg'
                  >
                    <svg className='h-8 w-8 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                    </svg>
                  </motion.div>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-slate-100 mb-2'>Thank You!</h3>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>
                    {"Your message has been sent successfully. I'll get back to you soon."}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className='p-5 sm:p-6 space-y-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Name and Email */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    <div>
                      <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>
                        Name <span className='text-cyan-500'>*</span>
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400'
                        placeholder='John Doe'
                      />
                    </div>

                    <div>
                      <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>
                        Email <span className='text-cyan-500'>*</span>
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400'
                        placeholder='john@example.com'
                      />
                    </div>
                  </div>

                  {/* Project Type and Budget */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    <div>
                      <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>
                        Project Type <span className='text-cyan-500'>*</span>
                      </label>
                      <select
                        name='projectType'
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className='w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
                      >
                        <option value=''>Select type</option>
                        <option value='frontend'>Frontend Development</option>
                        <option value='backend'>Backend Development</option>
                        <option value='fullstack'>Full Stack Project</option>
                        <option value='mobile'>Mobile Application</option>
                        <option value='ecommerce'>E-commerce Website</option>
                        <option value='api'>API Development</option>
                        <option value='consulting'>Technical Consulting</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>
                        Budget (USD)
                      </label>
                      <select
                        name='budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
                      >
                        <option value=''>Select range</option>
                        <option value='1000-5000'>$1K - $5K</option>
                        <option value='5000-10000'>$5K - $10K</option>
                        <option value='10000-25000'>$10K - $25K</option>
                        <option value='25000+'>$25K+</option>
                        <option value='discuss'>{"Let's discuss"}</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className='block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'>
                      Project Details <span className='text-cyan-500'>*</span>
                    </label>
                    <textarea
                      name='details'
                      value={formData.details}
                      onChange={handleChange}
                      rows={3}
                      required
                      className='w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 resize-none'
                      placeholder='Tell me about your project, timeline, and requirements...'
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className='w-4 h-4' />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Direct Email Link */}
                  <div className='flex items-center justify-center gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400'>
                    <FiMail className='w-3.5 h-3.5' />
                    <span>Or email:</span>
                    <a
                      href='mailto:mehedihasansumit@gmail.com'
                      className='text-cyan-600 dark:text-cyan-400 hover:underline font-medium transition-colors'
                    >
                      mehedihasansumit@gmail.com
                    </a>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </AnimatePresence>
  )
}

export default ClientForm;
