// fetch("http://wherethesis.at/V1/satellites/25544")
// .then((response)=>{
//     console.log("data is coming",response)

// }).catch((err)=>{
//     console.log("unable to fetch",err)
// })

// let run="hello world";
// console.log(run)

//Api with endpoint and query Parameter

// fetch("https://bored-api.appbrewery.com/filter?type=social & participants=2")
// .then((Response)=>{
//     console.log("the data is coming",Response)
// }).catch((err)=>{
//     console.log("something is wrong ", err)
// })

//Path Parameter
// fetch("https://bored-api.appbrewery.com/activity/3943506")
// .then((res)=>{
//     console.log("this is respose", res)
// }).catch((err)=>{
//     console.log("error while loading the api",err)
// })

//class constructor

// class Person{
//     fullname;
//     age;
//     country;
//     constructor(fullname,age,country){
//         this.fullname=fullname;
//         this.age=age;
//         this.country=country;
//     }


// }
// let person1= new Person ("pushkar kumar",25,"india")
// console.log(person1);

// class X{
//     constructor(){
//         area(l*b);
//         area(l*b*h)

//     }
// }

// class Parent {
//     getclass(){
//         return this.classname="parent"
//     }
// }

// class Child extends Parent{
//     getclass(){
//         return "hello world"
//     }
// }

// let hello=new Child();
// console.log(hello.getclass());

// class Area {
//     constructor(){
//         area(l*b)
//     }
// }

// class Sum extends Area{
//     constructor(){
//         super()
//         area(l*b*h)
//     }
// }

//Functional component

function Person (name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}

let person1= new Person("rahul",27, "male");
console.log(person1)
let person2= new Person("nitu",24, "female")
console.log(person2)
let person3= new Person("raju",25,"male")
console.log(person3)
 

//Extends using on this 

child() extends parent()

