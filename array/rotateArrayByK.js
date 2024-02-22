
function rotateArray(nums, k) {
    k %= nums.length; // If k is greater than nums.length, we only need to rotate k % nums.length times
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the rest of the elements
    return nums;
};

// Helper function to reverse the elements of an array within a given range
function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

console.log(rotateArray([1,2,3,4,5,6,7],3))
console.log(rotateArray([-1,-100,3,99],2))


