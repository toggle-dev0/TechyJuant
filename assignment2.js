/* 
Author: Munachimso Joshua Enabulele
Title: Assignment 2 - Array and Object Manipulation
*/

// An array storing the student objects
const studentCollection = [
    {"name": "Alex", "age": 15, "grade": "A"},
    {"name": "Ben", "age": 15, "grade": "B"},
    {"name": "Cathrine", "age": 14, "grade": "A"},
    {"name": "Dominic", "age": 16, "grade": "A"},
    {"name": "Edward", "age": 15, "grade": "C"},
    {"name": "Florence", "age": 16, "grade": "B"}
]

// A function to retrieve students from the array based on the grade of the student
const filterByGrade = (arr, grade) => {
    let filteredArray = arr.filter((val) => val.grade === grade)
    return filteredArray
}

// A function to compute the average age of all students in the array
const averageAge = (arr) => {
    let result = arr.reduce((total, student) => total + student.age, 0)
    return `The average age of the students is: ${(result / arr.length).toFixed(2)}`
}

// Testing the functions
console.log(filterByGrade(studentCollection, "A"));
console.log(averageAge(studentCollection));