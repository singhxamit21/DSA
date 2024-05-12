function rotateArray(arr,k){
    let size = arr.length
    if(size > k){
        k = k % size;
    }
    const rotated = arr.splice(size-k,size)
    arr.unshift(...rotated)
    return arr;
}

// console.log(rotateArray([1,2,3,4,5,6,7],3))
// console.log(rotateArray([-1,-100,3,99],2))

function rotateArrayOptimised(arr, k) {
    let size = arr.length;
    if (size > k) {
        k = k % size;
    }
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

function reverse(arr, left, right) {
    while (left < right) {
        const temp = arr[left];
        //This means the value is assigned first, and then left is incremented.
        arr[left++] = arr[right];
        arr[right--] = temp;
    }
}


console.log(rotateArrayOptimised([1,2,3,4,5,6,7],3))
console.log(rotateArrayOptimised([-1,-100,3,99],2))
