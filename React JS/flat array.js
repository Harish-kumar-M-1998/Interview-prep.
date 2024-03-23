function flattenArray(arr) {
    return arr.flat(Infinity); //infinity for more than one level deep of nesting
}
const deeplyNestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
console.log(flattenArray(deeplyNestedArray)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]