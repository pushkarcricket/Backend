

function mySecondMiddleware(req,res,next){
    console.log("this is my second middleware")
}

module.exports=mySecondMiddleware