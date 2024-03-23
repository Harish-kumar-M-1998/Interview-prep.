function longestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(longestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
