//how many numbers occur only 2 times in a list of numbers, if there are two such number return the smaller one. nearest number in a list from a given number. 

//To solve this in JavaScript, we can break the problem into two parts:

// 1. Count how many numbers occur exactly two times in a list, and if there are two such numbers, return the smaller one.
// 2. Find the nearest number in a list from a given number.

function findTwoOccurrenceAndNearest(numbers, givenNumber) {
    // Part 1: Find the number that occurs exactly 2 times, and return the smaller one
    let frequency = {};
    
    // Count frequency of each number
    for (let num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
    }
    
    // Filter numbers that occur exactly 2 times
    let twoOccurrences = [];
    for (let key in frequency) {
        if (frequency[key] === 2) {
            twoOccurrences.push(parseInt(key));
        }
    }
    
    // If there are two numbers that occur twice, return the smaller one
    let smallerTwoOccurrence = null;
    if (twoOccurrences.length === 2) {
        smallerTwoOccurrence = Math.min(twoOccurrences[0], twoOccurrences[1]);
    }

    // Part 2: Find the nearest number in the list to the given number (no Math.abs)
    let nearest = numbers[0];
    let minDiff = givenNumber - nearest; // Initialize difference
    
    for (let num of numbers) {
        let diff = givenNumber - num; // Calculate the difference directly
        
        // If the current number is closer (i.e., difference is smaller)
        if (Math.abs(diff) < Math.abs(minDiff)) {
            nearest = num;
            minDiff = diff;
        }
    }

    // Return both results
    return {
        smallerTwoOccurrence: smallerTwoOccurrence,
        nearest: nearest
    };
}

// Example usage:
const numbers = [4, 3, 5, 3, 4, 8, 10, 9];
const givenNumber = 6;
const result = findTwoOccurrenceAndNearest(numbers, givenNumber);
console.log("Smaller of the two-occurrence numbers:", result.smallerTwoOccurrence); // Outputs: 3
console.log("Nearest number to", givenNumber, ":", result.nearest); // Outputs: 5
