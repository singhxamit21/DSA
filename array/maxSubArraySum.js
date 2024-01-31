function maxSubArraySum(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}


let myArray = [1,2,3,-2,5];
let maxSum = maxSubArraySum(myArray);
console.log(maxSum); 
