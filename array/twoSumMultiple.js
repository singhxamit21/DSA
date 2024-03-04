const twoSumMultiple = (nums, target) => {
    let map = {};
    let finalResult = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            // Handle duplicates
            for (let index of map[complement]) {
                finalResult.push([index, i]);
            }
        }
        if (!map[nums[i]]) {
            map[nums[i]] = [i];
        } else {
            map[nums[i]].push(i);
        }
        console.log(map,"oooo")
    }
    return finalResult;
}

// Example usage:
console.log("Indices of the two numbers:",twoSumMultiple([3, 2, 4, 3, 3], 6)); // Output should be [ [ 1, 2 ], [ 0, 3 ], [ 0, 4 ], [ 3, 4 ] ]
console.log("Indices of the two numbers:", twoSumMultiple([2, 7, 11, 15], 9)); // Output should be [0, 1]
console.log("Indices of the two numbers:", twoSumMultiple([3,2,4], 6)); // Output should be [1, 2]
console.log("Indices of the two numbers:", twoSumMultiple([3,3], 6)); // Output should be [0, 1]
