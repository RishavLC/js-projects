// Reverse a string (supports spaces/punctuation as-is)
// Usage: node reverse.js "Rishav"
// If no input is provided, defaults to "Rishav".

const input = process.argv.slice(2).join(" ") || "Rishav";

let reversed = input.split("").reverse().join("");
console.log(reversed);

