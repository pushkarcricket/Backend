const express= require("express");
const server= express();


server.use(function(req,res,next){
    console.log("hello world");
    next()

})

server.get("/admin",(req,res)=>{
    res.send("admin page is found")
})
server.get("/edit",(req,res)=>{
    res.send("edit page is found")
})

server.listen(3030)