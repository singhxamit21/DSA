//Union of two arrays
function findUnion(arr1, arr2) {
    // Check if an element is already present in the result array
    function isElementPresent(result, element) {
        for (const num of result) {
            if (num === element) {
                return true;
            }
        }
        return false;
    }

    const result = [];

    // Add elements from arr1 to the result array
    for (const element of arr1) {
        if (!isElementPresent(result, element)) {
            result.push(element);
        }
    }

    // Add elements from arr2 to the result array
    for (const element of arr2) {
        if (!isElementPresent(result, element)) {
            result.push(element);
        }
    }

    return result;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const unionArray = findUnion(array1, array2);

console.log(unionArray);
console.log(findUnion([85,25,1,32,54,6],[85,2]))
