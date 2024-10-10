//Exporting literals

// module.exports= "hello world";

// exporting object
// module.exports={
//     name: "pushkar",
//     age: 25,
//     profession:"student"
// }

//exporting Function

// module.exports=function(a,b){
//     console.log(a+b)
// }

//exporting funtion class

module.exports=function(){
    this.name="pushkar";
    this.age=25;
    this.info=()=>{
        console.log(`my name - ${this.name}`)
        console.log(`my age - ${this.age}`)
    }
}