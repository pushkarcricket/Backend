
//Dynamic server


// const express=require("express")
// const server= express();

// server.get("/",function(req,res,next){
//     res.send("home page is found")
// })
// server.get("/admin", function(req,res,next){
//     res.send("admin page is found ")
// })
// server.get("/user", function(req,res,next){
//     res.send("user data is found ")
// })
// server.get("/admin/adminData", function(req,res,next){
//     res.send("dynamic data is found")
// })
// server.get("*", function (req,res,next){
//     res.send("no page found")
// })

// server.listen(4060);

// const express= require("express");
// const server=express();
// const cookieParsar=require("cookie-parser");

// server.use(cookieParsar )


// let age=57;
//  const age=prompt("enter your age")
// if(age < 18){
//     console.log("you can go to college")
// }else if(age < 25){
//     console.log("you can go to office")
// }else if(age <50){
//     console.log("you can rest at home")
// }else{
//     console.log("rest")
// }


// const express=require("express");
// const server=express();
// const cookieParsar=require("cookie-parser");

// server.use(cookieParsar)

// server.get("/user", function(req,res,next){
//     res.send("user data is found")
//     res.cookie({name:"pushkar",
//         age: 25,
//         profession:"student"
//     })

//     console.log(req.cookies.name);
//     console.log(req.cookies.age)
// })

// server.get("/contact", function(req,res,next){
//     res.send("contact data is found")
// })

// server.listen(5050)