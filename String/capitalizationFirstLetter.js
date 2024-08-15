let text = "i am software developer";

let capitalizedText = text.split(' ')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ');

console.log(capitalizedText);  // Output: "I Am Software Developer"
