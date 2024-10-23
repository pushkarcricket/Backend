const server=require("express");
const app=server();
const ejs=require('ejs');

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.send("wlecome to homepage")
})

app.get("/data", function(req,res){

    let bwol=["raj", "ram", "rahim","mohan"]
    res.render('data.ejs', {fruite: bwol});
})

app.listen(2030);