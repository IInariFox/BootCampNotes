var evenNumbers = [2, 4, 6, 8, 10]; // We made an array of even numbers
var friends = ['John', 'Sam', 'Sarah'];// We made an array of people
console.log(evenNumbers[0]);// Counting starts at 0, so 0 is 2 in this case
console.log(friends[2]);// Since 0 starts at 2, the answer sarah
console.log(evenNumbers[2 - 1]); 
var i = 4;
console.log(evenNumbers[i]);
//
var zeroPad = function (number, width) { //here we defined the function zeroPad which takes a string beside a number length when < the width
  var string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}
for (var i = 0; i < evenNumbers.length; i++){
  console.log(zeroPad(evenNumbers[i], 3)); // We use zeroPad program from last notes to print out all even numbers
}
var inventory = [35, 80, 15, 28, 10, 45, 8];
var labels = ['Milk', 'Eggs', 'Flour', 'Chocolate Bar', 'Ice Cream', 'Biscuits', 'Strawberry Jam'];
var printInventory = function(inventoryArray, labelsArray){
  for (i = 0; i < inventoryArray.length; i++){
    console.log(zeroPad(inventoryArray[i], 3), labelsArray[i]);
  }
}// We created an array of inventory and called them to have count side by side
printInventory(inventory, labels);
//
var london = ['rainy', 'rainy', 'rainy', 'rainy', 'cloudy', 'cloudy', 'rainy']; // We created an array of the forecast of each city for seven days
var newYork = ['sunny', 'cloudy', 'rainy', 'rainy', 'cloudy', 'sunny', 'stormy'];
var sydney = ['sunny', 'sunny', 'sunny', 'cloudy', 'cloudy', 'sunny', 'rainy'];
var hongKong = ['cloudy', 'cloudy', 'cloudy', 'cloudy', 'cloudy', 'sunny', 'sunny'];

var forecasts = [london, newYork, sydney, hongKong];// Here we created an array of the arrays we made earlier
var cities = ['London', 'New York', 'Sydney', 'Hong Kong'];
console.log(forecasts[0][1]);// Here we access London and its second day weather

var printForecast = function(citiesArray, forecastArray){ // We printed the cities and their seven day forecast
  for (var i = 0; i < citiesArray.length; i++){
    var forecastString = ':';
    for (var x = 0; x < forecastArray[i].length; x++){
      forecastString += forecastArray[i][x];
      if (x < forecastArray[i].length - 1){
        forecastString += ' ';
      }
    }
    console.log(citiesArray[i], forecastString)
  }
}
printForecast(cities, forecasts);
/*// i = 0
// Instantiate variable forecastString
var forecastString = '';
  // j = 0
  forecastString += forecastsArray[0][0];
  // 'rainy'
  // Check if we are at the last index of the city array
  if (x < forecastsArray[i].length - 1) {
    // 0 < 6, condition returns true
    forecastsString += ' ';
    // 'rainy '
  }
  // j = 1
  forecastString += forecastsArray[0][1];
  // 'rainy rainy'
  // Check if we are at the last index of the city array
  if (x < forecastsArray[i].length - 1) {
    // 1 < 6, condition returns true
    forecastsString += ' ';
    // 'rainy rainy '
  }
  // j = 6
  forecastString += forecastsArray[0][6];
  // 'rainy rainy rainy rainy cloudy cloudy rainy'
  // Check if we are at the last index of the city array
  if (x < forecastsArray[i].length - 1) {
    // 6 < 6, condition returns false
    forecastsString += ' ';
    // code block is bypassed
  }
  // inner loop stops
console.log(citiesArray[0], forecastString);
// -> London rainy rainy rainy rainy cloudy cloudy rainy
// outer loop moves on to next iteration
*/
var arr = [['abc', '123'], ['xyz', '456']];
for (var i = 0; i < arr.length; i++){
  for (var x = 0; x < arr[i].length; x++){
    console.log(arr[i][x]);
  }
}
var stringJoiner = function (arr) { // Here we call all of the stuff in the array using a for loop
  var string = "";
  // Create your for loop below
  for (var i = 0; i < arr.length; i++){
    string += arr[i];
  }
  return string;
};
console.log(stringJoiner(['M', 'e', 'r', 'r', 'y', ' ', 'C', 'h', 'r', 'i', 's', 't', 'm', 'a', 's']));
// -> Merry Christmas

//
var nestedArray = [
  ["H", "a", "p"],
  ["p", "y"],
  [" ", "N", "e"],
  ["w", " ", "Y"],
  ["e", "a", "r"]
];
var stringJoiner = function (arr) { // We printed stuff in a nested array
  var string = "";
  // write your nested for loop below
  for (var i = 0; i < arr.length; i++){
    for (var x = 0; x < arr[i].length; x++){
      string += arr[i][x];
    }
  }
  return string;
}
console.log(stringJoiner(nestedArray));
// -> Happy New year
//
/*undefined.length;
// -> TypeError: Cannot read property 'length' of undefined
null.length;
// -> TypeError: Cannot read property 'length' of null
*/
//
var foo = 'hello world!';
console.log(typeof(foo.toUpperCase));
// -> function
console.log(foo.toUpperCase());
// -> HELLO WORLD!
//
var qList = ['John', 'Peter', 'Mary', 'Jane', 'John', 'Admiral'];
qList.push('Nathon'); //The array PUSH method inserts something new to the back/end of the array
console.log(qList);
qList.push("Silver", "Adam");
console.log(qList);
var name =  qList.shift();// SHIFT removes the first list object in the index - cannot take any arguments
console.log(name);
console.log(qList.pop()); // POP removes one listing from the back of the index
console.log(qList.pop()); // Doing it again removes another - so we removed silver and adam
console.log(qList);
console.log(qList.unshift('Joebama','Sammy','Trent')); //UNSHIFT is similair to push in that it can add one or more listings to the front of the index
console.log(qList);
console.log(qList.indexOf('Jane', 'Tyler')); // INDEXOF will search the array and see if there is anyone who matches the search if not == -1
console.log(qList.lastIndexOf('John')); //LASTOFINDEX searches for stuff from the back of array, whichever one is closer is what it will call on
console.log(qList.indexOf('Peter', 2)); //both shifts take arguments on where to start the search
// -> 5
console.log(qList.lastIndexOf('Peter', 4));
// -> 1

console.log(qList); //SLICE will slice out a piece of the array based on the parameters - if we dont include an end it will list of the rest of array after the place we left off 
// -> ['Betty', 'Peter', 'Mary', 'Jane', 'David']
console.log(qList.slice(2, 4)); // We sliced to call only mary and jane -  0 1 2 - then 1 2 3 4
// -> ['Mary', 'Jane']
console.log(qList.slice(3)); // we sliced to call anything after jane
// -> ['Jane', 'David']
console.log(qList);

var myArray = [0, 1, 2, 3, 4];
console.log(myArray.slice(-2)); //the last two
// -> [3, 4];
console.log(myArray.slice(-2, -1));// the last two - then zero one from the end so 3
// -> [3]
console.log(myArray.slice(2, -1)); // zero one two from beginning - zero one from the end so 2,3
// -> [2, 3]

console.log(myArray.slice(3, 1)); //Does not print stuff that is not on the array
// -> []
console.log(myArray.slice(-2, 1));
// -> []
console.log(myArray.slice(-2, -3));
// -> []

qList = qList.concat(['Kate', 'Derek']); //CONCAT combines arrays together
console.log(qList);
// -> ['Betty', 'Peter', 'Mary', 'Jane', 'David', 'Kate', 'Derek']
qList += ['Gary']; //+ also combines arrays together
console.log(qList);
// -> ['Betty', 'Peter', 'Mary', 'Jane', 'David', 'Kate', 'Derek', 'Gary']

/*var qString = qList.join(','); //JOIN will turn an array into a string
console.log(qString);
*/ 

var thisArr = [1,2,3,4,5,6]; //REVERSE will reverse the order of the array
thisArr.reverse();
console.log(thisArr);

var removeCustomer = function(array, name){// This program helps us remove any person from the middle of the array
  var index = array.indexOf(name); 
  if (index !== -1){ //first part returns an array that starts from the beginning and ends at the index value
    return array.slice(0, index).concat(array.slice(index + 1));//Second slice returns an array that starts at 1 after the  index and ends at endof arr
  }
  return array;
}
qList = removeCustomer(qList, 'Jane');
console.log(qList);

//
var searchAndDestroy = function (arr, target) { //We searched for a number set and destroyed the ones in the middle or that we didn't want
  // Write your code below
  var arrCopy = arr.slice();
   var index = arrCopy.indexOf(target);
   while (index !== -1) {
     arrCopy = arrCopy.slice(0, index).concat(arrCopy.slice(index + 1));
     index = arrCopy.indexOf(target);
   }
   return arrCopy;
}
var numbers = [1, 3, 5, 7, 5, 3, 1];
var without3 = searchAndDestroy(numbers, 3);
console.log(without3);
// -> [1, 5, 7, 5, 1]
console.log(numbers);
// -> [1, 3, 5, 7, 5, 3, 1]
//
var myString = 'The weather is nice'; // For loop to iterate over a string
for (var i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}
// -> T
// -> h
// ...
// -> c
// -> e

var thatString = 'It is sometime later';
console.log(thatString);
console.log(thatString.replace('sometime', 'way')); //REPLACE replaces a word in a string with another word

console.log('abc'.charCodeAt(0)); //Look at ASCII image in file to see how words and stuff are defined
// -> 97 //this returns unicode for lowercase a **ONLY** 
console.log('ABC'.charCodeAt(2));// charCodeAt gives us a number defining a character
// -> 67 //returns unicode for capital C **ONLY** zero one two one letter 'ABC'
var myString = String.fromCharCode(65, 66, 67); //returns a string and their respected numbers
console.log(myString);
// -> ABC

var myString = 'The weather is nice';
console.log(myString.slice(5, 8));
// -> eat
console.log(myString.substring(5, 8));
// -> eat
console.log(myString.slice(16));
// -> ice
console.log(myString.substring(16));//SUBSTRING does not include the last position it is at so -1
// -> ice

var aString = "This could be split up; Or it can be done with something else.";
console.log(aString);
console.log(aString.split(' '));// We split up the string into an array of words
console.log(aString.split(''));// We split up the string into an array of letters
console.log(aString.split('x'));// When we include a letter that isn't in the sentence it splits into a whole array

var whiteSpace = ' Hello World \n This is my crib .';
console.log(whiteSpace.trim()); // Removes white spaces

var methodChaining = "UwU Hello World";
methodChaining.split(''); //Splits via letters
var newMethodChaining = methodChaining.split('');
newMethodChaining.join('');// Puts everything back together

const countries = ["US", "Japan", "Korea"];
const res = countries.join(', '); //We made countries equal to res and joined the array together - we can modify how they are seperated
console.log("I want to visit the " + res);

methodChaining = methodChaining.split('');
methodChaining = methodChaining.join('');

methodChaining = methodChaining.split('').join('');

//
var inventory = { //Were using an object to hold all of this data - use colon and comma to seperate each element and its value
  milk: 35, // We can use dot. notation to access this variable
  Eggs: 80,
  Flour: 15,
  'Chocolate Bar': 28, // We need to use bracket notation to access this property
  'Ice Cream': 10,
  Biscuits: 45,
  'Strawberry Jam': 8
}
console.log(inventory.milk);
console.log(inventory['Chocolate Bar']);
inventory.Chips = 10; // We inserted a new variable into the object list
console.log(inventory.Chips);
delete inventory['Ice Cream']; // We deleted the ice cream value so it will show up as indefined
console.log(inventory['Ice Cream']);
console.log('Drinks' in inventory); // This is how we check if something is inside the property - result is true or false
console.log(inventory.hasOwnProperty('Strawberry Jam')); // We can also use hasOwnProperty - only on var name not amount 
// -> true
console.log(inventory.hasOwnProperty('Peanut'));
// -> false
for (var itemName in inventory) { // We called of the items in the list but shorter
  console.log(zeroPad(inventory[itemName], 3), itemName);
}


//
var arr = ['a', 'b', 'c']; // We can do the same for arrays, we just need to include the index number
typeof arr;
// -> object
console.log(0 in arr);
// -> true
console.log(3 in arr);
// -> false
console.log('a' in arr);
// -> false

//immutable: strings, numbers, and booleans are immutable - can't change the existing value of those types 
//mutable: objects and arrays are mutable - we can modify an objects properties anyway we want
var obj1 = { num: 10 };
var obj2 = obj1;
var obj3 = { num: 10 };
console.log(obj1 == obj2);
// -> true
console.log(obj1 == obj3); // Despite calling the same number 10, they are different because one and two call to the same memory location, whereas object three calls to a different memory location
// -> false
var newInventory = { // We made a new object inventory style
  '1': {
    name: 'Milk',
    stock: 35,
    price: 2.99
  },
  '2': {
    name: 'Eggs',
    stock: 80,
    price: 1.50
  },
  '3': {
    name: 'Flour',
    stock: 15,
    price: 3
  },
  '4': {
    name: 'Chocolate Bar',
    stock: 28,
    price: 1.2
  },
  '5': {
    name: 'Ice Cream',
    stock: 10,
    price: 2.5
  },
  '6': {
    name: 'Biscuit',
    stock: 45,
    price: 0.99
  },
  '7': {
    name: 'Strawberry Jam',
    stock: 8,
    price: 1.55
  }
}
var shoppingCart =  {};
var addToShoppingCart = function (sku, qty) { // First we will check if the sku we are adding exists in the inventory database 
  if (sku in newInventory) {
    if (sku in shoppingCart){ // Then we will check whether the item has aleady been added to the shoppingcart 
      shoppingCart[sku] = shoppingCart[sku] + qty;
    } else { // If it is in the shoppingcart we'll update the quantity, otherwise we will add it to the shopping cart
      shoppingCart[sku] = qty;
    }
  } else {
    console.log('Item with sku', sku, 'does not exist in inventory');
  }
}
var checkout = function (payment) {
  var total = 0;
  for (var sku in shoppingCart) {
    var subTotal = Math.round(newInventory[sku].price * shoppingCart[sku] * 100) / 100;
    total += subTotal;
    newInventory[sku].stock = newInventory[sku].stock - shoppingCart[sku];
    // Update inventory stock level
    console.log(newInventory[sku].name,'-',shoppingCart[sku],'$',subTotal);
  }
  shoppingCart = {};
  // Set shopping cart to a new empty object

  total = Math.round(total * 100) / 100;
  console.log('Total: $',total);
}
addToShoppingCart('3', 1);
addToShoppingCart('2', 10);
addToShoppingCart('1', 1);
checkout();
// -> Flour x 1 $ 3
// -> Egg x 10 $ 15
// -> Milk x 1 $ 2.99
// -> Total: $ 20.99
var printInventory = function() {
  for ( var sku in newInventory) {
    var item = newInventory[sku];
    console.log(zeroPad(item.stock, 3), itemName);
  }
}
printInventory();
var addInventoryItem = function() { // accept objects as arguments and let the system assign new sky for each item automatically 
  var lastSku = 0;
  for (var sku in newInventory) {
    if (Number(sku) > lastSku) {
      lastSku = Number(sku);
    }
  }
  for (var i = 0; i < arguments.length; i++) { // Useful when the function we're building does't have a fixed input length
    inventory[lastSku + i + 1] = arguments[i];
  }
}
console.log(inventory);

//
var person = {
  first_name: 'John',
  last_name: 'Wayne',
  date_of_birth: '07-12-1981',
  family: ['Peter Wayne', 'Mary Wayne', 'Jane Lily'],
  friends: ['Maria Marquez', 'Tony Shark'],
  jobs: [
    {
      employer: 'Star Mart',
      position: 'cashier',
      start_date: '05-02-2009',
      end_date: '01-05-2010',
    },
    {
      employer: 'Juicy Bar',
      position: 'juice mixer',
      start_date: '11-04-2010',
      end_date: '22-03-2011',
    }
  ]
}
person.family.push('John Jr. Wayne'); // We can push a new name into the family
console.log(person.family);
/*person.jobs[2].end_date = '01-07-2017'; // We added to the person index // but it counts as 1 then 2 NOT 0 then 1
console.log(person.jobs[2]); 
// -> {employer: 'The Corner Store', position: 'cashier', start_date: '11-04-2017', end_date: '01-07-2017'} */


var concatArguments = function () { // This prints out true as all letters are spaced out without commas
  // Implement the function
  var string = "";
  for (var i = 0; i < arguments.length; i++){
    string += arguments[i];
    if (i < arguments.length - 1) {
      string += " ";
    }
  }
  return string; 
};

console.log(concatArguments('a', 'b', 'c') === 'a b c');
// -> true

console.log(concatArguments('a', 'b', 'c', 'd', 'e') === 'a b c d e');
// -> true
//
typeof Math
// -> "object"

console.log(Math);
// -> Math {abs: function, acos: function, acosh: function, asin: function, asinh: function…}

/* Math Constants 
E - Euler's constant ~2.718
LN2 - Natural log of 2 ~0.693
LN10 - Natural log of 10 ~2.303
LOG2E - Base 2 log of E ~1.443
LOG10E - Base 10 log of E ~0.434
PI - Ratio of circumference of a circle to its diameter ~3.14159
SQRT1_2 - Square root of 1/2 ~0.707
SQRT_2 - Square root of 2 ~1.414
*/
console.log(Math.E);
// -> 2.718281828459045
console.log(Math.PI);
// -> 3.141592653589793
var radius = 5;
var circumference = 5 * 2 * Math.PI;
console.log(circumference);
// -> 31.41592653589793

var hypotenuse = 20; //convert radians to degrees: divide by Math.PI / 180
var adjacent = 60; //convert degress to radians: multiply by Math.PI / 180
var opposite = Math.sin(adjacent * (Math.PI / 180)) * hypotenuse;
console.log(opposite);
var degree = Math.asin(opposite / hypotenuse) / (Math.PI / 180);
console.log(degree);
// -> 59.99999999999999
//Math.round: will round to the nearest integer
/*
Math.round(10.49);  // 10
Math.round(10.5);   // 11
Math.round(12);     // 12
Math.round(-10.5);  // -10
Math.round(-10.51); // -11
*/
//Math.ceil: rounds up to the smallest integer greater than or equal to the given number
/*
Math.ceil(.91);    // 1
Math.ceil(2);      // 2
Math.ceil(2.004);  // 3
Math.ceil(-0.91);  // -0
Math.ceil(-2);     // -2
Math.ceil(-2.004); // -2
*/
//Math.floor: will round down to the smallest integer greater than or equal to the given number
/*
Math.floor(1.95);   // 1
Math.floor(1.05);   // 1
Math.floor(4);      // 4
Math.floor(-1.05);  // -2
Math.floor(-1.95);  // -2
*/
//Math.abs: return the absolute value of a number
/*
Math.abs(1.11);   // 1.11
Math.abs(1);      // 1
Math.abs(0);      // 0
Math.abs(-1);     // 1
Math.abs(-1.11);  // 1.11
*/
var numbers = [-10, -12, -42, 93, 74, -43, -46, -65, 23]; //program to find the highest value in the index when coverted via absolute value
var maxNum = 0;
for (var i = 0; i < numbers.length; i++){
  var absNumber = Math.abs(numbers[i]);
  if (absNumber > maxNum){
    maxNum = absNumber;
  }
}
console.log(maxNum);
/* INCLUDE Math.xxx()
abs()	It returns the absolute value of the given number.
acos()	It returns the arccosine of the given number in radians.
asin()	It returns the arcsine of the given number in radians.
atan()	It returns the arc-tangent of the given number in radians.
cbrt()	It returns the cube root of the given number.
ceil()	It returns a smallest integer value, greater than or equal to the given number.
cos()	It returns the cosine of the given number.
cosh()	It returns the hyperbolic cosine of the given number.
exp()	It returns the exponential form of the given number.
floor()	It returns largest integer value, lower than or equal to the given number.
hypot()	It returns square root of sum of the squares of given numbers.
log()	It returns natural logarithm of a number.
max()	It returns maximum value of the given numbers.
min()	It returns minimum value of the given numbers.
pow()	It returns value of base to the power of exponent.
random()	It returns random number between 0 (inclusive) and 1 (exclusive).
round()	It returns closest integer value of the given number.
sign()	It returns the sign of the given number
sin()	It returns the sine of the given number.
sinh()	It returns the hyperbolic sine of the given number.
sqrt()	It returns the square root of the given number
tan()	It returns the tangent of the given number.
tanh()	It returns the hyperbolic tangent of the given number.
trunc()	It returns an integer part of the given number.
*/
var generateRandomNumber = function (min, max) { //We made a function that generates a random number between 3 - 10
  return Math.random() * (max - min) + min;
}
generateRandomNumber(3, 10);
generateRandomNumber(3, 10);
generateRandomNumber();

var generateRandomWholeNumber = function () { //Generates a random number between 0 - 100
  // Modify the below line
  return Math.floor(Math.random() * 100);
}
var num1 = generateRandomWholeNumber();
var num2 = generateRandomWholeNumber();
console.log(num1 % 1 === 0);
// -> true
console.log(num1 >= 0 && num1 < 100);
// -> true
console.log(num1 !== num2);
// -> true

/* Number stuff
Number.EPSILON	The smallest interval between two representable numbers.
Number.MAX_SAFE_INTEGER	The max safe integer number in JavaScript, 2^53 - 1.
Number.MIN_SAFE_INTEGER	The min safe integer number in JavaScript, -(2^53 - 1).
Number.MAX_VALUE	The largest positive number representable in JavaScript, ~1.79E+308.
Number.MIN_VALUE	The smallest positive number representable in JavaScript, ~5E-324.
Number.POSITIVE_INFINITY	The positive infinity value.
Number.NEGATIVE_INFINITY	The negative infinity value.
*/
//ISFINITE: used to check if a number is a usuable/finite number
Number.isFinite(999999999);
// -> true
Number.isFinite(-999999999);
// -> true
Number.isFinite(Infinity);
// -> false
Number.isFinite(Number.NEGATIVE_INFINITY);
// -> false
//To check whether a value is NaN, use isNaN
console.log(NaN === NaN);
// -> false
Number.isNaN(NaN);
// -> true
Number.isNaN(Number.NaN);
// -> true
Number.isNaN(0 / 0);
// -> true
var numbers = [[1, 2, 3, 4], [2, 4, 6, 8], [5, 10, 15, 20], [3, 6, 9, 12]];
var special = numbers[numbers[0][1] > numbers[2][0] ? 1 : 3][numbers[1][0]];
//  0 first bracket then 0 1 = 2        0 1 2 then 0 = 5 - we get 2 > 5 - false so we go with three because its false
//then we evaluate right side which is 0 1 then 0 which is 2
// So numbers[3][2] == 9