import React from 'react'
import Navbar from './navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/footer'

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedLayout
