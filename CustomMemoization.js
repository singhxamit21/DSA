function memoize(fn) {
    const cache = {}; // Cache to store computed results
    return function(...args) {
        const key = JSON.stringify(args); // Serialize the arguments as a key
        if (cache[key]) {
            console.log('Fetching from cache for:', key);
            return cache[key]; // Return the cached result if it exists
        }
        console.log('Calculating result for:', key);
        const result = fn(...args); // Call the original function
        cache[key] = result; // Store the result in the cache
        return result;
    };
}

// Function to calculate tax (expensive operation simulated)
function calculateTax(price, taxRate) {
    return price + (price * taxRate);
}

// Memoized version of calculateTax
const memoizedCalculateTax = memoize(calculateTax);

// Call the memoized function with different inputs
console.log(memoizedCalculateTax(100, 0.15)); // Calculating for first time
console.log(memoizedCalculateTax(100, 0.15)); // Fetching from cache
console.log(memoizedCalculateTax(200, 0.10)); // Calculating for new inputs
console.log(memoizedCalculateTax(100, 0.15)); // Fetching from cache
