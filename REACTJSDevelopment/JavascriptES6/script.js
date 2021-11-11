/* Let and const instead of var */

// ES5
var varScope = function () {
  var x = 'a';
  var nestedScope = function () {
    var x = 'b'; // new variable
    console.log(x); // b
  }
  nestedScope();
  console.log(x); // a
}

// ES6, functions create new scope for both var and let variables
var varScope = function () {
  let x = 'a';
  var nestedScope = function () {
    let x = 'b'; // new variable
    console.log(x); // b
  }
  nestedScope();
  console.log(x); // a
}
/* Arrow Functions */

// if no input param, must write ()
const hello = () => {
  return 'hello';
}

// if has more than one input, must write () too
var sum = (a, b) => {
  return a + b;
};

var double = x => x * 2;

// This is the same as
var double = x => {
  return x * 2;
}

var foo = () => {
  return {
    a: 1,
    b: 2
  }
}

// When returning an object, need to wrap object in () if omitting {}
var foo = () => ({
  a: 1,
  b: 2
})

var personObjMaker = (name, age) => {
  return {
    name: name,
    age: age
  };
};

// You can skip the {} if you just have one return expression, but if it's an object, you need to wrap it in ()
var personObjMaker = (name, age) => ({
  name: name,
  age: age
})

console.log(personObjMaker('John', 25).age);
// -> 25

/* Arrow Functions are not the same as standard functions */

var car = {
  speed: 20,
  getSpeed: () => console.log(this.speed, this),
  getSpeed2: function() {
    console.log(this.speed, this);
  }
}
car.getSpeed(); //-> undefined, window
car.getSpeed2();//20, {speed: 20, getSpeed...}

/* Spead */
// ES6
var sum = (a, b) => {
  return Number(a) + Number(b);
};

// ... turns "12" into "1", "2"
sum(..."12");
// -> 3

// splitting a string into an array of characters
const splitStrings = [..."abcdefg"];
console.log(splitStrings);
// -> ["a", "b", "c", "d", "e", "f", "g"]
// ES9, Not fully supported on all browsers yet!
const meat = {
  beef: '1kg',
  pork: '0.5kg'
};

const dairy = {
  cheese: '0.3kg',
  yogurt: '0.2kg'
};

// ... separates object into key value pairs, not fully supported on all browsers yet!
const meatAndDairy = { ...meat, ...dairy }
console.log(meatAndDairy);
// -> {
// ->    beef: '1kg',
// ->    pork: '0.5kg',
// ->    cheese: '0.3kg',
// ->    yogurt: '0.2kg'
// -> }

/*Rest parameter */

// ES5
var argumentLogger = function () {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

argumentLogger(1, 2, 3);
// -> 1
// -> 2
// -> 3

// ES6
var argumentLogger = (...params) => {
  for (var i = 0; i < params.length; i++) {
    console.log(params[i]);
  }
}

argumentLogger(1, 2, 3);
// -> 1
// -> 2
// -> 3

/* Function default parameters */
// ES5
var multiply = function (a, b) {
  if (b === undefined) {
    b = 1;
  }

  return a * b;
}

// ES6
var multiply = (a, b = 1) => {
  return a * b;
}

multiply(2);
// 2

multiply(2, 3);
// 6

/* An enhanced Object */

// ES5
var name = 'Peter';
var age = 20;

var student = { name: name, age: age };
console.log(student);
// -> { name: 'Peter', age: 20 }

// ES6
var name = 'Peter';
var age = 20;

var student = { name, age };
console.log(student);
// -> { name: 'Peter', age: 20 }


// ES5
var car = {
  speed: 0,
  accelerate: function (amount) {
    this.speed += amount;
  },
  decelerate: function (amount) {
    this.speed -= amount;
  }
};

// ES6
var car = {
  speed: 0,
  accelerate (amount) {
    this.speed += amount;
  },
  decelerate (amount) {
    this.speed -= amount;
  }
};

car.accelerate(10);
console.log(car.speed);
// -> 10

car.decelerate(5);
console.log(car.speed);
// -> 5

/*Template Literal */
// ES5
var friends = ["John", "Mary", "Peter"];
friends.forEach(function (name, index) {
  console.log("Friend " + (index + 1) + " is " + name);
});

// -> Friend 1 is John
// -> Friend 2 is Mary
// -> Friend 3 is Peter

// ES6
var friends = ["John", "Mary", "Peter"];
friends.forEach((name, index) => {
  console.log(`Friend ${index + 1} is ${name}`);
});

// -> Friend 1 is John
// -> Friend 2 is Mary
// -> Friend 3 is Peter

// ES5
var message = "This is a multi line string.\n" +
"This is the second line."

var quoteInMessage = "David\'s dog said \"woof woof!\""

// ES6
var message = `This is a multi line string.
This is the second line.`

console.log(message);
// -> This is a multi line string.
// -> This is the second line.

var quoteInMessage = `David's dog said "woof woof!"`

console.log(quoteInMessage);
// -> David's dog said "woof woof!"

// ES6
const items = [
  { name: 'milk', quantity: 10 },
  { name: 'egg', quantity: 25 },
  { name: 'chocolate', quantity: 5 },
];

const inventory = {};
items.forEach((item, index) => {
  inventory[`sku-${index}`] = item;
});

console.log(inventory);
// -> {
// ->   'sku-0': { name: 'milk', quantity: 10 },
// ->   'sku-1': { name: 'egg', quantity: 25 },
// ->   'sku-2': { name: 'chocolate', quantity: 5 }
// -> }

// In ES6, use normal strings for short and simple strings
const string1 = "hello world!";
const string2 = 'Welcome abroad!';

// Use template literals when the strings are complex and uses dynamic content
var name = "John";
const temperature = 25;

const greeting = `Welcome back ${name}, the temperature is ${temperature} degree Celsius.`;