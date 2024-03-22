/*function removeDuplicatesAndGetCount(array) {
    let occurrences = {};
    let duplicatesCount = 0;

    // Identify duplicates and count occurrences
    array.forEach(item => {
        occurrences[item] = (occurrences[item] || 0) + 1;
        if (occurrences[item] === 2) {
            duplicatesCount++;
        }
    });

    // Filter out duplicates
    let uniqueArray = array.filter((item, index) => {
        return array.indexOf(item) === index;
    });

    return { uniqueArray, duplicatesCount };
}

// Example usage
const originalArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
const { uniqueArray, duplicatesCount } = removeDuplicatesAndGetCount(originalArray);
console.log("Array without duplicates:", uniqueArray);
console.log("Count of duplicates:", duplicatesCount); */

function countNumberDuplicates(array) {
    let occurrences = {};
    
    // Count occurrences of each number
    array.forEach(item => {
        occurrences[item] = (occurrences[item] || 0) + 1;
    });

    // Filter out numbers with duplicates and count their duplicates
    let duplicatesCount = {};
    Object.keys(occurrences).forEach(key => {
        if (occurrences[key] > 1) {
            duplicatesCount[key] = occurrences[key] - 1;
        }
    });

    return duplicatesCount;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
const duplicatesCount = countNumberDuplicates(originalArray);
console.log("Count of duplicates for each number:", duplicatesCount);
