// map vs forEach
//map() :- The map() method returns an entirely new array.The map() method returns the newly created array according to the provided callback function.With the map() method, we can chain other methods like, reduce(),sort() etc.It does not change the original array.
//forEach() :- The forEach() method does not returns a  new array based on the given array.The forEach() method returns “undefined“.The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. 

// const numbers = [1, 2, 3, 4];

// const doubledNumbersMap = numbers.map((number) => {
//     return number * 2;
// });

// const doubledNumbersForEach = numbers.forEach((number,index) => {
//     numbers[index] = number * 2;
// });

// console.log(doubledNumbersMap, doubledNumbersForEach,numbers);

// ------------------>>>>>>>>>>>>>>>>>>>>>>
//null vs undefined
//undefined means a variable has been declared but has not yet been assigned a value, whereas null is an assignment value, meaning that a variable has been declared and given the value of null

// let x;
// console.log(x); // logs 'undefined'

// let y = null;
// console.log(y); // logs 'null'

// console.log(typeof undefined) // logs 'undefined'

// console.log(typeof null) // logs 'object'

// console.log(z); //ReferenceError: b is not defined (to resolve it initilize with a value let z = null)

// console.log(null == undefined) //true (Loose equality allows type coercion; both are "nothing.")
// console.log(null === undefined) //false (Strict equality checks types; null ≠ undefined.)

// ------------------>>>>>>>>>>>>>>>>>>>>>>
// Event Delegation
//Event delegation is a technique in JavaScript where you attach a single event listener to a parent element to manage events on its child elements. Instead of adding event listeners to multiple child elements, the event listener on the parent can handle events that bubble up from the children.

{/* <div id="products">
    <li id="shoes">shoes</li>
    <li id="shoes">shirt</li>
    <li id="wallets">wallets</li>
</div>

document.querySelector("#products").addEventListener("click",(event) =>{
console.log(event)
if(event.target.tagName === "LI"){
    window.location.href += "#" + event.target.id; 
}
}); */}


// ------------------>>>>>>>>>>>>>>>>>>>>>>
//Flatten the Array

// let arr = [
//     [1,2],
//     [3,4],
//     [5,6,[7,8],9],
//     [10,11,12],
// ];

// // console.log(arr.flat(2))

// const customFlat = (arr , depth = 1) => {
//     let result = [];
//     arr.forEach((ar)=>{
//         if(Array.isArray(ar) && depth > 0){
//             result.push(...customFlat(ar,depth-1));
//         }else{
//             result.push(ar)
//         }
//     })
//     return result;
// }

// console.log(customFlat(arr))

// ------------------>>>>>>>>>>>>>>>>>>>>>>
//var vs let vs const

// var is Function-scoped and let and const are Block-scoped

// {
//     var a = "hello";
// }
// console.log(a); //hello

// {
//     let b = "hello";
// }
// console.log(b); // b is not defined

// {
//     const c = "hello";
// }
// console.log(c); // c is not defined
 
//var :-
//Hoisting: Hoisted and initialized with undefined (accessible before declaration, but value is undefined).

// Redeclaration: Allowed in the same scope.

// Reassignment: Allowed.

// Use Case: Legacy code; avoid in modern JavaScript.

// var x = 10;
// x = 20; // Reassignment allowed
// var x = 30; // Redeclaration allowed

//let :-
// Hoisting: Hoisted but not initialized (cannot be accessed before declaration; results in a ReferenceError).

// Redeclaration: Not allowed in the same scope.

// Reassignment: Allowed.

// Use Case: Use for variables that will change values.

// let y = 10;
// y = 20; // Reassignment allowed
// let y = 30; // Error: Cannot redeclare in the same scope

//const :-

// Hoisting: Hoisted but not initialized (like let).

// Redeclaration: Not allowed in the same scope.

// Reassignment: Not allowed (variable is immutable, but object properties can change).

// Use Case: Use for constants or variables that won't be reassigned

// const z = 10;
// // z = 20; // Error: Cannot reassign a `const` variable
// const obj = { a: 1 };
// obj.a = 2; // Allowed: Object properties can be modified

// ------------------>>>>>>>>>>>>>>>>>>>>>>
//setTimeout pls refer Function.js

// ------------------>>>>>>>>>>>>>>>>>>>>>>
//call , Apply and Blind

//call:- Invokes a function with a specified this context and arguments passed individually.
//apply:- Similar to call, but arguments are passed as an array.
//bind:- Returns a new function with this context permanently set to the specified value. Does not invoke the function immediately.

// var person = {
//     name : "Amit Singh",
//     hello: function (thing) {
//         console.log(this.name + " says hello " + thing);
//     }
// }

// person.hello("world") //Amit Singh says hello world

//call

// var alterEgo = {
//     name : "Amit Singh 2"
// }

// person.hello.call(alterEgo,"world")

//apply

// var alterEgo = {
//     name : "Amit Singh 3"
// }

// person.hello.apply(alterEgo,["world"])

//bind
// var alterEgo = {
//     name : "Amit Singh 4"
// }
// const newHello = person.hello.bind(alterEgo);

// newHello("world")

// ------------------>>>>>>>>>>>>>>>>>>>>>>
// Infinite Currying refer currying.js

// ------------------>>>>>>>>>>>>>>>>>>>>>>
// Composition Polyfill

// function addFive(a) {
//     return a + 5;
// }

// function substractTwo(a) {
//     return a - 2;
// }

// function multiplyFour(a) {
//     return a * 4;
// }

// // Compose for Right-to-left
// const composeRightToLeft = (...functions) => {
//     return (args) => {
//         return functions.reduceRight((arg,fn) => fn(arg),args);
//     }
// }

// // Compose for Left-to-Right
// const composeLeftToRight = (...functions) => {
//     return (args) => {
//         return functions.reduce((arg, fn) => fn(arg), args);
//     }
// }

// const evaluateRightToLeft = composeRightToLeft(addFive,substractTwo,multiplyFour)
// const evaluateLeftToRight = composeLeftToRight(addFive,substractTwo,multiplyFour)
// console.log(evaluateRightToLeft(5)); //23
// console.log(evaluateLeftToRight(5)); //32

// ------------------>>>>>>>>>>>>>>>>>>>>>>

// Lifecycle Methods

// componentDidMount() :- When the component is created and added to the DOM.

//componentDidUpdate(prevProps, prevState, snapshot) :- When the component re-renders due to changes in state or props.


//componentWillUnmount() :- Cleanup before the component is removed from the DOM (e.g., remove subscriptions or event listeners).

// useEffect(callback, []) //componentDidMount

// useEffect(callback, [dependencies]) //componentDidUpdate

// useEffect(() => { return cleanup; }, []) //componentWillUnmount

// ------------------>>>>>>>>>>>>>>>>>>>>>>

// way to center a div

{/* <div>
    <h1>Amit Singh</h1>
</div> */}

//Method 1
// body{
//     width:100%;
//     height:100%
// }
// div{
//     background-color: "red";
//     position:absolute;
//     top: 50%;
//     left: 50%;
//     tranform: translate(-50%,-50%)
// }

//Method 2
// body{
//     width:100%;
//     height:100vh;
//     display: flex;
//     justify-content:center;
//     align-item:center;
// }
// div{
//     background-color: "red";
    
// }

//Method 3
// body{
//     width:100%;
//     height:100vh;
//     display: grid;
//     justify-content:center;
//     align-item:center;
// }
// div{
//     background-color: "red";
    
// }

//CSS box model
//The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.

// div {
//     width: 300px;
//     border: 15px solid green;
//     padding: 50px;
//     margin: 20px;
//   }

//debounce

//refer Machine coding custom debounce app