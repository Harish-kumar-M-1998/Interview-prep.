function findSecondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

console.log(findSecondLargest([5, 2, 9, 1, 7])); // Output: 7
