const expresss= require("express")
const app= expresss();
const bcrypt = require('bcrypt');
// const saltRounds = 10;
const jwt = require('jsonwebtoken');

const cookieParser= require("cookie-parser")
app.use(cookieParser());




app.get("/", function(req,res,next){
    res.send("welcome to homepage")
})


app.post("/createPassword",async(req,res, next)=>{

    let salt=await bcrypt.genSalt();
    let encryptedpass= await bcrypt.hash("hello",salt)
    res.send(encryptedpass)

    console.log(encryptedpass)
    console.log(salt)

})

app.get("/token", async(req,res)=>{
     const token=await jwt.sign({name:"pushkar"}, "hello")
     res.send(token);
     console.log(token)


})


app.get("/readToken",async (req,res)=>{
    // const tokenName= jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHVzaGthciIsImlhdCI6MTczMTY3OTM4OH0.BNXQbBZjXxDXc-i1xbpcZiHPmcY0phPcKlvqEh3v9ic")

    // res.send(tokenName)
    try{
        const tokenName=await jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHVzaGthciIsImlhdCI6MTczMTY3OTM4OH0.BNXQbBZjXxDXc-i1xbpcZiHPmcY0phPcKlvqEh3v9ic")

        res.send(tokenName)

    }catch(err){
        res.send("something is bad")
    }
})

app.get("/cookie", (req,res)=>{
    res.cookie("name", "pushkar", "age","25",{
        maxAge:10000

    })
    // res.cookie("age","27",{
    //     maxAge:10000
    // })

    res.send("cookie testing")
})

app.get("/readCookie", (req,res)=>{
    res.send(req.cookies.name)
})

app.listen(3050);