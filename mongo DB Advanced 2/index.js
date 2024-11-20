const express= require("express")
const app=express()
const mongoose=require("mongoose")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
const dummyData=[
    {username: "pushkar", email: "john.doe42@example.com", password: "Password123!", ismarried: true, age: 34},
{username: "sarah_smith22", email: "sarah.smith22@example.com", password: "Summer@2024", ismarried: false, age: 29},
{username: "mike_jones91", email: "mike.jones91@example.com", password: "Secure@Pass321", ismarried: false, age: 33},
{username: "emily_brown78", email: "emily.brown78@example.com", password: "Pass!2024", ismarried: true, age: 45},
{username: "robert_white56", email: "robert.white56@example.com", password: "StrongPassword123", ismarried: true, age: 50},
{username: "lily_king49", email: "lily.king49@example.com", password: "LilK@ng@123", ismarried: false, age: 25},
{username: "dylan_lee33", email: "dylan.lee33@example.com", password: "33Dylan@!Pass", ismarried: false, age: 28},
{username: "hannah_scott25", email: "hannah.scott25@example.com", password: "Hannah@2024", ismarried: true, age: 40},
{username: "chris_evans87", email: "chris.evans87@example.com", password: "Chr!sEvans123", ismarried: true, age: 37},
{username: "olivia_miller60", email: "olivia.miller60@example.com", password: "O!iviaPass2024", ismarried: false, age: 32}

]

const User=require("./models/schema")
app.get("/", (req,res)=>{
    res.send("welcome to homepage")
})

app.post("/create", async(req,res)=>{

    const createdUser= await User.create({
        username:"pushkar",
        email:"pk@gmail.com",
        ismarried:false,
        age:25,
        password:"dfknlk"

    })
    console.log("single user shcema created")
    res.send(createdUser)
})

app.post("/create/post/:username", async (req,res)=>{

    const singleuser= await User.findOne({username:req.params.username})
    await singleuser.posts.push({content:"my first post"})
    console.log(singleuser)

    //  await User.save()
    await singleuser.save()

    res.send(singleuser)
    

})

app.get("/multicreate",async(req,res)=>{
    const manyUser= await User.insertMany(dummyData)
    res.send(manyUser)
    console.log(manyUser)

})

app.listen(4060)