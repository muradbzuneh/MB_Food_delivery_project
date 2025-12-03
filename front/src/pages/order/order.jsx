import React from 'react'
import './order.css'
import Navbar from '../../Components/navbar/navbar';
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
            <select name="country" id=" Ethiopia" >
              <option value="Ethiopia"> Ethiopia</option>
              <option value="kenya"> kenya</option>
              <option value="usa"> usa</option>
              <option value="UAE"> UAE</option>
              <option value="Suadi"> Suadia Arebia</option>
              <option value="Ethiopia"> Canada</option>
            </select>
            </div>
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