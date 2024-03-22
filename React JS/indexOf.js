function findElementIndex(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 ? index : -1;
}
const array = [10, 20, 30, 40, 50];
const elementToFind = 30;
const index = findElementIndex(array, elementToFind);
console.log(index); // Output: 2 (index of the element 30 in the array)
