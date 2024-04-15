console.log(`You can do this!`);

// Part 1: Fizz Buzz
for (let a = 1; a <= 100; a++) {
  if (a % 3 === 0) {
    console.log(`Fizz`);
  }
  if (a % 5 === 0) {
    console.log(`Buzz`);
  }
  if (a % 3 === 0 && a % 5 === 0) {
    console.log(`Fizz Buzz`);
  }
  if (a % 3 != 0 && a % 5 != 0) {
    console.log(`${a}`);
  }
}
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11,...

// Part 2: Prime Time
for (let n = 9; n <= 100; n++) {
  let prime = true;
  for (let p = 2; p < n; p++) {
    if (n % p == 0) {
      prime = false;
      p = n;
      break;
    }
  }
  if (prime && n != 1) {
    console.log(`${n} is a prime number`);
    break;
  }
}
