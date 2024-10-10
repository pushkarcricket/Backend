// const fileSystem= require ("fs");

// fileSystem.Writefile("file.txt","weelcome to node.js", (err)=>{
//     if(err){
//         console.log("some error",err)
//     }else{
//         console.log("file is crated")
//     }
// })

//Creation of file

// const fileName= require("fs");

// fileName.WriteFile("mom.txt","hello from node.js",(err)=>{
//     if(err){
//         console.log("som error",err)
//     }else{
//         console.log("file is created successfully")
//     }
// })

// const fs = require("fs");

// fs.writeFile("mom.txt", "hello from node.js", (err) => {
//     if (err) {
//         console.log("Some error occurred:", err);
//     } else {
//         console.log("File is created successfully");
//     }
// });
// const fs= require("fs");
// fs.writeFile("text.txt", "another things of node js", (err)=>{
//     if(err){
//         console.log("some error is found",err)
//     }else{
//         console.log("file is created")
//     }
// })

//read file

// const fs=require("fs")

// fs.readFile("mom.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log("error is found",err)
//     }else{
//         console.log("you can see",data)
//     }
// })


//Append file

// const fs=require("fs");

// fs.appendFile("mom.txt","welcome to backend development",(err,data)=>{
//     if(err){
//         console.log("some error is found",err)
//     }else{
//         console.log("data appended")
//         console.log(data)
//     }
// })

//unlink // delete

// const fs=require("fs");
// fs.unlink("text.txt",(err)=>{

//     if(err){
//         console.log(err)
//     }else{
//         console.log("file deleted successfully")
//     }

// })

//update

// const fs=require("fs")
// fs.writeFile("text.txt","hello dice",(err)=>{
//     if(err){
//         console.log("some error",err)
//     }else{
//         console.log("file created successfully")
//     }
// })

//rename

// const fs=require("fs");

// fs.rename("mom.txt","run.txt",(err)=>{
//     if(err){
//         console.log("some error is found")
//     }else{
//         console.log("filed named successfully")
//     }
// })

//update

// const fs=require("fs");
// fs.readFile("run.txt","utf8",(err,data)=>{

//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }

// })