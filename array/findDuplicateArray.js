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