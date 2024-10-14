const http=require("http")

const server= http.createServer((res,req)=>{
    res.end("server is running now")
})
server.listen(1516)