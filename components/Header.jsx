"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import React from 'react'
import { HiSearch } from 'react-icons/Hi';
import { HiBell } from 'react-icons/Hi';
import { HiChat } from 'react-icons/Hi';


const Header = () => {
  const { data: session } = useSession()
  console.log(session);
  return (
    <div className='flex flex-row gap-3 md:gap-2 items-center p-4 drop-shadow-md'>
    
      <Image
       src='/Images/logo1.png'
       alt='logo'
       width={80}
        height={80}
        className='hover:bg-gray-300 p-1 rounded-full cursor-pointer' />
        <button className='bg-black text-white font-semibold rounded-full p-2 px-4 hidden md:block'>Home</button>
        <button className='font-semibold px-4'>Create</button>
        <div className='bg-gray-200 p-2 flex gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px]'/>
        <input type='text' placeholder='Search...' className='bg-transparent outline-none '/>
        </div>
        <HiBell className='text-[35px] md:text-[40px] cursor-pointer'/>
        <HiChat className='text-[35px] md:text-[40px] cursor-pointer'/>
        {/* <Image
       src='/Images/person.jpg'
       alt='logo'
       width={50}
        height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' /> */}
        <button className='bg-black hover:bg-gray-300 text-white hover:text-black font-semibold rounded-full p-2 px-4 hidden md:block' onClick={()=>signIn()}>Login</button>
    </div>
  )
}

export default Header