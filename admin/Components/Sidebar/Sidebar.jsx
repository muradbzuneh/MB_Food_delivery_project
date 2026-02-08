import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assest.js'

const Sidebar = () => {
  return (
    <div className='side-bar'>
        <div className='options'>
            <div className='option'>
                <img src={assets.add_icon} alt="" />
                <h5>Add Food</h5>
            </div>
            <div className='option'>
                <img src={assets.basket_icon} alt="" />
                    <h5>list food</h5>
            </div>
            <div>
                <img src={assets.addgreen} alt="" />
                <h5>Manage Orders</h5>
            </div>

        </div>
    </div>
  )
}

export default Sidebar