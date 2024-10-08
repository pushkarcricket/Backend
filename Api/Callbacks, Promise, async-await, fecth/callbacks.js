// let a= "hello world"
// console.log(a)

function diceServer(cb){
    console.log(".....connecting....")

    setTimeout(() => {

        console.log("you are connected to the server")
        cb()
        
    }, 2000);
}

function fewCourse(cbk){
    // setTimeout(() => {
    //     console.log("courses are loading now ")
    // }, 6000);

    setTimeout(() => {
        console.log("course is fetching now ")
        console.log("few more courses you get ")

        cbk();
    }, 3000);
        

    

   
    
}
function fewMoreCourse (cb){
    setTimeout(()=>{

        console.log("now you can access react, ui/ux, motion,graphic")
        cb()
    },4000)
   
}

function Enrool (){
    setTimeout(()=>{
        console.log("now you can enroll to any courses")

    },6000)
}

// diceServer( function (){
//     console.log("few course get")
// });

// fewMoreCourse();

diceServer(()=>{
    fewCourse(()=>{
        fewMoreCourse(()=>{
            Enrool()
        })
    })
})