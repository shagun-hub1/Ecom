import  { useEffect } from 'react'
import { UseList } from '../../components'
import { useSelector,useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, deleteCategory, getAllCategories } from '../../actions/categoryAction'
import { Loader } from '../../components'
import {AiTwotoneDelete} from 'react-icons/ai'
import { DELETE_CATEGORY_RESET } from '../../constants/categoryConstant'

const CategoriesList = () => {
    const alert=useAlert()
    const dispatch=useDispatch()
    
    const onClicked=(id)=>{
        dispatch(deleteCategory(id))
    }
    const {categories,loading,error}=useSelector(state=>state.categories)
    const {isDeleted,error:deleteError}=useSelector(state=>state.deleteCategory)

    useEffect(()=>{

        dispatch(getAllCategories())
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

        if(deleteError){
            alert.error(deleteError)
            dispatch(clearErrors())
        }

        if(isDeleted){
            alert.success("Deleted Successfully")
            dispatch({
                type:DELETE_CATEGORY_RESET
            })
            dispatch(getAllCategories())
        }

    },[error,dispatch,alert,isDeleted])

    const columns=[
        {field:'id',headerName:'Id',width:250,sortable:false},
        {field:'name',headerName:'Category',width:250},
        {field:'photos',headerName:'Photos',sortable:false,width:150,renderCell:(params)=>{
            return(
                <>
                <img src={params.row.photos} className='w-8 h-8 rounded-full'/>
                </>
            )
        }},
        {field:'actions',headerName:'Action',renderCell:(params)=>{
            return(
                <>
                <AiTwotoneDelete
                onClick={()=>onClicked(params.row.id)}
                color='red'
                size={23}
                className='font-extrabold cursor-pointer'
                />
                </>
            )
        }}
    ]

    let rows=[]

    categories?.forEach((category)=>{
        rows.push({
            id:category?._id,
            name:category?.name,
            photos:category?.image?.url
        })
    })
  return (
      <>
      {loading ? 
      <Loader title="Fetching Categories"/>
      : 
    
     <UseList rows={rows} cols={columns} create={`/admin/category/new`} rowsPerPageOptions={10}/>

      
    }
    </>
  )
}

export default CategoriesList