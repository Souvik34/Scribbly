/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Navbar from './components/Navbar'

const App = () => {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
}

export default App