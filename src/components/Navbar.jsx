import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className='bg-slate-800 bg-opacity-90 text-white h-[70px] flex flex-row items-center px-8 justify-between fixed top-0 left-0 right-0 z-50'>
        <Link href='/' className='flex flex-row'>
                <div>
                    <Image src='/images/logo.svg' width={30} height={30} alt='logo'/>
                </div>
                <div>
                    <span className='text-sky-600'>Insights</span>
                    <span className='text-sky-300'>Palette</span>
                </div>
        </Link>
       <div>
         Logout
       </div>
    
    </div>
  )
}
