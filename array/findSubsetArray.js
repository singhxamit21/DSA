//Find whether an array is subset of another array

const supersetArray = [1, 2, 3, 4, 5, 6];
const subsetArray = [2, 4, 6];

const isSubset = (subsetArray,supersetArray) => {
    return subsetArray.every((item)=> supersetArray.includes(item))
}

console.log(isSubset(subsetArray,supersetArray))


//Without Inbuild Function 

//Hashmap

const isSubsetOptimized = (subset, superset) => {
    const supersetMap = {};
    for (const element of superset) {
        supersetMap[element] = true;
    }
    for (const element of subset) {
        if (!supersetMap[element]) {
            return false;
        }
    }
    return true;
}

console.log(isSubsetOptimized(subsetArray,supersetArray))
