import axios from "axios"
import { DELETE_PRODUCT_FAIL, 
    DELETE_PRODUCT_REQUEST, 
    DELETE_PRODUCT_SUCCESS, 
    GET_PRODUCTS_FAIL, 
    GET_PRODUCTS_REQUEST, 
    GET_PRODUCTS_SUCEESS, 
    GET_SINGLE_PRODUCT_FAIL, 
    GET_SINGLE_PRODUCT_REQUEST, 
    GET_SINGLE_PRODUCT_SUCESS, 
    NEW_PRODUCT_FAIL, 
    NEW_PRODUCT_REQUEST, 
    NEW_PRODUCT_SUCCESS
 } from "../constants/productConstant"


export const createNewProduct=(productData)=>async(dispatch)=>{
    try {
        dispatch({
            type:NEW_PRODUCT_REQUEST
        })

        const {data}=await axios.post('/api/v1/product/create',productData)

        dispatch({
            type:NEW_PRODUCT_SUCCESS,
            payload:data
        })
    } catch (error) {
         
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.error,   
        })
    }
}

export const getAllProducts=()=>async(dispatch)=>{
    try {

        dispatch({
            type:GET_PRODUCTS_REQUEST
        })

        const {data}=await axios.get('/api/v1/products')

        dispatch({
            type:GET_PRODUCTS_SUCEESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.response.data.error
        })
    }
}

export const deleteProduct=(id)=>async(dispatch)=>{

    try {
        dispatch({
            type:DELETE_PRODUCT_REQUEST
        })

        await axios.delete(`/api/v1/product/delete/${id}`)

        dispatch({
            type:DELETE_PRODUCT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data.error
        })
    }
}

export const getSingleProduct=(id)=>async(dispatch)=>{
    try {
        
        dispatch({
            type:GET_SINGLE_PRODUCT_REQUEST
        })

        const {data}=await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type:GET_SINGLE_PRODUCT_SUCESS,
            payload:data.product
        })

    } catch (error) {
        dispatch({
            type:GET_SINGLE_PRODUCT_FAIL,
            payload:error.response.data.error
        })
    }
}