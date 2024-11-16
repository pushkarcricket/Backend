const express= require("express")
const app= express()
const bcrpt= require("bcrypt")
const token=require("jsonwebtoken")
const cookieParser = require("cookie-parser")

app.use(cookieParser())


app.get("/", function(req,res){
    res.send("welcome to homepage")
})

app.get("/salt", async(req,res)=>{
    let salt=  await bcrpt.genSalt(10)

    let hashpass= await bcrpt.hash("hello123", salt)

    res.send(hashpass)
    console.log(hashpass)
})

app.get("/read", async(req,res,next)=>{
    const tokenPass= await token.sign({name:"pushkar"}, "hello123")

    res.send(tokenPass)

    
})

app.get("/readToken", async(req,res)=>{
    // const tokken= await token.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHVzaGthciIsImlhdCI6MTczMTc0NDA3OH0.PehfthLJrmvEVTcLu4UurgzILywKBD4EkgVJG_6h3zs","hello123")

    // res.send(tokken)

    try{
        const tokken= await token.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHVzaGthciIsImlhdCI6MTczMTc0NDA3OH0.PehfthLJrmvEVTcLu4UurgzILywKBD4EkgVJG_6h3zs","hello123")
        res.send(tokken)


    }catch(err){
        res.send(err)
    }
})


app.get("/cookie", (req,res)=>{
    res.cookie("name", "pushkar" , {
        // maxAge:10000,
        httpOnly : true
    })

    res.send("i am done")
})


app.get("/readCookie", (req,res)=>{
    res.send(req.cookies.name)
})

app.listen(4060)