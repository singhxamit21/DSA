//Move all negative numbers to end and positive to beginning with constant extra space


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
