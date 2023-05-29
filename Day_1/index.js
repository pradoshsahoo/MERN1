console.log("Hey");

let a = [1, 2, 3, 4, 5];
a.push(6);
// console.log(a);

// let obj = { a: 10, b: 10 };
// console.log(obj["a"]);

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i < num.length; i += 2) {
//   console.log(num[i]);
// }

function isPrime(n) {
  if (n == 1) {
    return 0;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return 1;
}

for (let i = 0; i < num.length; i++) {
  if (isPrime(num[i]) == 1) {
    console.log(num[i]);
  }
}
