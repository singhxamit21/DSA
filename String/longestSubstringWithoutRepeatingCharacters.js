// Longest Substring Without Repeating Characters
//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// (
//     Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// )

const lengthOfLongestSubstring = (str) => {
    //An object that will store the last index where each character was seen.
    const map = {};

    // A variable to keep track of the starting index of the current substring without repeating characters.
    var left = 0;

    //he reduce function iterates over each character of the string and keeps updating the length of the longest substring found so far.
    return str.split('').reduce((accumulator, currentValue, currentIndex, array) => {
        // For each character in the string (currentValue), check if it has been seen before and if its last recorded index (map[currentValue]) is greater than or equal to left. If so, update left to be one more than the last index where this character was seen (map[currentValue] + 1). This ensures that the current character is not counted twice in the current substring.
        left = map[currentValue] >= left ? map[currentValue] + 1 : left;

        // Update the last recorded index of the current character to the current index
        map[currentValue] = currentIndex;
        
        // Calculate the length of the current substring without repeating characters as currentIndex - left + 1. Update the accumulator to be the maximum of the current length and the previously recorded longest length.
        return Math.max(accumulator, currentIndex - left + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring("abcabcbb"))