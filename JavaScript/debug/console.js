// https://www.youtube.com/watch?v=SmKM-8Q0Egw

// console.count() - counts how many times this particular line has been called

console.count();
console.count();
console.count();

console.count("label");
console.count("label");

console.countReset("label");

console.count("label");

// console.time() - starts a timer

console.time();
console.time("label");
for (let i = 0; i < 1000; i++) {
  // do something
}
console.timeEnd();
console.timeLog("label");
for (let i = 0; i < 1000; i++) {
  // do something
}
console.timeEnd("label");

// console.assert() - logs a message and stack trace to the console if the first argument is false

console.assert(1 === 2, "This is wrong");
console.assert(1 === 1, "This is wrong");

// console.table() - displays tabular data as a table

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
];

// console.table(users);
console.table(users, ["name"]);

// console.group() - creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called

console.group("label");
console.log("Hello");
console.log("World");
console.groupEnd();

// console.groupCollapsed() - creates a new inline group in the console. However, the new group is created collapsed, needing to be expanded to be visible

console.groupCollapsed("label");
console.log("Hello");
console.log("World");
console.groupEnd();

console.groupCollapsed("depth 1");
console.log("Hello");
console.groupCollapsed("depth 2");
console.log("World");
console.groupCollapsed("depth 3");
console.log("!");
console.groupEnd();
console.groupEnd();

// console.log() - logs a message to the console
// %c - applies CSS style rules to the output string as specified by the second parameter
console.log(
  "This is %cmessage is %cspecial💖",
  `
  font-style: bold;
  color: white;
  background: blue;
  padding: 5px 10px;
  border-radius: 10px
  `,
  `
  font-style: italic;
  color: black;
  background: pink;
  padding: 5px 10px;
  border-radius: 10px;
  `
);
