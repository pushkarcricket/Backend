 const express= require("express");
 const app= express();
 const fs=require("fs");
 const session=require("express-session");
 const cookie=require("cookie-parser")
 const ejs=require("ejs")
const exjson=require("express-json")

app.use('exjson')
app.set("view-engine", "ejs")

app.use(express.urlencoded({extended: true}))


 app.use(session({
    secret: "some day",
    saveUninitialized: false,
    NoSave: false,
 }))

 app.get("/", function(req,res,next){
    res.cookie("name", "pushkar")
    res.cookie("age", 26)
    res.send("server is started now")
 })


 fs.mkdir("helloExp", function(err,data){
    if(err){
        console.log("error is found")
    }else{
        console.log("data is recevied")
    }
 })

 fs.writeFile("mom.txt", "helloExp", function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
 })
 fs.readFile("mom.txt", "utf8", function(err,data){
    if(err){
        console.log(err)
    
    }else{
        console.log(data)
    }
 })

 





 app.get("/home", function(req,res){
    res.send("server is started ")
 })

 app.get("/user/:main/:pushkar", function(req,res){
    res.send(`data is found in params ${req.params.pushkar}`);
    console.log(req.params.pushkar)

 })
 

 app.get("/test", function(req,res,next){
    // res.send.pushkar=true;

    res.send({message: "i am done ", pushkar: true})
    // res.send("i am done")
 })

 app.get("/details", function(req,res,next){
    res.render("app.ejs")
 })

 app.listen(4050);