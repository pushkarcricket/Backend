// const http = require("http")

// const server=http.createServer(function(req,res){

//     res.end("server is now running hell0, file is added")

// })

// server.listen(1515)

const http= require("http");

const server=http.createServer((res,req)=>{
    res.end("server is running now ")
})

server.listen(2626)