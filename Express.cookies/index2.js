const express= require("express");

const session=require("express-session")

const flash= require("connect-flash")
const server= express();
server.use(session({
    secret:"some day",
    resave: false,
    saveUninitialized: true,
}))

server.use(flash());

server.use((req,res, next)=>{
    res.locals.error=req.flash("error");
    next()
})

server.get("/home",function(req,res,next){

    req.flash("error","invalid creadential");
     return res.redirect("/error")
    res.send("you are welcome in homepage")
})

server.get("/error", function(req,res){
    const errorMessages= res.locals.error;
    res.send(`Error: ${errorMessages}`)
})
server.get("/user", function(req,res,next){
    res.send("you are a user")
})

server.listen(6070);