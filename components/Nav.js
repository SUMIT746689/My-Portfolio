import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../asset/favicon.ico'
import styles from '../styles/Home.module.css'
import { FiFacebook ,FiGithub, FiLinkedin, FiInstagram, } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight} from 'react-icons/bi';
import { useState } from 'react';
import Footer from '../components/Footer';

function Nav() {

    const [menuOpen,setMenuOpen] = useState(false);

  return (
    <>
    {/* for large device navbar */}
    <nav className='z-40 hidden sm:flex justify-between px-8 sm:px-11 lg:px-20 xl:px-28 fixed top-0 backdrop-blur-lg w-screen'>
        <div className='flex text-slate-900 py-2 lg:py-4 font-medium text-xl md:text-2xl text-center uppercase '>
          <Image src={logo} width='40px' height='40px' alt='Mehedi Portfolio' />
        </div>
        <ul className='w-1/2 font-semibold text-center flex justify-end uppercase text-base md:text-lg text-slate-900'>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Home</li>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>About</li>
          <li className='cursor-pointer px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Contact</li>
        </ul>
      </nav>

      {/* for small device navbar */}
      <nav className='z-40 sm:hidden flex justify-between px-8 sm:px-11 lg:px-20 xl:px-28 fixed w-screen backdrop-blur-lg'>
        <div className='flex text-slate-900 p-2 lg:py-4 font-medium text-xl md:text-2xl text-center uppercase '>
          
          <Image src={logo} width='40px' height='40px' alt='Mehedi Portfolio' />
        </div>
        <div className=''>
          <BiMenuAltRight onClick={()=> setMenuOpen((value)=>!value)} className={ `${menuOpen ? 'hidden': ''} text-4xl mx-4 duration-150 rounded-lg hover:bg-slate-300 text-slate-900 my-2 cursor-pointer`}/>
        </div>
        <ul className={ `${!menuOpen ? '-right-40 opacity-0 ': 'right-0 opacity-100 '} shadow-md shadow-slate-500 fixed duration-400 z-50 top-0  h-screen font-semibold text-center flex flex-col justify-start uppercase text-base md:text-lg text-slate-900 bg-white backdrop-blur-25 duration-150`}>
          <li className='relative right-2 text-right py-4 lg:py-4  duration-150'>
            <AiOutlineCloseCircle onClick={()=> setMenuOpen((value)=>!value)} className='absolute text-center right-3 top-2 text-3xl'/>
          </li>
          <li className='border-y w-44 cursor-pointer text-left mt-4 px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Home</li>
          <li className='border-y w-44 cursor-pointer text-left px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>About</li>
          <li className='border-y w-44 cursor-pointer text-left px-6 md:px-8 py-3 lg:px-12 lg:py-4 hover:bg-slate-300 duration-150 backdrop-blur-md '>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Nav