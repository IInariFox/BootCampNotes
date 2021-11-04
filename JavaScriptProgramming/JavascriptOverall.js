//Comments *******************************
//This is a comment
/*
This it s multiline comment
*/
//
//Data Types & Variables *************************
/*
Undefined: something that hasn't been defined
Null: nothing 
boolean: true or false 
string: "text"
symbol: immutable primative value that is unique
number: 11233
object: store value pairs
*/ 
var myName = 'Beu'; //var can be used throughout whole program 
myName = 12; //can change the var name, unlike const
let ourName = 'some'; //let will can only be used within the scope of where we declared it
const pi = 3.14 //variable that can never change
//
//Storing Values With Assignment Operator ****************************
var a;
var b = 2;
a = 7; //assigned a to 7 - did not need to redefine a
b = a; //set be to equal a 
console.log(b);
//Initializing Variables With Assignment Operator **************************
var a = 9;// var a is declaring and =9 is assigning
//
//Unitialized Variables **********************
var a = 5;
var b = 10;
var x = 'stringName';
a += 1;
b += 3;
x = x + 'newStringname'; //-> stringNamenewStringName
console.log(x);
//
//Case Sensitivity in Variables *******************
var someName; //case senstive so even though they look the same, they are not the same
var someNAME;
someName = 10; //most stuff follows camelCase
someNAME = 10;
// Add Two Numbers*****************
var sum = 10 + 0; //-> 10
console.log(sum);
// Subtract One Number from Another***********
var total = 10 - 5;
console.log(total);
// Multiply Two Numbers************
total = 20 * 5;
console.log(total);
// Dividing Numbers************
total = 20 / 2;
console.log(total);
// Increment****************
var thisVar = 100;
thisVar++; //-> increments the 100 to 101
console.log(thisVar);
// Decrement**************
thisVar = 100;
thisVar--;
console.log(thisVar); //-> thisVar = 99
// Decimal Numbers**************
var ourDecimal = 2.5;
var myDecimal = 0.009;
// Multiply Two Decimals*************
var product = 2.0 * 2.5;
console.log(product);
// Divide Decimals**************
var quotient = 2.5 / 1;
console.log(quotient);
// Finding a Remainder*************
var remainder;
remainder = 11 % 3; //logic: 11 / 3 = 9 : 11 - 9 is 2, so the remainder is 2 //if divide a number by 2 and the remainder is 0 that means the number is even 
// Augmented Addition***********
var a = 10;
var b = 20;
var c = 30;
a += 12;
b += 10;
c += 2;
console.log(a);
console.log(b);
console.log(c);
// Augmented Subtraction*************
var a = 10;
var b = 20;
var c = 30;
a -= 12;
b -= 10;
c -= 2;
console.log(a);
console.log(b);
console.log(c);
// Augmented Multiplication**************
var a = 10;
var b = 20;
var c = 30;
a *= 12;
b *= 10;
c *= 2;
console.log(a);
console.log(b);
console.log(c);
// Augmented Division*************
var a = 10;
var b = 20;
var c = 30;
a /= 12;
b /= 10;
c /= 2;
console.log(a);
console.log(b);
console.log(c);
// Declare String Variables***************
var fName = 'Alan';
var lName = 'Chris';
var myFirstName = 'Some';
var myLastName = 'Name';
// Escaping Literal Quotes********************
var aString = "I am a \"string inside of a \" string, stringception"; //use quotes inside of quotes
console.log(aString);
// Quoting Strings with Single Quotes******************
var thatString = 'We no longer "need" to add slashes to define "quotation" marks';
console.log(thatString);
// Escape Sequences**********************
/*
\' Single quote 
\"double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f formfeed
*/
var thisStr = 'Firstline\n\t\\Second line\nThird line'
console.log(thisStr);
// Concatenate Plus Operator***********************
var ourStr = "I come first" + "I come second";
var myStr = "This is the start " + "this is the end";
console.log(myStr);
// Concatenate strings Plus Equals Operator*********************
var ourStr = "I come first";
ourStr += "I come second ";
console.log(ourStr);
// Constructing Strings with Variables*********************
var aStr = 'some variable';
var myStr = 'Hello, this is ' + aStr + ' and it is nice';
console.log(myStr);
// Append variables to string ***************************
var anA = 'nice!';
var isStr = 'I am ';
isStr += anA;
console.log(isStr);
//Length of a String**********************
var firstNameLength = 0;
var firstName = 'name';
firstName = firstName.length; //.length is how we find the length of a string
console.log(firstName);
// Bracket Notation***********************
var firstLetterFirstName = "";
var firstName = "name";
firstLetterFirstName = firstName[0]; //finds out first letter in the first name: 0 1 2 3
console.log(firstLetterFirstName);
// Understand String Immutability************************
var myStr = "Jello World"; //strings are immutable, cant be altered once created
myStr = "hello world"; //this way we can change it
//myStr[0] = "H" - this cannot be done to change j to h
// Find the Nth Character************************
var firstName = 'name';
var secondLetterFirstName = firstName[1]; //we got the second letter using bracket notation
// Find the Last Character************************
var firstName = 'name';
var lastLetterFirstName = firstName[firstName.length - 1];//inside first, firstName length is 4 - 1 is 3
console.log(lastLetterFirstName);
// Find the Nth-to-Last Character************************
var firstName = 'name';
var thirdLastLetterOfFirstName = firstName[firstName.length -3]// length of firstName = 4-3 = 1 and print = a
console.log(thirdLastLetterOfFirstName);
// Word Blanks************************
function wordBlanks(myNoun, myAdj, myVerb, myAdv){
  var result = ""; //"" is an empty string
  result += "The " + myNoun + myAdj + myVerb + myAdv; 
  return result;
}
console.log(wordBlanks('dog', ' big ', 'ran ', 'quickly'));// we plugged these into the result
// Arrays************************
var ourArr = ['John', 23];
console.log(ourArr);
// Nest Arrays************************
var nestArr = [["first", "second"], ['third', 'fourth']];
console.log(nestArr);
// Access Array Data************************
var ourArray = [100, 200, 300];
var thisData = ourArray[0]; //-> 100
console.log(thisData);
// Modify Array Data with index************************
var thisArr = [1,2,3,4,5];
thisArr[1] = 45; //-> adds 45 to array
console.log(thisArr);
// Access Multi-Dimensional Arrays************************
var largeArray = [[0,0,1,0],[0,0,0,0],[0,0,0,0,0]];
var editArr = largeArray[0][2]; //-> accessed the the large array 
console.log(editArr);
// Manipulate arrays with push()************************
var wordArr = ["someName", 24, "Good"]; // [old, xx, stuff]
wordArr.push(['newName!', 100]);// push(): appends data to the end of the array
console.log(wordArr);// [old, xx, stuff, [newstuff, xx]]
// Manipulate arrays with pop()************************
var popArr = [1,2,3,4,5];
var removedFromArray = popArr.pop(); //pop(): removes an item from the array and implements in specified(removedFromArr) var
console.log(removedFromArray); // popArr = [1,2,3,4]
console.log(popArr);
// Manipulate Arrays with shift()************************ 
var shiftArr = ["first", "second",["thirdButNew"]];
var removedFromArr = shiftArr.shift(); //shift(): removes the first element of the array and places it specified area like pop
console.log(removedFromArr); //shift() removed first from array and placed in removeFromArr
console.log(shiftArr); //array now equals ["second", [thirdButNew]]
// Manipulate Arrays with unshift()************************
var unshiftArr = ["first", "second", "third"];
unshiftArr.shift(); // ["second","third"]
unshiftArr.unshift("newFirst"); //["newFirst", "second", "third"] unshift(): adds an element to beggin of array
console.log(unshiftArr);
// Shopping List************************
var shoppingList = [["Cereal", 3]["Milk",2],["Eggs",1],["stuff", 3],["otherStuff", 1]];
// Write Reusable with Functions************************
function reusableFunction(){ //function, function name(reusableFunction)
  console.log('Hi, world');
}
reusableFunction();
// Passing values to functions with Arguments************************
function studyFunction(a,b){ //inside parenthasis are the parameter names
  console.log(a - b); //what the function does
}
studyFunction(10,5); //output the information of the function
// Global Scope************************
//scope: refers to the visibility and accessability variables have in a program, variables that are defined outside of the function block have global scope
var myGlobal = 10; //since its outside of the function, any function can access it - its global
function fun1(){
  oopsGlobal = 5; //if there is not var keyword, oopsGlobal becomes global scope automatically
}
function fun2(){
  var output = "";
  if (typeof myGlobal != "undefined"){ //simce myGlobal is global scope it is not undefined, it = 10, 
    output += "myGlobal: " + myGlobal; 
  }
  if (typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal; //oopsGlobal is accessed because no var keyword
  }
  console.log(output);
}
fun1();
fun2();
// Local Scope and functions************************
function myLocalScope(){ //variables declaired within a function and function parameters have local scope - only visible within the function(i.e myLocalScope)
  var myVar = 5;//myVar is only visible inside the function
  console.log(myVar);
}
myLocalScope();
//console.log(myVar); //could not access this because it is outside the function
// Global vs Local Scope in Functions************************
var outer = 'tshirt';
function myOutfit(){ //local and global variables can have the same name - however, local variable has priority
  var outer = "sweater";//this outputs first
  return outer;
}
console.log(myOutfit()); //if inner var outer wasnt defined, then tshirt would print
console.log(outer);//then it prints this because this is outside of the function
// Return a Value from a Function************************
function minusSeven(num){
  return num - 7;
}
console.log(minusSeven(10)); //10 is num
// Undefined Value returned************************
var sum = 0;
function addsThree(){ // if no return value is specified, then it is undefined, nothing happends
  sum += sum + 3;
}
addsThree();
// Assignment with a Returned Value************************
var newNum  = 0;
function someNum(num){
  return (num + 5) / 3;//going to return the result of this problem, 
}
newNum = someNum(10); //when we call someNum and pass in 10, value that is returned from the function, is going to be stored inthe the newNum variable
console.log(newNum);
// Stand in Line************************
function nextInLine(arr, item){ //add an item to the array thats passed in (arr), the itll return the firt item on list
  arr.push(item); //took the array that was passed in, (testArr) and pushed the item that was passed in
  return arr.shift(); //now we return the first item on the list
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify: chnange an array into a string
console.log(nextInLine(testArr, 6)); //6 is the item
console.log('After: ' + JSON.stringify(testArr));
// Boolean Values************************
function newBooleans(){ //either true or false
  return false;
}
// If Statements************************
function trueOrFalse (isItTrue){
  if (isItTrue){ //if isItTrue variable 
    return "Yes, it is true";
  }
  return "No, it is false";
}
function someFunc (wasThatTrue){
  if (wasThatTrue){
    return "Yes that was true";
  }
  return "No, false"
}
console.log(someFunc(true)); //we inserted true into the function, so the statement returned true
// Equality Operator************************
function testEqual(val) { 
  if (val == 12) {// single = is the assignment operator, double sets equal to 12
    return 'Equal';
  }
  return "!= Equal";
}
console.log(testEqual(10));
// Strict Equality Operator************************
function testStrict(val) { 
  if (val === 7) {// strict equality ===: does not do the type conversion, 
    return 'Equal';
  }
  return "Not Equal";
}
console.log(testStrict(7));
// Comparing different values************************
function bothEq (a,b){
  if (a == b){ //if == then it's equal, but if === it's not equal
    return "Equal";
  }
  return "Not Equal";
}
console.log(bothEq(10,'10'));
// Inequality Operator************************
function testNotEqual(val){
  if (val != 12) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10)); //10 is not equal to 99 so not equal
// Strict Inequality Operator************************
function testStrictNotEqual(val){
  if (val !== 21) { //!==: check if its not true, its not going to convert types
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(12));
// Greater Than Operator************************
function testGreaterThan (val){
  if (val > 100){
    return "Greater than 100";
  }
  return "Less than 100";
}
console.log(testGreaterThan(200));
// Greater Than Or Equal To Operator************************
function testLesserThan (val){
  if (val <= 100){
    return "Greater than or equal to 100";
  }
  return "Greater than 100";
}
console.log(testLesserThan(21));
// Less Than Operator************************
function lessThan(val){
  if (val < 25) {
    return "Less than number"
  }
  if (val < 55) {
    return "Under number"
  }
  return "Greater than number"
}
console.log(lessThan(100));
// Less Than Or Equal To Operator************************
function lessThanOrEqual(val){
  if (val <= 25) {
    return "Smaller than or equal to 25"
  }
  if (val <= 55) {
    return "Under number"
  }
  return "Greater than number"
}
console.log(lessThanOrEqual(10));
// And Operator************************
function testLogicalAnd (val) {
  if (val <= 50){//nested if statement, check if it's less than or equal to 50 and greater than or equal to 25
    if (val >= 25){
      return "Yes, true"
    }
  }
  return "No, false"
}
console.log(testLogicalAnd());
function testLogicalAnd (val) {
  if (val <= 50 && val >= 25){// &&: we can use this instead of nested if statement
    return "Yes, true";
  }
  return "No, false";
}
console.log(testLogicalAnd(37));
// Or Operator************************
function logicalOrOperator (val) {
  if (val < 10) { 
    return "Outside";
  }
  if (val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(logicalOrOperator(2));
function logicalOrOperator (val) {
  if (val < 10 || val > 20) { //if val is less than 20, or val is greater than 20, then outside, else inside
    return "Outside";
  }
  return "Inside";
}
console.log(logicalOrOperator(2));
// Else Statements************************
function elseStatement (val){
  var result = "";
  if (val > 5){
    result = "Bigger than 5";
  } else { 
    result = "5 or smaller";
  }
  return result;
}
// Else If Statements************************
function testElseIf (val){
  if (val > 10){
    return "Greater tha 10";
  }
  else if (val < 5) { //else if: adds in an else if incase we have a lot of if statements 
    return "Less than 5";
  } else {
     return 'Between 5 and 10'
  }
}
console.log(testElseIf(2));
// Logical Order in If Else Statements************************
function orderOfLogic (val) {
  if (val < 10){
    return "Less than 100";
  } else if (val < 5) {
    return "Val is less than 50";
  } else {
    return "Val is greater than 5 and 10";
  }
}
console.log(orderOfLogic(2)); //this give us less than 100, but we want less than 50, if one if statement is true it does not check the rest
function orderOfLogic (val) {
  if (val < 10){
    return "Less than 50"; //we change the order so that it prints the correct value
  } else if (val < 5) {
    return "Val is less than 100";
  } else {
    return "Val is greater than 5 and 10";
  }
}
console.log(orderOfLogic(34));
// Chaining If Else Statements************************
function chainedIfStatements (val) {
  if (val < 5){
    return "Tiny";
  } else if (val < 10) { // chained if statements
    return "Small";
  } else if (val < 15){
    return "Medium";
  } else if (val < 20) {
    return "Large";
  } else if (val >= 20){
    return "Mega big-boy"
  } else {
    return "You broke the scale, sir";
  }
}
console.log(chainedIfStatements(100));
// Golf Code************************
var names = ["Hole-in-one","Eagle", "Birdie","Par","Bogey","Double Bogey","Go Home"];
function golfScore (x, y){
  if (y == 1){
    return names[0];
  } else if(y <= x - 2){
    return names[1];
  } else if(y == x - 1){
    return names[2];
  } else if(y == x){
    return names[3];
  } else if(y == x + 1){
    return names[4];
  } else if(y == x + 2){
    return names[5]; //if y(which is 4) == 2 + 2(which is x), then return names[5] which is double bogey
  } else if(y >= x + 3){
    return names[6];
  }
}
// x is 2 and y is 4
console.log(golfScore(2,4));
// Switch Statements************************
function caseInSwitch(val) {
  var answer = '';
  switch (val){//insert the parameter from the function in the switch
    case 1:// if the case of VAL is 1, it's using strict equality === operator
      answer = 'alpha';
      break; //break: we're at the end of the switch statement
    case 2:
      answer = 'beta';
      break; //if we don't have a break statement, the program will running through everything automatically
    case 3:
      answer = 'charlie';
      break;
    case 4:
      answer = 'delta';
      break;
  }
  return answer;
}
console.log(caseInSwitch(1)); //returns alpha
// Default Option in Switch Statements************************
function switchStuff(val){
  var answer = '';
  switch (val) {
    case a:
      answer = 'armadillo';
      break;
    case b:
      answer = 'bat';
      break;
    case c:
      answer = 'cat';
      break;
    default:
      answer = 'stuff';//this is like the else statement
      break;
  }
  return answer;
}
console.log(switchStuff('a'));
// Identical Options in Switch Statements************************
function sequentialSizes(val){
  var answer = '';
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = 'low';
      break
    case 4:
    case 5:
    case 6:
      answer = 'high';
      break;
    case 7:
    case 8:
    case 9:
      answer = 'mega-high';
      break;
    default:
      answer = 'idk';
  }
  return answer;
}
console.log(sequentialSizes(76));
// Replacing If Else Chains with Switch************************
function chainToSwitch(val) {
  var answer = '';
  /*if (val == 'bob') {
    answer == 'Marley';
  } else if (val == 31) { //instead of doing chained else if statements
    answer == 'The answer';
  } else if (val == 1) {
    answer == 'no';
  } else if (val == 99) {
    answer == 'something';
  } else if (val == 'sas') {
    answer == 'Oh, no'
  }*/
  switch (val) {
    case 'bob':
      answer = 'marley';
      break;
    case '42':
      answer = 'answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'missed by this much';
      break;
    case 7:
      answer = 'eight nine';
      break;
  }
  return answer;
}
console.log(chainToSwitch(7));
// Returning Boolean Values from Functions************************
function isLess(a,b) {
  return a < b; //returns true or false 
}
console.log(isLess(10, 21));
// Return Early Pattern for Functions************************
function abTest(a,b) { //if a or b are less than 0, the function  will immeditaly exit with the value of undefined
  if (a < 0 || b < 0) {
    return undefined;
  } 
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
console.log(abTest(2, 2));
// Counting Cards************************
var count = 0; //blackjack card game
function cC(card) {
  switch (card) {
    case 2:
    case 3:
    case 4: // if anyt of cards 2 - 6, count in increments of 1
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J": // if any of these cards, decrement by 1
    case "Q":
    case "K":
    case "A":
      count --;
      break;
  }
  var holdBetVar = 'Hold';
  if (count < 0) {
    holdBetVar = 'Bet'; // if the count is less than 0, hold 
  }
  return count + ' ' + holdBetVar;
}
console.log(cC(3));
// Build Objects************************
var theDog = { //objects are similair to arrays, but instead of indexes to access to access data, we use properties
  'name': 'Camper', //properties are the stuff before the colons (names)
  "legs": 4, //values are the stuff after the colons:
  'tails': 1,
  'friends': ['everything']
}
// Dot Notation************************
var myDog = {//one way to access properties in an object is dot notation
  "name": 'Sally',
  'breed': "doberman",
  'weight': 102,
  'type': 'female',
  'alt': ['Dug', 12, 22]
}
var myDogsName = myDog.name; //we used dot notation to access myDog, the .dot after it is the property we want to access
var myDogsBreed = myDog.breed;
console.log(myDogsName);
console.log(myDogsBreed);
// Bracket Notation************************
var myDog = { //bracket notation: required if the property name has a space in it
  "name": 'Sally',
  'breed': "doberman",
  'weight': 102,
  'type': 'female',
  'alt': ['Dug', 12, 22],
  'kettle type': 'kettle unknown'
}
var myDogsKettle = myDog["kettle type"];
console.log(myDogsKettle);
// Variables************************
var newObject = { //bracket notation can also be used to look up properties using variables
  10: "Ten",
  12: 'Twelve',
  14: 'Fourteen',
  16: 'Sixteen'
}
var objNumber = 10;
var testNumber = newObject[objNumber];//now, testNumber is set to "ten"
console.log(objNumber);
console.log(testNumber);
// Updating Object Properties************************
var myDog = {
  "name": 'Bruce',
  "breed": "Doberman",
  "weight": [65, "llbs"],
  "sex": 'male'
}
myDog.name = "charlamagne"; //we changed the name of the dog using .dot notation to access the property and change the value
console.log(myDog.name);
// Add New Properties to Object************************
var myDog = {
  "name": 'Bruce',
  "breed": "Doberman",
  "weight": [65, "llbs"],
  "sex": 'male'
}
myDog['color'] = 'black & brown'; //we used .dot and bracket notation to add a new property into an object
myDog.size = 'medium';
console.log(myDog.size); 
console.log(myDog['color']);
// Delete Properties from Object************************
var myDog = {
  "name": 'Bruce',
  "breed": "Doberman",
  "weight": [65, "llbs"],
  "sex": 'male'
}
delete myDog.weight; //delete: removes a property and its value from an object
// Objects for Lookups************************
function phoneticsLookup(val){
var result = "";
var lookup = { //instead of using entire switch statement, we used an object
  "alpha": 'Adams',
  "bravo": 'boston',
  'charlie': 'chicago',
  "delta": 'denver',
  'echo': 'Earl',
  'foxtrot': 'frank'
}
result = lookup[val];//value is passed in
return result;
}
console.log(phoneticsLookup('bravo'));
// Testing Objects for Properties************************
var myDog = {
  "name": 'Bruce',
  "breed": "Doberman",
  "weight": [65, "llbs"],
  "sex": 'male'
}
function checkObj(checkProp) { //we can check if an object has a property via hasOwnProperty()
  if (myDog.hasOwnProperty(checkProp)){
    return myDog[checkProp] //if it's true, we're going to return the value of that property
  } else {
    return "not found"
  }
}
console.log(checkObj('type'));
// Manipulating Complex Objects************************
var myMusic = [{
  'artist': 'Drake',
  'song': 'One Dance',
  'release year': 2017,
  'ablum name': '6',
  'formats': ['cd','spotify','pandora','youtube'],
  'certfied': true
},
{
  'artist': 'sean',
  "title": 'something',
  'release': 2003,
  'formats': ['youtube']
}
]
console.log(myMusic[0]);
// Nested Objects************************
var myStorage = {
  'car': { //to access subproperties of an object, we chain together the dot or bracket notation
    'inside': {
      'glove box': ['maps', 'gun', 'papers'],
      'passenger seat': 'crumbs'
    },
    'outside': {
      'trunk': 'jack'
    }
  }
}
//                   var -> car prop -> inside sub prop -> glove box use bracket notation because space
var gloveBoxContent = myStorage.car.inside['glove box'];
console.log(gloveBoxContent);
// Nested Arrays************************
var myPlants = [{
  type: 'C3',
  varieties: ['flowers','roots','cacti']
},
{
  type: 'grass',
  varieties: ['someplant','otherplant','anotherplant']
}
]
// secondObject equals myPlants second object in array([1]), then .dot varieties, since varieties is an array, use bracket notation to acces otherplant[1]
var secondObject = myPlants[1].varieties[1];
console.log(secondObject);
// Record Collection************************
var collection = {
  '2548': {
    'album': 'xxxx',
    'artist': 'xxxx',
    'tracks': ['xxxx','xxxx']
  },
  '2468':{
    'album': 'xxxx',
    'artist': 'xxx',
    'tracks': ['xxx','xxxx']
  },
  '1245': {
    'artist': 'xxxx',
    'tracks': []
  },
  '5439': {
    'album': 'xxxx'
  }
}
var collectionCopy = JSON.parse(JSON.stringify(collection)); //makes a copy of the object
function updateRecords (id, property, value) {
  if (value === "") {//first condition to test for is if we need to delete the property - if the value is blank, delete id and prop [because its an array]
    delete collection[id][property];
  } else if (property === 'tracks') { // else if property equals tracks - if property is tracks, we're going to push to end of array
    collection[id][property] = collection[id][property] || []; //if tracks prop is empty, we need to create it - set tracks equal to itself or if it doesnt exist it will equal an empty array
    collection[id][property].push(value); //since we know it exists, we can push the value to the end of the array
  } else { //if the value isnt blank and the value isnt tracks, then, we push the value onto the property
    collection[id][property] = value;
  }
  return collection;
}
//         function name (id)  (property) (value)
console.log(updateRecords(5439, 'artist', 'ABBA'));
// While Loops************************
var myArray = [];
var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);
// For Loops************************
var ourForLoop = [];
//initialization -> condition -> iteration
for (var i = 0; i < 5; i++) {
  ourForLoop.push(i);
}
console.log(ourForLoop);
// Odd Numbers With a For Loop************************
var ourForLoop = [];
for (var i = 0; i < 10; i += 2) { //this for loop skips odd numbers
  ourForLoop.push(i);
}
console.log(ourForLoop);
for (var i = 1; i < 10; i += 2) { //this gives us an array of odd numbers
  ourForLoop.push(i);
}
console.log(ourForLoop);
// Count Backwards With a For Loop************************
var ourForLoop = [];
for (var i = 10; i > 0; i -= 2) { //counts backwards from even numbers starting at 10
  ourForLoop.push(i);
}
console.log(ourForLoop);
for (var i = 9; i > 0; i -= 2) {
  ourForLoop.push(i);
}
console.log(ourForLoop);
// Iterate Through an Array with a For Loop************************
var ourArr = [1,2,3,4,5,6,7,8,9]; //length of array is 9 added up altogether is 45
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i]; //our total, which starts at 0 + ourArr length of i when incremented
}
console.log(ourTotal);
var stuffList = [100,100,100,100,1];
var stuffTotal = 0;
for (var i = 0; i < stuffList.length; i++) {
  stuffTotal += stuffList[i];
}
console.log(stuffTotal);
// Nesting For Loops************************
function multiplyAll (arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) { //arr.length will start as 3 because its only counting first three array elements not inner
    for (var j = 0; i < arr[i].length; j++) {// first we look at the length of each inner array, i represents the index
      product *= arr[i][j]; //[i] represents the outter array of 3 indexes, and j represents the inner array
    }
  }
  return product;
}
var product = multiplyAll([1,2],[3,4],[5,6,7]);
console.log(product);
// Do...While Loops************************
var myArr = []; //do while loops will always run atleast one time, and then check the condition
var i = 10; 
do {
  myArr.push(i);
  i++
} while (i < 5)
console.log(i, myArr);
// Profile Lookup************************
var contacts = [{
  'firstName': 'xxx',
  'secondName': 'xxx',
  'number': 'xxx',
  'likes':['xxx','xxx','xxx']
},
{
  'firstName':'xxx',
  'secondName':'xxx',
  'number':'xxx',
  'likes': ['xxx','xxx','xxx']
},
{
  'firstName':'xxx',
  'secondName':'xxx',
  'number':'xxx',
  'likes': ['xxx','xxx','xxx']
},
{
  'firstName':'xxx',
  'secondName':'xxx',
  'number':'xxx',
  'likes': ['xxx','xxx','xxx']
}
]
function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) { //iterate through each element in the contacts
    if (contacts[i].firstName === name){//check if the name is a name in this list
      return contacts[i][prop] || 'no such property';//if the name is in the contacts we're going to return the value of the property that was passed in
    }    
  }
  return 'no such contact'; //if the name that was passed in is not in the array, we print out this
}
var data = lookupProfile('akira','likes')
console.log(data);
// Random Fractions************************
function randomFunction () {

  return Math.random(); //generates a random number between 0 and 1
}
console.log(randomFunction());
// Random Whole Numbers************************
var randomNumber = Math.floor(Math.random() *20); //generate random number * 20 and round down
function randomWholeNum() {

  return Math.floor(Math.random() * 10);//gives a random number between 0 - 9
}
console.log(randomWholeNum());
// Random Whole Numbers within a Range************************
function ourRandomRange (ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin); //Math.random multiplied by max and min - 1 + min
} 
console.log(ourRandomRange(1,10));

function ourRandomRange (myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(ourRandomRange(1,9));
// parseInt Function************************
function convertToInteger(str) { //parseInt(): takes a string and returns an integer
  return parseInt(str);
}
console.log(convertToInteger('21'));
// parseInt Function with a Radix************************
function convertToInteger (int) { //radix: specifies the base of the number in the string
  return parseInt(int, 2); //passing it in as 2 so computer knows it's a binary number
}
console.log(convertToInteger('1453'));
// Ternary Operator************************
function checkEqual (a,b) {
  if (a == b) { //instead of doing this
    return true;
  }
  else {
    return false;
  }
}
console.log(checkEqual(2,1));
//condition ? statement-if-true : statement-if-false
function checkEqual (a,b) {
  return a === b  ? true : false;
}
console.log(checkEqual(1,2));
// Multiple Ternary Operators************************
function checkSign (num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : 'zero' //return if num is > than 0, positive : else if num is < 0, return negative else zero
}
console.log(checkSign(10));
function checkBeaut (sexy) {
  return sexy > 5 ? "Yes, please" : sexy < 5 ? "No, thanks" : "I'm good, thanks"; 
}
console.log(checkBeaut(2));
console.log(checkBeaut(5));
console.log(checkBeaut(10));
// var vs let************************
let catName = "Quincy"; //let: we cannot use the same name twice with let keyword
var quote;
catName = 'name';
function catTalk () {
  'use strict'; //strict mode for JS file, has to do with variable names 

  catName = 'oliver';
  quote = catName + " says Meow";
}
console.log(catTalk());
// var vs let scopes************************
function checkScope () { //var: declared globally or declared locally if inside a function
  "use strict"; //let: is limited to the block statement or expression it was declared in
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
console.log(checkScope());
// const Keyword************************
function printManyTimes (str) {
  'use strict';
  const sentence = str + " is cool."; //const: if we declare it once, we can't declare it a new assignment aftward
  //sentence = str + " is amazing";
  for (var i = 0; i < str.length; i += 2) {
    console.log(sentence);
  }
}
console.log(printManyTimes('Joe mama'));
// Mutate an Array Declared with const************************
const constantArr = [1,2,3,4,5];
function editInPlace () {
  'use strict';
  //constantArr = [2,5,7];
  constantArr[0] = 2; //edited a const array
  constantArr[2] = 4;
  constantArr[4] = 6;
}
editInPlace();
console.log(constantArr);
// Prevent Object Mutation************************
function freezeObj () { 
  'use strict';
  const mathConstants = { //crreate mathConstant with PI property in it
    PI: 3.14
  }
  //*****Object.freeze(mathConstants)//frozen mathConstants, so when it tries to change mathConstants.PI, it won't work
  try { //try first part in the block
    mathConstants.PI = 99; //Object.freeze: will prevent data mutation
  } catch (ex) { 
    console.log(ex); //if there's an error the it's going to log it out
  }
  return mathConstants.PI;
}
const PI = freezeObj();
console.log(PI); //we dont want PI to change, so
// Arrow Functions************************
var magic = function () { //anonymous function: does not have a name
  return new Date();
}
var magic = () => { //this is the same thing as above, but for anonymous functions
  return new Date();
}
var magic = () => new Date(); //this is the same as above, but shortened
// Arrow Functions with Parameters************************
var myConcat = function (arr1, arr2) {
  return arr1.concat (arr2);
}
console.log(myConcat([1,2],[3,4,5]));

var myConcat = (arr1, arr2) => arr1.concat(arr2); //this is the same as above
console.log(myConcat([1,2],[3,4,5])); 
// Higher Order Arrow Functions************************
const realNumberArr = [4, 2.4, -2, 4, 5.3, 5, -4, 19, -20.1];
const squareList = (arr) => { //whenever a parameter of a function is by itself, we can include the arrow inside the parenthasis]
  //new function((num) arrow is allowed inside parenthasis because its by itself)
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //array with all the numbers more than 0 and also integers
  return squaredIntegers;
}
const squaredIntegers = squareList(realNumberArr);
console.log(squaredIntegers);
// Default Parameters************************
const increment = (function (){
  return function increment(number, value = 1){ //if value equals 1 then, itll be set to whatever is passed in, and add by that amount
    return number + value;
  }
})(); //default parameters: kicks in when the argument is not specified or undefined
console.log(increment(5,2));
console.log(increment(5));
// Rest Operator************************
var sum = (function() { //rest: create a function that takes a variable number of arguments
  return function sum(x,y,z){//taking x y z and summing them 
    const args = [x,y,z]; //converting x y z into an array called args
    return args.reduce((a,b) => a + b, 0); //reducing the array, summing them all up and returning the results
  }
})()
console.log(sum(1,2,3));

var sum = (function() { 
  return function sum(...args){//convert everything that's passed in into one array and the array is called args
    return args.reduce((a,b) => a + b, 0); 
  }
})()
console.log(sum(1,2,3));
// Spread Operator************************
const arr1 = ['Jan', 'Feb', 'Mar'];//spread: expands an already existing array
let arr2;
(function(){
  arr2 = [...arr1]; //making array 2 equal to all the contents of array1
  arr1[0] = 'potato'
})()
console.log(arr2);
// Destructuring Assignment: Objects************************
var voxel = {x: 2.2, y: 2.5, z: 6.5};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
var {x : a, y : b, z : c} = voxel; // a = 2.2, b = 2.5, c = 6.5 //destructoring syntax to assign variables for each element in an object
const averageTemp = {
  today: 77.5,
  tomorrow: 80
}
function getTempTom (avgTemp) {
  'use strict';
  const {tomorrow: tempOfTomorrow} = avgTemp; //get tomorrow parameter from averageTemp object and assign it to the tempOfTomorrow variable
  return tempOfTomorrow
}
console.log(getTempTom(averageTemp))
// Destructuring Assignment: Nested Objects************************
const localForecast = {
  today: {min: 72, max: 80},
  tomorrow: {min: 21, max: 90}
}
function getMax(forecast) {
  'use strict';
  const {tomorrow: {max: maxTom}} = forecast; //since the localForecast is nested, we need max of tomorrow with maxTom inside
  return maxTom;
}
console.log(getMax(localForecast)); //gets 90
// Destructuring Assignment: Arrays************************
const [s, u, , k] = [0,1,2,3,4,5,6]; //if we wanted the 3rd element replaced, wed use a comma
console.log(s, u,k);

var a = 8, b = 6;
(() => {
  'use strict';
  [a,b] = [b,a]
})()
console.log(a);
console.log(b);
// Destructuring Assignment with Rest Operator to Reassign Array************************
const source = [1,2,3,4,5,6,76,7,8,98,9,09];
function removeFirstTwo(list) {
  const [ , , ...arr] = list; //removes the first two indexes in the list
  return arr;
}
const arr = removeFirstTwo(source);
console.log(source);
console.log(arr);
// Destructuring Assignment to Pass an Object************************
const stats = {
  max: 55.5,
  standarddeviation: 3.3,
  median: 2,
  mode: 21,
  min: 54,
  average: 21
}
const half = (function (){

  return function half({max, min}){
    return (max + min) / 2.0
  }
})()
console.log(stats);
console.log(half(stats));
// Template Literals************************
var person = {
  name: 'zodiac hasbro',
  age: 21
}
//template literal with multiline and string interpolation
const greeting = `Hello peepee poopoo is ${person.name}
I am looking for ${person.age}`;
console.log(greeting);

const result = {
  success: ['xxxx', 'yyyyy','zzzzzz'],
  failure: ['xxxx', 'yyyyy','zzzzzz'],
  skipped: ['xxxx', 'yyyyy','zzzzzz']
}
function makeList(arr) {
  const resultDisplayArr = [];
  for (var i = 0; i < arr.length; i++) {
    resultDisplayArr.push(`<li class="text warning"> ${arr[i]}</li>`)
  }
  return resultDisplayArr;
}
const resultDisplayArr = makeList(result.failure);
console.log(resultDisplayArr);
// Simple Fields************************
const createPerson = (name, age, gender) => { //arrow function takes in three parameters
  return { // function will return an object
    name: name, //object parameters are age name and gender and the variable names are their passed in values
    age: age,
    gender: gender
  }
}
console.log(createPerson("poopy",21,"brown"));

var createP = (name, age, gender) => ({name, age, gender}); //shorter version of above
console.log(createP("Mr.Poop", 32, 'browb'));
// Declarative Functions************************
const bicycle = {
  grear: 2,
  setGear: function (newGear) { //this is the long way to put a function within an object
    'use strict';
    this.gear = newGear;
  }
}
bicycle.setGear(3);
console.log(bicycle.gear);

var poop = {
  gear: 2,
  setGear(newGear) { //faster way, remove semicolon and function declaration
    'use strict';
    this.gear = newGear;
  }
}
poop.setGear(3);
console.log(poop.gear);
// class Syntax************************
var SpaceShuttle = function (targetPlanet) { //slower constructor class
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('mars');
console.log(zeus.targetPlanet);

class Console { //use class keyword
  constructor(choices) { //and constructor keyword
    this.choices = choices;
  }
}
var first = new Console('Xbox');
console.log(first.choices);

function carrotClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
var Vegetable = carrotClass();
var carrot = new Vegetable('carrot');
console.log(carrot.name);
// getters and setters************************
class book {
  constructor(author) {
    this.author =  author;
  }
  get writer() { //return or get the value of an objects private variable to the user
    return this.author;
  }
  set writer(updatedAuthor) {
    this.author = updatedAuthor;
  }
}
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32); //underscore for this means that it is a private variable
    }
    get temperature() {
      return this._temp;//returns celcius
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
var Thermostat = makeClass();
var thermos = new Thermostat(57);
var temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperate;
console.log(temp);
// import vs require************************
// export************************
// * to Import************************
// export default************************
// ​Import a Default Export************************

//string repeater
// Create your stringRepeater function below


function stringRepeater(string, number) {
  var output = "";
  for (var i = 0; i < number; i++) {
    output += string;
  }
  return output;
}
// Create your stringRepeater function above
console.log(stringRepeater("hello", 3));
// -> hellohellohello
console.log(stringRepeater("ho", 3));
// -> hohoho


//

// Modify the stringRepeater function so the tests pass //repeats phrasing 
var stringRepeater = function (string, times, delimiter) {
  var repeatedString = string;

  if (delimiter === undefined) {
    delimiter = " "; 
  }
  for (var i = 1; i < times; i++) {
    repeatedString += delimiter + string;
  }
  return repeatedString;
}
console.log(stringRepeater("hi", 3, ",") === "hi,hi,hi");
// -> true
console.log(stringRepeater("hi", 3) === "hi hi hi");
// -> true

// returns true if input is odd and false if not
var isOdd = function (number) {
  // Create your function code below
  if (number % 2 !== 0) {
    return true
  } else {
    return false;
  }
}
console.log(isOdd(3));
// -> true
console.log(isOdd(20));
// -> false

var numbers = [1, 3, 5, 7];

var editArray = function (arr) {
  // Edit the following line to make newArr a clone of arr
  var newArr = arr.slice(0,5);
  newArr[0] = 10;
  return newArr;
};

var editedNumbers = editArray(numbers);

console.log(editedNumbers);
// -> [10, 3, 5, 7]
console.log(numbers);
// -> [1, 3, 5, 7]

var sentence = "Be the change that you wish to see in the world."

var answer1 = sentence.slice(7,13);
console.log(answer1 === "change");

var answer2 = sentence.substring(3,6);
console.log(answer2 === "the");

var answer3 = sentence.substr(1,6);
console.log(answer3 === "world");
//
var poem = "She sells seashells by the seashore. The shells she sells are surely seashells."
// replace all the sea with ocean
var newPoem = poem.replace(/sea/g, 'ocean');
console.log(newPoem);
// -> She sells oceanshells by the oceanshore. The shells she sells are surely oceanshells.
//


var car = {
  brand: "Toyota",
  speed: 0,
  acceleration: 2,
  "year of manufacture": 2017,
  doors: 4,
  wheels: 4,
  seats: 4
};

var carValues = [];
// Use for...in loop to push all values into carValues array.
for (var key in car) {
  if(car.hasOwnProperty(key)) {
    var innerKey = {};
    innerKey[key] = car[key];
    carValues.push(innerKey);
  }
}
console.log(carValues);
// -> ["Toyota", 0, 2, 2017, 4, 4, 4]
//
var sentence = "Be the change that you wish to see in the world."

var answer1 = sentence.slice(7,13);
console.log(answer1 === "change");

var answer2 = sentence.substring(3,6);
console.log(answer2 === "the");

var answer3 = sentence.substr(42,5); //(the place starting from 0 and the length of the string(word))
console.log(answer3 === "world");
//
var car = { //inserts values of car into carValues with loop
  brand: "Toyota",
  speed: 0,
  acceleration: 2,
  "year of manufacture": 2017,
  doors: 4,
  wheels: 4,
  seats: 4
};
var carValues = [];
// Use for...in loop to push all values into carValues array.
for (var key in car) {
  carValues.push(car[key]);
}
console.log(carValues);
// -> ["Toyota", 0, 2, 2017, 4, 4, 4]
//
var numbers = [2, 4, 8]; //used map to create new variable and map it inside that var multiplied by 3
var tripleNumbers = numbers.map(function(num, index) {
  // Implement your code below
  return num * 3;
  
});
console.log(tripleNumbers[0] === 6);
// -> true
console.log(tripleNumbers[1] === 12);
// -> true
console.log(tripleNumbers[2] === 24);
// -> true
//
var words = ['hello', 'sunshine', 'apple', 'orange', 'pineapple']; //searches a word in array and only keeps stuff with 'a'
var wordsWithA = words.filter(function (certainWord) {
  // Implement your code below
  return certainWord.indexOf('a') !== -1 ;
  
});
console.log(wordsWithA[0] === 'apple');
// true
console.log(wordsWithA[1] === 'orange');
// true
console.log(wordsWithA[2] === 'pineapple');
// true
//

//some and every functions
var every = function (array, test) {
  // Your implementation below
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    } 
  }
  return true// true or false
}
var some = function (array, test) {
  // Your implementation below
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return true;
    }
  }
  return false; // true or false
}
var largerThan = function (target) {
  return function (number) {
    return number > target;
  }
}
console.log(every([10, 20, 30], largerThan(1)));
// → true
console.log(every([10, 20, 30], largerThan(10)));
// → false
// console.log(some([10, 20, 30], largerThan(10)));
// // → true
// console.log(some([10, 20, 30], largerThan(30)));
// // → false
//

var detectOutlierValue = function (array) { //searches to filter out the numbers in the array if they match, it will output it
  // Implement your code below
  var outlierSearch = array.filter(function(num){
    if (array[0] % 2 === 1 && num % 2 === 0) {
      return num;
    } else if (array[0] % 2 === 0 && num % 2 === 1) {
      return num;
    }
  })
  return outlierSearch[0];
}
console.log(detectOutlierValue([1, 3, 4, 7, 9, 11]));
// -> 4
console.log(detectOutlierValue([2, 4, 6, 10, 11, 14]));
// -> 11
//
//calculate the avarage of a set of numbers in an array
const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
console.log(average([1, 3, 5, 7, 9]));
// -> 5
console.log(average([2, 4, 6, 8, 10]));
// -> 6
//
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// expected output: Array ["T", "I"]
//isogram, two ways
var isIsogram = function (word) {
  return !word.match(/([a-z]).*\1/i);
}
console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false
var isIsogram = function (word) {
  return new Set(word.toLowerCase()).size === word.length;
}
console.log(isIsogram("helo"));
// -> true
console.log(isIsogram("helicopter"));
// -> false
//
//cipher, transforms coded text into readable words
var rot13 = function (string) {
  // Implement your code below
  // using math formula  
  // split the string into an array of characters, then run map method to iterate each character.
  var decodedString = string.split('').map(function(char) {
    // first get the charcode value of the character we are working on.
    var oldCharCode = char.charCodeAt(0);
    // we only do the cipher if it is an uppercase alphabet letter. Those letters have charcodes from 65 to 90. A is 65, Z is 90.
    if (oldCharCode >= 65 && oldCharCode <= 90) {
      // this is a mathematical formula that does the cipher, which shifts the letter 13 places forward in the order. We explain this at the end.
      var newCode = (oldCharCode + 13 - 65) % 26 + 65
      // turn the charcode back into a letter
      return String.fromCharCode(newCode)
    }
    // if character is not between 65 to 90 (A - Z) return it directly
    return char;
  }).join('');
  // join the array of characters back into a string
  
  // return the ciphered string
  return decodedString;
};

//

// matching characters 
var matchingCharacters = function (str1, str2) {
  // Implement your code below
  var split = str2.split('');
  for (var i = 0; i < split.length; i++) {
    if (str1.indexOf(split[i]) < 0) {
      return false;
    }
  }
  return true;
}
console.log(matchingCharacters("mary", "army"))
// -> true
console.log(matchingCharacters("hello", "hew"));
// -> false
//
//returns no falseys and outputs only normal stuff
var removeFalsy = function (arr) {
  // Implement your code below
  return arr.filter(Boolean);
};
console.log(removeFalsy([1, undefined, "hello", "", false, 5]));
// -> [1, "hello", 5]
 
console.log(range(1, 5));
// -> [1, 2, 3, 4, 5]
console.log(range(-1, -5));
// -> [-1, -2, -3, -4, -5]
//
//Find target pair for sum
var findPairForSum = function (array, sum) {
  // Implement your code below
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
   for (var j = i + 1; j < array.length; j++) {
     if (array[i] + array[j] === sum) {
       newArray.push(array[i], array[j]);
       break;
     }
   }
  }
  
  return newArray.sort(function(a, b){return a - b});
};
console.log(findPairForSum([3, 7, 10, 15, 9], 19));
// -> [9, 10]
console.log(findPairForSum([6, 8, 12, 14, 2, 4], 6));
// -> [2, 4]

//

//palindrome
var isPalindrome = function (word) {
  // Implement your code below
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = word.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
};
console.log(isPalindrome("racecar"));
// -> true
console.log(isPalindrome("hello"));
// -> false

//
//roman numeral converter

function romanNumeral(integer) {
  var array = String(integer).split("").reverse();
 
  function convertor(integer, char1, char5, char10) {
  switch (Number(integer)) {
  case 1:
  return char1;
  case 2:
  return char1 + char1;
  case 3:
  return char1 + char1 + char1;
  case 4:
  return char1 + char5;
  case 5:
  return char5;
  case 6:
  return char5 + char1;
  case 7:
  return char5 + char1 + char1;
  case 8:
  return char5 + char1 + char1 + char1;
  case 9:
  return char1 + char10;
  default:
  return '';
     }
   }
 
  var convertToRoman = array.map(function(number, index) {
  switch (index) {
  case 0:
  return convertor(number, 'I', 'V', 'X')
  case 1:
  return convertor(number, 'X', 'L', 'C')
  case 2:
  return convertor(number, 'C', 'D', 'M')
  case 3:
  var roman = '';
  for (var i = 0; i < number; i++) {
           roman += 'M';
         }
  return roman;
       }    
   }).reverse().join('');
 
  return convertToRoman;
 }
 
 console.log(romanNumeral(3));
 // -> III
 console.log(romanNumeral(5));
 // -> V
 console.log(romanNumeral(9));
 // -> IX
 console.log(romanNumeral(45));
 // -> XLV
 console.log(romanNumeral(99));
 // -> XCIX
 console.log(romanNumeral(649));
 // -> DCXLIX
 console.log(romanNumeral(1000));
 // -> M
 console.log(romanNumeral(2017));
 // -> MMXVII
 console.log(romanNumeral(3999));
 // -> MMMCMXCIX

 //

 //search and replace specific words
 var replacer = function (sentence, target, replacement) {
  // Implement your code below;
  var afterString = replacement;
  if (target.charCodeAt(0) <= 90 && target.charCodeAt(0) >= 65) {
    afterString = replacement.split("").map(function(letter, index) {
      if (index === 0) {
        return letter.toUpperCase();
      }
      return letter;
    }).join("");
  } else if (target.charCodeAt(0) <= 122 && target.charCodeAt(0) >= 97) {
    afterString = replacement.split("").map(function(letter, index) {
      if (index === 0) {
        return letter.toLowerCase();
      }
      return letter;
    }).join("");
  }
  var newStr = sentence.replace(new RegExp(target, 'g'), afterString);
  return newStr;
};

console.log(replacer("Lets go for a picnic on this Sunny day", "Sunny", "rainy"));
// -> Lets go for a picnic on this Rainy day
console.log(replacer("The music is really funky!", "funky", "classy"));
// -> The music is really classy!
console.log(replacer("Better than sliced Bread", "Bread", "toasties"));
// -> "Better than sliced Toasties"

//

//missing letter
var missingLetter = function (string) {
  // Implement your code
  var array = string.split('');
  for (var i = 1; i < array.length; i++) {
    if (string.charCodeAt(i) != string.charCodeAt(i - 1) + 1) {
      newCode = string.charCodeAt(i) - 1;
      return String.fromCharCode(newCode);
    }
  }
  
  return undefined;
};

console.log(missingLetter("abce"));
// -> d
console.log(missingLetter("jkmno"));
// -> l
console.log(missingLetter("abc"));
// -> undefined
console.log(missingLetter("cdefg"));
// -> undefined
//
//sum of odd fibonacci numbers - 
var sumOddFibonacci = function (num) {
  var fib0 = 0;
  var fib1 = 1;
  var fib = 1;
  var sum = fib0;
  while ( fib <= num){
    if (fib % 2) {
        sum += fib1;
    }
    fib = fib0 + fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }
  return sum;
}
console.log(sumOddFibonacci(10));
// -> 10
console.log(sumOddFibonacci(1));
// -> 2
console.log(sumOddFibonacci(1000));
// -> 1785
console.log(sumOddFibonacci(4000000));
// -> 4613732

//

//sum of all primes 
var sumPrimes = function (max) {
  // Implement your code
  function isPrime (x) {
    for (var i = 2; i < (x / 2 + 1); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
  var factors = [];
  for (var i = 2; i <= max; i++) {
    if (isPrime(i)) {
      factors.push(i);
  }
  }
  return factors.reduce(function(a,b){
    return a + b;
  });
};

console.log(sumPrimes(10));
// -> 17
console.log(sumPrimes(977));
// -> 73156
//

//smallest common multiple

var smallestCommonM = function (arr) {
  // Implement your code below
  // determine the min and max number from the arr input so we can create the range of values
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  // this is the range function that will output an array of values starting from min and end with max
  var range = function (min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
  }
  // gcd function for finding greatest common multiple, can't explain simply
  var gcd = function (a, b) {
    return !b ? a : gcd(b, a % b);
  }
  // this is the lowest common multiple function, based on the formula in the hint "lowest common multiple (a, b) = a * b / greatest common denominator (a, b)"
  var lcm = function (a, b) {
    return (a * b) / gcd(a, b);   
  }
  // use a variable to store the lowest common multiple value, it will start with the smallest number in the array, the min
  var multiple = min;
  // Create the range of array, chain it with a forEach to iterate the values
  range(min, max).forEach(function(n) {
    // find the lowest common multiple between consecutive pairs in the array, starting with min. Update the new lcm into the multiple variable
    multiple = lcm(multiple, n);
  });
  return multiple;
};
console.log(smallestCommonM([1, 5]));
// -> 60
console.log(smallestCommonM([5, 1]));
// -> 60
console.log(smallestCommonM([1, 13]));
// -> 360360
console.log(smallestCommonM([23, 18]));
// -> 6056820

//

// drop til true
var dropTillTrue = function (arr, test) {
  // Implement your code below
  var index;
  for (var i = 0; i < arr.length; i++) {
    index = i;
    if (test(arr[i])) {
      break;
    } else if (i === arr.length - 1) {
      index = arr.length;
    }
  }
  
  return arr.slice(index);
};

var test = function (n) {
  return n > 3;
};

console.log(dropTillTrue([1, 2, 3, 4, 5, 1], test));
// -> [4, 5, 1]
console.log(dropTillTrue([4, 3, 2], test));
// -> [4, 3, 2]
console.log(dropTillTrue([1, 2, 3], test));
// -> []
console.log(dropTillTrue([1, 2, 3, 7, 4], function(n) {return n > 3;}))

//

//flip pairs - flips every word in a string

var flipPairs = function (string) {
  // Implement your code below
  var newString = "";
  // create a for loop, but i increases by 2 every iteration
  for (var i = 0; i < string.length; i += 2) {
    // check if there is a value after the current i
    if (string[i+1]) {
      // if there is, append the next value [i+1] to newString first
      newString += string[i+1];
    }
    if (string[i]) {
      // then append the current value [i], this is how the flip is done
      newString += string[i];
    }
  }
  return newString;
}
console.log(flipPairs("hello world"));
// -> ehll oowlrd
//

//Difference between two arrays
var findTheDifference = function (arr1, arr2) {
  // Implement your code below
  var diffArray = [];
  
  arr1.forEach(function(val) {
    if (arr2.indexOf(val) === -1) {
      diffArray.push(val);
    }
  });
  
  arr2.forEach(function(val) {
    if (arr1.indexOf(val) === -1) {
      diffArray.push(val);
    }
  })
  return diffArray;
};
console.log(findTheDifference([1, 2, 3, 4], [1, 2, 5, 6]));
// -> [3, 4, 5, 6]

//

//flattener - removes nested structures from data values such as arrays and objects
var flatten = function (arr) {
  // Implement your code
  function flattener(collection) {
    // the flattener function will extract all the values from nested arrays in the given collection array and turn it into a flat array of values.

    // We use the reduce function to iterate the collection one item at a time and to keep an accumulator value that will collect all the non array values in the collection.
    // acc starts as an empty array [], as you can see in the second argument at the end.
    return collection.reduce((acc, curr) => {
      
      // on each iteration, we check the current value whether it is an array.
      if (Array.isArray(curr)) {

        // if it is an array, we will execute the flattener function with it and concat whatever value that get returned from it. It basically goes through this whole check again, but just the current value is given to it.
        return acc.concat(flattener(curr));
      } else {

        // if it is not an array, that means we don't have to flatten it anymore, we can add it to the accumulator directly. 
        return acc.concat(curr);
      }
    }, []);
  }
  return flattener(arr);
};

//
//Additive Persistance
function AdditivePersistence(num) {

  let str = String(num); //number into string
  let arr = str.split(""); //string into array
  // adds numbers in array, then repeats until left with single digit
  let count = 0;
  while (arr.length > 1) {
    // set `arr` to string then array with values returned from `.reduce()`
    arr = String(arr.reduce(function(a, b) {
      return Number(a) + Number(b)
    })).split("");
    count++;
  }
  return count;
};
var n = AdditivePersistence(2718);
console.log(n);
//

//permutations - counting unique number of permutations
var permutations = function (str) {
  // this solution actually creates all the different variations and count only the unique ones.
  var permutate = function (str) {
    var ret = [];
    // the mechanism of this solution is to place one letter of the string at the start, then generate all the different possibilities of the sub string that follows.
    // if the string passed in is only 1 character long, there is only 1 possibility, so we return the sub string
    if (str.length == 1) return [str];
    // the string passed in has two characters, there are only two possibilities, "ab" and "ba", so we return an array of the two variations
    if (str.length == 2) return [str, str[1] + str[0]];
    // if the string passed in has more than 2 characters, we will use a forEach function to extra one character out of the string at a time, and pass in the remaining characters back into the permutate function to create variations.
    // we do this by first spliting the string into an array of characters, then iterate it with forEach
    str.split('').forEach(function (chr, idx, arr) {
      // create a clone of the original array, so we don't edit it
      var sub = [].concat(arr);
      // take out the current character that we are working on
      sub.splice(idx, 1);
      // pass the rest of the characters to permutate to generate all possible variations
      permutate(sub.join('')).forEach(function (perm) {
        // join the variate with the character held in place
        var combination = chr + perm;
        // check the combination variate is unique
        if (ret.indexOf(combination) === -1) {
          // if unique, add to the returned array
          ret.push(combination);  
        }
      });
    });
    return ret;
  }
  return permutate(str).length;
 };