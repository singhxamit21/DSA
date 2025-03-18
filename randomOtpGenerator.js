//The digits string contains 10 characters ('0123456789'), so digits.length is 10. When you multiply Math.random() by digits.length, the result is a floating-point number between 0 and 10 (exclusive)
//Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive), meaning it could be something like:
// 0.2345
// 0.6789
// 0.9999
// 0.2345 * 10 = 2.345
// 0.6789 * 10 = 6.789
// 0.9999 * 10 = 9.999
const generateOTP = (length = 6) => {
    let otp = '';
    const digits = '0123456789';
    
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * digits.length)];
    }
    
    return otp;
}

console.log(generateOTP(4)); 


const randomIdGenerator = () => {
    return Date.now()
}

console.log(randomIdGenerator())