// const mongoose=require("mongoose");
// mongoose.connect('mongodb+srv://pksy223391:pk233391@userbase.c1puk.mongodb.net/?retryWrites=true&w=majority&appName=userbase').then(function(){
//     console.log("db is connected")
// })

// const db=mongoose.connection

// module.exports = db;

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://pksy223391:pk233391@userbase.c1puk.mongodb.net/?retryWrites=true&w=majority&appName=userbase")
.then(function(){
    console.log("db is connect")
}).catch(function(err){
    console.log(err)
})
const db=mongoose.connection

module.exports= db;