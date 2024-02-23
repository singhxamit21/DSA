//Sorted Array
function removeDuplicates(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0
    
    let j = 0; // Index to track unique elements
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++; // Move unique index forward
            nums[j] = nums[i]; // Copy the unique element to its position
        }
    }
    
    return j + 1; // Length of the modified array (unique elements)
};

// Example usage:
const nums = [0,0,1,1,1,2,2,3,3,4];
console.log("Length after removing duplicates:", removeDuplicates(nums)); // Output should be 5

//Unsorted Array

function removeDuplicates(nums) {
    const hashMap = {}; // Hash table to store unique elements
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = true; // Mark the element as seen in the hash table
    }
    
    // Extract unique elements from the hash table
    const uniqueElements = Object.keys(hashMap).map(Number);
    
    // Replace the original array with unique elements
    for (let i = 0; i < uniqueElements.length; i++) {
        nums[i] = uniqueElements[i];
    }
    
    return uniqueElements.length; // Return the count of unique elements
}

// Example usage:
const nums2 = [3, 1, 2, 3, 5, 2, 4, 1];
console.log("Length after removing duplicates:", removeDuplicates(nums2)); // Output should be 5
console.log("Array after removing duplicates:", nums2); // Output should be [3, 1, 2, 5, 4]

