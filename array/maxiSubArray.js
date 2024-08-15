//"Maximum Subarray"

function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum sum ending at the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update maxSum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum; // Return the maximum sum
};

// Example usage:
console.log("Maximum sum of subarray:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output should be 6
//Explanation: The subarray [4,-1,2,1] has the largest sum 6.

console.log("Maximum sum of subarray:", maxSubArray([1])); // Output should be 1
//Explanation: The subarray [1] has the largest sum 1.



