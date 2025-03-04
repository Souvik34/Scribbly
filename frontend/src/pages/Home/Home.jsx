/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Note from '../../components/Cards/Note'
import { MdAdd } from 'react-icons/md'
import { data } from 'react-router-dom'

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    data: null,
    type:"add"
  })
  return (
    <>
    <div className='container mx-auto'>
      <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max:md:m-5'>
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={true}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={false}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        <Note
        title={"Have Breakfast"}
        date={"5th March, 2025"}
        content={"I will eat a healthy breakfast today"}
        tags={"#breakfast #healthy"}
        isPinned={false}
        onDelete={()=>{}}
        onEdit={()=>{}}
        onPinNote={()=>{}}
        />
        
      </div>
    </div>

    <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-900 absolute right-10 bottom-10' onClick={()=> 
      setOpenAddEditModal({isShown: true, data: null, type: "add"})}> 
      <MdAdd className='text-[32px] text-white'/></button>
    </>
  )
}

export default Home