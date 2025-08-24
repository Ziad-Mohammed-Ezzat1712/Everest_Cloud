import React from 'react'
import NaveBar from '../NaveBar/NaveBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <NaveBar/>
    <div className='  mx-auto'>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
