let isPalindrome = (value) => 
{
    let rev = value.split('').reverse().join('');
    return value == rev
}
let  words = ['mom' , 'dad', 'hi']

for (value of words){
    if (isPalindrome(value)){
        console.log(value);
    }
}