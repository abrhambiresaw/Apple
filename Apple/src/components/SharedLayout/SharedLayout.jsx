import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import YouTube from '../YouTube/YouTube'

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <YouTube />
      <Footer />
    </>
  )
}

export default SharedLayout