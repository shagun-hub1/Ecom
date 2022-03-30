import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom' 
import {
  AdminDashboard,
  CreateCategory,
  CreateProduct, 
  Login,
  ProductsList,
  Register,
  SingleProduct,
  SingleUser,
  UpdateProduct,
  UpdateUser,
  UsersList,
} from './pages'
import CategoriesList from './pages/dashboard/CategoriesList'
const App = () => {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/">
         <Route path="login" element={<Login/>}/>
         <Route path="register" element={<Register/>}/>
         <Route path="admin">
            <Route index element={<AdminDashboard/>}/>
            <Route path="users">
                <Route index element={<UsersList/>}/>
                <Route path=":userId" element={<SingleUser/>}/>
                <Route path="update/:userId" element={<UpdateUser/>}/>
            </Route>
            <Route path="products">
                <Route index element={<ProductsList/>}/>
                <Route path=":productId" element={<SingleProduct/>}/>
                <Route path="update/:productId" element={<UpdateProduct/>}/>
                <Route path="new" element={<CreateProduct/>}/>
            </Route>
            <Route path="category">
              <Route index element={<CategoriesList/>}/>
              <Route path="new" element={<CreateCategory/>}/>
            </Route>
         </Route>
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App