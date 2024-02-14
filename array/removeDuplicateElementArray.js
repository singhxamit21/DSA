function removeDuplicates(arr) {
    const map = {};
    const uniqueArray = [];

    arr.forEach(item => {
        if (!map[item]) {
            uniqueArray.push(item);
            map[item] = true;
        }
    });

    return uniqueArray;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 2, 7, 8, 3, 4];
const uniqueArray = removeDuplicates(array);
console.log("Array with duplicates removed:", uniqueArray);
// Output: [1, 2, 3, 4, 5, 7, 8]
