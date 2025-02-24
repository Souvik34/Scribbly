/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { getInitials } from '../../utils/helper'

const Profile = ({onLogout}) => {
  return (
    <div className='flex items-center gap-4'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
            {getInitials("Rohit Sharma")}
        </div>


        <div>
        <p className='text-sm font-medium'>Rohit</p>
        </div>

        <button className='text-sm bg-red-500 rounded-md p-1 text-white hover:opacity-80' onClick={onLogout}> Logout </button>
    </div>
  )
}

export default Profile