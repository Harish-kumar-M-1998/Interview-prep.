function findElementIndex(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 ? index : -1;
}
const array = [10, 20, 30, 40, 50];
const elementToFind = 30;
const index = findElementIndex(array, elementToFind);
console.log(index); // Output: 2 (index of the element 30 in the array)



var items = ["milk", "bread", "sugar"];

function checkForProduct(item) {
  if (items.indexOf(item) === -1) {
    console.log(item, " does not exist");
  } else {
    console.log(item, "is in your list");
  }
}

checkForProduct("socks"); //item does not exist
checkForProduct("milk"); //item is in your list