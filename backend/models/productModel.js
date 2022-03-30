const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide product name']
    },
    description:{
        type:String,
        required:[true,'Please provide product description']
    },
    sizes:[{
        size:{type:String,required:true},
        stock:{type:Number,required:true}
    }],
   // color:{type:String,required:[true,'Please provide the color of product']},
    price:{type:Number,required:[true,'Please provide the price of product']},
    category:{
        type:String,
        required:[true,'Please enter product category']
    },
    ratings:{
        type:Number,
        default:0,
    },
    image:{
        public_id:{
            type:String,
            required:true 
        },
        
        url:{
            type:String,
            required:true
        }
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
      name:{
          type:String,
          required:true
      },
      rating:{
          type:Number,
          required:true
      },
      comment:{
          type:String,
          required:true
      }  
    }],
    gender:{
        type:String,
        required:[true,'Gender is required']
    },
    tag:{
        type:String
    }

},{timestamps:true})

module.exports=mongoose.model('Product',productSchema)