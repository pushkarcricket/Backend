server.get("/admin",(req,res)=>{
    res.send()
})

server.get("/edit",(req,res)=>{
    res.send
})

server.get("*", (req,res)=>{
    res.send("no page found")
})

server.listen(1212)
