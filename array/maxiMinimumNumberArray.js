
function findInduildMinMax(arr) {
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    return { min: minValue, max: maxValue }
}

function findMinMax(arr) {
    let minValue = Infinity;
    let maxValue = -Infinity;
    for (let item of arr) {

        // Find minimum value
        if (item < minValue)
            minValue = item;

        // Find maximum value
        if (item > maxValue)
            maxValue = item;
    }
    return { min: minValue, max: maxValue }
}

// Example usage
let result = findMinMax([1, 2, 3, 4, 2, 6, 10000, 8, 9, 2]);
console.log(result); // Output: { min: 1, max: 9 }
