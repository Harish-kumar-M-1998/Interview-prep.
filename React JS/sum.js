let numbers =(value) =>{
    let sum=0;
    for(let i=0;i<value.length;i++)
    {
        sum=sum+value[i]
        
    }
    return sum;
}
console.log(numbers([1,2,3,4,5]));