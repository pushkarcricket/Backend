const server=require("express");
const app=server();
const ejs=require('ejs')
const bodyParser=require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.send("server is started now")
})

app.get("/home", function(req,res){
    res.render('index.ejs')
})
app.post("/submit", function(req,res){

    const data=req.body
   console.log(data)
   console.log(data["fname"])
   console.log(data["lname"])
   const numberOfLetter= data["fname"].length + data["lname"].length;
   
  
   res.render('index.ejs', {numberOfLetter})
// const numLetters = req.body["fName"].length + req.body["lName"].length;
// console.log(numLetters)
// res.render("index.js", { numberOfLetters: numLetters });

   
})

app.listen(4090);