 import { CLEAR_ERRORS,
     DELETE_PRODUCT_FAIL,
     DELETE_PRODUCT_REQUEST,
     DELETE_PRODUCT_RESET,
     DELETE_PRODUCT_SUCCESS,
     GET_PRODUCTS_FAIL,
     GET_PRODUCTS_REQUEST, 
     GET_PRODUCTS_SUCEESS, 
     GET_SINGLE_PRODUCT_FAIL, 
     GET_SINGLE_PRODUCT_REQUEST, 
     GET_SINGLE_PRODUCT_SUCESS, 
     NEW_PRODUCT_FAIL, 
     NEW_PRODUCT_REQUEST, 
     NEW_PRODUCT_RESET, 
     NEW_PRODUCT_SUCCESS, 
     UPDATE_PRODUCT_FAIL, 
     UPDATE_PRODUCT_REQUEST,
     UPDATE_PRODUCT_RESET,
     UPDATE_PRODUCT_SUCCESS
} from "../constants/productConstant";

export const createProductReducer=(state={product:{}},action)=>{
    switch (action.type) {
        case NEW_PRODUCT_REQUEST:
            return{
                loading:true,
            }
        
        case NEW_PRODUCT_SUCCESS:{
            return{
                ...state,
                loading:false,
                product:action.payload.product,
                isCreated:action.payload.success,
            }
        }

        case NEW_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case NEW_PRODUCT_RESET:
            return{
                ...state,
                loading:false,
                isCreated:false
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                loading:false,
                error:null
            }
            
    
        default:
            return state;
    }
}

export const getAllProducts=(state={products:[]},action)=>{

    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return{
                loading:true,
            }

        case GET_PRODUCTS_SUCEESS:
            return{
                ...state,
                loading:false,
                products:action.payload.products
            }

        case GET_PRODUCTS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}

export const getSingleProductReducer=(state={product:{}},action)=>{
    switch (action.type) {
        case GET_SINGLE_PRODUCT_REQUEST:
            return{
                loading:true,
            }
        
        case GET_SINGLE_PRODUCT_SUCESS:
            return{
                loading:false,
                product:action.payload
            }

        case GET_SINGLE_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
    
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}

export const updateProductReducer=(state={product:{}},action)=>{

    switch (action.type) {
        case UPDATE_PRODUCT_REQUEST:
            case DELETE_PRODUCT_REQUEST:
            return{
                loading:true,
                isUpdated:false,
                isDeleted:false
            }

        case UPDATE_PRODUCT_SUCCESS:
            return{
                loading:false,
                isUpdated:true,
                product:action.payload
            }
            
        case DELETE_PRODUCT_SUCCESS:
            return{
                loading:false,
                isDeleted:true
            }

        case UPDATE_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case DELETE_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        case UPDATE_PRODUCT_RESET:
            return{
                ...state,
                isUpdated:false
            }
        
        case DELETE_PRODUCT_RESET:
            return{
                ...state,
                isDeleted:false
            }
            
    
        default:
            return state;
    }
}