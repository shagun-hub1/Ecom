import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
 


const WidgetSm = () => {
  const image="https://cdn.wallpapersafari.com/50/50/ZTcDPK.jpg"
  const users=[
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
    {name:'Shagun',avatar:image,phoneNumber:'879798689'},
  ]
  return (
    <div className=' shadow-md mr-3 px-2'>
       <p className='text-2xl font-extrabold  text-darkpurple'>New Joined Members</p>
        <p className='text-right '>
          <Link to='/admin/users' className='hover:text-violet hover:font-bold transition-all duration-500 text-slate-400 text-right'>View All Members</Link>
        </p>
        <hr className='border-[0.5px] border-slate-400 mb-3' />
       <ul className='flex flex-col gap-2 '>
          {users.map(user=>(
            <li className='flex gap-4 items-center '>        
            <img className='h-9 w-9 rounded-full' src={user.avatar} alt="" />
            <div className='flex flex-col'>
            <span className='text-lg font-bold'>{user.name}</span>
            <span className='text-xs text-slate-500'>{user.phoneNumber}</span>
            </div>
              
            <div className='flex gap-1 items-center cursor-pointer bg-smokewhite hover:shadow-md px-2 py-1'><FaEye color='#D36E70'/><span>View</span></div>
            </li>
          ))}
       </ul>
    </div>
  )
}

export default WidgetSm