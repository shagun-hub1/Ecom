import React, { useEffect, useState } from 'react'
import { Loader, UpdateItem } from '../../components'
import {useSelector,useDispatch} from 'react-redux'
import {useAlert} from 'react-alert'
import { getSingleProduct } from '../../actions/productAction'
import { CLEAR_ERRORS } from '../../constants/productConstant'
import {useParams} from 'react-router-dom'
import {MdDriveFileRenameOutline,MdDescription,MdCategory} from 'react-icons/md'
import {IoIosPricetags,IoIosPeople} from 'react-icons/io'

const UpdateProduct = () => {
  const alert=useAlert()
  const dispatch=useDispatch()
  const {productId}=useParams()

  const {loading,error,product}=useSelector(state=>state.singleProduct)

  useEffect(()=>{
    dispatch(getSingleProduct(productId))

    if(error){
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

  },[error,dispatch,alert])

  const sizes=['xs','sm','md','lg','xl','xxl']

  const [size, setsize] = useState('')
  const [stock, setstock] = useState('')

  const [sizeArray, setsizeArray] = useState(product?.sizes)

  const onSubmit=(e)=>{
      e.preventDefault()
  }
  
  return (
    <>
    {loading ? <Loader title='fetching product details'/> : 
    
     <UpdateItem>
        <div className='flex w-full gap-1 m-2'>
            <div className='flex-1 border border-1 border-slate-200 shadow-md p-3'>
              <h1 className='underline text-3xl text-opalgreen font-extrabold mb-2' >Product Details</h1>
                <div className='w-full p-4 flex flex-col gap-3'>
                    <img src={product?.image?.url} alt="product-image" className='w-2/4 ' />
                    <div className='flex gap-2 items-center'><MdDriveFileRenameOutline className='font-extrabold' size={23} color='indigo'/> : <p className='text-sm text-slate-500'>{product?.name}</p></div>
                    <div className='flex gap-2 items-center'><IoIosPricetags className='font-extrabold' size={23} color='indigo'/> : <p className='text-sm text-slate-500'>{product?.price}</p></div>
                    <div className='flex gap-2 items-center'><MdDescription className='font-extrabold' size={30} color='indigo'/> : <p className='text-sm text-slate-500'>{product?.description}</p></div>
                    <div className='flex gap-2 items-center'><MdCategory className='font-extrabold' size={23} color='indigo'/> : <p className='text-sm text-slate-500'>{product?.category}</p></div>
                    <div className='flex gap-2 items-center'><IoIosPeople className='font-extrabold' size={23} color='indigo'/> : <p className='text-sm text-slate-500'>{product?.gender}</p></div>
                    <p className='font-bold'>Available Sizes--</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-4 text-red-400'>
                          <p>Size</p>
                          <p>Stock</p>
                        </div>
                        {
                          sizeArray.map((item)=>(
                            <>
                            <div className='flex gap-10 items-center text-slate-500'>
                            <p>{item?.size}</p>
                            <p>{item?.stock}</p>
                            </div>
                            </>
                          ))
                        }
                       
                    </div>
                </div>
            </div>
            <div className='flex-1 border border-slate-300 shadow-md p-2'>
                <h1 className='underline text-3xl text-opalgreen font-extrabold mb-2' >Update Product</h1>

                <form onSubmit={onsubmit}>
                    
                </form>
            </div>
        </div>
    </UpdateItem>
    }
    </>
  )
}

export default UpdateProduct