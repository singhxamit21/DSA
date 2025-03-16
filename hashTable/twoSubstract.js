function twoSubtract(nums, target) {
  let numObj = {};
  
  for (let i = 0; i < nums.length; i++) {
      let complement1 = nums[i] - target; // nums[i] - x = target
      let complement2 = nums[i] + target; // x - nums[i] = target

      if (complement1 in numObj) {
          return [numObj[complement1], i];
      }

      if (complement2 in numObj) {
          return [numObj[complement2], i];
      }

      numObj[nums[i]] = i;
  }
  
  return null; // Return null if no valid pair is found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 5;
console.log(twoSubtract(nums, target)); // Output: [0, 1] because 7 - 2 = 5
