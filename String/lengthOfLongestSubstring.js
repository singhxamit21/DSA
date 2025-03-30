var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    
 
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
        }
    }

    return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"))

/*
Example Walkthrough:
Input: "abba"

Step -> Left -> Right -> s[right] -> Set (Window) -> Max Length -> Action
1    -> 0    -> 0     -> 'a'      -> {a}          -> 1         -> Add 'a'
2    -> 0    -> 1     -> 'b'      -> {a, b}       -> 2         -> Add 'b'
3    -> 0    -> 2     -> 'b'      -> {a, b} → {b} -> 2         -> Remove 'a', left++
4    -> 1    -> 2     -> 'b'      -> {b} → {b}    -> 2         -> Remove 'b', left++
5    -> 2    -> 2     -> 'b'      -> {b}          -> 2         -> Add 'b'
6    -> 2    -> 3     -> 'a'      -> {b, a}       -> 2         -> Add 'a'

Output: 2 (Longest substring without repeating characters: "ab" or "ba")

*/


var longestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    let startIndex = 0; // To track the start index of the longest substring

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);

        // If we found a new longest substring, update the start index
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            startIndex = left;
        }
    }

    // Extract the longest substring using startIndex and maxLength
    return s.substring(startIndex, startIndex + maxLength);
};

console.log(longestSubstring("abcabcbb")); // Output: "abc"
