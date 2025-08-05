import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
        className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className='relative w-full max-w-2xl max-h-[85vh] overflow-y-auto'
        >
          {/* Main container */}
          <div className='relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 dark:border-slate-700/50'>
            {/* Header */}
            <div className='relative p-4 text-center border-b border-slate-200 dark:border-slate-700'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowClientForm(false)}
                className='absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200'
                aria-label='Close form'
              >
                <AiOutlineCloseCircle className='w-5 h-5' />
              </motion.button>
              
              <h2 className='text-xl font-bold bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent mb-1'>
                Let's Start Your Project
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                Share your project details and I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='p-8 text-center'
              >
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/50 mb-4'>
                  <svg className='h-6 w-6 text-green-600 dark:text-green-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <h3 className='text-lg font-medium text-slate-900 dark:text-slate-100 mb-2'>Thank you!</h3>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Your project details have been submitted successfully. I'll contact you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className='p-4 space-y-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name and Email */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  <div>
                    <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                      Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
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
                    <label className='block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1'>
                      Budget (USD)
                    </label>
                    <select
                      name='budget'
                      value={formData.budget}
                      onChange={handleChange}
                      className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100'
                    >
                      <option value=''>Select budget</option>
                      <option value='1000-5000'>$1K - $5K</option>
                      <option value='5000-10000'>$5K - $10K</option>
                      <option value='10000-25000'>$10K - $25K</option>
                      <option value='25000+'>$25K+</option>
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
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    required
                    className='w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-sky-400 focus:border-transparent outline-none transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-400 resize-none'
                    placeholder='Describe your project, requirements, timeline, and any specific technologies...'
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-pink-600 to-sky-600 text-white font-medium py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className='animate-spin -ml-1 mr-2 h-4 w-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>Send Project Details</span>
                      <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                      </svg>
                    </>
                  )}
                </motion.button>

                {/* Contact Info */}
                <div className='text-center pt-2 border-t border-slate-200 dark:border-slate-700'>
                  <p className='text-xs text-slate-500 dark:text-slate-400'>
                    Or email directly:{' '}
                    <a href='mailto:mehedihasansumit@gmail.com' className='text-pink-600 dark:text-sky-400 hover:underline font-medium'>
                      mehedihasansumit@gmail.com
                    </a>
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ClientForm;