function twoSum(nums, target) {
    const map = {}; // Create a hash map to store each number's index

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed to reach the target


        // If the complement is found in the map, return the indices of the current number and its complement
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        
        // Otherwise, store the current number's index in the map
        map[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array
    return [];
};

// Example usage:
// console.log("Indices of the two numbers:", twoSum([2, 7, 11, 15], 9)); // Output should be [0, 1]
console.log("Indices of the two numbers:", twoSum([3,2,4], 6)); // Output should be [1, 2]
// console.log("Indices of the two numbers:", twoSum([3,3], 6)); // Output should be [0, 1]


