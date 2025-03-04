/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlinePushPin} from 'react-icons/md'
import { MdCreate, MdDelete } from 'react-icons/md'

const Note = ({title, date, content, isPinned, tags, onPinNote, onEdit, onDelete}) => {
  return (
    <div className=' border rounded p-4 bg-white shadow-sm hover:shadow-xl transition-all ease-in-out'>
    <div className='flex items-center justify-between'>
        <div className=''>
            <h6 className='text-sm font-medium'>
                {title}
                
                </h6>
            <span className='text-xs text-green-400'>
                {date}
             </span>
        </div>

        <MdOutlinePushPin  className={`icon-btn ${isPinned ? "text-green-300" : "text-slate-400"}`
      }
    onClick={onPinNote}/>
    </div>
    <p className='text-xs text-slate-600 mt-2 '>
        {content?.slice(0, 60)}
        </p>


        <div className='flex items-center justify-between mt-2'>
            <div className='text-xs text-slate-500'>{tags}</div>

            <div className='flex items-center gap-2'>
                <MdCreate  className='icon-btn hover:text-green-500'
                onClick={onEdit}/>

                <MdDelete  className='icon-btn hover:text-red-500'
                onClick={onDelete}/>
            </div>
        </div>
    </div>
    
  )
}

export default Note