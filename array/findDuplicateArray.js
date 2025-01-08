function findDuplicateArray(arr) {
    const map = {};
    const duplicates = [];

    arr.forEach(item => {
        if (map[item]) {
            duplicates.push(item);
        } else {
            map[item] = true;
        }
    });
    return duplicates;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 2, 7, 8, 3, 4];
const duplicates = findDuplicateArray(array);
console.log("Duplicates:", duplicates); // Output: [2, 3, 4]

function countofDuplicateElementArray(arr){
    const countMap = {}
    arr.forEach(item => {
        countMap[item] = (countMap[item] || 0) + 1;
    });
    return countMap
}

console.log(countofDuplicateElementArray([1, 2, 3, 4, 5, 2, 7, 8, 3, 4,10,10,6,10]))


//unique in Array object
const Obj = [
    { name: "prayag", Age: 23 },
    { name: "prayag", Age: 23 },
    { name: "Amit", Age: 24 }
];

const uniqueLetters = [...new Set(Obj.map(a => JSON.stringify(a)))].map(e => JSON.parse(e));

console.log(uniqueLetters);

// ------->>>>>>>>>>>>>>>>>>>>
var array2 = [
    { "name": "Joe", "age": 17 },
    { "name": "Bob", "age": 17 },
    { "name": "Carl", "age": 35 }
];

function getDistinctValues(array, key) {
    return [...new Set(array.map(item => item[key]))];
}

var distinctAges = getDistinctValues(array2, "age");
console.log(distinctAges); // [17, 35]

var distinctNames = getDistinctValues(array2, "name");
console.log(distinctNames); // ["Joe", "Bob", "Carl"]