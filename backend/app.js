const express=require('express')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const fileUpload = require("express-fileupload");


const app=express()

module.exports=app 


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())
app.use(cookieParser())
app.use(cors())


//routes
const userRoute=require('./routes/userRoute')
const productRoute=require('./routes/productRoute')
const categoryRoute=require('./routes/categoryRoute')

app.use('/api/v1',userRoute)
app.use('/api/v1',productRoute)
app.use('/api/v1',categoryRoute)


//error middleware
const errorMiddleware=require('./middleware/error')
app.use(errorMiddleware)