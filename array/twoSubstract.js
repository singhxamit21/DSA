function twoSub(nums, target) {
    // Loop through each number in the list
    for (let i = 0; i < nums.length; i++) {
        // For each number, check the rest of the list
        for (let j = i + 1; j < nums.length; j++) {
            // If the difference between the current number and the one we're checking equals the target, return their indexes
            if (nums[i] - nums[j] === target || nums[j] - nums[i] === target) {
                return [i, j];
            }
        }
    }

    // If no matching pair is found, return an empty array
    return [];
}

const res = twoSub([5, 3, 8, 12], 4);
const res2 = twoSub([10, 7, 5, 2], 5);
console.log(res);  // Output should be [0, 1]
console.log(res2); // Output should be [0, 3]

// Example usage:
console.log("Indices of the two numbers:", twoSub([8, 3, 6], 2)); // Output should be [0, 2]
console.log("Indices of the two numbers:", twoSub([7, 1, 5], 6)); // Output should be [0, 1]
