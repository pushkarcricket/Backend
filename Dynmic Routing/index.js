const cookieParser = require("cookie-parser");
const server=require("express");
const app=server();
const session=require("express-session");
const ejs=require('ejs')

app.set('view engine','ejs')

app.use(session({
    secret:"some fun",
    resave:false,
    saveUninitialized: true,
}))

app.use(cookieParser())


app.get("/", function(req, res){
    res.send("server is started now");
})

app.get("/admin/:pushkar/:age", function(req,res){
   // res.send("admin page is found")

   res.send(`data is found in params ${req.params.pushkar} and ${req.params.age}`)

    console.log(req.params.pushkar);
    console.log(req.params.age)
})

app.get("/run",function(req,res){
    res.render("app")
})

app.get("/create",function(req,res){
    res.render('index')

})

app.get("/data", function(req,res){
    // res.send("data is fetching now");
    // res.cookie("name","pushkar")
    // console.log(req.cookies)

    res.cookie("name" , "pu shkar");
     console.log(req.cookies);
     res.send("dsta is fetching now")
})

// app.get("/user", function(req,res){
//     res.send("user page is found")
// })

app.get("/contact",function(req,res){
    res.send.pushkar="dice";
    res.send("i am done ")
    console.log(req.res.send.pushkar)
})

app.get("form", function(req,res){
    res.render('details')
})

app.get("*", function(req,res){
    res.send("no page found")
})

app.listen(4070);