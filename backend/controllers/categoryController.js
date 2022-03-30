const Category=require('../models/categoryModel')
const catchAsyncError=require('../middleware/catchAsyncError')
const cloudinary=require('cloudinary')

//create new category
exports.createCategory=catchAsyncError(async(req,res,next)=>{

   

    const myCloud=await cloudinary.v2.uploader.upload(req.body.image,{
        folder:'category',
        crop:'scale'
    })
     const {name}=req.body;

    // console.log(name)
    const category=await Category.create({
        name,
        image:{
            public_id:myCloud.public_id,
            url:myCloud.url
        }
    })

    res.status(201).json({
        success:true,
        category
    })

})

//get all categories
exports.getAllCategories=catchAsyncError(async(req,res,next)=>{

    const categories=await Category.find()

    res.status(200).json({
        success:true,
        categories
    })
})

//delete a category
exports.deleteCategory=catchAsyncError(async(req,res,next)=>{

    const category=await Category.findById(req.params.id);

    category.remove();

    res.status(200).json({
        success:true,
    })
})

