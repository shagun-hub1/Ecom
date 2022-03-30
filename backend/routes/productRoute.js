const { 
    createProduct, 
    updateProduct,
    deleteProduct,
    getProducts,
    getSingleProduct
} = require('../controllers/productController')

const{
    isAuthenticated,
    authoriseRoles
}=require('../middleware/auth')

const router=require('express').Router()


router.post('/product/create',createProduct)
router.put('/prduct/update/:id',isAuthenticated,updateProduct)
router.delete('/product/delete/:id',deleteProduct)
router.get('/products',getProducts)
router.get('/product/:id',getSingleProduct)

module.exports=router