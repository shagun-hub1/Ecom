const { createCategory, getAllCategories, deleteCategory } = require('../controllers/categoryController')

const router=require('express').Router()

router.post('/category/create',createCategory)
router.get('/categories',getAllCategories)
router.delete('/category/delete/:id',deleteCategory)

module.exports=router