import React, {useEffect, useState } from 'react'
//import data
import { header } from '../data';
//import icons
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi';
//import components
import MobileNav from './MobileNav';
import Nav from './Nav';


const Header = () => {
    //mobile nav state
    const [mobileNav, setMobileNav] = useState(false);
    //header state
    const [isActive, setIsActive] = useState(false);
    //header data
    const {logo, btnText} = header;
    //scrollEvent 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        })
    })
  return <div className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}>
    <div className="container mx-auto flex justify-between items-center">
        <a href="#" data-aos='fade-down' data-aos-delay='1000'>
            <img src={logo} alt="" />
        </a>
        <div className="hidden lg:flex" data-aos='fade-down' data-aos-delay='1200'>
           <Nav/> 
        </div>
        <button className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400'>{btnText}</button>
        <button className='lg:hidden' onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? <HiOutlineX className='text-3xl text-accent'/> : <HiMenuAlt4 className='text-3xl text-accent'/>}
        </button>
        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
            <MobileNav/>
        </div>
    </div>
  </div>
  
}

export default Header
