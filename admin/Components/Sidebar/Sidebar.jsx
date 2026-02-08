import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assest.js'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className='side-bar'>
      <div className='options'>

        <div className='option' onClick={() => navigate('/add')}>
          <img src={assets.add_icon} alt="Add food" />
          <h5>Add Food</h5>
        </div>

        <div className='option' onClick={() => navigate('/list')}>
          <img src={assets.basket_icon} alt="List food" width={40} />
          <h5>List Food</h5>
        </div>

        <div className='option' onClick={() => navigate('/orders')}>
          <img src={assets.addgreen} alt="Manage orders" width={40} />
          <h5>Manage Orders</h5>
        </div>

      </div>
    </div>
  )
}

export default Sidebar