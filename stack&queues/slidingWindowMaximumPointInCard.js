// Maximum Points You Can Obtain from Cards
// There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// front "1"   -> end "1"
// [2,3,4,5,6,1] result 1 -> [1,2,3,4,5,6] result 1 
// [3,4,5,6,1] result 1+2 -> [1,2,3,4,5] result 1+6
// [4,5,6,1] result 1+2+3 -> [1,2,3,4] result 1+6+5 
// result 6               -> result 12

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12

// Input: cardPoints = [2,2,2], k = 2
// Output: 4

// Input: cardPoints = [9,7,7,9,7,7,9], k = 7
// Output: 55

const maxScore = (cardPoints, k) => {
    let n = cardPoints.length;
    let totalSum = cardPoints.reduce((sum, num) => sum + num, 0);

    if (k === n) return totalSum;

    let windowSize = n - k;
    let minSubarraySum = 0;
    let currentSum = 0;

    // Calculate initial window sum
    for (let i = 0; i < windowSize; i++) {
        currentSum += cardPoints[i];
    }
    minSubarraySum = currentSum; // Initialize minSubarraySum

    // Slide the window across the array
    for (let i = windowSize; i < n; i++) {
        currentSum += cardPoints[i] - cardPoints[i - windowSize];
        
        // Instead of Math.min, manually track the minimum sum
        if (currentSum < minSubarraySum) {
            minSubarraySum = currentSum;
        }
    }

    return totalSum - minSubarraySum;
};

console.log(maxScore([1,2,3,4,5,6,1],3));

// cardPoints[i]: The new element entering the window.

// cardPoints[i - windowSize]: The element that is leaving the window.

// currentSum += cardPoints[i] - cardPoints[i - windowSize];

// Adds the new element (cardPoints[i]).

// Removes the old element (cardPoints[i - windowSize]).

// i = 4 -> currentSum = 10 + 5 - 1 = 14  (window: [2,3,4,5])
// minSubarraySum = min(10, 14) = 10

// i = 5 -> currentSum = 14 + 6 - 2 = 18  (window: [3,4,5,6])
// minSubarraySum = min(10, 18) = 10

// i = 6 -> currentSum = 18 + 1 - 3 = 16  (window: [4,5,6,1])
// minSubarraySum = min(10, 16) = 10

// maxScore = totalSum - minSubarraySum
//          = 22 - 10
//          = 12

