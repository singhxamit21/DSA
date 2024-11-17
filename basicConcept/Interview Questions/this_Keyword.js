//What is 'this' ?
// In JavaScript, the this keyword refers to an object. Which object this refers to depends on how and where it is used.

//What will be the Output

//Q1.

// const user = {
//     firstName: "Amit",
//     getName(){
//         const firstName = "Amit Singh";
//         return this.firstName
//     }
// }

// console.log(user.getName()) //Amit

//Q2. what is the result of accessing its ref? why?

//However, within the makeUser function, this refers to the global object (window in browsers, global in Node.js) when it is called in the global scope, not to the object that is being created. Since the global object does not have a name property, user.ref.name evaluates to undefined.

// function makeUser() {
//     return {
//         name: "Amit",
//         ref: this,
//     }
// }

// let user = makeUser()

// console.log(user.ref.name) //undefined

//How to fixed it?

// function makeUser() {
//     return {
//         name: "Amit",
//         ref() {
//             return this;
//         }
//     };
// }

// let user = makeUser();
// console.log(user.ref().name); // "Amit"

//Q3. What is the Output?

//When you call setTimeout(user.logMessage, 1000), you're passing the function reference without its context. This means that this inside logMessage will not refer to the user object as you might expect. Instead, in non-strict mode, this will refer to the global object (which is window in browsers) or undefined in strict mode.

// const user = {
//     name: "Amit Singh",
//     logMessage() {
//         console.log(this.name);
//     },
// };

// setTimeout(user.logMessage,1000); //undefined

//How to fixed it?
//An anonymous function retains access to the user object through closure and explicitly calls user.logMessage().

// const user = {
//     name: "Amit Singh",
//     logMessage() {
//         console.log(this.name);
//     },
// };

// setTimeout(function() {
//     user.logMessage();
// }, 1000); // "Amit Singh"

//Q4. What is the Output?

// const user = {
//     name:"Amit",
//     greet() {
//         return `Hello ${this.name}`; 
//     },
//     farewell: ()=> {
//         return `Hello ${this.name}`;
//     },
// };

// console.log(user.greet()); //Hello Amit
// console.log(user.farewell()); //Hello undefined

//Q5. Create an Object Calculator?

// let calculator = {
//     read() {
//         this.a = 2;
//         this.b = 4;
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum()); //6
// console.log(calculator.mul()); //8

