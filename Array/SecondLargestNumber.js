//with inbuild function
function secondLargestNumber(arr){
    const uniqueArr = Array.from(new Set(arr))
    uniqueArr.sort((a,b)=> {return b-a})
    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }else{
        return -1;
    }
}
// console.log(secondLargestNumber([12,35,1,10,34,1]))
// console.log(secondLargestNumber([10,5,10]))


//without inbuild function
function secondLargestNumberOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i]
        }else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

// console.log(secondLargestNumberOptimised([12,35,1,10,34,1]))
// console.log(secondLargestNumberOptimised([10,5,10]))



//-------------Pratise Question--------------------
function thirdLargestNumberOptimised(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    let thirdLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } else if (arr[i] != largest && arr[i] != secondLargest && arr[i] > thirdLargest) {
            thirdLargest = arr[i];
        }
    }

    return thirdLargest;
}

console.log(thirdLargestNumberOptimised([12,35,1,10,34,1]))
console.log(thirdLargestNumberOptimised([10,5,10]))

