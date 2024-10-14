// const express = require('express')
// const app = express()
// const port = 2500

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// const express= require("express")
// const server=express();

// server.get("/admin",function(req,res){

//     res.send("server chalu ho gya")

// })
// // server.get("/user", function(res, req){
// //     res.send("user data is send ")
// // })
// // server.get("/edit", function(res,req){
// //     res.send("edit page is open now")
// // })

// // server.listen(2536)

// // server.get("/admin", (res,req)=>{
// //     res.send ("edit page is found")
// // })

// server.get("*" , (res,req)=>{

//     res.send("pagr is not found")

// })

// server.listen(2700)

const express= require("express");

const server= express();

server.use(function(req,res,next){
    console.log("hello world")
    next()
})

server.get("/admin", function (req,res){
    res.send("server is getting started")
})

server.get("/edit", function (req,res){
    res.send("edit page is loadinng now ")

})

server.listen(4050,()=>{
    console.log("server is running on http://localhost:4050")
})

// server.listen(4050);