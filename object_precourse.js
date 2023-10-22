//Excercise 2 - Get User's Age
/*
---> You need to make a function that takes a user obj
---> The object will always have a yearObBirth property
---> Return the user's age as a number
*/

function getUserAge(user) {
  // Your code goes here...
  const currentYear = new Date().getFullYear();
  return currentYear - user.yearOfBirth;
}

const userObj = { yearOfBirth: 1991 };

// console.log(getUserAge(userObj));

//=====================================================
//Excercise 5 -

function getPropertyOfProduct(product, property) {
  // Your code goes here...
  return product[property]; //Remember that if you are trying to acces the value of
  //a property, use square notation when the property name is being passed by an
  //argument, variable or function calls.
}

// const obj2 = { type: "Easy-peeler satsumas", price: "£1.09", quantity: 8 };

// console.log(getPropertyOfProduct(obj2, "price"));

// =====================================================
//Excercise 7 - Add Property to Product
/*
---> you need to write a function that takes 3 arguments
---> An object (product), a property to add and the value
     corresponding to that property.
---> Update the object with this new info and return it.
*/
function addPropertyToProduct(product, property, value) {
  // Your code goes here...
  product[property] = value;
  return product;
}

const productObj = {
  type: "Terminator 2: Judgement Day",
  price: "£6.99",
  quantity: 1,
};

// console.log(addPropertyToProduct(productObj, "length", "2h 36m"));

//===========================================================
//Excercise 8 - Create Northcoder (Solved)
/*
---> Function takes a string (name)
---> Function takes a number(yearOfBirth)
---> Then returns an object with:
     A name property set to the value of the name parameter
     An age propetry set to the age as of 2023
     a Language property set to JavaScript

*/
function createNorthcoder(name, yearOfBirth) {
  // Your code goes here...
  const currentDate = new Date();
  const yearAsOfNow = currentDate.getFullYear();

  const northcoder = {};

  northcoder.name = name;
  northcoder.age = yearAsOfNow - yearOfBirth;
  northcoder.language = "JavaScript";
  return northcoder;
}

// console.log(createNorthcoder("Alfredo", 1996));

//=========================================================
//Excercise 9 - Update Voter Address
/*
---> Write a function that will take two arguments: voter and correctHouseNumber
---> voter is an object containing the property "correctHouseNumber"
---> Correct the houseNUmber info with the value in "correctHouseNumber"
*/
function updateVoterAddress(voter, correctHouseNumber) {
  // Your code goes here...
  voter.address.houseNumber = correctHouseNumber;
  console.log(voter);
}

const voterInf = {
  name: "Alex",
  age: 39,
  address: {
    houseNumber: 2,
    street: "Old St",
    city: "Chester",
  },
};

// updateVoterAddress(voterInf, 50);

//========================================================
//Excercise 10 - Create User String
/*
---> Function takes an object with format from createNorthcoder
---> Returns a string with the user's details

*/
function createUserString(userObj) {
  // Your code goes here...
  let stringToReturn = "";
  for (const key in userObj) {
    stringToReturn += `${key}: ${userObj[key]}, `;
  }
  console.log(stringToReturn.slice(0, -2));
}

const userObj2 = {
  name: "Callum",
  age: 31,
  language: "JavaScript",
};

// createUserString(userObj2);

//==========================================================
//Excercise 11 - Get Album Properties (solved)
/*
--->Function takes object with info about an album(obj)
--->Returns a new array containing all of the object keys
*/

function getAlbumProperties(obj) {
  // Your code goes here...
  const albumKey = [];
  for (const key in obj) {
    albumKey.push(key);
  }
  return albumKey;
}
const albumObj = { a: "foo", b: "bar", c: "car" };
// console.log(getAlbumProperties(albumObj));

//=========================================================
//Excercise 12 - Get Northcoders Names (Solved)
/*
---> Write a function that takes an array of objects with format from 
     createNorthcoder(northcoders)
---> Return an array of the user names as a string
*/

function getNorthcodersNames(northcoders) {
  // Your code goes here...
  let nameString = [];
  for (let i = 0; i < northcoders.length; i++) {
    nameString.push(northcoders[i].name);
  }

  return northcoders.length > 0 ? nameString : [];
}

const northcodersArr = [
  {
    name: "Callum",
    age: 31,
    language: "JavaScript",
  },
  {
    name: "Carrie",
    age: 32,
    language: "JavaScript",
  },
];

// console.log(getNorthcodersNames(northcodersArr));

//===========================================================
//Excercise 13 - Delete many passwords (Solved)
/*
---> Write a function that takes an array of users(users)
---> Delete the password key value pair.
---> Return updated object
 */

function deleteManyPasswords(users) {
  // Your code goes here...
  for (let i = 0; i < users.length; i++) {
    delete users[i].password;
  }
  return users;
}

const userObjectArray = [
  { name: "Barry", password: "ilovetea" },
  { name: "Sandeep", password: "ilovecoffee" },
  { name: "Kavita", password: "ilovepie" },
];

// console.log(deleteManyPasswords(userObjectArray));

//===========================================================
//Excercise 14 - Count The Objects
/*
---> Write a function that takes an array of different data types (array)
---> Function has to return a count of the number of object in the array.
*/
function countTheObjects(arr) {
  // Your code goes here...
  let counter = 0;

  for (let item in arr) {
    if (
      typeof arr[item] === "object" &&
      arr[item] != null &&
      !Array.isArray(arr[item])
    ) {
      counter++;
    }
  }
  return counter;
}
const arrayDataType = [1, 2, 3, "hi", [], null];

console.log(countTheObjects(arrayDataType));
