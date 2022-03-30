import { stepLabelClasses } from "@mui/material";
import { CLEAR_ERRORS,
     DELETE_CATEGORY_FAIL,
     DELETE_CATEGORY_REQUEST,
     DELETE_CATEGORY_RESET,
     DELETE_CATEGORY_SUCCESS,
     GET_CATEGORIES_FAIL,
     GET_CATEGORIES_REQUEST,
     GET_CATEGORIES_SUCCESS,
     NEW_CATEGORY_FAIL, 
     NEW_CATEGORY_REQUEST, 
     NEW_CATEGORY_RESET, 
     NEW_CATEGORY_SUCCESS 
} from "../constants/categoryConstant";


export const newCategoryReducer=(state={category:{}},action)=>{

    switch (action.type) {
        case NEW_CATEGORY_REQUEST:
            return{
                loading:true,
            }
            
        case NEW_CATEGORY_SUCCESS:
            return{
                loading:false,
                category:action.payload,
                success:true
            }
        
        case NEW_CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        case NEW_CATEGORY_RESET:
            return{
                ...state,
                success:false
            }
        
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
}

export const categoriesReducer=(state={categories:[]},action)=>{
    switch (action.type) {
         
        case GET_CATEGORIES_REQUEST:
            return{
                loading:true
            }

        case GET_CATEGORIES_SUCCESS:
            return{
                ...state,
                loading:false,
                categories:action.payload
            }


        case GET_CATEGORIES_FAIL:
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

export const updateCategoryReducer=(state={},action)=>{

    switch (action.type) {
        case DELETE_CATEGORY_REQUEST:
            return{
                loading:true
            }
        
        case DELETE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading:false,
                isDeleted:true
            }
        
        case DELETE_CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        
        case DELETE_CATEGORY_RESET:
            return{
                ...state,
                isDeleted:false
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