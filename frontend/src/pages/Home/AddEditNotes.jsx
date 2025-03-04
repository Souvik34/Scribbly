import React,{useState} from 'react'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({onClose}) => {
    const  [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [tags, setTags] = useState([])
    const [error, setError] = useState('')

    const editNote = async() => {
    }
    const addNote = async() => {
    }

    const handleAddNote = () => {
        if(!title )
        {
            setError("Please enter a title")
        return
        }
        if(!content )
            {
                setError("Please enter the content")
            return
            }

            if(type=="edit")
            {
                editNote()
            }
            else
            {
                addNote()
            }
    }
  return (
   <div className='relative'>
    <button className='w-10 h-10 flex items-center rounded-full justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
         <MdClose className='text-xl text-slate-500' /> 
         </button>

    <div className='flex flex-col gap-2'>
        <label className='input-label text-red-400 uppercase'> Title</label>

        <input 
        type="text" 
        className='text-2xl text-slate-950 outline-none'
        placeholder='Eat breakfast'
        value={title} 
        onChange={({target})=> setTitle(target.value)} />
    </div>

    <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label text-red-400 uppercase'>Content</label>

        <textarea type="text" className='text-sm text-slate-950 outline-none  bg-slate-50 rounded' placeholder='Content..'
        rows={10}
        value={content}
        onChange={({target})=> setContent(target.value)} 
        >
            {" "}
        </textarea>

        </div>
        <div className='mt-3'>
            <label className='input-label text-red-400 uppercase'>
            </label>
                {/* <TagInput/> */}
        </div>
        <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>Add</button>
   </div>
  )
}

export default AddEditNotes