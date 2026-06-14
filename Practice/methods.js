// const user = {
//   name: "Rishav",
//   greet() {
//     return `Hello, I'm ${this.name}`;
//   }
// };

// console.log(user.greet());

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function(num) {
//   console.log(num * 2);
// });

// //methods
// const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
// };

// console.log(calculator.add(5, 3));
// console.log(calculator.subtract(5, 3));
// console.log(calculator.multiply(5, 3));
// console.log(calculator.divide(5, 0));

const person = {
  name: "Rishav",
  age: 23,
  introduce() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  } 
};

console.log(person.introduce());