 const fs=require("fs");
 const express=require("express");
 const app=express();
 const ejs=require("ejs")


 app.set('view engine','ejs')
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));


 const date=new Date();
 const finalDate=`${date.getDate()}-${date.getMonth() + 1} -${date.getFullYear()}`



 app.get("/home", function(req,res){
    res.send("welcome to homepage")
 })



 app.get("/file", function(req,res){

   
    res.send("your file is created")
    fs.writeFile(`./Files/${finalDate}.txt`, 'hello world',(err)=>{
        if(err){
            console.log("some error")
        }else{
            console.log("file is created")
        }
    })
 })

 app.get("/read",function(req,res){
    

    fs.readdir(`./Files`, 'utf-8', function(err,data){

        if(err){
            console.log(err)
        }else{
            console.log("files", data)
            res.render('index.ejs',{data})
        }

    })
 } )
app.get('/readFiles', function(req,res){
    res.send("reading the file")

    
})

 app.listen(4050)
 