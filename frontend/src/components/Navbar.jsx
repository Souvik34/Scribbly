/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import Profile from './Cards/Profile'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signoutFailure, signoutStart, signoutSuccess } from '../pages/redux/user/userSlice'
import axios from 'axios'


const Navbar = ({userInfo}) => {
  const [searchQuery, setSearchQuery]= useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch

  const handleSearch = () => {}

  const onClearSearch = () => {
    setSearchQuery("")
  }

  const onLogout =  async() =>
  {
    
    try
    {
      dispatch(signoutStart())

      const res = await axios.get("http://localhost:3000/api/auth/signout", 
        {withCredentials: true,}
      )
    
    if(res.data.succes ===false)
    {
      dispatch(signoutFailure(res.data.message))
    }

    dispatch(signoutSuccess())
    navigate("/login")
  }
    catch(error)
    {
      dispatch(signoutFailure(error.message))
    }
  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <Link to ={"/"}>
     
      <h2 className='text-xl font-bold text-black py-2'>
        <span className='text-slate-500'>Scrib</span>
        <span className='text-blue-700'>bly</span>
      </h2>
      </Link>
    <SearchBar 
    value={searchQuery}
    onChange={({target})=> setSearchQuery(target.value)}
    handleSearch={handleSearch}
    onClearSearch={onClearSearch}
    
    />
    <Profile userInfo={userInfo} onLogout={onLogout}/>

    </div>
  )
}


export default Navbar
