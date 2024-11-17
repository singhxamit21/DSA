//map, filter and reduce 

//Q1. map() - In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array.

// const nums = [1,2,3,4]

// const multiplyThree = nums.map((num,i,arr) => {
//     return num * 3;
// })

// console.log(multiplyThree)

//Q2. filter() - The filter() method creates a new array filled with elements that pass a test provided by a function.

// const nums = [1,2,3,4]

// const moreThenTwo = nums.filter((num) => {
//     return num > 2;
// })

// console.log(moreThenTwo)

//Q3. reduce() - The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

//Accumulator (acc): The accumulator is the single value we get at the end of the execution after the reducer’s job is completed.

// const nums = [1,2,3,4]

// const sum = nums.reduce((acc,curr,i,arr)=>{
//     return acc + curr;
// },0)

// console.log(sum)


//Q4. Pollyfill for Map()

// Array.prototype.myMap = function (cb) {
//     let temp = [];

//     for(let i=0; i<this.length; i++){
//         temp.push(cb(this[i],i,this))
//     }

//     return temp;
// };

// const nums = [1,2,3,4]

// const multiplyThree = nums.myMap((num,i,arr) => {
//     return num * 3;
// })

// console.log(multiplyThree)

//Q5. Pollyfill for filter()

// Array.prototype.myFilter = function (cb) {
//     let temp = [];

//     for(let i=0; i<this.length; i++){
//         if(cb(this[i],i,this)){
//             temp.push(this[i])
//         }
        
//     }

//     return temp;
// };

// const nums = [1,2,3,4]

// const moreThenTwo = nums.myFilter((num) => {
//     return num > 2;
// })

// console.log(moreThenTwo)

//Q6. Pollyfill for reduce()

// arr.reduce((acc,curr,i,arr)=>{},initialValue)

// Array.prototype.myReduce = function (cb,initialValue) {
//     var accumulator = initialValue;

//     for(let i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator , this[i] , i , this) : this[i];
//     }

//     return accumulator;
// };

// const nums = [1,2,3,4]

// const sum = nums.myReduce((acc,curr,i,arr)=>{
//     return acc + curr;
// },0)

// console.log(sum)

// Q7. map vs forEach - The map() method returns a new array, whereas the forEach() method does not return a new array. 

// const arr = [2, 5, 3, 4, 7];

// const mapResult = arr.map((ar) => {
//     return ar + 2;
// })

// const forEachResult = arr.forEach((ar) => {
//     return ar + 2;
// })

// console.log(mapResult,forEachResult)

// forEach modifed the original array

// const arr = [2, 5, 3, 4, 7];

// const forEachResult = arr.forEach((ar,i) => {
//     arr[i] = ar + 2;
// })

// console.log(forEachResult,arr)

// method chaining is possible in map const result = arr.map(ar => ar + 2).filter(ar => ar > 2);




let students = [
    {name: "Piyush" , rollNumber: 31 , mark: 80 },
    {name: "Jenny" , rollNumber: 15 , mark: 69 },
    {name: "Kaushal" , rollNumber: 16 , mark: 35 },
    {name: "Dilpreet" , rollNumber: 7 , mark: 55 },
]
//Q8. Return only name of students in Captial

// const names = students.map((stu) => stu.name.toLocaleUpperCase());

// console.log(names)

//Q9. Return only details of those who scored more then 60 marks

// const details = students.filter((stu) => stu.mark > 60);

// console.log(details)

//Q10. Return only details of those who scored more then 60 marks and rollNumber greater than 15

// const details = students.filter((stu) => stu.mark > 60 && stu.rollNumber > 15);

// console.log(details)

//Q11. Sum of marks of all students

// const sum = students.reduce((acc, curr) => acc + curr.mark , 0);

// console.log(sum)

//Q12. Returns only names of students who scored more then 60

// const names = students.filter((stu) => stu.mark > 60).map((stu) => stu.name)

// console.log(names)

//Q13. Returns total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// const totalMarks = students.map((stu) => {
//     if(stu.mark < 60){
//         stu.mark += 20
//     }
//     return stu;
// }).filter((stu) => stu.mark > 60).reduce((acc,curr) => acc + curr.mark,0)


// console.log(totalMarks)

