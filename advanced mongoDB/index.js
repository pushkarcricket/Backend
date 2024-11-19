const express=require("express")

const app=express()
const User = require("./models/user")
// const mongoose=require("./models/user")


const dummyData=[
    { name: 'Pushkar', email: 'pushkar1@gmail.com', age: 25, iamarried: false, password: 'password1' }
    ,
    { name: 'Amit', email: 'amit2@gmail.com', age: 28, iamarried: true, password: 'password2' },
    { name: 'Ravi', email: 'ravi3@gmail.com', age: 30, iamarried: true, password: 'password3' },
    { name: 'Priya', email: 'priya4@gmail.com', age: 24, iamarried: false, password: 'password4' },
    { name: 'Sanjay', email: 'sanjay5@gmail.com', age: 35, iamarried: true, password: 'password5' },
    { name: 'Neha', email: 'neha6@gmail.com', age: 22, iamarried: false, password: 'password6' },
    { name: 'Radhika', email: 'radhika7@gmail.com', age: 26, iamarried: false, password: 'password7' },
    { name: 'Vikram', email: 'vikram8@gmail.com', age: 27, iamarried: true, password: 'password8' },
    { name: 'Manoj', email: 'manoj9@gmail.com', age: 29, iamarried: true, password: 'password9' },
    { name: 'Sita', email: 'sita10@gmail.com', age: 23, iamarried: false, password: 'password10' }

]

app.get("/", function(req,res){
    res.send("welcome to homepage")
})

app.get("/create", async(req,res)=>{
    let newUser= await User.create({
        name:"pushkar",
        email:"pushkar@gmail.com",
        age:25,
        iamarried:false,
        password:"password"
    
    })

    console.log("new user is created",newUser)

    res.send(newUser)
})

app.get("/multipleSchema", async(req,res)=>{

    const manyData= await User.insertMany(dummyData)

    console.log(manyData)
    res.send(manyData)

})

app.get('/learning', async(req,res)=>{

    //eq(equalto)
    // const singleUser=  await User.find({age:{$eq:25}})

    //ne(notEqualTo)

    // const singleUser= await User.find({name:{$ne:"Priya"}})

    //lt(lessthen)

    // const singleUser =await User.find({age: {$lt: 27}})

    //gt(greaterThen)

    // const singleUser= await User.find({age : {$gt:28}})

    //lte(less Then Equal To)

    // const singleUser= await User.find({age : {$lte:25}})

    //gte (greater Then Equal To)

    // const singleUser= await User.find({age :{$gte:30}})

    //in(work like if & else[24,25,26] they will only show that who's age is equal to 24,25,26)

    // const singleUser= await User.find({age:{$in:[24,25,26]}})

    //nin(not in(who's age is[24,25,26] they will not show that data))

    // const singleUser= await User.find({ismarried :{$nin:true}})

    // exists (this opertor shows the data is availble or not )

    // const singleUser= await User.find({salary :{$exists:false}})

    const singleUser= await User.find({name: {$regex: /^p.*r$
        /}})

    


    console.log(singleUser)
    res.send(singleUser)
})

app.listen(6070);