// const mongoose=require("mongoose")

// mongoose
// .connect('mongodb+srv://pushkarcricket:pushkar233391@dicetest.upoih.mongodb.net/?retryWrites=true&w=majority&appName=dicetest')
// .then(function(){
//     console.log("db connected")
// })
// .catch(function(err){
//     console.log(err)
// })

// const db=mongoose.connection;

// module.exports=db;

const mongoose=require("mongoose")

// mongoose.connect('mongodb+srv://pushkarcricket:pk233391@dicetest.upoih.mongodb.net/dicetest?retryWrites=true&w=majority&appName=dicetest'
// ).then(function(){
//     console.log("db is connected")
// }).catch(function(err){

//     console.log(err)

// })

mongoose.connect('mongodb+srv://pushkarkr233391:ynaXWgAgIlXSXrUd@dicetestdice.lnty3.mongodb.net/?retryWrites=true&w=majority&appName=dicetestdice')
.then(function(){
    console.log("db is connected")
}).catch(function(err){
    console.log(err)
})

const db=mongoose.connection;
module.exports=db;