async function fetchWithRetry(url, maxRetries = 3) {
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            attempts++;
            console.error(`Attempt ${attempts} failed:`, error);
            if (attempts >= maxRetries) {
                throw new Error("API request failed after 3 attempts");
            }
        }
    }
}

fetchWithRetry('https://dummyjson.com/products')
    .catch(error => console.error('Final Error:', error.message));


//------------------------->>>>>>>>>>>>Simulated API failure


async function fetchWithRetry(url, maxRetries = 3) {
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            attempts++;
            // Simulate API failure 3 times
            if (attempts <= 3) {
                throw new Error("Simulated API failure");
            }

            const response = await fetch(url);

            const data = await response.json();
            console.log("Success:", data);
            return data;
        } catch (error) {
            console.error(`Attempt ${attempts} failed:`, error.message);
            if (attempts >= maxRetries) {
                throw new Error("API request failed after 3 attempts");
            }
        }
    }
}

fetchWithRetry('https://dummyjson.com/products')
    .catch(error => console.error('Final Error:', error.message));