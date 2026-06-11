const user = {
  name: "Rishav",
  greet() {
    return `Hello, I'm ${this.name}`;
  }
};

console.log(user.greet());
