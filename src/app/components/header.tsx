'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  //Lock the body of page while scrolling
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showMenu])

  return (
    <header className="w-full bg-white px-4 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}

      <div className='flex items-center gap-2'>
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={50}
        height={50}
      />

      <div>
        <h1 className='text-2xl font-semibold'>CareLoop</h1>
      </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center text-center 
       justify-center gap-6 text-black font-semibold">
        <Link href="/" className='hover:bg-blue-100 p-2 rounded-xl'>Home</Link>
        <a href="/service" className='hover:bg-blue-100 p-2 rounded-xl'>Service</a>
        <a href="/register" className='hover:bg-blue-100 p-2 rounded-xl'>Register</a>
        <a href="/contact" className='hover:bg-blue-100 p-2 rounded-xl'>Contact</a>
        <a href="/about" className='hover:bg-blue-100 p-2 rounded-xl'>About</a>
      </nav>

      <a href='/register'
      className='hidden md:flex text-lg bg-gradient-to-b rounded-lg from-blue-600 to-blue-800 p-2 px-6 text-white'>Apply Now</a>

      {/* Hamburger Icon */}
      <RxHamburgerMenu
        className="text-3xl cursor-pointer md:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
      />

      {/* Mobile Menu */}
      {showMenu && (
        
        <div className='absolute md:hidden flex flex-col text-xl top-0 right-0 w-85 h-screen bg-white  gap-4 
           border-4 border-blue-500 border-t-0 border-r-0 border-b-0 justify-center shadow-lg z-50'>

          <RxCross1
          className="absolute top-0 right-0 text-5xl text-white border-white p-1 bg-blue-400 cursor-pointer"
          onClick={() => setShowMenu(false)}
          />
          
          <div className='flex flex-col gap-4 text-2xl items-center'>

          <Link href="/" onClick={() => setShowMenu(false)} className='hover:bg-blue-100 p-2 rounded-xl'>Home</Link>
          <a href="/about" onClick={() => setShowMenu(false)} className='hover:bg-blue-100 p-2 rounded-xl'>About us</a>
          <a href="/service" onClick={() => setShowMenu(false)} className='hover:bg-blue-100 p-2 rounded-xl'>Our Services</a>
          <a href="/contact" onClick={() => setShowMenu(false)} className='hover:bg-blue-100 p-2 rounded-xl'>Contact us</a>
          <a href="/register" onClick={() => setShowMenu(false)} className='hover:bg-blue-100 p-2 rounded-xl'>Register</a>
          </div>

          <div className='flex flex-col items-center gap-1 translate-y-40 max-xl:translate-y-10'>
            <Image
            src="/logo.jpg"
            alt="Logo"
            width={70}
            height={70}
          />
          <p>CARELOOP</p>
          </div>
          

        </div>
        
        
      )}

      
    </header>

  )
}

export default Header;
