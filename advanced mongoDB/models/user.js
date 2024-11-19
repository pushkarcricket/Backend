const mongoose=require("mongoose")

mongoose.connect( 'mongodb://127.0.0.1:27017/advanceddbDemo')

 const db=mongoose.connection

 const usersSchema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    iamarried:Boolean,
    password:String,
    salary: Number

 })

 

//  module.exports=db;
module.exports=mongoose.model("User",usersSchema)