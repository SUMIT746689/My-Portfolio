import { AiOutlineHome,AiOutlineProject,AiOutlineMessage} from 'react-icons/ai'
import { GiSkills} from 'react-icons/gi'

function Nav() {
  return (
    <div className="fixed z-50 text-xl xs:text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl text-pink-900 w-screen md:w-fit md:h-screen pl-4 lg:pl-7 xl:pl-8 2xl:pl-9 drop-shadow">
        <ul className='flex md:flex-col justify-center align-middle my-auto font-bold w-full md:h-full drop-shadow-lg'>
            <a href='#home'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 hover:shadow-pink-900 drop-shadow bg-white bg-opacity-80 md:bg-opacity-50 hover:scale-105'><AiOutlineHome/></li></a>
            <a href='#skills'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 hover:shadow-pink-900 drop-shadow bg-white bg-opacity-80 md:bg-opacity-50 hover:scale-105'><GiSkills/></li></a>
            <a href='#projects'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 hover:shadow-pink-900 drop-shadow bg-white bg-opacity-80 md:bg-opacity-50 hover:scale-105'><AiOutlineProject/></li></a>
            <a href='#message'><li className='p-2 mr-4 xs:mx-4 my-4 cursor-pointer hover:text-pink-600 duration-100 rounded-full shadow-md shadow-slate-900 hover:shadow-pink-900 drop-shadow bg-white bg-opacity-80 md:bg-opacity-50 hover:scale-105'><AiOutlineMessage/></li></a>
        </ul>
    </div>
  )
}

export default Nav