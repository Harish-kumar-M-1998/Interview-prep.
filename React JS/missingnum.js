function findMissingNumber(arr, n) {
    const sum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum - arraySum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3
