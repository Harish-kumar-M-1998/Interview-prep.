function sortStrings(arr) { 

    return arr.slice().sort(); 
  
  } 
  const unsortedArray = ["banana", "apple", "orange", "grape"];
const sortedArray = sortStrings(unsortedArray);
console.log(sortedArray); // Output: ["apple", "banana", "grape", "orange"]
