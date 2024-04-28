              // 🚀 Day 49 Challenge: Start Coding! 🚀 //
//Question 145: Create a function that accepts a callback and invokes it with some arguments.

function callback ( callback: (argument1: number, argument2: number) => void,
    argument1: number, argument2: number): void {
    callback(argument1, argument2)};      // Invokes the callback with the specified arguments
  
  // Example callback function that adds two numbers
  const add = (a: number, b: number) => { console.log(a + b) };  // Outputs the sum of a and b
  callback(add, 3, 7)


//Question 146: Show an example of a callback function used to filter an array of numbers.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 3
const filteredNumbers: number[] = numbers.filter((number) => number > 2);
console.log(filteredNumbers);

//Question 147: Explain how to handle errors in a callback pattern.
function data( callback: (error: Error | null, data?: string) => void
  ): void {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";
  
    // Simulate data with a chance of error
    if (Math.random() > 0.5) {
      callback(null, data); // No error, data is fetched successfully
    } else {
      callback(error); // Passes error to the callback
    }
  }
  // Using the Data function with error handling in the callback
  data((error, data) => {
    if (error) {
      console.error(error.message); // Handles the error
    } else {
      console.log(data); // Processes the data
    }
  });
  