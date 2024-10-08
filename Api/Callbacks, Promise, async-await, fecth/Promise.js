// let promise1= new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log("data is fetching now ");
//         // res("data is resolves")
//         rej("error")
//     }, 3000);
    
    
// })

// // promise1.then((res)=>{
// //     console.log(res)
// // })
// promise1.catch((rej)=>{
//     console.log(rej)
// })

// let promise= new Promise((res, rej)=>{
//     console.log("connecting to dice....")
//     setTimeout(()=>{
        
//         res("connected to dice server")
//     },2000)
// })

// promise.then((res)=>{
//     console.log(res)
// })



// function DataOfDice(){
//     let promise=new Promise((res,rej)=>{
//         console.log("connecting to dice.........")
//         setTimeout(()=>{

//             res("you are connected to dice server")

//         },2000)
//     })

//     let promise2= new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("get few course")
//         },3000)

//     })

//     let promise3= new Promise((res, rej)=>{
//         setTimeout(()=>{
//             res("now you can access few more courses like react , ui/ux , motion")
//         },4000)
//     })

//     let promise4= new Promise((res, rej)=>{
//         setTimeout(()=>{

//             res("now you can enroll to any courses")
//         },5000)
//     })
//     promise.then((res)=>{
//         console.log(res)
//     })

//     promise2.then((res)=>{
//         console.log(res)
//     })

//     promise3.then((result)=>{
//         console.log(result)
//     })
//     promise4.then((result)=>{
//         console.log(result)
//     })
// }

// DataOfDice();


let nof=0;

for(let n=1; n<=100; n++){


for(let div=1; div<=n; div++){
    if(n%div == 0){
        nof=nof+1;
    }

    if(nof<2){
        console.log("this is not prime",n)
    }else{
        console.log("this is prime number",n)
    }
}
}