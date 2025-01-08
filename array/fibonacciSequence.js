const fibonacciSequence = (number) => {
    let n1 = 0, n2 = 1, nextTerm;
    let sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return sequence;
};

console.log(fibonacciSequence(5));

//Recursive 
// const fibonacciSequence = (n, sequence = [0, 1]) => {
//     if (n <= 1) return [0]; // Special case for 1 term
//     if (sequence.length >= n) return sequence;
    
//     const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//     sequence.push(nextTerm);
//     return fibonacciSequence(n, sequence);
// };

// console.log(fibonacciSequence(6)); // Output: [0, 1, 1, 2, 3, 5]
