import React, {useContext, useState,  } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../context/StoreContext';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {  Link, useNavigate } from 'react-router-dom';
 
const Navbar = () => {
const { getCartCount} =  useContext(StoreContext);
  const  [currstate,setCurrstate] = useState("Home");
const [user] = useAuthState(auth);
const navigate = useNavigate();

 const handleLogout = async () => {
    await signOut(auth);
    alert("Signed out successfully!");
    navigate("/register");   
  };

  return (
    <div className="navbar">
      <div className="right-section">
        <Link to='/'><img className='logo' src= 'Moseb.jpg' alt="" /></Link>
  
      </div>
      <div className="middle-section-nav">
       <h1></h1>
        <ul>
          <Link to = '/' onClick ={() =>setCurrstate('Home')} className={currstate === "Home"? "Active":""}>Home</Link>
          <a  href='#menuu'  onClick={() =>setCurrstate('menu')}  className={currstate === "menu"? "Active":""}>Menu</a>
          <a href='#Food' onClick={() =>setCurrstate('mobile app')}  className={currstate === "mobile app"? "Active":""}>Food</a>
          <a href='#Contact' onClick={() =>setCurrstate('contact')}  className={currstate === "contact"? "Active":""}>contact us</a>
        </ul>
      </div>
      <div className="right-sction-nav">
        <div className="search-icon">
          <img src= {assets.search_icon} alt="" />
        </div>
        <Link to= '/cart'><div className="cart-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="cart-quantiy">
            {getCartCount().value === 0 ? null : <p>{getCartCount()}</p>}
          </div>
        </div>
        </Link>
        <div className="sign-up-section">
          {user ? <button className="logout-btn" onClick={handleLogout}>
          Sign Out
        </button>:<></>} 
        </div>
         <span className="username">
          Hi, {user.displayName || user.email.split("@")[0]}
       </span>
      </div>
    </div>
  );
}

export default Navbar
    