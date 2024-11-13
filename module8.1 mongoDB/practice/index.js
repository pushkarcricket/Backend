const express=require("express");
const app=express();

const mongoose=require("./config/mongoose")
const User=require("./models/newsechma");


app.get("/",function(req,res,next){
    res.send("welcome to homepage")
})

// app.get("/create", async(req,res)=>{
//     let createdUser=  await User.Create({
//         name:"pushkar",
//         password:"abcindn",
//         email:"abnce@gamil.com",
//         age: 25
//     })

//     console.log("new user is created", createdUser);
//     res.send("your user is created now")
// })

// app.get("/run", function(req,res,next){
//     let createUSer= User.Create({
//         name:"pushkar",
//         password:"abckifif",
//         email: "gufvud@gmail.com",
//         ismarried: false,
//         age: 25
//     })
// })

app.get("/user", (req,res,next)=>{
    let createUser=User.create({
        name: "pushkar",
        password: "abvdbudud",
        email: "abs@gamil.com",
        ismarried: false,
        age: 25
    })

    console.log("new user is created",createUser);
    res.send("you are welcome here")
})

app.listen(4060)