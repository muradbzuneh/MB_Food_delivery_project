import './app.css'
import HomePage from './pages/home/homePage.jsx'
import { Routes, Route, Navigate} from 'react-router-dom'
import Register from './Components/Log/Register.jsx'
import Loginn from './Components/Log/Login.jsx'
import {  useEffect } from 'react'
import { auth, db} from '../firebase.js'
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, getDocs } from "firebase/firestore";
import Cart from './pages/cart/cart.jsx'
import OrderPage from './pages/order/order.jsx'


function App() {
  useEffect(() => {
  getDocs(collection(db, "test"))
    .then(() => console.log("🔥 Firebase is working!"))
    .catch(err => console.log("❌ Firebase error:", err));
}, []);


  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading...</h1>;
  
  
  return (
   <div className='all-apps'>
  <>
  <div className="app">   
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Loginn />} />
        <Route path="/homepage" element={user ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/cart' element ={<Cart />} />
        <Route path='/order' element ={<OrderPage />} />
      </Routes>
  </div>
  </>
  </div>
  )
}

export default App
