'use strict';

// Hoisting

// 1.Implement function containing local variable with hoisting.
const someFunction = () => {
  let hoisted = 0;
  console.log(hoisted);
  hoisted = 4;
  console.log(hoisted);
};

someFunction();
// 2.Commit example to github.
// 3.Use eslint to find this problem and --fix flag to remove it.
// 4.Fix example manually and commit it to github.

// Scalar value vs Reference
// Prepare two implementations of inc function:

/* 1.First with signature inc(n: number): number, call example:
const a = 5; const b = inc(a); console.dir({ a, b });*/


/* 2.Second with signature inc(num: Num) where Num is object with field n,
so function will change field of the object passed by reference,
call example: const obj = { n: 5 }; inc(obj); console.dir(obj);*/
