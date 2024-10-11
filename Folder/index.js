// how to create a folder?
// const fs= require("fs");

// fs.mkdir("helloNode",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder is created")
//     }
// })

//Delete the folder(rmdir)

// const fs=require("fs");

// fs.rmdir("helloNode",()=>{
//     console.log("file is delted")
// })

//Recreate folder(mkdir)
// const fs=require("fs")
// fs.mkdir("HelloNord",(err)=>{
//     if(err){
//         console.log(" some error")
//     }else{
//         console.log("folder  is created")
//     }
// })


// when in folder thye are many folder and if want delte all folder we have to used recursive and make them true{recursive:true}

// const fileSystem= require("fs");
// fileSystem.rmdir("HelloNord",{recursive:true},(err)=>{
//     if(err){
//         console.log("some error",err)

//     }else{
//         console.log("folder is created successfully")
//     }
    
// }
    
// )

//Recreate folder

// const fs=require("fs");
// fs.mkdir("HelloNord",(err)=>{
//     if(err){
//         console.log("error is found")
//     }else{
//         console.log("folder is created successfully")
//     }
// })

//Read Folder
// const fs= require("fs")
// fs.readdir("HelloNord",(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//if in folder we have another folder inside it and we want to see fole of that folder
//for that we have to used {withFileTypes : true}

// const fs=require("fs")
// fs.readdir("HelloNord",{withFileTypes: true},(err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
