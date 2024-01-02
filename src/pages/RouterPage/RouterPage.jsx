import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../../components/Layout/Hero/Hero'
import Layout from '../../components/Layout/Layout'
import Auth from '../Auth/Auth'
import Signup from '../Signup/Signup'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/main' element={<Layout />}>
                <Route path='/main/:id' element={<Hero />}/>
            </Route>
        </Routes>
    </div>
  )
}

export default RouterPage