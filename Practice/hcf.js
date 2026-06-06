let a = 3;
let b = 8;

// HCF (GCD) using Euclidean algorithm
function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

let hcf = gcd(a, b);
console.log("HCF of " + a + " and " + b + " is: " + hcf);

