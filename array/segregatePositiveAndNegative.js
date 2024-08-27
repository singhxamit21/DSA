//Move all negative numbers to end and positive to beginning with constant extra space

function rearrangeArray(arr) {
    //j is used to keep track of the position where the next positive number should be placed.
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            if (i !== j) {
                // Swap positive element to the front
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            j++;
        }
    }

    return arr;
}

console.log(rearrangeArray([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

function segregatePositiveAndNegative(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0 && arr[right] >= 0) {
            // Swap arr[left] and arr[right]
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        } else {
            if (arr[left] >= 0) {
                left++;
            }
            if (arr[right] < 0) {
                right--;
            }
        }
    }
}

let myArray = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
segregatePositiveAndNegative(myArray);
console.log(myArray);
