import React from 'react'
import { assets } from '../../assets/assets'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-container ' id='Contact'>
      <div className="containerd">
        <div className="right-section-footer">
         <img src="Moseb.jpg" alt="" />
         <div className="text-area">
          <p>
      Fast, fresh, and reliable food delivery—enjoy your favorite meals anytime, delivered with care.
          </p>
         </div>
         <div className="social-media">
          <ul>
            <li> <a href="https://facebook.com/murad-baba" target="_blank">
      <img src={assets.facebook_icon} alt="" />
        </a>

            </li>
             <li>
            <img src={assets.linkedin_icon} alt="" />
            </li>
              <li>
            <img src={assets.twitter_icon} alt="" />
            </li>
            </ul>
         </div>
        </div>
        <div className="middle-section-footer">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Delivery</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        <div className="addres">
          <h2>Contact Us</h2>
          <p>Wollo, Kombolcha, Ethiopia</p>
          <a href="muradbzuneh@gmail.com">     <p>Email:muradbzuneh@gmail.com </p></a>
          <a href="tel:+251960851651"><p>Phone: +251960851651</p></a>  
        </div>
      </div>
     <hr /> 
     <div className='copyright'>
      <p>
      Copyright &copy; {new Date().getFullYear()} mb.com - All Rights Reserved
      </p>
     </div>
    </div>
  )
}

export default Footer
