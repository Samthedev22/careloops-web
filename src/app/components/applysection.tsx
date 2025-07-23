import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
const ApplySection = () => {
  return (
    <div className='relative w-full h-[180px] flex items-center justify-center bg-gradient-to-r from-purple-600 to to-blue-500'>
        <a className='flex flex-row gap-1 bg-gradient-to-r from-orange-600 to to-red-600 text-white p-4 px-5 cursor-pointer rounded-2xl' 
        href="/register">Register Your child
        <FaArrowRight className='mt-1'/>
        </a>
        
        
    </div>
  )
}

export default ApplySection