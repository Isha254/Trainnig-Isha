// --- g.  ES6+ Features ---

/* Task: Given an object representing a student, use destructuring to extract the
name and age properties into variables. Use template literals to display a
message: "Hello, my name is [name] and I am [age] years old."  */

const student = {
    name: 'Isha',
    age: 20
  };
  
const { name, age } = student;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

