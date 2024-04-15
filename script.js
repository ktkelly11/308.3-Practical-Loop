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
    console.log(`${n} is the next prime number`);
    break;
  }
}
// 11 is the next prime number

// Part 3: Feeling Loopy
const myString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
console.log(myString);

// First Attempt
// const myArray = {
//   id: ("ID", "42", "57", "63", "98"),
//   name: ("Name", "Bruce", "Bob", "Blaine", "Bill"),
//   occupation:
//     ("Occupation", "Knight", "Fry Cook", "Quiz Master", "Doctor's Assitant"),
//   age: ("Age", "41", "19", "58", "26"),
// };

// let strArray = myArray(3);

// for (i=0; i<= myArray.length; i++) {
//   if (strArray[i] != null)
// }

// Second Attempt
// let newString = myString.split("\n");
// let column = ",";

// for (i=0; i<=myString; i++){

// }
