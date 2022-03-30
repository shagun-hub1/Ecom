const Product=require('../models/productModel')
const catchAsyncError=require('../middleware/catchAsyncError')
const ErrorHandler=require('../utils/errorHandler')
const ApiFeatures=require('../utils/apifeatures')
const cloudinary=require('cloudinary')

//Admin -- create product
exports.createProduct=catchAsyncError(async(req,res,next)=>{

    const myCloud=await cloudinary.v2.uploader.upload(req.body.image,
        {
            folder:'products'
        })
        
    const {name,description,price,sizes,gender,category}=req.body
    
    const product=await Product.create({
        name,
        description,
        price,
        sizes:JSON.parse(sizes),
        image:{
            public_id:myCloud.public_id,
            url:myCloud.url
        },
        gender,
        category
    })
    
     res.status(201).json({
        success:true,
        product
    })
})

//Admin -- update product
exports.updateProduct=catchAsyncError(async(req,res,next)=>{

    let product=await Product.findById(req.params.id)

    if(!product)
    return next(new ErrorHandler(404,`Product with ${req.params.id} not found`))

     
    if(req.body.image){
        await cloudinary.v2.uploader.destroy(product.image.public_id)
    }
   
    const {name,description,gender,category,price,sizes}=req.body

    const updateImage=await cloudinary.v2.uploader.upload(req.body.image)
    product=await Product.findByIdAndUpdate(req.params.id,{
        name,
        description,
        gender,
        category,
        price,
        sizes,
        image:{
            public_id:updateImage.public_id,
            url:updateImage.url
        }
    },{new:true})

    res.status(200).json({
        success:true,
        product
    })
})

//delete a product--Admin
exports.deleteProduct=catchAsyncError(async(req,res,next)=>{
    let product=await Product.findById(req.params.id)

    if(!product)
    return next(new ErrorHandler(404,`Product with ${req.params.id} not found`))

    await product.remove()

    res.status(200).json({
        success:true
    })
})

//get all products
exports.getProducts=catchAsyncError(async(req,res,next)=>{

    const apifeatures=new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()

    const products= await apifeatures.query

    res.status(200).json({
        success:true,
        products
    })
})

//get Single Product
exports.getSingleProduct=catchAsyncError(async(req,res,next)=>{

    const product=await Product.findById(req.params.id)

    if(!product)
    return next(new ErrorHandler(404,"Product not found"))

    res.status(200).json({
        success:true,
        product
    })
})

//get single product details
exports.getSingleProduct=catchAsyncError(async(req,res,next)=>{

    const product=await Product.findById(req.params.id)

    if(!product)
    return next(new ErrorHandler(404,`Product with ${req.params.id} not found`))


    res.status(200).json({
        success:true,
        product
    })
})
