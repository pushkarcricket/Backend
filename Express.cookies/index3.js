//  const express= require("express");
 
//  const Esession = require("express-session");

// //  const session=require("express-session")

//  const cookieParser=require("cookie-parser");

//  const flash=require("connect-flash")
//  const server= express();

//  server.use(flash()); 

//  server.use(cookieParser())



//  server.use(Esession({
//     secret: "some day",
//     resave: false,
//     saveUninitialized: false,
//  }))

//  server.get("/", function(req,res,next){
//     //res.cookie("name", "pushkar")

//     res.cookie("name", "pushkar")
//     res.send("server is started now")

//     console.log(req.cookies)
//  })

//  server.get("/home", function(req,res,next){

//    res.cookie("age", 27);

//    req.flash("error","invalid creadential");
//    res.redirect("/contact")
//     res.send("home page is found")
//  })

//  server.get("/contact", function(req,res,next){
//    res.send("contact page found")
//    console.log("user data is found")
//  })

 

// //  server.get("*", function(req,res,next){
// //     res.send("no page found")
// //  })

// //  server.listen(7050)

// server.listen(6060, ()=>{
//    console.log("server is running on localhost:6060")
// })