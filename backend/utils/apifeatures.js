
class ApiFeatures{
    constructor(query,querystr){
        this.query=query
        this.querystr=querystr
    }

    search(){
        const keyword=this.querystr.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options:"i"
            }
        } : {}

        
        this.query=this.query.find(keyword)

        return this
    }

    filter(){
        const queryCopy={...this.querystr}

        //keyword removed
        delete queryCopy["keyword"]
        
        let queryCopyStr=JSON.stringify(queryCopy)
        queryCopyStr=queryCopyStr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`)

        this.query=this.query.find(JSON.parse(queryCopyStr));

        return this
    }
    
}

module.exports=ApiFeatures