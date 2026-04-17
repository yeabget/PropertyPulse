import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../styles/navbar.css'
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  const [register,setRegister]=useState(false)
  return (
    <div className='navbar-container'>
        <div className='logo'>
          <Link to='/'><img src={logo} alt='logo'/></Link> 
        </div>
        <div className={menuOpen?'hidden-menubar':'links'}>
            <Link to="/">Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/chat'>Chat</Link>
            <Link to='/subscription'>Subscription</Link>
            <Link to='/help'>Help</Link>
        </div>
        <div className='register'>
          {register?<div className='profile'>
                         <FaUserCircle size={30} />
                    </div>:
                    <button className={menuOpen?'register-btn-menubar-opened':'register-btn'}>
                        Register
                   </button>
          }
          <div className='menubar' onClick={()=>{setMenuOpen(!menuOpen)}}>
            {menuOpen? <FaTimes size={25} />:<FaBars size={25} />}
          </div>
        </div>
    </div>
  )
}
