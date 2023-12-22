// --- c. Functions ---

/* Task: Create a function that takes an array of numbers and returns the sum of
all numbers. */


function myFunction(array) {
  const myArray = [1, 4, 0, 9, -3];
  let sum = 0;
  for (let i = 0; i < myArray.length; i += 1) {
    sum += myArray[i];
  }
  return sum;
}
console.log(myFunction([1, 4, 0, 9, -3]));
