function printBoxedText(input) {
  const words = input.split(" ");
  const maxLength = Math.max(...words.map(word => word.length));
  const lineLength = maxLength + 4; // for '| ', ' |'
  const border = '-'.repeat(lineLength);

  console.log(border);
  for (const word of words) {
    const padded = word.padEnd(maxLength, ' ');
    console.log(`| ${padded} |`);
  }
  console.log(border);
}

// Example usage:
printBoxedText("My name is Akshay");
