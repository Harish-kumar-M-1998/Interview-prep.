let numarr = (value) => {
    value = value .filter((num) => {
            if (num < 2) return false;
            for(let i=2;1<=Math.sqrt(num);i++){
                if(num %1 === 0) 
                return false;
            }
            return true ;
    })
     console.log(value);
}
numarr([1,2,3,4,5,6,7,8,9,1,,10,11,12,1,3])


let prime = (numArray) => {
    numArray = numArray.filter((number) => {
        if (number < 2) return false; // 1 is not a prime number
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray, "is a prime");
}


prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


