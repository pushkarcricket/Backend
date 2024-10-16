// const fs=require("fs")

// fs.mkdir("helloNord",(err)=>{
//     if(err){
//         console.log("some error is found")
//     }else{
//         console.log("folder is created ")
//     }
// })

// const server=require("http");

// const server1=server.createServer(function(req,res){
//     res.end("server is running now ")

// })

// server1.listen(2890)

// const express= require("express")
// const server=express();

// server.get("*", function(req,res,next){
//     res.send("page not found");
//     next();
// })

// server.get("/admin",function(req,res){
//     res.send("admin page is found")
// })
// server.get("/edit", function(req,res){
//     res.send("edit page is found")
// })


// server.listen(2890)

const express=require("express")
const server=express()
const expressSession=require("express-session");
// const server=expressSession();
server.use(expressSession({
    secret:'some day',
    resave: false,
    saveUninitialized : false,
}))

server.get("/test", function(req,res,next){
    res.send.vikas=true;
    res.send("i amm done")
})
server.get("/run",function(req,res,next){
    res.send.pushkar=false;
    res.send("i am not done yet")
})

server.listen(3050)