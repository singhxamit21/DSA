//Currying in Javascript
// Example f(a,b) into f(a)(b)

// function f(a) {
//     return function (b){
//         return `${a} ${b}`
//     };
// }

// console.log(f(5)(6))

//Q1. Why should we use currying?

// Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument. These benefits collectively lead to more readable, maintainable, and flexible code.

////Q2. sum(2)(6)(1)

// function sum(a){
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }

// console.log(sum(2)(6)(1))

//Q3. evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

// function evaluate(operation){
//     return function(a) {
//         return function(b) {
//             if(operation === "sum") return a + b;
//             else if(operation === "multiply") return a * b;
//             else if(operation === "divide") return a / b;
//             else if(operation === "substract") return a - b;
//             else return "Invalid Operation"
//         }
//     }
// }

// console.log(evaluate("substract")(4)(2))

//Q3. Infinite Currying -> sum(1)(2)(3)....(n)

// function add(a) {
//     return function (b){
//         if(b) return add(a + b);
//         return a;
//     }
// }
// console.log(add(5)(2)(4)(5)());

// Q4. Currying vs Partial Application

//Partial Application - Partial application is the process of fixing a number of arguments to a function, producing another function of smaller arity.

// function sum(a) {
//     return function (b,c){
//         return a + b + c;
//     }
// }

// const x = sum(10)
// console.log(x(5,6));
// console.log(x(3,2));

//  or

// console.log(sum(10)(3,2))

//Currying -  Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.

// function sum(a) {
//     return function (b){
//         return function (c){
//             return a + b + c;
//         }
//     }
// }

//Q5. manipulating DOM

{/* <h2 id="heading">Singh Amit</h2> */}
// function updateElementText(id) {
//     return function (content) {
//         document.querySelector("#" + id).textContent = content
//     };
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Amit Singh")

//Q6. Convert normal function into curry function 
//converts f(a, b, c) into f(a)(b)(c)

// function curry(func) {
//     return function curriedFunc(...args) {
//         if(args.length >= func.length ){
//             return func(...args);
//         }else{
//             return function (...next) {
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }

// const sum = (a,b,c) => a + b + c

// const totalSum = curry(sum)

// console.log(totalSum(1)(2)(3))

