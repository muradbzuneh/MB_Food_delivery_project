import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assest.js'

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <div className='left-side'> 
            <img src={assets.Moseb} alt="moseb" />
            <h1>Moseb Admin panal</h1>
        </div>
        <div className='right-side'>
             <img src={assets.profile} alt="profile" />
        </div>
    </div>
    </>
  
  )
}

export default Navbar