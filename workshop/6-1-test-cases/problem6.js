let verifyEquals = require("../../assets/verify-equals");

// Problem 6
// ---------
// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function f(arr) {
  const operation = arr[0];
  switch (operation) {
    case "add":
      return arr[1] + arr[2];
    case "multiply":
      return arr[1] * arr[2];
    case "sub":
      return arr[1] - arr[2];
    default:
      return undefined;
  }
}

// Step 2
// We need 8 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 20, 10],
  ["spook", 20, 10],
  ["multiply", 10, 20],
  ["add", 45, 10],
  ["sub", 93, 20],
  ["whatever", 20, 10]
];
let outputs = [30, undefined, 10, undefined, 200, 55, 73, undefined];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
console.log("All tests passed for " + __filename);
