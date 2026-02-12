import React from 'react'
import './order.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/footer';
import { useContext } from 'react'
import { StoreContext } from '../../Components/context/StoreContext'
const OrderPage = () => {
  const {productPrice,
  DeliveryFee,
  TotalPrice} = useContext(StoreContext);
  return (
    <>
    <Navbar />
    <div className='order-page'>
      <div  className="order-page-info">
      <form action="submit">
        <div className="personal-info">
          <h1>Delivery Data</h1>
          <div className="name-info">
           <input type="text" placeholder='Enter Your Name'/>
          <input type="text" placeholder='Enter Your Last Name'/>
          </div>
          <div className="address-info">
          <input type="email" placeholder='Enter Your Email'/>
          <input type="text" placeholder='Enter Your Address'/>
          </div>
          <div className="city-info">
         <input type="text" placeholder='city' />
         <input type="text" name="" id="" placeholder='state'/>
         <input type="text" placeholder='Zip code' />
         <input type="text" name="" id="" placeholder='country' />
            </div>
            <input type="text" name="" id="phone" placeholder='phone'/>
            <input type="submit" className='chck-btn' />
        </div>
      </form>
      <div className="payment-method">
        <h2>Payment Method</h2>
        <select name="payment" id="Bank">
          <option value="Bank">Bank</option>
          <option value="tele">Telebirr</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">Paypal</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>
      </div>
        <div className="cart-totals">
          <h3>Cart Totals</h3>
        <div className="total-details">
            <span>Product Price:</span>
            <span>${productPrice}
             </span>
             <hr />
        </div>
         <div className="total-details">
            <span>Delivery Fee:</span>
            <span>${DeliveryFee}
             </span>
             <hr />
        </div>
         <div className="total-details">
            <span>Total price:</span>
            <span>${TotalPrice}
             </span>
             <hr />
        </div>
        <a href="/order"><button className='chck-btn'>Goto Payment</button> </a>
        </div > 
      </div>
    </div>
    <Footer />
    </>
  )
}

export default OrderPage