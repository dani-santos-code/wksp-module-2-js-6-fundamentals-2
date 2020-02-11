let verifyEquals = require("../../assets/verify-equals");

// Problem 4
// ---------
// Step 1
// Write a function that returns the letter at the specified position in the string. If no such letter exists, it should return undefined.
// For example:
// f(["hello", 1]); // e
// f(["", 4]);      // undefined
// f(["abc", 0]);   // a

function f(arr) {
  const textInput = arr[0];
  const index = arr[1];
  if (textInput === "") return undefined;

  return textInput[index];
}

// Step 2
// We need 8 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [
  ["hello", 4],
  ["", 2],
  ["dani", 3],
  ["welcome", 7],
  [5, 5],
  ["there", 2],
  [{ name: "bob" }, 0],
  ["apple", 1]
];
let outputs = ["o", undefined, "i", undefined, undefined, "e", undefined, "p"];

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
runTest(6);
runTest(7);

console.log("All tests passed for " + __filename);
