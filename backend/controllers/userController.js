const catchAsyncError=require('../middleware/catchAsyncError')
const ErrorHandler=require('../utils/errorHandler')
const User=require('../models/userModel')
const sendToken = require('../utils/sendToken')
const sendEmail=require('../utils/sendEmail')
const crypto=require('crypto')
const bcrypt=require('bcryptjs')

//register User
exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,password,phoneNumber}=req.body

    const user=await User.create({
        name,
        email,
        password,
        phoneNumber
    })

    sendToken(user,201,res)
})

//login
exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;

    if(!email || !password)
    return next(new ErrorHandler(400,"Invalid Credentials"))
    
    const user=await User.findOne({email}).select("+password")
    
    if(!user)
    return next(new ErrorHandler(400,"Invalid Credentials"))

    const isPasswordMatch=await user.isValidPassword(password)
    
    if(!isPasswordMatch)
    return next(new ErrorHandler(400,"Invalid Credentials"))

    sendToken(user,200,res)
})

//logout User
exports.logoutUser=catchAsyncError(async(req,res,next)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true
    })
})

//forgot password
exports.forgotPassword=catchAsyncError(async(req,res,next)=>{

    const user=User.findOne({email:req.body.email});

    if(!user)
    return next(new ErrorHandler(404,"User not found"))

    //get reset password token
    const resetToken=user.getResetPasswordToken();

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl=`${req.protocol}://${req.get("host")}/api/v1/${resetToken}`;

    const message=`Your Password reset token is \n\n ${resetPasswordUrl}. \n\nIf you have not requested this email,then please ignore`

    try{

        await sendEmail({
            email:user.email,
            subject:`Password Recovery`,
            message
        })

        res.status(200).json({
            success:true,
            message:`Email sent successfully to ${user.email}`
        })

    }catch(error){
        user.resetPasswordToken=undefined
        user.resetPasswordExpire=undefined

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandler(500,error.message))
    }
})

//reset Password
exports.resetPassword=catchAsyncError(async(req,res,next)=>{

    const resetTokenHashed=crypto.createHash("sha256").update(req.params.token).digest("hex")

    const user=await User.findOne({
        resetPasswordToken:resetTokenHashed,
        resetPasswordExpire:{$gt:Date.now()}
    })

    if(!user)
    return next(new ErrorHandler(400,"Reset Password token is not valid or has been expired"))

    user.password=req.body.password

    user.resetPasswordExpire=undefined
    user.resetPasswordToken=undefined
    await user.save({validateBeforeSave:false})

    sendToken(user,200,res);
})

//update password
exports.updatePassword=catchAsyncError(async(req,res,next)=>{


})

//get all users-- Admin
exports.getAllUsers=catchAsyncError(async(req,res,next)=>{

    const users=await User.find()

    res.status(200).json({
        success:true,
        users
    })
})

//getv user profile
exports.getProfile=catchAsyncError(async(req,res,next)=>{

    const user=User.findById(req.user._id)
})

//get a single user detail
exports.getSingleUser=catchAsyncError(async(req,res,next)=>{

    const user=await User.findById(req.params.id)

    res.status(200).json({
        success:true,
        user
    })


})

//update user
exports.updateUser=catchAsyncError(async(req,res,next)=>{

    const user=await User.findById(req.params.id)
 

    const updatedUser=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json({
        success:true,
        message:'Profile Updated Sucessfully'
    })
})

