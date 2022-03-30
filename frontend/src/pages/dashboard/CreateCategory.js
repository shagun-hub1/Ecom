import React, { useEffect } from 'react'
import {useAlert} from 'react-alert'
import {useDispatch,useSelector} from 'react-redux'
import { clearErrors, createNewCategory } from '../../actions/categoryAction'
import { useNavigate } from 'react-router-dom'
import { ImageChange, UseCreatePage,Input, FormInput } from '../../components'
import { NEW_CATEGORY_RESET } from '../../constants/categoryConstant'

const CreateCategory = () => {

  const navigate=useNavigate()
  const alert=useAlert()
  const dispatch=useDispatch()
  const {error,success}=useSelector(state=>state.newCategory)
  const {
    onFileChange,  
    image,
    clearImage
  }=ImageChange()

  const initialState={
    name:''
  }
  const {
    onChange,
    formData
  }=FormInput(initialState)

  const {name}=formData

  const onSubmit=(e)=>{
    e.preventDefault();

    const myForm=new FormData()
    myForm.set("name",name)
    myForm.set("image",image)

    if(!image){
      alert.info("Category Image is required")
      return
    }

  
    dispatch(createNewCategory(myForm))
    
  }

  useEffect(()=>{

    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }

    if(success){
      alert.success("Created Successfully")
      navigate('/admin/category')
      dispatch({
        type:NEW_CATEGORY_RESET
      })
    }
  },[success,error,dispatch])
    
  return (
    <UseCreatePage title='Create New Category' onFileChange={onFileChange} image={image} clearImage={clearImage} onSubmit={onSubmit} buttonTitle='Create' >
        <Input 
        type="text"
        name="name"
        placeholder="Enter category name"
        value={name}
        onChange={onChange}
        />
    </UseCreatePage>
  )
}

export default CreateCategory