// Mini project: Number API utilities (Node.js CLI)
// Run:
//   node Practice/mini-project-number-api.js --n 121
// Or:
//   node Practice/mini-project-number-api.js 121

const args = process.argv.slice(2);
let n = null;

if (args.length === 1) {
  n = Number(args[0]);
} else {
  const idx = args.indexOf('--n');
  if (idx !== -1 && args[idx + 1] != null) n = Number(args[idx + 1]);
}

if (!Number.isFinite(n) || n < 1) {
  console.log('Usage: node mini-project-number-api.js --n <positive integer>');
  process.exit(1);
}

function reverseNumber(num) {
  let temp = num;
  let rev = 0;
  while (temp > 0) {
    const digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return rev;
}

function isPalindromeNumber(num) {
  return num === reverseNumber(num);
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isComposite(num) {
  return num > 1 && !isPrime(num);
}

function isArmstrong(num) {
  const digits = String(num).split('').map(d => Number(d));
  const power = digits.length;
  const sum = digits.reduce((acc, d) => acc + d ** power, 0);
  return sum === num;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

const results = {
  n,
  isOdd: n % 2 === 1,
  isEven: n % 2 === 0,
  prime: isPrime(n),
  composite: isComposite(n),
  palindrome: isPalindromeNumber(n),
  armstrong: isArmstrong(n),
  reverse: reverseNumber(n)
};

console.log('Number API results:');
console.log(JSON.stringify(results, null, 2));

// Extra small demo (HCF/LCM) using numbers derived from n
const a = Math.max(1, Math.floor(n / 3));
const b = Math.max(1, Math.floor(n / 2));
console.log(`\nExtra: for a=${a}, b=${b}`);
console.log({ gcd: gcd(a, b), lcm: lcm(a, b) });

