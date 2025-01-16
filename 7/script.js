// 1
function reverseString() {
  let string = prompt("Give me a word");
  let reversedString = "";
   for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
   }
   console.log(reversedString);
   return reversedString;
};

reverseString();


// 2
function reverseNumber() {
  let newNumber = prompt("Give me a number").toString();
  let reversedNumber = "";
   for (let i = newNumber.length - 1; i >= 0; i--) {
    reversedNumber += newNumber[i];
   }
   console.log(Number(reversedNumber));
   return Number(reversedNumber);
};

// DOES IT MAKE SENSE TO TURN NUMBER INTO STRING AND THEN NUMBER AGAIN?
reverseNumber();


//3
const person = {
  name: "John",
  info: {
    age: 30,
    city: "New York",
    job: "Developer",
  },
};

console.log(person.name);
console.log(person.info.age);


//4
const thisArray = ["apple", "banana", "cherry", "dates", "elderberry", "fig"];
const [first, second, ...rest] = thisArray;
console.log(first);
console.log(second);
console.log(rest);


//5
function isPalindrome() {
  let string = prompt("Give me a palindrome");
  let reversedString = "";
   for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
   }
   if (reversedString === string) {
    return `${string} is a palindrome!`
   } else {
    return "try another word"
   }
};

isPalindrome();
