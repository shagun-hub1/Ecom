const ErrorHandler=require('../utils/errorHandler')

module.exports=(err,req,res,next)=>{

    err.statusCode=err.statusCode || 500;
    err.message=err.message || 'Internal Server Error';

    //wrong mongodbId syntax
    if(err.name==="CastError"){
        const message=`Resource not found.Invalid : ${err.path}`
        err=new ErrorHandler(message,400)
    }

    //mongoose duplicate error
    if(err.code===11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} entered`
        err=new ErrorHandler(400,message)
    }

    //Wrong JWT Error
    if(err.name==='JsonWebTokenError'){
        err=new ErrorHandler(400,`JsonWebToken is invalid`)
    }

    //JWT Expire Error
    if(err.name==='TokenExpiredError'){
        err=new ErrorHandler(400,'Json Web Token Expire')
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message
    })
}