 const express=require("express")
 const server=express();

 server.set('view engine', 'ejs')
 server.get("/", function(req,res){
    res.send('server is started now')
 })
 server.get("/home", function(req,res){
    let data={
        name: "pushkar kumar",
        hobbies : ["playing football", 'cricket',"basketball"]
    }
    res.render('home', {data: data})
 })

 server.get("/data", function(req,res){
    res.render('data', {programmer : programmer} )
 })



 server.listen(4000)