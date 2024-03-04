const twoSubtract = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = nums[i] - target; // Calculate the complement for subtraction
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

}

// Example usage:
// console.log("Indices of the two numbers:", twoSubtract([2, 7, 11, 15], 9)); // Output should be [0, 2]
// console.log("Indices of the two numbers:", twoSubtract([3,2,4,8], 6)); // Output should be [1, 3]
// console.log("Indices of the two numbers:", twoSubtract([3,9], 6)); // Output should be [0, 1]
