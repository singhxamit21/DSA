function twoSum(nums, target) {
  let numObj = {};
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (numObj[complement] !== undefined) {
        return [numObj[complement], i];
      }
      numObj[nums[i]] = i;
    }
  }

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [0, 1]