const express=require("express")
const server=express();
 const expressSession=require("express-session");
 
 server.use(function(req,res,next){
    console.log("express is fired");
    next();
 })

 server.use(expressSession({
    secret:"some day",
    resave: false,
    saveUninitialized: false,
 }))


 server.get("/admin", (req,res)=>{
    res.send("server is getting started")
 })

 server.get("/edit", (req,res)=>{
    res.send("edit page is found")
 })

 server.get("/home", (req,res)=>{
    res.send("home page is found") })

server.get("/test",function(req,res,next){
    res.send.vikas=true;
    res.send("i am done ")
})

server.get("/run",function(req,res,next){
    res.send.pushkar=true;
    res.send("i am also done with you")
})

server.get("*", function(req,res){
    res.send("no page found")

})

server.listen(4060)