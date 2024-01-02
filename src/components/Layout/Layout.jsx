import React from 'react'
import Hero from './Hero/Hero'
import Sidebar from './Sidebar/Sidebar'
import "./Layout.scss"

const Layout = () => {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='layout__wrapper'>
            <Hero />
        </div>
    </div>
  )
}

export default Layout