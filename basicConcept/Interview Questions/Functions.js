//Functions

//Q1. Function Scope Output based question

//let has block scope. Each iteration of the loop creates a new scope for i. The value of i is captured correctly for each timeout, so the outputs are 0, 1, 2, 3, 4.

// var has function scope, not block scope. All iterations of the loop share the same i. By the time the setTimeout callbacks execute, the loop has completed, and i is 5. Thus, it prints 5 five times.

// for(let i = 0; i < 5; i++){
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }

// output 0 1 2 3 4 5

// for(var i = 0; i < 5; i++){
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);
// }

// output 5 5 5 5 5 5

//Q2. Function Hoisting

// functionName();  //Amit

// function functionName(){
//     console.log("Amit")
// }

// Q3. Function Hoisting - O/P based question

//Inside fun, the declaration var x is hoisted to the top of the function scope but not its assignment. The outer x = 21 does not affect the inner scope due to the inner var x declaration.

// var x = 21;

// var fun = function(){
//     console.log(x)
//     var x = 20;
// }

// fun(); //undefined

// Q4. Params vs Arguments

// function square(num) { //Params
//     console.log(num * num)
// }

// square(5) //Arguments

// Q5. spread vs rest Operators

// function multiply(...nums) {  //rest
//     console.log(nums[0] * nums[1])
// }
// var arr = [5,6]

// multiply(...arr) //spread

// Q6. spread vs rest Operators - O/P based Question

// const fn = (a , ...numbers , x , y) => {
//     console.log(x,y);
// }; 

// fn(5,6,3,7) //SyntaxError: Rest parameter must be last formal parameter

// const fn = (a , x , y, ...numbers) => {
//     console.log(x,y,numbers);
// }; 

// fn(5,6,3,7,8,9) //6 3 [ 7, 8, 9 ]

// Q7. Callback function - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// const greet = (name, callback) => {
//     console.log("Hello, " + name + "!");
//     callback();
// }

// const sayGoodbye = () => {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

// Q7. Arrow Function vs Regular Function

// 1 - Syntax

// function square(num) {
//     return num * num;
// }

// const square = (num) => {
//     return num * num;
// }

// 2 - Implicit "return" Keyword

// const square = (num) => num * num;

// 3 - arguments

// function fn() {
//     console.log(arguments)
// }

// fn(1, 2, 3) //{ '0': 1, '1': 2, '2': 3 }

//The error occurs because arrow functions do not have their own arguments object. Instead, they inherit arguments from their enclosing scope.

// const fnArr = () =>  {
//     console.log(arguments);
// }

// fnArr(1, 2, 3)

// 4 - "this" Keyword

// let user = {
//     username : "Singh",
//     rc1: () => { //Arrow
//         console.log("Amit " + this.username)
//     },
//     rc2() { //Regular
//         console.log("Amit " + this.username)
//     },
// };

// user.rc1(); //Amit undefined
// user.rc2(); //Amit Singh









