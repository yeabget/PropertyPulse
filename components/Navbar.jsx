'use client'
import React, { use } from 'react'
import { FaGoogle, FaHome, FaUser } from 'react-icons/fa'
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import Image from 'next/image';
import profilePic from '@/assets/images/pp.png'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const pathname = usePathname();
    const [menuopen, setMenuopen] = useState(false);
     const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='navbar'>
        <button className="menubar" onClick={() => setMenuopen(!menuopen)}>
  {menuopen ? <FiX /> : <FiMenu />}
</button>
      <div className='logo'>
          <FaHome size={24}className='logo-img' />
          <p>PropertyPulse</p>
      </div>
      <div className={menuopen ? 'links-open' : 'links'}>
        <Link href='/' className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href='/properties' className={pathname === '/properties' ? 'active' : ''}>Properties</Link>
            <Link href='/add-property' className={pathname === '/add-property' ? 'active' : ''}>Add Property</Link>
      </div>
      <div className='profile'>
      {isLoggedIn ? (
        <Image src={profilePic} alt='Profile' className='profile-img'/>
      ) : (
        <button className={menuopen ? 'login-btn-open' : 'login-btn'}><FaGoogle/> Login or Register</button>
      )}
       <button className="not-icon" > <IoNotificationsOutline  /></button>
       
      </div>
    </div>
  )
}

export default Navbar
