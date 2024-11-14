const mongoose=require("mongoose")

mongoose.connect('mongodb+srv://pushkarkr233391:pk233391@newuser.lnty3.mongodb.net/?retryWrites=true&w=majority&appName=newUser').then(function(){
    console.log("your are connected now")
}).catch(function(err){
    console.log(err)
})

const db=mongoose.connection;

module.exports=db