import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'
import { DataGrid } from '@mui/x-data-grid';
import {IoIosAddCircle} from 'react-icons/io'
import { IconButton,Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const UseList = ({rows,cols,rowsPerPageOptions,create}) => {
   
  return (
     <>
        <div className='flex'>
            <DashboardSidebar/>
            <div className='flex-[6]'>
               <DashboardNavbar/>

               
               <div className='text-right m-4'>
               <Link to={create}> 
               <button
               className='px-2 py-2 bg-opalgreen text-lg text-white hover:bg-green-600 transition-all hover:text-slate-200 duration-400'
               >Create New</button>
               </Link>
                
                 
               </div>
              

               <DataGrid
               className='mt-5 '
               rows={rows}
               columns={cols}
               pageSize={8}
               rowsPerPageOptions={[rowsPerPageOptions]}
      />
            </div>
        </div>
     </>
  )
}

export default UseList