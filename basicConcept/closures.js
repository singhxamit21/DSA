// What will be the logged to console?
// let count = 0;
// (function printCount() {
//     if(count === 0) {
//         let count = 1; // shadowing
//         console.log(count); //1
//     }
//     //count = 0
//     console.log(count); //0
// })(); 

//write a function that would allow you to do this

// function createBase(num) {
//     return function (innerNum) {
//         console.log(innerNum + num);
//     }
// }

// var addSix = createBase(6);
// addSix(10); //return 16
// addSix(21); //return 27

//setTimeout Output

// function a() {
//     for(var i=0;i<3;i++){
//         setTimeout(
//             function log(){
//                 console.log(i);
//             },i*100);
//     }
// }

// a(); // 3 (3 times)

// function a() {
//     for(var i=0;i<=3;i++){
//         setTimeout(
//             function log(){
//                 console.log(i);
//             },i*100);
//     }
// }

// a(); // 4 (4 times)

// function a() {
//     for(let i=0;i<3;i++){
//         setTimeout(
//             function log(){
//                 console.log(i);
//             },i*100);
//     }
// }

// a(); // 0 1 2

// function a() {
//     for (var i = 0; i < 3; i++) {
//         (function(i) {
//             setTimeout(function log() {
//                 console.log(i);
//             }, i * 100);
//         })(i);
//     }
// }

// a(); // 0 1 2

//How would you use a closure to create a private counter?

// function counter() {
//     var _counter = 0;

//     function add(increment) {
//         _counter += increment
//     }
//     function retrive() {
//         return "Counter = " + _counter;
//     }
//     return {
//         add,
//         retrive,
//     }
// }

// const c = counter();
// c.add(5);
// c.add(15);
// console.log(c.retrive()) //Counter = 20

//What is Module Pattern?
//The Module Pattern in JavaScript is a design pattern that encapsulates code by using an IIFE to create private variables and methods, while exposing only public ones. This helps organize and protect code by controlling what is accessible outside the module.
// var Module = (
//     function () {
//         function privateMethod() {
//             //do something
//             console.log("private");
//         }

//         return {
//             publicMethod: function () {
//                 console.log("public");
//             }, 
//         };
//     })();

//     Module.publicMethod(); //public
//     Module.privateMethod(); //error

//Make this run only once

// let view;
// function likeTheVideo() {
//     view = "Amit Singh";
//     console.log("Amit Singh Called",view)
// }

// likeTheVideo();
// likeTheVideo();
// likeTheVideo();

// let view;
function likeTheVideo() {
    let Called = 0;
    return function() {
        if(Called > 0){
            console.log("Already Amit Singh Called")
        }else{
            view = "Amit Singh";
            console.log("Amit Singh Called",view);
            Called++;
        }
    }
   
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();
isSubscribed();



