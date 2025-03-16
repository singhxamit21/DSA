function twoSum(nums, target) {
  let numObj = {};
  
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (complement in numObj) {
      return [numObj[complement], i];
    }
    
    numObj[nums[i]] = i;
  }
  
  return null; // Explicitly return null if no pair is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1] because 2 + 7 = 9
