const http=require("http");
const server=http.createServer((req,res)=>{

    // console.log("----------------------")
    // console.log(req)
    // console.log("--------------------------")

    if(req.url === "/"){
        res.end("server is running now node module")

    }else if(req.url === "/admin"){
        res.end("admin page found")
    }else if(req.url === "/user"){
        res.end("user page found")
    }
    
    
    
    
    else{
        res.end("page not found")
    }
    
})

server.listen(2525)