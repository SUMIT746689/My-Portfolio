import {useRouter} from 'next/router';

export default function PageId() {
    const router = useRouter()
    const {pageId} = router.query
    console.log(pageId);

  return (
    <main id='home' className='min-h-screen flex flex-col justify-center align-middle px-5 xs:px-10 md:px-20'>
        <div className=' text-sm sm:text-lg text-green-900 font-bold'>
          Hi, my name is 
        </div>
        <div className='flex flex-wrap text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 my-3 sm:my-6'>
          asfafsaf
        </div>
        <div className='flex w-full flex-wrap text-xl xs:text-2xl  sm:text-4xl lg:text-6xl font-bold text-slate-600 '>
          <div className='flex flex-wrap'>asfafaf asf afdasf af </div>
          <div className='flex flex-wrap'>asf safd a   sfsfsdfa sd </div>
        </div>
        <div className='font-bold text-left text-xs xs:text-sm sm:text-lg max-w-xl my-5 sm:my-10 text-slate-900'>
        I’m a professional front-end and back-end developer.
         I believe in transparency and communication.
         I guide my clients with process and keep them updated with progress.
        </div>
    </main>
  )
}
