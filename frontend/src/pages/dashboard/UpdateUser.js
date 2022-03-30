import React from 'react'
import { UpdateItem } from '../../components'

const UpdateUser = () => {
  return (
    <UpdateItem>
      <div className='flex justify-between w-full py-3  px-9 gap-2'>
        <div className='flex-1 shadow-md py-2 px-2'>
            <p className='text-3xl text-violet font-extrabold'>Edit User</p>
        </div>
        <div className='flex-[2] shadow-md py-2 px-2'>
          <p className='text-right'>
          <button className='bg-teal-600 text-whitesmoke py-1 px-2 text-xl cursor-pointer hover:bg-teal-400 rounded-md transition-all duration-500'>Update</button>
          </p>
        </div>
      </div>
    </UpdateItem>
  )
}

export default UpdateUser