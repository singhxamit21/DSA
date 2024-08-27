// https://leetcode.com/problems/string-to-integer-atoi/description/

function myAtoi(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};

console.log(myAtoi("42"))