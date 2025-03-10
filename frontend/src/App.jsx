/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'


const App = () => {

  return <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
}

export default App