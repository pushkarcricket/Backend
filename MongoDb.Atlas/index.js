const express=require("express")
const app=express();

const mongoose=require("./model/mongoose.")
const User=require("./config/schemaRun")

app.get("/", function(req,res,next){
    res.send("welcome to our server")
})

app.get("/user", async(req,res,next)=>{
    let createUser=  await User.create({
        name:"pushkar",
        password:"usdubjd",
        email:"bdsjb@gmail.com",
        isMarried:false,
        age: 25
    })

    console.log("new user is created",createUser);
    res.send("welcome to user page")
})

app.get("/readFile", async(req,res,next)=>{
    let result=  await User.find({name: "pushkar"})
    console.log(result);
    // res.send("reading the file");
    res.send(result)
})

app.get("/readSingleFile", async(req,res,next)=>{
    let singleUser=  await User.findOne({age:25})

    console.log(singleUser);
    res.send(singleUser)
})

app.get("/update", async(req,res,next)=>{
    let updateValue= await User.findOneAndUpdate({name:"pushkar"},{name:"rajesh"},{new:true})

    console.log(updateValue);
    res.send(updateValue)
})

app.get("/delete", async(req,res,next)=>{
 await User.findOneAndDelete({name:"rajesh"} ,{new:true})
 
 res.send("your file is deleted")
})



app.listen(2070)