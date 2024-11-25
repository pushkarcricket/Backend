const express=require("express")


const users=require("./MOCK_DATA.json")


const app=express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res)=>{
    res.send("welcome to homepage")
})
app.get("/users", (req,res)=>{
    res.render("index",{users: users})
    
})
app.get("/:api/users", (req,res)=>{
    res.send(users)
})

app.route("/api/usrs/:id")
.get((req,res)=>{
    const id= Number(req.params.id)
    const user= users.find((user)=> user.id === id)
    res.send(user)

})

.put((req,res)=>{
    res.send("pending")
})
.patch((req,res)=>{
    res.send("your data is editing this thing")
})
.delete((req,res)=>{
    res.send("your id is deleted ")
})





// app.post("/api/users", (req,res)=>{
//     res.send("your ")
// })

// app.patch("/api/users/:id"(req))

app.listen(4050)