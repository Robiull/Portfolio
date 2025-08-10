
import React from 'react';
import NavbarIcon from './NavbarIcon';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

const navbarMain = () => {
    const [menuOpen, setMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }
    return (
        <nav className='mx-w-[1300px] mx-auto px-6 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
            <div className='flex justify-between w-full mx-w-[1200px] mx-auto bg-black items-center p-4 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
                <NavbarIcon />
                <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>
            <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
                <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={toggleMenu}><FaBars /></button>
            </div>
        </nav>
    )
}

export default navbarMain