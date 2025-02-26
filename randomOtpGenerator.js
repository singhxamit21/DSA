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