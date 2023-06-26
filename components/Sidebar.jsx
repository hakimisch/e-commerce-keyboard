import React, {useState} from 'react';
import Link from 'next/link';
import {AiOutlineDoubleRight,AiOutlineClose} from 'react-icons/ai';

const Sidebar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  } 

  return (
    <div className='w-[20%]'>
        {/*Overlay*/}
        <ul className='hidden md:block'>
            <li>
              <button className='w-full left-0 text-center bg-purple-50 py-6 my-4 px-10 border-black border-y-2 border-r-2  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/products" className='font-extrabold text-2xl'>Keyboards</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center bg-purple-50 py-6 my-4 px-10 border-black border-y-2 border-r-2  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/keycaps" className='font-extrabold text-2xl'>Keycaps</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center bg-purple-50 py-6 my-4 px-10 border-black border-y-2 border-r-2  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/switches" className='font-extrabold text-2xl'>Switches</Link>
              </button>
            </li>
            <li>
              <button className='w-full left-0 text-center bg-purple-50 py-6 my-4 px-10 border-black border-y-2 border-r-2  hover:text-purple-800 hover:scale-105 hover:bg-purple-200 hover:border-purple-800 rounded-tr-full rounded-br-full duration-300'>
                <Link href="/mod" className='font-extrabold text-2xl'>Sound Mods</Link>
              </button>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden pl-6'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineDoubleRight size={25}/>}
        </div>
        <div onClick={handleNav} className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'  : 'fixed left-[-100%] ease-in-out duration-500' }>
                <ul className='uppercase p-4 mt-[24rem]'>
                    <li className='p-4 border-b border-gray-400'>
                    <Link href="/keyboards" className='font-extrabold'>Keyboards</Link>
                    </li>
                    <li className='p-4 border-b border-gray-400'>
                    <Link href="/keycaps" className='font-extrabold'>Keycaps</Link>
                    </li>
                    <li className='p-4 border-b border-gray-400'>
                    <Link href="/switches" className='font-extrabold'>Switches</Link>
                    </li>
                    <li className='p-4 border-b border-gray-400'>
                    <Link href="/mod" className='font-extrabold'>Sound Mods</Link>
                    </li>
                    <li className='p-6 pt-8'><AiOutlineClose size={20}/></li>
                </ul>
            </div>

    </div>
  )
}

export default Sidebar