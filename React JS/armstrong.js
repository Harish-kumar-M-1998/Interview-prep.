function isArmstrongNumber(number) {
    // Convert the number to a string to easily iterate over each digit
    const digits = number.toString();
    const numberOfDigits = digits.length;
    let sum = 0;

    // Calculate the sum of the digits each raised to the power of the number of digits
    for (let digit of digits) {
        sum += Math.pow(parseInt(digit, 10), numberOfDigits);
    }

    // Compare the sum to the original number
    return sum === number;
    
}

// Example usage
const number = 145;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}
