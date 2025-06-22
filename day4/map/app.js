// =====================================
// JavaScript Array.prototype.map()
// =====================================

// The map() method creates a NEW array by applying a function to each element of the original array.
// It does NOT modify the original array.

// -------------------------------------
// 1. Basic Example: Doubling numbers
// -------------------------------------

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log("Original array:", numbers); // [1, 2, 3, 4, 5]
console.log("Doubled array:", doubled);  // [2, 4, 6, 8, 10]

// -------------------------------------
// 2. Using map() with Arrow Function
// -------------------------------------

const squared = numbers.map(n => n * n);
console.log("Squared array:", squared); // [1, 4, 9, 16, 25]

// -------------------------------------
// 3. Mapping Over Array of Strings
// -------------------------------------

const names = ["Alice", "Bob", "Charlie"];

const greetings = names.map(name => `Hello, ${name}!`);
console.log("Greeting messages:", greetings);
// Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]

// -------------------------------------
// 4. Mapping Over Array of Objects
// -------------------------------------

const students = [
  { name: "Harsh", marks: 95 },
  { name: "Ami", marks: 88 },
  { name: "Rit", marks: 92 },
];

const studentNames = students.map(student => student.name);
console.log("Student names:", studentNames); // ["Harsh", "Ami", "Rit"]

const resultStatus = students.map(student => {
  return {
    name: student.name,
    passed: student.marks >= 90
  };
});
console.log("Pass/fail status:", resultStatus);
// Output: [ {name: "Harsh", passed: true}, {name: "Ami", passed: false}, ... ]

// -------------------------------------
// 5. map() vs forEach()
// -------------------------------------

// map() returns a new array
const upperNames = names.map(n => n.toUpperCase());
console.log("Uppercase names:", upperNames); // ["ALICE", "BOB", "CHARLIE"]

// forEach() just performs an action but does NOT return a new array
const loggedNames = [];
names.forEach(n => loggedNames.push(n.toUpperCase()));
console.log("Logged Names (forEach):", loggedNames); // ["ALICE", "BOB", "CHARLIE"]

// -------------------------------------
// 6. map() with index parameter
// -------------------------------------

const indexedNames = names.map((name, index) => `${index + 1}. ${name}`);
console.log("Indexed names:", indexedNames); // ["1. Alice", "2. Bob", "3. Charlie"]

// -------------------------------------
// 7. map() Chaining Example
// -------------------------------------

const chainedResult = numbers
  .map(n => n + 1)        // [2, 3, 4, 5, 6]
  .map(n => n * 3)        // [6, 9, 12, 15, 18]
  .map(n => `#${n}`);     // ["#6", "#9", "#12", "#15", "#18"]

console.log("Chained transformation:", chainedResult);

