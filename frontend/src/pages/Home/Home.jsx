/* eslint-disable no-unused-vars */
import React from 'react'
import Note from '../../components/Cards/Note'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max:md:m-5'>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
        <Note/>
      </div>
    </div>
  )
}

export default Home