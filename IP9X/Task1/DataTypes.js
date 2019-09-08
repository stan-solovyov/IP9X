'use strict';

// Hoisting

// 1.Implement function containing local variable with hoisting.
const someFunction = () => {
  console.log(hoisted);
  var hoisted;
};

someFunction();
// 2.Commit example to github.
// 3.Use eslint to find this problem and --fix flag to remove it.
// 4.Fix example manually and commit it to github.
