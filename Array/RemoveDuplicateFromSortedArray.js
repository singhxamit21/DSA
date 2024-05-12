function removeDuplicate(nums){
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1,1)
            i--
        }
    }
    return nums.length
}

// console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))

function removeDuplicateOptimised(nums){
    if(nums.length === 0) return 0;
    let i = 0;

    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}


console.log(removeDuplicateOptimised([0,0,1,1,1,2,2,3,3,4]))