function countCharacterOccurrences(str) { 

    const charCount = {}; 
  
    for (let char of str) { 
  
      charCount[char] = (charCount[char] || 0) + 1; 
  
    } 
    return charCount; 
}
console.log(countCharacterOccurrences('ghgdhgdvgh'));


//print duplicates and its occurences
function countCharacterOccurrences(str) { 

  const charCount = {}; 

  for (let char of str) { 

    charCount[char] = (charCount[char] || 0) + 1; 

  } 
  const duplicates = {};
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates[char] = charCount[char];
        }
    }

    return duplicates;
}
console.log(countCharacterOccurrences([1,2,3,4,5,5,4,3,3,1]));


