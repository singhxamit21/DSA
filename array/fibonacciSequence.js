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
