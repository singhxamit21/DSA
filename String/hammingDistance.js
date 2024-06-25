// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
// output 2


const hammingDistance = (x,y) => {
    return (x ^ y).toString(2).split('0').join('').length;   
}

console.log(hammingDistance(1, 4))
// console.log(hammingDistance(3, 1))
