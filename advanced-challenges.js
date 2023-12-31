//Challenge 1 - Flipping Booleans (Solved)
function flipBooleans(bools) {
  // Your code goes here...
  return bools.map((element) => !element);
}

const arrayBoolean = [true, true, true];
// console.log(flipBooleans(arrayBoolean));

//========================================================
//Challenge 2 - Translating Keys (solved)
/*
1- Write a function that will take a student object
2- There is a key that needs to be changed to its
   translation in english

In most cases, you will need to leave the original object 
untouched, unchanged. For this you will need to make a copy of the 
object and reference the copy of the original object.
Objects are passed by reference, and any changes we make to 
the object reference is materialised in the original object.
*/

function translateKey(student, keyToChange, translation) {
  // Your code goes here...
  const studentCopy = Object.assign({}, student);
  const oldKeyValue = student[keyToChange];
  delete studentCopy[keyToChange];
  studentCopy[translation] = oldKeyValue;
  return studentCopy;
}
const studentObj = {
  prénom: "Carla",
  surname: "Bruni",
  job: "Artist",
};
const oldKey = "prénom";
const newKey = "firstName";

// console.log(translateKey(studentObj, oldKey, newKey));
//============================================================
//Challenge 3 - Find the Dentist (This one took me a long time solving
// revisit solution)
/*
1- Function takes an array of people objects (people)
2- Returns the object that has isDentist equal to true
3- If isDentist equal false, return null
*/
function findFirstDentist(people) {
  const dentist = people.find((element) => element.isDentist);
  return dentist || null;
}

const personsProfile = [{ name: "Callum" }, { name: "Carrie" }];

// console.log(findFirstDentist(personsProfile));
// findFirstDentist(personsProfile);

//===============================================================
//Challenge 4 Tally the people in Manchester (solved)
/*
1- Write an array that tales an array of people objects
2- Function needs to return number of people who live in Manchester
*/
function tallyPeopleInManchester(people) {
  // Your code goes here...
  let counter = 0;

  for (let i = 0; i < people.length; i++) {
    const getCity = people[i].lives.city;
    if (getCity === "Manchester") counter++;
  }

  return counter;
}
const locationInfo = [
  { name: "Carrie", lives: { country: "UK", city: "Leeds" }, age: 32 },
  { name: "Ray", lives: { country: "UK", city: "Manchester" }, age: 31 },
];

// console.log(tallyPeopleInManchester(locationInfo));

//======================================================================
//Challenge 5 - Guet the pug owners
/*
1- Write a function that takes an array of dogs objects
2- The function returns an array containing the names of all 
   the pug owners
*/
function getPugOwners(dogs) {
  // Your code goes here...
  const ownerNames = [];
  for (let person in dogs) {
    for (let pet in dogs[person]) {
      if (dogs[person][pet] === "Pug") {
        ownerNames.push(dogs[person].owner);
      }
    }
  }
  return ownerNames;
}
const pugOwner = [
  { name: "Beatrice", breed: "Lurcher", owner: "Tom" },
  { name: "Max", breed: "Pug", owner: "Izzi" },
  { name: "Poppy", breed: "Pug", owner: "Anat" },
];

// console.log(getPugOwners(pugOwner));

//====================================================================
//Excercise 6 - Pluralising Keys
/*
1 - In the object you are given some of the keys are
    badly named
2- Keys containing arrays should be named as plurals
3- return a new object copy of the one that's an input
*/

const objModel = {
  name: "Tom",
  job: ["writing katas", "marking"],
  favouriteShop: [
    "Paul's Donkey University",
    "Shaq's Taxidermy Shack",
    "Sam's Pet Shop",
  ],
  favCake: ["Chocolate Fudge", "Lemon"],
};
function pluraliseKeys(obj) {
  // Your code goes here...
  const objModelCopy = Object.assign({}, obj);
  for (let key in objModelCopy) {
    if (Array.isArray(objModelCopy[key])) {
      let keyValue = objModelCopy[key];
      let correctedKey;
      delete objModelCopy[key];
      correctedKey = key + "s";
      objModelCopy[correctedKey] = keyValue;
    }
  }
  return objModelCopy;
}
// console.log(pluraliseKeys(objModel));
//
/*
--I struggled trying to understand how to retrieve a key and
edit it so that I can add it to a new obj
In the above block of code, key will represent the
key in an objec, so check again how you retrieved that info if
you feel confused again/.
*/
//================================================================
//Challenge 7 - Getting Word Lengths (Solved in 7 min 31s)
/*
1- Function takes string
2- Function returns array with the length of each word in the str
3- If empty str, return empty array
*/

function getWordLengths(string) {
  // Your code goes here...
  const arrayHolderLengths = [];

  const splitter = string.split(" ");
  for (let word in splitter) {
    arrayHolderLengths.push(splitter[word].length);
  }
  return string.length > 0 ? arrayHolderLengths : [];
}
const strHolder = "";
// console.log(getWordLengths(strHolder));

//=================================================================
//Challenge 8 - Get Palindromes
/*
1- Write function takes array of words
2- Return array containing palindrome
*/

const words = ["dog", "car"];

function getPalindromes(words) {
  // Your code goes here...
  const palindrome = words.filter(function (element) {
    const flipped = element.split("").reverse().join("");
    if (element === flipped) return element;
  });

  return palindrome;
}

// console.log(getPalindromes(words));

//======================================================================
//Challenge 9 - Replace Letters with Xs  (Completed)
/*
1- Function takes a string, replaces all character
by Xs
2- Anything that is not a letter should be left
untouched.
3- Return new string
*/

function replaceLettersWithXs(string) {
  // Your code goes here...
  const wordToArray = string.split("");

  for (let numIndex = 0; numIndex < wordToArray.length; numIndex++) {
    let asciiScheme = wordToArray[numIndex].charCodeAt(wordToArray[numIndex]);
    if (
      (asciiScheme >= 65 && asciiScheme <= 90) ||
      (asciiScheme >= 97 && asciiScheme <= 122)
    ) {
      wordToArray[numIndex] = "X";
    }
  }
  return wordToArray.join("");
}

const strToEdit = "Hellow THere!";

// console.log(replaceLettersWithXs(strToEdit));

//======================================================================
//Challenge 10 - Please Enter a Valid Mobile Number (completed)
/*
1- Write a function that takes a string of a mobile number
2- If it is a valid UK number, return true, otherwise return false
*/

//How can the phone number begin?
//Either with '07', "+447" or "00447"

// const mobileToArray = mobile.split("");
const mobile = "0737627558!";

function validMobileNumber(mobileNumber) {
  // Your code goes here...
  const secToEval = mobileNumber
    .slice(mobileNumber.indexOf("7") + 1, mobileNumber.length)
    .split("");

  if (
    (mobileNumber.startsWith("07") && mobileNumber.length === 11) ||
    (mobileNumber.startsWith("00447") && mobileNumber.length === 14) ||
    (mobileNumber.startsWith("+447") && mobileNumber.length === 13)
  ) {
    const areAllNumbers = secToEval.every(
      (element) => element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 57
    );
    return areAllNumbers;
  }

  return false;
}

// console.log(validMobileNumber(mobile));

//===========================================================================
//Challenge 11 - Summing the digits in a string (completed)
function sumDigitsFromString(string) {
  // Your code goes here...
  const filtering = string
    .split("")
    .filter((element) => {
      if (element.charCodeAt(0) >= 48 && element.charCodeAt(0) <= 58) {
        return element;
      }
    })
    .map((element) => Number(element));

  return filtering.length > 0
    ? filtering.reduce((sum, value) => (sum += value))
    : 0;
}

const numInStr = "ad234kj";

// console.log(sumDigitsFromString(numInStr));

//============================================================================
//Challenge 12 - Calling all wiliams! (completed)
function getWilliams(names) {
  // Your code goes here...
  const filteredWilliams = names.filter((element) =>
    element.endsWith("Williams")
  );
  return filteredWilliams;
}
const arrayOfNames = ["David", "Sarah"];

// console.log(getWilliams(arrayOfNames));

//===========================================================================
//Challenge 13 - Getting Factorials (completed)
const factorialOf = [5, 4];

function getFactorials(nums) {
  // Your code goes here...
  const arrFactorials = [];
  for (const number of nums) {
    let val = 1;
    for (let i = 1; i <= number; i++) {
      val *= i;
    }
    arrFactorials.push(val);
  }
  return arrFactorials;
}

// console.log(getFactorials(factorialOf));
//===========================================================================
//Challenge 14 - Find the largest number

const aNumber = 43;

function largestNumber(number) {
  // Your code goes here...
  const aNumberToArr = number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return Number(aNumberToArr);
}

// console.log(largestNumber(aNumber));

//========================================================================
//Challenge 15 - Enter The Matrix
/*
1- Write a function that takes a number and returns a matrix of nested arrays
2- Number of nested arrays should be equal to the number passed 
3- Each element in the sub-arrays should be set to null
*/

function generateMatrix(number) {
  // Your code goes here...

  const theMatrixHolder = [];

  for (let i = 1; i <= number; i++) {
    const nested = Array.from({ length: number }, () => null);
    // nested.fill(null, 2); ==> This line of code is not necessary
    theMatrixHolder.push(nested);
  }
  return theMatrixHolder;

  //const matrix = Array.from({length:3}, ()=> Array.from({length:3}, null))
}
const elementsInMatrix = 3;
// console.log(generateMatrix(elementsInMatrix));

//===========================================================================
//Challenge 16 - Find the wrong way fruit

function findWrongWayFruit(orchard) {
  // Your code goes here...
  if (orchard.length <= 3) return 0;
  const fruitMap = new Map();

  for (const fruit of orchard) {
    const countHolder = fruitMap.get(fruit) || 0;
    fruitMap.set(fruit, countHolder + 1);
  }

  const lessCommon = Array.from(fruitMap.keys()).find(
    (element) => fruitMap.get(element) === Math.min(...fruitMap.values())
  );

  return orchard.indexOf(lessCommon);
}

const fruits = ["apple", "apple", "apple", "apple", "elppa", "apple"];

// console.log(findWrongWayFruit(fruits));

//==========================================================================
//Challenge 17 - DNA Pairs (solved)
/*
1- Function takes a str of DNA 
2- Returns array containing correctly  matched DNA
*/

const dna = "catyq";

function dnaPairs(dnaString) {
  // Your code goes here...
  const strCasing = dnaString.toUpperCase();
  const divideFilter = Array.from(strCasing).filter(
    (element) =>
      element === "G" || element === "C" || element === "T" || element === "A"
  );
  const arrPairs = [];
  let dnaPairs;
  for (let i in divideFilter) {
    if (divideFilter[i] === "G") {
      dnaPairs = divideFilter[i] + "C";
    } else if (divideFilter[i] === "C") {
      dnaPairs = divideFilter[i] + "G";
    } else if (divideFilter[i] === "T") {
      dnaPairs = divideFilter[i] + "A";
    } else {
      dnaPairs = divideFilter[i] + "T";
    }
    arrPairs.push(dnaPairs);
  }
  return arrPairs;
}

// console.log(dnaPairs(dna));
//================================================================================
//Challenge 18 - Tallying Hashtags and Mentions
/*
1- Function takes a string 
2- String contains numbers of mentions and hashtags on Twitter
3- Function should return an object with hashtag:number, mentions:number items.
*/

const tagsAndMentions =
  "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp";

function tallyHashtagsAndMentions(str) {
  const count = {};
  let hashtagCount = 0;
  let mentionCount = 0;

  for (const word in str) {
    if (str.length > 1 && str[word].startsWith("#")) hashtagCount++;
    if (str.length > 1 && str[word].startsWith("@")) mentionCount++;
    count.hashtags = hashtagCount;
    count.mentions = mentionCount;
  }
  count.hashtags = hashtagCount;
  count.mentions = mentionCount;
  return count;
}
console.log(tallyHashtagsAndMentions(tagsAndMentions));
