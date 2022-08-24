import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='company-name-cont'>
        <Link to='/home' className='company-name'>Best Shop</Link>
      </div>
      <div className='navbar-items-cont'>
        <ul className='navbar-items' >
          <li className='navbar-item'>
            <Link to='/home'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/about'>About</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/services'>Services</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar
