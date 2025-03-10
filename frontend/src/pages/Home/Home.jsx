/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Note from '../../components/Cards/Note'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import AddEditNotes from './AddEditNotes'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Home = () => {
  const {currentUser, loading, errorDispatch}= useSelector(
    (state)=> state.user
  )
  const [userInfo, setUserInfo]= useState(null)
  const navigate = useNavigate()

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    data: null,
    type:"add"
  })
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      console.log("User Info:", currentUser); // Debugging
      setUserInfo(currentUser);
    }
  }, [currentUser, navigate]);
  
  

  return (
    <>
      <Navbar userInfo={userInfo}/>
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
      <MdAdd className='text-[32px] text-white'/>
      </button>
      
      <Modal 
      isOpen={openAddEditModal.isShown} 
      onRequestClose={()=> {}} 
      
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
      }}
      contentLabel=''
      className='w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll'
      >
        <AddEditNotes  onClose={()=>setOpenAddEditModal({isShown:false, type:"add", data:null})}
          
          noteData={openAddEditModal.data}
          type={openAddEditModal.type}/>
      </Modal>
    </>
  )
}

export default Home