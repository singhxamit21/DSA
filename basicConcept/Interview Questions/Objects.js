//Objects in JavaScript

// Q1. What is the Output?
// const func = (function (a) {
//     delete a;
//     return a;
// })(5)

// console.log(func); //Output:- 5

// Q2. What is the Output?
// const user = {
//     name: "Amit Singh",
//     age: 24,
//     "like this Video" : true
// }
// delete user["like this Video"]

// console.log(user)

// Q3. What is the Output?

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three",
// }

// console.log(obj) //{ a: 'three', b: 'two' }

//Q4. Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// }

// multiplyByTwo(nums)

// function multiplyByTwo(obj){
//     for (key in obj){
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(nums) //{ a: 200, b: 400, title: 'My nums' }

//Q5. What is the Output?

// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a[b] = 123
// a[c] = 456

// console.log(a[b]); //456

// Q6. what is JSON.stringify and JSON.parse

// JSON.stringify - Convert Object to string
// JSON.parse - Convert string to Object

// const user = {
//     name: "Amit",
//     age: 24,
// }

// const strObj = JSON.stringify(user);
// const objStr = JSON.parse(strObj)

// console.log(strObj)
// console.log(objStr)

// //Where can we use JSON.stringify & JSON.parse - we can use it in localStorage because localStorage does not understand Obj. ([object Object])

// localStorage.setItem("test",strObj)

// console.log(localStorage.getItem("test"));

//Q7. What is the Output?

// console.log([..."Amit"]) //[ 'A', 'm', 'i', 't' ]

//Q8. What is the Output?

// const user = {name:"Amit",age:24};
// const admin = {admin: true,...user};

// console.log(admin) //{ admin: true, name: 'Amit', age: 24 }

//Q9. What is the Output?
//Only String level and health

// const settings = {
//     username: "Amit",
//     level: 19,
//     health: 90,
// }

// const data = JSON.stringify(settings,["level","health"]);

// console.log(data); //{"level":19,"health":90}

//Q10. What is the Output?
//normal function "this" call his own "this" while arrow function "this" call his parent class "this"

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
// }

// console.log(shape.diameter()); //20
// console.log(shape.perimeter()); //NaN

//Q11. What is the Output?

// function getItems(fruitList, ...args, favoriteFruit){
//     return [...fruitList,...args,...favoriteFruit]
// }

// getItems(["banana","apple"],"pear","orange") //SyntaxError: Rest parameter must be last formal parameter

// function getItems2(fruitList, favoriteFruit, ...args){
//     return [...fruitList,...args,...favoriteFruit]
// }

// console.log(getItems2(["banana","apple"],"pear","orange")) //[ 'banana', 'apple', 'orange', 'p', 'e', 'a', 'r' ]

//Q12. What is the Output?
//In JavaScript, objects are assigned and passed by reference. When you assign c to d, both c and d reference the same object. Any changes made to the object through one reference (c) will be reflected when accessed through the other reference (d). Hence, when c.greeting is changed to "Hello", d.greeting also reflects this change, leading to the output "Hello" when logged.

// let c ={ greeting: "Hey!"}
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); //Hello

//Q13. What is the Output?
//When comparing objects in JavaScript, the comparison is based on reference equality, not structural equality. Two different object literals {a: 1} are always considered different objects, thus the comparisons return false.

// console.log({a:1} == {a:1}); //false
// console.log({a:1} === {a:1}); //false

//Q14. What is the Output?
// obj1 and obj2 are two separate objects with the same content but different references.
// obj3 is assigned the reference of obj1, so both obj1 and obj3 reference the same object in memory.
// Therefore, obj1 == obj2 and obj1 === obj2 are false, but obj1 == obj3 and obj1 === obj3 are true.
// let obj1 = {a: 1};
// let obj2 = {a: 1};
// let obj3 = obj1;

// console.log(obj1 == obj2);  // false (different objects in memory)
// console.log(obj1 === obj2); // false (different objects in memory)

// console.log(obj1 == obj3);  // true (same reference)
// console.log(obj1 === obj3); // true (same reference)

//Q15. What is the Output?

// let person = {name:"Amit"};
// const members = [person]
// person = null;

// console.log(members)//[ { name: 'Amit' } ]

//Q16. What is the Output?

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50,
//     };
//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// }

// const personObj2 = changeAgeAndReference(personObj1)

// console.log(personObj1) //{ name: 'Alex', age: 25 }
// console.log(personObj2) //{ name: 'John', age: 50 }

//Q17. How to clone an Object?

// let user = {
//     name: "Amit Singh",
//     age: 24,
// }

//Method 1
// const ObjClone = Object.assign({},user);
//Method 2
// const ObjClone = JSON.parse(JSON.stringify(user));
//Method 3
// const ObjClone = {...user};
// ObjClone.name = "Amit"

// console.log(user, ObjClone)







