function findKthMaxMin(arr, k) {
    // Clone the array to avoid modifying the original array
    let sortedArray = arr.slice();
  
    // Sort the array in ascending order
    sortedArray.sort((a, b) => a - b);
  
    // Find the kth minimum and maximum elements
    let kthMin = sortedArray[k - 1];
    let kthMax = sortedArray[sortedArray.length - k];
  
    return { kthMin, kthMax };
  }
  
  // Example usage:
  let array = [7,10,4,3,20,15];
  let k = 3;
  
  let result = findKthMaxMin(array, k);
  console.log(`The ${k}th minimum element is: ${result.kthMin}`);
  console.log(`The ${k}th maximum element is: ${result.kthMax}`);
  