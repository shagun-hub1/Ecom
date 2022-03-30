import { UseForm,FormInput } from "../components/UseForm"
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Register = () => {
    const initialState={
        name:'',
        email:'',
        phoneNumber:'',
        password:'',
        avatar:''
    }

    const{
        setshowPassword,
        showPassword,
        formData,
        onChange
    }=FormInput(initialState)

  return (
     <UseForm title='Register with Email' button='register'>

         <input
            type='name'
            placeholder="Enter name" 
            className='border border-slate-400 text-xl w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 px-2 py-2 h-12 mb-5'
         />

         <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password" 
            className='border border-slate-400 text-xl w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 px-2 py-2 h-12 mb-5'
         />
         <div className='float-right -translate-y-[3.2rem] mr-5 '>
            {showPassword ?
             <FaEye className='text-xl  ' onClick={()=>setshowPassword(!showPassword)}/> 
            :
            <FaEyeSlash className='text-xl' onClick={()=>setshowPassword(!showPassword)}/>
            }
         </div>
         <input
            type='email'
            placeholder="Enter email" 
            className='border border-slate-400 text-xl w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 px-2 py-2 h-12 mb-5'
         />
         <input
            type='text'
            placeholder="Enter contact" 
            className='border border-slate-400 text-xl w-full rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 px-2 py-2 h-12 mb-5'
         />   
         <input 
         type="file"     
         />      
<br />
        <Link to='/login' className='float-left text-sky-400'>
            Already have an account ?
        </Link>

     </UseForm>
  )
}

export default Register