const express=require("express")
const fs= require("fs")


const users=require("./MOCK_DATA.json")


const app=express()

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/", (req,res)=>{
    res.send("welcome to homepage")
})
app.get("/users", (req,res)=>{
    res.render("index",{users: users})
    
})
app.get("/:api/users", (req,res)=>{
    res.send(users)
})

app.route("/api/users/:id")
.get((req,res)=>{
    const id= Number(req.params.id)
    const user= users.find((user)=> user.id === id)
    res.send(user)

})

.put((req,res)=>{

    const first_name =req.params.first_name

    const user= users.find(user=> user.first_name === first_name)
    // if(!user){res.send(404).send("the course you are looking is not exit")}
        user.first_name=req.body.first_name
        res.send(user)
    console.log(user)
    
})
.patch((req,res)=>{

    
    res.send("your data is editing this thing")
})
app.delete((req,res)=>{
    const id= Number(req.params.id)


    // const deletedUser=users.filter(user=> user.id !== req.params.id)
    // users=deletedUser;
    // res.send(deletedUser)
    // console.log(deletedUser)

    const userIndex=users.findIndex(user=> user.id === id);
    if(userIndex === -1){
        return res.status(404).send("User is not found")
    }
    const deletedUser= users.splice(userIndex, 1)
})





 app.post("/api/users/:id", (req,res)=>{
     const body=req.body;
    //  console.log("body", body)

    //  users.push({...body, id: users.length +1})
    //  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err)=>{
    //     if(err){
    //         console.log("Error writing to file",err)
    //     }else{
    //         return  res.json({satus: "success", message: "User added successfully"})

    //     }

       
        
    //  })

    const user={
        id: users.length+1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        job_title: req.body.job_title
    }
    users.push(user)
    res.send(user)
    
 })

// app.patch("/api/users/:id"(req))

app.listen(4070)