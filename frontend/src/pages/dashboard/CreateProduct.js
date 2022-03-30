import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useAlert} from 'react-alert'
import { FormInput, ImageChange, Input, UseCreatePage } from '../../components'
import { Select, TextArea } from '../../components/UseForm'
import { getAllCategories } from '../../actions/categoryAction'
import {AiFillDelete} from 'react-icons/ai'
import { CLEAR_ERRORS, NEW_PRODUCT_RESET } from '../../constants/productConstant'
import { useNavigate } from 'react-router-dom'
import { createNewProduct } from '../../actions/productAction'

const CreateProduct = () => {
  const alert=useAlert()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {categories}=useSelector(state=>state.categories)

   
  const [sizeArray,setSizeArray]=useState([])
  const [size,setSize]=useState(0)
  const [stock,setStock]=useState('')

  const initialState={
    name:'',
    desc:'',
    color:'',
    price:'',
    category:'select category',
    gender:'female',
    tag:''
  }

  const sizes=['xs','sm','md','lg','xl','xxl']
  const {
    onFileChange,  
    image,
    clearImage
  }=ImageChange()

  const {
    onChange,
    formData
  }=FormInput(initialState)

  const {name,desc,price,category,gender}=formData

  const onSubmit=(e)=>{
    e.preventDefault()

    const myForm=new FormData()

    if(!image){
      alert.info('image is needed')
      return
    }
    myForm.set("name",name)
    myForm.set("description",desc)
    myForm.set("sizes",JSON.stringify(sizeArray))
    myForm.set("price",price)
    myForm.set("category",category)
    myForm.set("gender",gender)
    myForm.set("image",image)

    dispatch(createNewProduct(myForm))
  }

  
  const onAdd=()=>{
    sizeArray.push({
      size:size,
      stock:stock
    })

    setSize(0)
    setStock('')
  }

  const {error,isCreated}=useSelector(state=>state.newProduct)
   
  useEffect(()=>{
    dispatch(getAllCategories())

    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(isCreated){
      alert.success('product created successfully')
      navigate('/admin/products')
      dispatch({
        type:NEW_PRODUCT_RESET
      })
    }

  },[dispatch,isCreated,error,alert])

  const onDelete=(item)=>{
    
    setSizeArray(sizeArray.filter((i)=>i.size!==item.size))
    
  }

  const genders=[
    {name:'female'},
    {name:'male'}
  ]
  
   
  return (
    <UseCreatePage title='Create New Product' onFileChange={onFileChange} image={image} clearImage={clearImage} onSubmit={onSubmit} buttonTitle='Create'>
        <Input
        name='name'
        type="text"
        value={name}
        placeholder="Enter product name"
        onChange={onChange}
        />
        <TextArea
        name='desc'
        value={desc}
        placeholder="Enter product description"
        onChange={onChange}
        />
        <Input
        name='price'
        value={price}
        onChange={onChange}
        placeholder="Enter product price"
        type='number'
        />
        <Select
        name='category'
        array={categories}
        defValue='select category'
        value={category}
        onChange={onChange}
        />
        <div className='flex gap-2 mb-5 flex-wrap'>
          <select
          className='flex-1 rounded-md focus:outline-none text-lg border border-slate-400 focus:border-purple focus:ring-1 focus:ring-purple py-1 px-1'
          value={size}
          onChange={(e)=>setSize(e.target.value)}>
            <option value={0} disabled>Choose Size</option>
            {sizes.map((size)=>(
              <option value={size}>{size}</option>
            ))}
          </select>
          <input
          className='flex-1 rounded-md focus:outline-none text-lg border border-slate-400 focus:border-purple focus:ring-1 focus:ring-purple py-1 px-1'
          type='number'
          placeholder='Enter stock for selected size'
          value={stock}
          onChange={(e)=>setStock(e.target.value)}
          />
          <button
          onClick={()=>onAdd()}
          type='button'
          className='flex-[0.5] rounded-md px-2 py-2 bg-purple text-white hover:bg-indigo-200 hover:text-purple transition-all duration-400 hover:font-extrabold'
          >Add</button>
        </div>
        {sizeArray.length>0 && 
        <div className='flex flex-wrap flex-col gap-2 w-full border border-indigo-900 py-1 mb-5 '>
          <div className='flex  font-bold  gap-2  italic'>
            <p className='flex-1'>Size</p>
            <p className='flex-1'>Quantity</p>
            <p className='flex-1 float-right'>Action</p>
          </div>
          <hr className='border-[0.5px] border-slate-400' />
              {sizeArray.map((item)=>(
                <div className='flex   gap-2 text-sm italic'>
                  <p className='flex-1 '>{item?.size}</p>
                  <p className='flex-1'>{item?.stock}</p>
                  <AiFillDelete  onClick={()=>onDelete(item)} className='flex-1 cursor-pointer' color='red' size={23}/>
                </div>
              ))}
        </div>
}
      <Select
      name='gender'
      defValue='Select Gender'
      onChange={onChange}
      value={gender}
      array={genders}
      />   
    </UseCreatePage>
  )
}

export default CreateProduct