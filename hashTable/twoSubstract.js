function twoSubtract(nums, target) {
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = nums[i] - target; // Check for nums[i] - x = target (i.e., complement = nums[i] - target)
      if (numObj[complement] !== undefined) {
        return [numObj[complement], i];
      }
  
      // Also check for the reverse case: complement = nums[i] + target, which gives x - nums[i] = target
      complement = nums[i] + target;
      if (numObj[complement] !== undefined) {
        return [numObj[complement], i];
      }
  
      numObj[nums[i]] = i;
    }
    return null; // Return null if no valid pair is found
  }
  
  const nums = [2, 7, 11, 15];
  const target = 5;
  const result = twoSubtract(nums, target);
  console.log(result); // [0, 1] because 7 - 2 = 5
  