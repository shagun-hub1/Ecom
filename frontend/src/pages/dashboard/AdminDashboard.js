import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { useAlert } from 'react-alert'
 
import { 
  DashboardNavbar, 
  DashboardSidebar,
  Chart,
  WidgetLg,
  WidgetSm
} from "../../components"
import { getAllCategories } from '../../actions/categoryAction'
 

 

const AdminDashboard = () => {
  
 
  const dispatch=useDispatch()
  const alert=useAlert()

  
  useEffect(()=>{
    dispatch(getAllCategories())
  },[])
  const data = [
    {
      name: 'Jan',
      "Active User": 4000,   
    },
    {
      name: 'Feb',
      "Active User": 3000,    
    },
    {
      name: 'Mar',
      "Active User": 2000,   
    },
    {
      name: 'Apr',
      "Active User": 2780,  
    },
    {
      name: 'May',
      "Active User": 3390,
    },
    {
      name: 'June',
      "Active User": 2390,     
    },
    {
      name: 'July',
      "Active User": 3490,
    },
    {
      name: 'Aug',
      "Active User": 5490,     
    },
  ];
  return (
    <div className='flex'>
      <DashboardSidebar/>
      <div className='flex-[6]'>
        <DashboardNavbar/>
        <Chart data={data} title="User Analytics" grid datakey="Active User"/>
        <div className='flex m-6'>
            <WidgetSm/>
            <WidgetLg/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard