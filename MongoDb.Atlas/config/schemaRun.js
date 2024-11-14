const mongoose=require("mongoose")

let userSchema= new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    age:Number,
    isMarried: Boolean
})

module.exports=mongoose.model("User", userSchema)