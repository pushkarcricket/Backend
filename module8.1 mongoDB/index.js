const express=require("express")

const app=express();

// const mongoose=require('./config/mongoose')

const mongoose=require('./config/mongoose')
const User=require('./models/userSchema')

app.get("/", function(req,res,next){
    res.send("welcome to homepage")
})

app.get("/testing", function(req,res,next){
    res.send("data testing")
})

app.get("/create",  async(req,res)=>{
    
    let createdUser= await User.create({
        name:"pushkar",
        email:"abcmvj@gmail.com",
        password: "password",
        age:25

    })
    res.send("create page ")


    console.log("new user is created",createdUser)
   
})

app.get("/read", async(req,res)=>{
    

    let rv=  await User.find({name: "pushkar"})
    console.log("----",rv)
    res.send("testing read route")
})

app.listen(3060)