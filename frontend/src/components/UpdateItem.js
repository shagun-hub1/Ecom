import React from 'react'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'

const UpdateItem = (props) => {
    
  return (
    <div className='flex'>
        <DashboardSidebar/>
        <div className='flex-[6]'>
            <DashboardNavbar/>
            {props.children}
        </div>
    </div>
  )
}

export default UpdateItem