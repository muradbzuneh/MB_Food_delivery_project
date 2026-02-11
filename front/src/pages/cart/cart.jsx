import React from 'react'
import './cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../Components/context/StoreContext'
import { useNavigate } from "react-router-dom";
import Navbar from '../../Components/navbar/navbar';
import Footer from '../../Components/Footer/footer';



const Cart = () => {
  const { foodList, cartItems, removeFromCart,productPrice, DeliveryFee,
  TotalPrice} = useContext(StoreContext);
   const navigate = useNavigate();       

 return (
  <>
  <Navbar />
    <div className='cart-container'>
      <div className="title">
        <ul>
          <li>Item</li>
          <li>Name</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
      </div>
      <hr />
      <div className="cart-items">
         {foodList.map((item, key) => {
          if (cartItems[item._id] > 0)  
           
            return (
               <div key={key} className="cart-items-contents">
              <ul >
                <li>
                  <img src={`http://localhost:3000/images/${item.image}`} alt={item.name}
                  />
                </li>
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{cartItems[item._id]}</li>
                <li>${(item.price * cartItems[item._id]).toFixed(2)}</li>
                <li onClick={() => removeFromCart(item._id)} className='remover'> ❌ </li>
                </ul>
              <hr />
            </div> 
         )})}
       </div> 
       <div className="total-qunatiy-price">
        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <div className="total-details">
            <span>Total Quantity:</span>
            <span>{
              Object.values(cartItems).reduce((a, b) => a + b, 0)
            }</span>
            <hr />
        </div>
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
        <a onClick={() => navigate("/order")}><button className='chck-btn'>Go to CheckOut</button> </a>
        </div > 
       <div className="promo-code">
        <h4>if you have a promo code Enter here</h4>
        <div className="prom-code-submit">
          <input type="text" placeholder='Enter code' className='text'/>
          <input type="submit"  placeholder='Submit' className='submit'/>
        </div>
       </div>
       </div>
    </div>
    <Footer />
    </>
  )
}

export default Cart
