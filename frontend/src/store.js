import {createStore,applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import {categoriesReducer, newCategoryReducer, updateCategoryReducer} from './reducers/categoryReducer' 
import { createProductReducer, getAllProducts, getSingleProductReducer, updateProductReducer } from './reducers/productReducer';

const reducer=combineReducers({
    newCategory:newCategoryReducer,
    categories:categoriesReducer,
    deleteCategory:updateCategoryReducer,
    newProduct:createProductReducer,
    allProducts:getAllProducts,
    updateProduct:updateProductReducer,
    singleProduct:getSingleProductReducer
})

let initialState={}
let middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;