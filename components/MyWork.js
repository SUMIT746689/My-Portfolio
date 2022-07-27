import Image from 'next/image'
import React from 'react'

function MyWork() {
  return (
    <div className='mb-20 text-center'>
        <div className=' text-slate-900 font-bold text-2xl my-4'>
            My Recent Works 
        </div>
        <div className='text-slate-800 font-medium text-lg'>
            Here are a few past projects i have worked on.
        </div>
        <div className='flex flex-wrap'>
            <div >
                <h1>Total Solution</h1>
                <h1>An e-commerce web applicaion</h1>
                <div>
                    <Image src={'/total-solution.png'} width='200' height='350' alt='Total Solution'/>
                </div>
                <div>
                    <div>
                        Features:
                    </div>
                    <div>
                        Special Features:
                    </div>
                </div>
                <div>
                    <div>
                        Features:
                    </div>
                    <div>
                        Special Features:
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyWork