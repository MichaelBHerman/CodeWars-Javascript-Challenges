// Exercise 1


// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// function convertToCamelCase(string){
//     let newString = ""
//     for (i = 0; i < string.length + 1; i++){
//         if (string.charAt(i) === "-" || "_"){
//             let newString = string.replace(/_/g, "")
//              console.log(newString)
//         }
        
//     }
// }

// convertToCamelCase("The_Stealth_Warrior")

// function toCamelCase(str){
//     str = str.split('');
//     return str.map(function(el, i){
//       if(el == '-' || el == '_'){
//         el = str[i+1].toUpperCase();
//         str.splice(i+1, 1);
//       }
//       return el;
//     }).join('');
//   }

// Exercise 2

// Write a function that reverses a String.

// function reverseString(string){
//     let newString = ""
//     for(i = string.length; i >= 0; i--){
//         newString += string.charAt(i)
        
//     }
//     console.log(newString)
// }
// reverseString("paddington")

// Exercise 3

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats are considered UNeven for this kata.

// function oddOrEven (number){
//     if (number % 2 === 0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }

// oddOrEven (52)

// Exercise 4

// Write a program to determine a simple boolean value at random.

// function coolOrNot (string){
//     let randomBool = Math.random() > 0.5 ? true : false;
//     console.log("Is" + " " + string + " " +  "Cool?" + " " + randomBool)
// }
// coolOrNot("Clark")


// Exercise 5

// Write function countVowels which returns how many times any vowel [a,e,i,o,u] occurs in a string. Consider only lowercase strings.

// function countVowels (string){
//     count = 0
//     for (i = 0; i < string.length-1; i++){
//         if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u"){
//             count =+ 1
//         }
       
//     }
//     console.log(count)
// }

// countVowels ("paddington")

// This just matches against the regex (g makes it search the whole string, i makes it case-insensitive) and returns the number of matches.
//  We check for null incase there are no matches (ie no vowels), and return 0 in that case.


// function countVowels (string){
//     let count = string.match(/[aeiou]/gi) 
//     if (count === null){
//         return 0;
//     }
//     else{
//         return count.length
//     }
// }
// let result = countVowels ("paddington")
// console.log(result)

// Exercise 6

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// const error_printer = word => {
//     const regex = /[a-m]/g
//     const proper_num_of_matches = ((word || '').match(regex) || []).length
//     return `${word.length - proper_num_of_matches}/${word.length}`
// }


// Exercise 7
// Create a simple alarm clock function that takes in the current time plus the alarm time and alerts the user if the alarm time is reached:

function alarmClock(){
let currentTime = prompt("What is the current time? 0000 format: ")
alert("The current time is " + currentTime)
let alarmTime = prompt("Please set the alarm time in 0000 format: ")
alert("The alarm is set for " + alarmTime)
    if(currentTime === alarmTime){
        alert("ALARM! Time to get up!")
    }
}    

alarmClock();    