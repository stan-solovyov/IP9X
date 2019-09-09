'use strict';

// Hoisting

// 1.Implement function containing local variable with hoisting.
// 2.Commit example to github.
// 3.Use eslint to find this problem and --fix flag to remove it.
// 4.Fix example manually and commit it to github.
const someFunction = () => {
  let hoisted = 0;
  console.log(hoisted);
  hoisted = 4;
  console.log(hoisted);
  // var hoisted;
};

someFunction();



// Scalar value vs Reference
// Prepare two implementations of inc function:

/* 1.First with signature inc(n: number): number, call example:
const a = 5; const b = inc(a); console.dir({ a, b });*/
const inc = number => ++number;
const a = 5;
const b = inc(a);
console.log(`a = ${a}; b = ${b}`);

/* 2.Second with signature inc(num: Num) where Num is object with field n,
so function will change field of the object passed by reference,
call example: const obj = { n: 5 }; inc(obj); console.dir(obj);*/
const incObj = num => ++num.n;
const obj = { n: 5 };
incObj(obj);
console.log(obj.n);



// Types

// 1.Prepare array with values of different type.
const values = [
  4,
  'Sam',
  undefined,
  { name: 'Tim' },
  true,
  [1, 2, 3],
  Symbol(),
  () => {},
  null,
  null,
  2.4
];

/* 2.Prepare collection (object) with type names as keys and 0 as values,
example: { number: 0, string: 0 } and so on for all types.*/
const types = {
  // undefined: 0,
  // boolean: 0,
  // object: 0,
  // null: 0,
  // number: 0,
  // string: 0,
  // symbol: 0,
  // function: 0
};

/* 3.Iterate array with for..of loop and increment occurrence counter there
to get collection of types occurrences count for all types in array.*/
// for (const o of values) {
//   types[typeof(o)]++;
// }
// console.log(types);


/* 4.Modify this example: remove all keys from initial
collection literal and add all keys dynamically from the loop.*/
for (const o of values) {
  if (typeof(o) in types) {
    types[typeof(o)]++;
  } else {
    types[typeof(o)] = 1;
  }
}
console.log(types);
