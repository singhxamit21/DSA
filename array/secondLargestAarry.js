function secondLargest(arr) {
    if (arr.length < 2) return null;

    let first = -Infinity, second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second !== -Infinity ? second : null;
}

function thirdLargest(arr) {
    if (arr.length < 3) return null;

    let first = -Infinity, second = -Infinity, third = -Infinity;

    for (const num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num < first) {
            third = second;
            second = num;
        } else if (num > third && num < second) {
            third = num;
        }
    }

    return third !== -Infinity ? third : null;
}

// Example usage:
const arr = [8, 20, 10, 10, 5, 8, 20];
console.log("Second largest element:", secondLargest(arr)); // Output: 10
console.log("Third largest element:", thirdLargest(arr));   // Output: 8