import { useEffect } from 'react'
import {UseList,Loader} from '../../components'
import {useSelector,useDispatch} from 'react-redux'
import {useAlert} from 'react-alert'
import { deleteProduct, getAllProducts } from '../../actions/productAction'
import { CLEAR_ERRORS, DELETE_PRODUCT_RESET } from '../../constants/productConstant'
import {AiTwotoneDelete} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductsList = () => {

  const alert=useAlert()
  const dispatch=useDispatch()

  const {loading,error,products}=useSelector(state=>state.allProducts)
  const {error:updateError,isDeleted}=useSelector(state=>state.updateProduct)

  const remove=(id)=>{
    dispatch(deleteProduct(id))



  }

  useEffect(()=>{
    dispatch(getAllProducts())
    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(updateError){
      alert.error(updateError)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(isDeleted){
      alert.success('Product Deleted Successfully')
      dispatch(getAllProducts())
      dispatch({
        type:DELETE_PRODUCT_RESET
      })
    }

  },[error,alert,dispatch,isDeleted,updateError])

  const cols=[
    {field:'id',headerName:'Id',width:100,sortable:false},
    {field:'name',headerName:'Product Name',width:250},
    {field:'price',headerName:'Price',width:150},
    {field:'stock',headerName:'Available Sizes',width:250,sortable:false,renderCell:(params)=>{
      return(<>
        <div className='flex items-center gap-1 mt-[-2em]'>
          {params.row.stock?.map((item)=>(
            <>
              <p className='font-bold text-md text-green-400'>{item?.size}-</p>
              <p className='text-indigo-900 text-xs'>{item?.stock}</p>,
            </>
          ))}
        </div>
      </>)
    }},
    {field:'images',headerName:'Images',sortable:false,renderCell:(params)=>{
      return(
        <>
        <img src={params.row.images} alt='product image' className='w-10 h-10 rounded-full'/>
        </>
      )
    }},
    {field:'action',headerName:'Actions',renderCell:(params)=>{
      return(<>
        <div className='flex flex-row gap-2'>
          <Link to={`/admin/products/update/${params.row.id}`}>
          <FaRegEdit color='blue' size={22} className='cursor-pointer'/>
          </Link>
          <AiTwotoneDelete color='red' onClick={()=>remove(params.row.id)} size={22} className='cursor-pointer'/>
        </div>
      </>)
    }}
  
  ]

  const rows=[]

   

  products?.forEach((product)=>{
    rows.push({
      id:product?._id,
      name:product?.name,
      price:product?.price,
      images:product?.image?.url,
      stock:product?.sizes
    })
  })
  return (
    <>
    {
      loading ? <Loader title="Fetching Products"/> : 
      <>
      
      <UseList rows={rows} cols={cols} create={'/admin/products/new'} rowsPerPageOptions={8}/>
 
      </>
    }
    </>
  )
}

export default ProductsList