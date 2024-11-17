//Var, Let and Const

//Q1. Scope - In let & const we cannot access value outside the scope but in var we can access value outside the scope

//let & const are block Scope

// {
//     let L = 5
//     console.log(L)
// }
// console.log(L)

// {
//     const c = 10
//     console.log(c)
// }
// console.log(c)

//var is function scope
// {
//     var v = 15
//     console.log(v)
// }
// console.log(v)


//Q2. Variable Shadowing - when a variable declared within a certain scope (like a function or block) has the same name as a variable in an outer scope. This inner variable "shadows" the outer one, making the outer variable inaccessible within the inner scope.

// function test(){
//     let a = "Hello";

//     if(true){
//         let a = "Hi"
//         console.log(a)
//     }

//     console.log(a);
// }

// test()

//Q3. Illegal Shadowing - Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 

// function test() {
//     var a = 'Hello';
//     let b = 'Bye';
    
//     if (true) {
//         let a = 'Hi'; // Legal Shadowing
//         var b = 'Goodbye'; // Illegal Shadowing
//         console.log(a); 
//         console.log(b); 
//     }
// }
// test();

// Q4. Declaration

// var v
// var v //Legal

// let L
// let L //variable is already defined.

// const c
// const c //Missing initializer in const declaration

// Q5. Initialization

// let L //Legal
// var v //Legal
// const c //Missing initializer in const declaration (const c = 10 //Legal)

// Q6. Re-Initialization

// var v = 5
// v = 10 //Legal

// let L = 5
// L = 10 //Legal

// const c = 5
// c = 10 //Assignment to constant variable

//Q7. Hoisting

// console.log(v) //undefined
// var v = 5

// console.log(L) //Cannot access variable before initialization
// let L = 10

// console.log(c) //Cannot access variable before initialization
// const c = 15

// function abc(){
//     console.log(a,b,c)

//     const c = 15;
//     let b = 10;
//     var a = 5;
//  }

//  abc()

//we get undefined for var but for let & const we get error "Cannot access variable before initialization" because of Temporal dead zone,  In the Temporal dead zone, a variable exists but it cannot be accessed until it is not declared. This prevents the variable from being used or accessed before a value is assigned to it.

