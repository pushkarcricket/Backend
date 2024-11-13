// const mongoose=require("mongoose")

// let userSchema= mongoose.Schema({
//     name:String,
//     password:String,
//     email:String,
//     age:Number
// })

// module.exports=mongoose.model("User",userSchema)

const mongoose=require("mongoose")

let userName= new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    isMarried: Boolean,
    age: Number
})

module.exports=mongoose.model("User", userName)