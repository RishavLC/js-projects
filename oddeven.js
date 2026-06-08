let n = 9;
let odd = [];
let even = [];
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}

console.log("Odd numbers:", odd);
console.log("Even numbers:", even);