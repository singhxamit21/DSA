//Cyclically rotate an array by one

function rotateArrayByOne(arr) {
    const n = arr.length - 1;
    const lastElement = arr[n];

    // Shift elements to the right
    for (let i = n ; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    
    // Move the last element to the first position
    arr[0] = lastElement;
    return arr;
}

// Example usage
let myArray = [1, 2, 3, 4, 5];
rotateArrayByOne(myArray);
console.log(myArray);  // Output: [5, 1, 2, 3, 4]
