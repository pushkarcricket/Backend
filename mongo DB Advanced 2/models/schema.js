const mongoose=require("mongoose")
const moongoose = require("moongoose")

mongoose.connect('mongodb://127.0.0.1/my_Database')

 const db=mongoose.connection

 const postschema=mongoose.Schema({
    content:String,
    otherdetails:{
        type:Date,
        default:Date.now
    },
    user: {ref: "User"}
 })

const userSchema= mongoose.Schema({
    username:String,
    email:String,
    ismarried:Boolean,
    age:Number,
    password:String,
    posts:[{ref: "Post"}]
})

// module.exports =db

module.exports=mongoose.model("User",userSchema);
module.exports=mongoose.model("Post",postschema)