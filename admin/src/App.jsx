import './App.css'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Add from '../pages/add/Add'
import List from '../pages/list/list.jsx'
import Orders from '../pages/orders/orders.jsx'
import { ToastContainer } from 'react-toastify';
import { fetchWithAuth } from "../services/api.js";
function App() {

async function registerAdmin() {
await fetchWithAuth("/admin/register", {
  method: "POST",
  body: JSON.stringify({
    adminSecret: "mb-food-admin-2026",
  }),
});
}
registerAdmin();
  return (
    <>
      <div className='app'> 
           <Navbar />
            <ToastContainer />
        <hr />
        <div className='app-container'>
          <Sidebar />
             <Routes>
            <Route path='/add' element={<Add />} />
             <Route path='/list' element={<List/>} />
              <Route path='/orders' element={<Orders />} />
          </Routes> 
        </div>
      </div>
        
    </>
  )
}

export default App
