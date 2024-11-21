const { name } = require("ejs")
const express= require("express")
const app= express()

const coures=[
    {id:1 , name:"javaScript"},
    {id:2 , name:"java"},
    {id:3 , name:"c+++"},
    {id:4, name:"phython"}

]

app.get("/", (req,res)=>{
    res.send("welcome to homepage")
})

app.get("/routes/user/:name", (req,res)=>{
    

    // let course= coures.find(course=> course.id === parseInt(req.params.id))
    let course= coures.find(course => course.name === req.params.name)
   
    if(!course)res.status(404).send("this course is not avliable here ")
        res.send(course)
    console.log(req.params)
})



app.listen(4969)