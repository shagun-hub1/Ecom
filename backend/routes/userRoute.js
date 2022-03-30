const { 
    registerUser, 
    loginUser,
    logoutUser,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getSingleUser, 
} = require('../controllers/userController')
const { isAuthenticated, authoriseRoles } = require('../middleware/auth')

 const router=require('express').Router()

router.post('/user/register',registerUser)
router.post('/user/login',loginUser)
router.get('/user/logout',logoutUser)
router.post('/user/password/forgot',forgotPassword)
router.put('/user/password/reset/:token',resetPassword)
router.get('/users',isAuthenticated,authoriseRoles("admin"),getAllUsers)
router.get('/me',isAuthenticated)
router.get('/user/:id',isAuthenticated,getSingleUser)
module.exports=router