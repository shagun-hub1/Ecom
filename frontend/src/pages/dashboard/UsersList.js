import { UseList } from "../../components" 
import {AiOutlineDelete} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
 

const UsersList = () => {
  const image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
  const cols=[
     {field:'id',headerName:'ID',width:70},
     {field:'userName',headerName:'User Name',width:150},
     {field:'email',headerName:'Email',width:200},
     {field:'phoneNumber',headerName:'Contact',width:200},
     {field:'avatar',headerName:'Profile',renderCell:(params)=>{
        return(
           <div>
              <img 
              src={params.row.avatar} 
              className='w-8 h-8 object-cover rounded-full'
              alt="" />
           </div>
        )
     }},
     {field:"action",headerName:'Action',width:'120',renderCell:(params)=>{
       return(
          <>
          <div className='flex gap-1'>
           
          <Link to={`/admin/users/update/${params.row.id}`}>
            <FaRegEdit fontSize={20} color='blue' />
            </Link>
           
            <Tooltip title="delete">
            <IconButton>
            <AiOutlineDelete fontSize={20} color='red'/>
            </IconButton>
            </Tooltip>
          </div>
          </>
       )
     }}
  ]
  const rows=[
     {id:'1',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'2',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'3',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'4',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'5',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'6',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'7',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'8',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'9',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'10',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'11',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'11',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'11',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'11',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
     {id:'12',avatar:image,userName:'Anshika',email:'anshu@gmail.com',phoneNumber:'687686868687'},
  ]
  return (
     <UseList
     rows={rows}
     cols={cols}
     rowsPerPageOptions={5}
     />
  )
}

export default UsersList

 