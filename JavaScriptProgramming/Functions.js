var maxNum = Math.max(19.29,230);// We called the biggest number in the list
console.log(maxNum);
//
// alert('This is a popup'); // We made a popup just like the ones on many websites
/*var weather = prompt('What is the weather like outside?', 'Insert an Answer');
console.log(weather);
//Here we created a prompt which takes the insert of a user, first is the question, second is the default value 
*/
/*var response = confirm('Are you ready?');
if (response == true) {
  return console.log("Good");
} else {
  console.log("Understood");
}
// We created a yes or no program that returns stuff whether it is true or not 
*/
var greet = function(){ // We defined the function with the function function
  console.log('Hello World'); // Then we defined what it does
}
greet();
var add = function(x,y){// Here we need to defined any variables that are in the return function
  return x + y;
}
console.log(add(3,5));

add = function(a, b){// We can define the same function from before as something else 
  return a * b;
}
add(2,4);
console.log(add(2,4));// We then printed the result

var option = function(two){ // Two is just a stand-in variable - when we run, it is replaced by the two options
  console.log('You can use either a ' + two);
}
option('tool');
option('hands');
//
var convertCtoF = function(x){
  return x * 1.8 + 32;
}
// Create your convertCtoF function above
console.log(convertCtoF(0));
// -> 32
console.log(convertCtoF(10));
// -> 50
console.log(convertCtoF(30));
// -> 86
//
var multiply = function(x, y){
  var result = 0;
  for (var i = 0; i < y; i++){
    result += x;// Here we change the result, since it is only on x it multiplies 6 and 5 but if on y it adds 6 because for
  }
  return result;
}
console.log(multiply(5, 6));
//
var favNum = 5; // favNum is equal to 5
var double = function(x){ // Here we made a function called double which multiplies x by 2
  x *= 2;
  return x; 
}
console.log(double(favNum)); // We called on the function double and its parameters on favNum == 10
console.log(favNum); //Then we called the original var name which gives us 5

var x = 'global'; // Despite being called the same variable name, these two do not interfere with eachother 
var foo = function(){
  var x = 'local';// They do not interfere because x is inside this function
  return x;
}
console.log(foo());
console.log(x);
// We access global variables inside a function as long as we dont create a new local variable with the same name
var bar = "global";
var x = function(){
  bar = "global";
  return bar;
}
console.log(x()); // We called the function x
console.log(bar); // We called the var name of bar which is the same as outside var bar 

var count = 0;
var firstF = function(phrase){
  var result = "";
  var secondF = function(width){
    for (var count = 0; count < width; count++){
      result += "*"; // result variable is global to second and third but local to first - first can access the top level global count var and ++ it
    }
  }
  var thirdF = function(width){
    for (var count = 0; count < width; count++){
      result += "-"
    }
  }
  thirdF(3);// This is the left section
  secondF(2);
  result += phrase;
  secondF(2); // This is the right section 
  thirdF(3)
  count++;
  return result;
}
console.log(firstF("javascript"));
console.log(count);
console.log(firstF("Programming"));
console.log(count);
//
// alert: takes three arguments

var term =  function(string, symbol){ //parameter name of string and symbol
  if (symbol === undefined){
    symbol = '~'; //default symbol
  }
  return symbol + string + symbol;
}
console.log(term('I love javascript', '*')); //The symbol is defined so it prints fully
console.log(term('You love javascript')); //Since the symbol is not defined, we get the default symbol (line 112)
// pure functions: not only have side effects(results) but also dont rely on any other code that have side effects(always give the same return value)
//func(func(func)): the inner function can access the innner func var, as well as outer and global variables
var a = 1;
var outer = function(b){
  var c = 3;
  var inner = function(){
    var d = 4;
    console.log(a,b,c,d);
  }
  inner();// We call the inner function which is (a,b,c,d) -> a is first(global) -> (b) which is outer -> access to (c) -> (d)
}
outer(2);

var outer = function(x){ //outer function accepts paramter x
  var localVariable = x; // Created local variable and assigned it to x 
  var inner = function(){// created inner variable function which returns the localVariable which is x 
    return localVariable;
  }
  return inner;// Then, we return the inner function which gives us our result 
}
var innerInstance = outer(20);
console.log(innerInstance);
//
var addition = function(factor){
  var addFunc = function(number){
    return number + factor;
  }
  return addFunc;
}
var addByOne = addition(1);
var addByFive = addition(5);
console.log(addByOne(6));
console.log(addByFive(6));
//
var counterCreator = function () {
  var count = 1;
  var counter = function () {
    return count++;
    // count++ will add 1 to count but returns the value of count before 1 is added.
  };
  return counter;
}
var counterA = counterCreator();
var counterB = counterCreator();
console.log(counterA()); //Since we call it more than once, it will add a new count++ every time
// -> 1
console.log(counterA());
// -> 2
console.log(counterB());//Same goes for this, but it is called differently so it starts at 1 again
// -> 1
console.log(counterA());
// -> 3
console.log(counterB());
// -> 2
//
//x++ returns the value before incrementing by 1
//++x returns the value after incrementing by 1
var a = 1;
var x = a++; //-> 1: is what it looks like before being added by 1
console.log(x);
var b = 3;
var y = ++b; //-> 4: what it looks like after being added by one
console.log(y);
//
var outHere = 'is cold';
var weatherNow = function () {
  var name = 'Dave';
  // name is inside the weatherNow bubble, can only be accessed within the bubble
  return 'Hi ' + name + ', the weather ' + outHere;
  // we can access outHere which is outside the weatherNow bubble
}
weatherNow();
// -> 'Hi Dave, the weather is cold'
//
function something (x){//this is the shorter way of writing a function
  //something
}
something(x);

console.log("Will this work", foo());

function foo(){ // NOT RECOMMENDED, but we can define a function after it is called
  return "yes it will work";
}
//
var weatherReport = function(condition) {
  console.log('The weather is currently', condition);
}
weatherReport('sunny');
console.log('Perfect time for a picnic!');
// Call stack: the temp memory a computer needs to remember stuff - it will lead to an error when full
/* var goose = function() {
  return duck();
}
var duck = function() {
  return goose();
}
console.log('Is it a duck or a goose', goose());
// -> RangeError: Maximum call stack size exceeded
*/
var isPlural = function(number){
  if (number % 2 == 0){
    return true;
  } else{
    return false; //we can write it shorter since return false is a given
  }
}
console.log(isPlural(10));
console.log(isPlural(21));
//
var cardCounterCreator = function () { //card counter
  var count = 0;
  var cardCounter = function(card) {
    // Write your function below
    switch (card) {
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
        count++;
        break;
      case '10':
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
        count--;
        break;
      default:
        // do nothing
    }
    if (count <= 0) {
      return count + ' Hold';
    } else {
      return count + ' Bet';
    }
  }
    return cardCounter;
}
//
var zeroPad = function (number, width) { //here we defined the function zeroPad which takes a string beside a number length when < the width
  var string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}
console.log(zeroPad(15, 3)); // We then insrt the number into the program to output the object and its inventory
// -> 015
console.log(zeroPad(15, 4));
// -> 0015
var printInventory = function (milk, eggs, flour, chocolateBar) {
  console.log('Milk', zeroPad(milk, 4));
  console.log('Eggs', zeroPad(eggs, 4));
  console.log('Flour', zeroPad(flour, 4));
  console.log('Chocolate Bar', zeroPad(chocolateBar, 4));
}
console.log(printInventory(39, 120, 58, 1231))
// -> Milk 0039
// -> Eggs 0120
// -> Flour 0058
// -> Chocolate Bar 1231