const app=require('./app')
const cloudinary=require('cloudinary')
require('dotenv').config()

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(err.message)
    console.log(`Shutting down the server due to uncaught exception`) 
    process.exit(1)
})

 
//database condition
require('./databaseConnection')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const server=app.listen(process.env.PORT,()=>{
    console.log(`App listening at http://localhost:${process.env.PORT}`)
})  

//unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`)

    server.close(()=>{
        process.exit(1);
    })
})

