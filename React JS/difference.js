function findLargestDifference(arr) {
    if (arr.length < 2) {
        // If there are fewer than two elements, no difference can be calculated.
        return 0;
    }
    
    let min = arr[0];
    let max = arr[0];
    
    // Iterate through the array to find the maximum and minimum values
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    // The largest difference is the difference between the maximum and minimum values found
    return max - min;
}

// Example usage:
const arr = [5, 17, 2, 8, 10];
const largestDifference = findLargestDifference(arr);
console.log(largestDifference); // Output: 15
