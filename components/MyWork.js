import Image from 'next/image'

function MyWork() {
    const projects = [
        {
            name: 'Total Solution',
            title: 'An e-commerce web applicaion',
            features: 
            [
                'Authentication',
                'Verify using mobile OTP',
                'Fotgot password reset',
                'Login user Profile',
                'Dashboad with create, edit and delete products',
                'and store products data in database',
                'upload products images in the cloud storage',
                'Search Products',
                'find products by category'
            ],
            special_features: 
            [
                'Voice recognition system',
                '2-step Authentication',
                'Existing user verify when trying to login using the new browser on any device',
                'Dark mode enable or disable using user device default preference',
            ]
        },
        {
            name : 'Raw NodeJs CRUD project',
            title : 'Using raw node build create, update, delete operations',
            features:
            [
                'Login',
                'signup', 
                'create new user', 
                'add user image and upload in server', 
                'previous chat', 
                'auto update chat', 
                'share image with message and save in server'
            ],
            special_features: 
            [
                'Live chat using Socket.io',
                'user send to image', 
                'user chat with available users', 
                'created option available for new user'
            ]
        },
        {
            name : 'A chat Application',
            title : 'A chatting application with live message using socket.io',
            features:
            [
                'Login',
                'signup', 
                'create new user', 
                'add user image and upload in server', 
                'previous chat', 
                'auto update chat', 
                'share image with message and save in server'
            ],
            special_features: 
            [
                'Live chat using Socket.io',
                'user send to image', 
                'user chat with available users', 
                'created option available for new user'
            ]
        }
    ]
  return (
    <div className='mb-20 text-center'>
        <div className=' text-slate-900 font-bold text-3xl my-4'>
            My Recent Works 
        </div>
        <div className='text-slate-800 font-medium text-lg'>
            Here are a few past projects i have worked on.
        </div>
        <div className='flex flex-wrap justify-center align-middle gap-4 mx-2 mt-10 '>
           {projects.map ((project,index)=>(
             <div key={index} className='max-w-md shadow-md shadow-slate-900 rounded-2xl py-10 sm:w-1/2 lg:w-1/3 2xl:w-1/4'>
                <h1 className='text-slate-900 font-bold text-2xl my-2'>Total Solution</h1>
                <h1 className='text-slate-800 font-medium text-lg mb-4'>An e-commerce web applicaion</h1>
                <div>
                    <Image className='bg-cover' src={'/total-solution.png'} width='400' height='650' alt='Total Solution'/>
                </div>
                <div className='text-left px-4 my-3'>
                    <div className='text-lg font-bold text-slate-700 p-4'>
                        Features:
                    </div>
                    <div className=' text-left px-4'>
                        <ul role='list' className=" list-disc list-outside marker:text-green-600 font-medium">
                            <li>Authentication</li>
                            <li>Verify using mobile OTP</li>
                            <li>Fotgot password reset</li>
                            <li>Login user Profile</li>
                            <li>Dashboad with create, edit and delete products <br></br>and store products data in database</li>
                            <li>upload products images in the cloud storage</li>
                            <li>Search Products</li>
                            <li>find products by category</li>
                        </ul>
                    </div>
                </div>
                <div className='text-left px-4'> 
                    <div className='text-lg font-bold text-slate-700 p-4'>
                        Special Features:
                    </div>
                    <div className='text-left marker:text-green-600 px-4'>
                        <ul  className=" list-disc list-outside marker:bg-green-500 font-medium">
                            <li >Voice recognition system</li>
                            <li>2-step Authentication</li>
                            <li>Existing user verify when trying to login using the new browser on any device</li>
                            <li>Dark mode enable or disable using user device default preference</li>
                        </ul>
                    </div>
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default MyWork