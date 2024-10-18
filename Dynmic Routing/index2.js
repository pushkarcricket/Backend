const express=require("express")

const session=require("express-session")
const ejs=require("ejs")
const server=express();

server.use(express.urlencoded({extended: true}))

server.set('view engine', 'ejs')

server.get("/user", function(req,res){
    res.send("user data is found")
})

server.get("/data", function(req,res){
   
    console.log(req.query);
    res.render('details',{user: req.query})
})

server.listen(6070);