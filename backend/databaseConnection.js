const mongoose=require('mongoose')

const connectionUrl=process.env.DB_URL

const connection=mongoose.connect(connectionUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((data)=>{
        console.log(`Mongodb connect with server ${data.connection.host}`)
})
 

module.exports=connection