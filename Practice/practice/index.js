const cookieParser = require("cookie-parser");
const server=require("express");
const session = require("express-session");
const fs=require("fs")
const ejs=require("ejs")
const expJson=require("express-json");





const app= server()
app.set('view engine', 'ejs')


app.use(cookieParser())

app.use(session({
    secret: "some day",
    saveUninitialized : false,
    resave: false
}))
app.get("/", function(req,res){
    res.send("server is started now")
})

app.get("/home/:pushkar", function(req,res){
    res.send(`data is found in params ${req.params}`)

    
    console.log(req.params)
})

app.get("/user", function(req,res){
    res.cookie("name", "pushkar");
    res.send("welcome to user page")
})
fs.mkdir("hello nord", function(err){
    if(err){
        console.log("some error")
    }else{
        console.log("folder is created")
    }

})
app.get("/test", function(req,res, next){
    req.session.user={name: "pushkar", role:"admin"};
    res.send("i am done with this")
})

app.get("/profile", function(req,res){
    if(req.session.user){
        res.send(`Welcome ${req.session.user.name}, your role is ${req.session.user.role}`)
    }else{
        res.send("please log in first")
    }
})

app.get("/server", function(req,res){
    res.render('index.ejs')
})


app.listen(3930)