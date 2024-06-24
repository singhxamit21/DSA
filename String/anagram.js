function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const sCharCount = {};
    const tCharCount = {};
    
    // Count occurrences of each character in string s
    for (let char of s) {
        sCharCount[char] = (sCharCount[char] || 0) + 1;
    }
    
    // Count occurrences of each character in string t
    for (let char of t) {
        tCharCount[char] = (tCharCount[char] || 0) + 1;
    }
    
    // Compare character counts
    for (let key in sCharCount) {
        if (sCharCount[key] !== tCharCount[key]) {
            return false;
        }
    }
    
    return true;
};

console.log(isAnagram("anagram","nagaram"))
console.log(isAnagram("anagram","nagar1am"))