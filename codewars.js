

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

// function reverseString(string){
//     let newString = ""
//     for(i = string.length; i >= 0; i--){
//         newString += string.charAt(i)
        
//     }
//     console.log(newString)
// }
// reverseString("paddington")

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

// function coolOrNot (string){
//     let randomBool = Math.random() > 0.5 ? true : false;
//     console.log("Is" + " " + string + " " +  "Cool?" + " " + randomBool)
// }
// coolOrNot("Clark")

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


function countVowels (string){
    let count = string.match(/[aeiou]/gi) 
    if (count === null){
        return 0;
    }
    else{
        return count.length
    }
}
let result = countVowels ("paddington")
console.log(result)
