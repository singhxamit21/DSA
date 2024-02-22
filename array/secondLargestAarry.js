function secondLargest(arr) {
    let first = arr[0];
    let second = -Infinity; // Initialize second largest as negative infinity
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }
    
    return second !== -Infinity ? second : null; // If second largest exists, return it, otherwise return null
}

// Example usage:
const arr = [8,20,10,10, 5, 8, 20];
console.log("Second largest element:", secondLargest(arr)); // Output should be 10

function thirdLargest(arr) {
    let first = arr[0];
    let second = -Infinity;
    let third = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third && arr[i] !== second && arr[i] !== first) {
            third = arr[i];
        }
    }
    
    return third !== -Infinity ? third : null;
}

// Example usage:
// const arr = [10, 5, 8, 20, 15];
console.log("Third largest element:", thirdLargest(arr)); // Output should be 15

