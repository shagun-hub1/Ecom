import React,{useState} from 'react'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UseForm,FormInput } from '../components/UseForm'

const Login = () => {
   

  const initialState={
    email:'',
    password:''
  }

  const {
    formData,
    onChange,
    setshowPassword,
    showPassword
  }=FormInput(initialState)
  return (
    <>
    <UseForm title='Login With Email' button='LogIn' > 
    <input 
    type="email" 
    name='email'
    value={formData.email}
    onChange={onChange}
    placeholder='Enter Email'
    className='border border-slate-500 w-full mb-6 h-12 px-3 py-2 focus:outline-none rounded-md focus:border-pink-500 focus:ring-pink-500 focus:ring-1 text-sm lg:text-lg '
    required
    />
    <input
    name='password' 
    type={!showPassword ? "password" : "text"}
    value={formData.password}
    onChange={onChange}
    placeholder='Enter password'
    className='border border-slate-500 w-full mb-6 h-12 px-3 py-2 focus:outline-none rounded-md focus:border-pink-500 focus:ring-pink-500 focus:ring-1 text-sm lg:text-lg '
    required
    />
    <div className='float-right'>
      {!showPassword ? 
      <FaEye className='-translate-y-[3em] mr-3 text-lg'
      onClick={()=>setshowPassword(!showPassword)}
      />
      :
      <FaEyeSlash className='-translate-y-[3em] mr-3  text-lg'
      onClick={()=>setshowPassword(!showPassword)}
      /> 
    }
    </div>
    <div>
    <Link to='/register' className='text-blue-400 float-left'>Don't Have an Account?</Link>
    <Link to='/password/forgot' className='float-right text-blue-400 -mr-3'>Forgot password?</Link>
    </div>
     <div className='invisible h-24'></div>
    </UseForm>
    
    </>
  )
}

export default Login