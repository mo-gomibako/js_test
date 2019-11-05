const array = [0, 0, 0];
const a = array;
const b = [];

console.log(a); // [0, 0, 0]
console.log(array); // [0, 0, 0]

a[0] = 1;
console.log(a); // [1, 0, 0]
console.log(array); // [1, 0, 0]

ary = [1, 3, 4];

for (let i of ary) {
  console.log(i);
}
