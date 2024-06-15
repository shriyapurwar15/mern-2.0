import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <header className='h-16 shadow-md bg-white'>
    <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
            <Link to={'/'}>
            <Logo w={90} h={60}/>
            </Link>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
            <input type="text" placeholder='Search product here...' className='w-full outline-none '/>
            <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full'>
            <FaSearch />
            </div>
        </div>

        <div className='flex items-center gap-7'>
        <div className='text-2xl cursor-pointer'>
        <FaRegUserCircle />

        </div>

        <div className='text-2xl relative'>
        <span>
        <FaShoppingCart />
        </span>
        <div className='bg-blue-600 w-5 h-5 rounded-full text-white w-5 p-1 flex items-center justify-center absolute -top-2 -right-3'>
            <p className='text-sm'>0</p>
        </div>

        </div>

          <div> 
            <Link to={'/login'}>
            <button className='px-2 py-1 rounded-full bg-red-600 hover:bg-red-800 text-white'> Login</button>
            </Link>
        </div>

        </div>
    </div>
   </header>
  )
}

export default Header
