const ErrorHandler = require("../utils/errorHandler");
const jwt=require('jsonwebtoken')
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userModel");


exports.isAuthenticated=catchAsyncError(async(req,res,next)=>{
        const {token}=req.cookies;

        if(!token)
        return next(new ErrorHandler(401,"Not Authenticated"))

        const decodedData=await jwt.verify(token,process.env.JWT_SECRET)

        req.user=await User.findById(decodedData.id)

        next()
})

exports.authoriseRoles=(...roles)=>{
        return (req,res,next)=>{
                if(!roles.includes(req.user)){
                        return next(new ErrorHandler(400,"You are not allowed to access this resource"))
                }
                next();
        }
}


