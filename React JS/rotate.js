let rotate = (value,k) => {

    for(let i=0; i< k ;i++){
         value.unshift(value.pop());
    }
    return value;
}
console.log(rotate([1,2,3,4,5],2));