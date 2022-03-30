import {MdDashboard,MdCategory} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {BsShop,BsTagsFill} from 'react-icons/bs'
import {BiCreditCard} from 'react-icons/bi'
import {RiLogoutBoxRLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
    const menuItems=[
        {icon:<MdDashboard/>,text:'Dashboard',to:'/admin'},
        {icon:<FaUsers/>,text:'Users',to:'/admin/users'},
        {icon:<BsShop/>,text:'Products',to:'/admin/products'},
        {icon:<MdCategory/>,text:'Category',to:'/admin/category'},
        {icon:<BiCreditCard/>,text:'Orders',to:'/admin/orders'},
        {icon:<RiLogoutBoxRLine/>,text:'Profile',to:'/admin/profile'},
        {icon:<RiLogoutBoxRLine/>,text:'Logout',to:'/logout'},
        {icon:<BsTagsFill/>,text:'Tags',to:'/admin/tags'}
    ]
  return (
    <>
    <div className='flex flex-col flex-1 min-h-screen flex-grow border-r-[0.5px] border-slate-300   py-2 shadow-lg   ' >
        <div className='flex justify-center h-16 items-center '>
            <span className='font-extrabold text-purple text-4xl'>EcomAdmin</span>
        </div>
        <hr className='h-0 border-[0.5px] border-slate-300 w-full  '/>
        <div className='my-6'>
            <ul>
               {menuItems.map((item)=>(
                
                   <Link  
                   to={item.to} 
                   className='flex items-center block px-6 mb-3  hover:bg-lightpurple'     
                   >
                     <div  className='mr-3 text-purple text-lg'>{item.icon}</div>
                     <p className='text-xl'>{item.text}</p>
                   </Link>
                 
               ))}
            </ul>
        </div>
        <hr className='h-0 border-[0.5px] border-slate-300 w-full '/>
        <div className='flex justify-center items-center mt-4'> 
            <div className='bg-whitesmoke h-7 w-7 mr-6 cursor-pointer rounded-md'></div>
            <div className='bg-black h-7 w-7 rounded-md cursor-pointer' ></div>
        </div>
    </div>
    </>
  )
}

export default DashboardSidebar