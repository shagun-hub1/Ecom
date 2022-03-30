const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const validator=require('validator')
const jwt=require('jsonwebtoken')
const crypto=require('crypto')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name']
    },
    phoneNumber:{
        type:Number,
        maxlength:10
    },
    email:{
        type:String,
        required:[true,"please provide your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please provide your password"],
        minlength:[8,"Password must be greater than 8 characters"],
        select:false
    },
    profilePicture:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
},
{timestamps:true})

userSchema.pre("save",async function(next){

    if(!this.isModified("password"))
    next()

    this.password=await bcrypt.hash(this.password,10)
})

//JWT Token
userSchema.methods.getJWTToken=async function(){
        return await jwt.sign({id:this._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRE
        })
}

userSchema.methods.isValidPassword=async function(password){

    return await bcrypt.compare(password,this.password);
}
module.exports=mongoose.model("user",userSchema)

//Generating reset passowrd token
userSchema.methods.getResetPasswordToken=async function(){

    //generating token
    const token=crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken=crypto.createHash("sha256").update(token).digest("hex")

    this.resetPasswordExpire=Date.now()+15*60*1000;

    return token
}



