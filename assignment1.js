/* 
Author: Munachimso Joshua Enabulele
Title: Assignment 1 - Basic Calculator
*/

// A function named 'calculate' which does the computation for calculations
const calculate = (num1, num2, opcode) => {
    // An array consisting of all possible operations the function can compute
    let operation = ["add", "subtract", "multiply", "divide"]

    // An if statement to catch any edge cases e.g an operand not being a number or an invalid opcode
    if (!(typeof num1 === "number" && typeof num2 === "number" &&
         operation.indexOf(opcode) != -1 && isNaN(num1) === false && isNaN(num2) === false)) {
        return "Both operands must be numbers, opcodes must be either 'add', 'subtract', 'multiply' or 'divide'"
    } 
    // If no edge cases were found, the computation for the various operations can be carried out in the code block before
    else {
        // For Addition
        if (opcode === "add") {
            return num1 + num2
        }
        // For Subtraction
        else if (opcode === "subtract") {
            return num1 - num2
        } 
        // For Multiplication
        else if (opcode === "multiply") {
            return num1 * num2
        } 
        // For Division
        else if (opcode === "divide") {
            // Checking for edge cases where a number may be evaluated to be divided by zero
            if (num2 === 0) {
                return "You cannot divide by zero"
            }
            // If no bad cases were found, then the result of the division will be approximated to two decimal places (2dp)
            return (num1 / num2).toFixed(2)
        } else {
            return "Invalid opcode entered"
        }
    }
}

// Testing the function
console.log("result: ", calculate(5, 3, "add"));
console.log("result: ", calculate(4, 2, "subtract"));
console.log("result: ", calculate(3, 8, "multiply"));
console.log("result: ", calculate(10, 2, "divide"));
