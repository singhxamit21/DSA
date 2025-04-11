let numbers = [5, 66, -44, 23, -31, 27, 65];

const sortArrayDec = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }
    return array;
}

console.log(sortArrayDec(numbers))
console.log(sortArrayDec([0,0,1,2,2]))


let strings = ["a", "b", "e", "k", "z", "v"];

const sortArrayDecStrings = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            // Compare strings using localeCompare for correct string comparison
            if (array[j].localeCompare(array[j + 1]) < 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(sortArrayDecStrings(strings));


//Optimize Solution
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [], i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  console.log(mergeSort([8, 3, 5, 1, 4, 7, 2, 6]));  // [1, 2, 3, 4, 5, 6, 7, 8]
