function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords("Hello World")); // Output: "World Hello"

function reverseSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
    
    // Initialize an array to hold the words in reverse order
    let reversedWords = [];
    
    // Iterate over the words array from the end to the beginning
    for (let i = words.length - 1; i >= 0; i--) {
        // Add each word to the reversedWords array
        reversedWords.push(words[i]);
    }
    
    // Join the reversed words back into a sentence
    return reversedWords.join(' ');
}

// Example usage:
const originalSentence = "Hello world, this is a test";
const reversedSentence = reverseSentence(originalSentence);
console.log(reversedSentence); 