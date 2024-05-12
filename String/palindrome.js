function palindrome(input){
    const str = input.toString();
    return str === str.split("").reverse().join("");
}

console.log(palindrome(121));       
console.log(palindrome(10));      
console.log(palindrome("level"));  
console.log(palindrome("hello"));