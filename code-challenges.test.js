// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { createReadStream } = require("fs")

// const { expect } = require("@jest/globals")

// const { array } = require("prop-types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// declare a test function called codeMessage that takes in a string
describe ("codeMessage", () => {
    // write a test method that describes what the test will do
    // this test will convert the letters 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 in the string
    it ("takes in a string and returns a new string that converted the letters 'a' to 4  , 'e' to 3, 'i' to 1, and 'o' to 0'", () => {
        // write an expect method for each input
        //the function should output a new string that has converted the specific letters to the corresponding code letter or number
        expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})



// b) Create the function that makes the test pass.

// create a function
// convert string to an array using .split(""); creates an array where each value in the array is a letter from the string
// create a new function that takes in the array iterates through each value using .map()
// write if/elseif/else statement to convert the specified letters to their respected code number
// for each value : if i === 'a' return 4, if i === 'e' return 3, if i === 'i' return 1, if i === 'o' return 0; else return i
// convert the array back to a string using .join("")

function codeMessage(string){
    var arrayCode = string.split("")
    const code = (arrayCode) => {
        return arrayCode.map(value => {
            if (value === 'a' || value === 'A'){
                return '4'
            }
            else if (value === 'e' || value === 'E'){
                return '3'
            }
            else if (value === 'i' || value === 'I'){
                return '1'
            }
            else if (value === 'o' || value === 'O'){
                return '0'
            }
            else {
                return value
            }  
        })
    }
    return code(arrayCode).join("")
}
    
codeMessage(secretCodeWord1)
codeMessage(secretCodeWord2)
codeMessage(secretCodeWord3)



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// declare a test function called newFruit that takes in a string and an array parameter
describe ('newFruit', () => {
    // write a test method that describes what the test will do
    // this function will take in an array of words and a single letter and return a new array with the words containing that particular letter
    it ("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        // write an expect method for each input
        // use the expect.arrayContaining(array) to have the output be a subset of the received array
        // the expected output will be the array filtered with only the words that contain that particular letter
        expect(["Apple", "Banana", "Plum", "Orange", "Kiwi"]).toEqual(expect.arrayContaining(["Apple", "Banana", "Orange"]))
        expect(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]).toEqual(expect.arrayContaining(["Cherry", "Blueberry", "Peach"]))
    })
    
})

// b) Create the function that makes the test pass.

// create a function that takes in a letter string and an array of strings
// use .filter to return only the truthy values
// filter through the array to determine if each string value in the array contains the letter string passed in
// use .includes to see if the letter is in that string value when the letter is lowercase OR when it is uppercase 

var newFruit = (str, arr) => {
    return arr.filter(fruit => fruit.includes(str) || fruit.includes(str.toUpperCase()))
}
newFruit(letterA, arrayOfWords1)
newFruit(letterE, arrayOfWords2)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// declare a test function called fullHouse that takes in an array
describe ("fullHouse", () => {
    // write a test method that describes what the function is testing
    // the test should look at each value in the array to determine if the array is a full house
    it ("takes in an array of 5 numbers and determines whether or not the array has exactly one pair and one three of a kind", () => {
        // write an expect method for each input
        // if the input array is a full house: has one pair and one three of a kind, return true 
        // if the input is not a full house, return false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)

    })
})

// b) Create the function that makes the test pass.

// create a function that takes in an array
// for a full house, you only need two unique cards
// find how many times the first number in the array occurs
// try to see how many times the first value occurs in the array
// increment the count of the first number in the array for how ever many times it occurs
// fine the second unique number in the array
// find the next humber in the array that is not equal to the first number (second unique number)
// if the count of the first unique number is not two or three return false
// find the cound of the second unique number
// if the count of this number is not 2 or 3 then return false 
// if the count of the first unique number is 2 or 3 AND the count of the second unique number is 2 or 3 then return true 

const fullHouse = (array) => {
    let count = [0,0]
    let secondNum = 0
    for (i=0; i<5; i++){
        if (array[0] == array[i]){
            count[0]++
        }
        else {
            secondNum = array[i]
        }
    }
    if ((count[0] !== 2) && (count[0] !== 3)){
        return false
    }
    for (i=0; i<5; i++){
        if (array[i] === secondNum){
            count[1]++
        }
    }
    if ((count[1] !==2) && (count[1] !==3)){
        return false
    }
    return true
}

fullHouse(hand1)
fullHouse(hand2)
fullHouse(hand3)