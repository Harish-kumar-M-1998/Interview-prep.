function removeFalsyValues(arr) { 

    return arr.filter(Boolean); 
  
  } 
  const array = [0, 1, "", "hello", false, true, null, undefined, NaN];
  const filteredArray = removeFalsyValues(array);
  console.log(filteredArray); // Output: [1, "hello", true]
  