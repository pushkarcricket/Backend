function myMiddleware(req,res,next){

    console.log("this is my middleware")
    next()

}


module.exports=myMiddleware