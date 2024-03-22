let findDuplicates = (value) => {
     let result = value.filter((val ,index,array )=> {
        return value.indexOf(val) !== index;
     });
     return result;
}
console.log(findDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,7]));