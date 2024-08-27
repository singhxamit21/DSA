//// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i)
    }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))