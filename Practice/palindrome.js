let n = 121
let temp = n;
let rev = 0;    
while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
}   
if (n === rev) {
    console.log(n + " is a palindrome number.");
} else {
    console.log(n + " is not a palindrome number.");
}   