/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SearchBar from './SearchBar/SearchBar'
import Profile from './Cards/Profile'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const [searchQuery, setSearchQuery]= useState("")

  const navigate = useNavigate()

  const handleSearch = () => {}

  const onClearSearch = () => {
    setSearchQuery("")
  }

  const onLogout = () =>
  {
    navigate("/login")
  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-xl font-bold text-black py-2'>
        <span className='text-slate-500'>Scrib</span>
        <span className='text-blue-700'>bly</span>
      </h2>
    <SearchBar 
    value={searchQuery}
    onChange={({target})=> setSearchQuery(target.value)}
    handleSearch={handleSearch}
    onClearSearch={onClearSearch}
    
    />
    <Profile onLogout={onLogout}/>

    </div>
  )
}

export default Navbar