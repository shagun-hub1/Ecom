const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    name:{type:String,required:[true,'Enter category name'],unique:true},
    image:{
        public_id:{type:String,required:true},
        url:{type:String,required:true}
    }
})

module.exports=mongoose.model('category',categorySchema)