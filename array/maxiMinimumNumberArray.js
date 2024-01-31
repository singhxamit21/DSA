function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: undefined, max: undefined };
    }
    let min, max;
    // Initialize min and max with the first two elements
    if (arr[0] < arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }

    // Process the rest of the array in pairs
    //i += 2 means that after each iteration, the value of i will be increased by 
    for (let i = 2; i < arr.length - 1; i += 2) {
        let currentMin, currentMax;

        // Compare current pair of elements
        if (arr[i] < arr[i + 1]) {
            currentMin = arr[i];
            currentMax = arr[i + 1];
        } else {
            currentMin = arr[i + 1];
            currentMax = arr[i];
        }

        // Update overall min and max
        if (currentMin < min) {
            min = currentMin;
        }

        if (currentMax > max) {
            max = currentMax;
        }
    }

    // If the array has an odd length, handle the last element separately
    if (arr.length % 2 === 1) {
        let lastElement = arr[arr.length - 1];

        if (lastElement < min) {
            min = lastElement;
        } else if (lastElement > max) {
            max = lastElement;
        }
    }

    return { min, max };
}

// Example usage
let result = findMinMax([1,2,3,4,2,6,10000,8,9,2]);
console.log(result); // Output: { min: 1, max: 9 }
