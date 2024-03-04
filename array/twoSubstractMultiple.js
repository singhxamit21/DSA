const twoSubstractMultiple = (nums, target) => {
    let map = {};
    let finalResult = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = nums[i] - target;
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
    }
    return finalResult;
}

// Example usage:
console.log("Indices of the two numbers:",twoSubstractMultiple([3, 2, 4, 3, 3], 0)); // Output should be [ [ 0, 3 ], [ 0, 4 ], [ 3, 4 ] ]
console.log("Indices of the two numbers:", twoSubstractMultiple([2, 7, 11, 15], 9)); // Output should be [0, 2]
console.log("Indices of the two numbers:", twoSubstractMultiple([3,2,4,8], 6)); // Output should be [[1, 3]]
console.log("Indices of the two numbers:", twoSubstractMultiple([3,9], 6)); // Output should be [[0, 1]]
