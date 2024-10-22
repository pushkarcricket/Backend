const server = require("express");
const app=server();
const ejs= require('ejs');
const exjson=require('express-json');

app.use(exjson());

app.use(server.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.get("/home", function(req,res){
    res.send("server is started")
})

app.get("/form", function(req,res){
    res.render('details')
    console.log(req.query)
})

app.post("/showdata", function(req,res){

    console.log("working fine")
    // res.render('details')
    // res.send("working fine");
    console.log(req.body)

    res.send("workinng fine")
})
app.listen(6070)