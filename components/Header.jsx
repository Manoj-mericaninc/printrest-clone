"use client"
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div>
    
      <Image
       src='/Images/logo1.png'
       alt='logo'
       width={60}
        height={60}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />

    </div>
  )
}

export default Header