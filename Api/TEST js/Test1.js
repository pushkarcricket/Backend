// Q1  Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.

// function gradeScore(score){

//     if(score < 0 || score >100){
//         console.log("please enter a valid number")
//     }else if(score >=90){
//         console.log("A")
//     }else if(score >=80){
//         console.log("B")
//     }else if(score >=70){
//         console.log("C")

//     }else if(score >=60){
//         console.log("D")
//     }else{
//         console.log("F")
//     }
// }

// const score=65;
// gradeScore(score)

//Q2 Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

// let num=1;
// while(num<50){
//     if(num %2==1){
//         console.log("Odd number", num)
//     }
//     num++;
// }

//Q3 Array Methods: What will the following code output?
//javascript
//Copy code in
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2)
// console.log(doubled);

// Output [2,4,6,8,10]
// Q4 String Methods: How can you check if a string contains a specific substring? Provide an example using the string "Hello, World!".

// const str="Hello world"

// const str2=str.substring(0,5);
// console.log(str2)

//Q5 Ob0jects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.

// let person={
//     name:"pushkar",
//     city: "Delhi"
// }

// person.age=25;

// // person['age']=30;
// console.log(person)

// Q6 Functions: Write a function called sum that takes two parameters and returns their sum. What will sum(5, 10) return?
// function add(a, b){
//     return a+b;
// }
// let rv=add(5,10);
// console.log(rv)
// Q7 Function Constructor: How do you create an object using a function constructor? Provide an example of a constructor function called Car that initializes make and model properties.
// function CarProperty (make,model){
//     this.make=make;
//     this.model=model;

// }

// const car= new CarProperty("india","tata");
// console.log(car);
