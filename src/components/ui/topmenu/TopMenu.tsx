import { montserrat, roboto } from '@/app/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoCartSharp, IoSearchSharp } from 'react-icons/io5'

export const TopMenu = () => {
    return (
        <nav className='flex justify-between items-center h-14 bg-white text-black relative shadow-sm ' role='navigation' >

            <div className='px-3 cursor-pointer '>
                <Link href='/'>
                    <span className={`${montserrat.className}text-black  font-bold`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> MDF
                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span className='text-black font-bold' style={{ letterSpacing: '0.2rem' }}>  SHOP</span>
                    </span>
                </Link>
            </div>

            <div className='px-4 cursor-pointer spacing-x-4 hidden sm:flex md:flex lg:flex xl:flex'>

                <Link href='/'>
                    <span className={`${roboto.className}m-2 p-2 rounded-md transition-all hover:bg-slate-200`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Home</span>
                </Link>
                <Link href='/category/men'>
                    <span className={`${roboto.className}m-2 p-2 rounded-md transition-all hover:bg-slate-200`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Mens</span>
                </Link>
                <Link href='/category/women'>
                    <span className={`${roboto.className}m-2 p-2 rounded-md transition-all hover:bg-slate-200`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Womens</span>
                </Link>
                <Link href='/category/kids'>
                    <span className={`${roboto.className}m-2 p-2 rounded-md transition-all hover:bg-slate-200`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Kids</span>
                </Link>



                <Link href='/contact'>
                    <span className={`${roboto.className}m-2 p-2 rounded-md transition-all hover:bg-slate-200`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>Contact</span>
                </Link>
            </div>

            <div className='flex items-center px-4 cursor-pointer  space-x-4 '>


                <Link href='/search'>
                    <IoSearchSharp className='w-6 h-6' />
                </Link>

                <div className='relative'>
                <div className='absolute -top-2 -right-2 text-xs bg-red-600 rounded-full w-4 h-4 text-center text-white font-bold'>1</div>
                 <Link href='/cart'>
                 <IoCartSharp className='w-6 h-6' />
                </Link>
                </div>

                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>




            </div>
        </nav>
    )
}
