var foo = { name: "foo", b: 2, c: 3};
var bar = { b: "two", d: "four"}; //bar now inherits properties of foo 
Object.setPrototypeOf(bar, foo);
//trying to access the prototype of bar, the computer will search in bar but also the prototype foo and its proptotys prototy
bar.name; // -> foo
bar.c; // -> 3
bar.b; // -> two //since bars properties still exist they will override the value of common properties that foo contains 
bar.e; // -> undefined // we would get undefined for accessing a property that is undefined
console.log(Object.getPrototypeOf(bar) == foo);
// -> true
console.log(Object.getPrototypeOf(foo) == Object.prototype); //true
console.log(bar.toString()); //since lower level objcts access properties of their prototype we can access object.proto prop bar
//JSs Object isnt only one in JS, we have Array, Number, and String
var a = [1, 2, 3, 4];
console.log(Object.getPrototypeOf(a) === Array.prototype); // -> true 
// a's prototype: a -> Array.prototype -> Object.prototype
var foo = { name: "foo", b: 2, c: 3 };
var bar = { b: "two", d: "four" };
Object.setPrototypeOf(bar, foo);

console.log(bar.hasOwnProperty('name')); //hasOwnProperty: how we check if a property exists directly in an object
// -> false
console.log(bar.hasOwnProperty('b'));
// -> true
//we can prove that everything in JS is an object by inspecting the prototype of a function
var foo = function(){};
console.log(Object.getPrototypeOf(foo)); //[function]

console.log(Object.getPrototypeOf(foo) == Function.prototype); // -> true
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype); // -> true
//prototype of an individual function instance foo is the function prototype 
//prototype of Function.prototype is the Object.prototype 
var foo  = function(){};
console.log(foo); // -> [function]
var bar = function boo(){};
console.log(bar); // -> [function: boo]

var foo = function(){};
foo.bar = 'This is a bar';
console.log(foo.bar); // -> This is a bar
console.log(foo.baz); // -> undefined: we did not define the var na,e baz

var Person = function(sex){
  this.sex = sex; //THIS keyword will be bound to the new object that is created
}
var man = new Person('male'); //use a function as constructor we use the NEW keyword 
var woman = new Person('female');
console.log(man.sex); // we call the variable name, not the stuff inside the variable
console.log(woman.sex);
console.log(Person);

var Pill = function(option){
  this.option = option;
}
var red = new Pill('You have chosen the red pill.');
var blue = new Pill('You have chosen the blue pill');
var green = new Pill('You have chosen correctly');
console.log(red.option);

var Dog = function(name) {
  this.name = name;
  this.translator = {
    sayName: function(){
      console.log(this.name);
    }
  }
}
var bonny = new Dog("Bonny");
bonny.translator.sayName(); //sayName will output undefined because it is referencing translator object which has nothing
//sayName wants to reference the objects in the outerscope

var Dog = function(name){ //solution 1: bind the function to the outer this variable using bind methid
  this.name = name;
  this.translator = {
    sayName: function (){
      console.log(this.name);
    }.bind(this)
  }
}
var donny = new Dog('Donny');
donny.translator.sayName();// -> Donny

//solution2: assign a THAT variable to be the same as THIS, then use THAT to reference the global THIS in nested object methods
var Dog = function(name){
  this.name = name;
  var that = this;
  this.translator = {
    sayName: function(){
      console.log(that.name);
    }
  }
}
var nancy = new Dog('Nancy');
nancy.translator.sayName(); // -> Nancy

var Dog = function(name, translatorName){
  this.name = name;
  var that = this;
  this.translator = {
    name: translatorName,
    sayName: function(){
      console.log(this.name);
    }.bind(this),
    greet: function(){
      console.log('I am ' + this.name + ', ' + that.name + '\'s translator');
    }
  }
}
var bobby = new Dog('Bobby', 'LC131');
bobby.translator.sayName(); // -> Bobby
bobby.translator.greet(); // -> I am LC131, Boby's translator

var Person = function(sex) {
  this.sex = sex;
}
var man = new Person('male');
var woman = new Person('Female');
Person.prototype.introduce = function(){
  console.log('I am a ' + this.sex + '.');
}
man.introduce(); // -> I am a male.
woman.introduce(); // -> I am a female.
console.log(Object.getPrototypeOf(Person) === Function.prototype);
// -> true
// Person --> Function.prototype --> Object.prototype

console.log(Object.getPrototypeOf(man) === Person.prototype);
// -> true
// man --> Person.prototype --> Object.prototype
// woman --> Person.prototype --> Object.prototype

//override derived properties 
Person.prototype.hair = 'black';
console.log(man.hair); // -> black

man.hair = 'brown';
console.log(man.hair); // -> brown

console.log(Person.prototype.hair); // -> black
//editing properties of an object instance of a prototype does not affect the original prototype

// We can create the privacy settings with VAR keyword
var Employee = function (name, id) {
  var salary = 0;
  this.name = name;
  this.id = id;
  this.getSalary = function (password) {
    if (password === '123') {
      console.log('Salary of ' + this.name + ' is $' + salary + ' USD.');
      return salary;
    }
    console.log('Unauthorized')
    return;
  }
  this.setSalary = function (password, newSalary) {
    if (password === '123') {
      salary = newSalary;
      console.log('Salary of ' + this.name + ' is $' + salary + ' USD.');
      return salary;
    }
    console.log('Unauthorized')
    return;
  }
}
var Dave = new Employee('David', 1);
console.log(Dave.salary);
// -> undefined
Dave.getSalary();
// -> Unauthorized
Dave.getSalary('123');
// -> Salary of David is $0 USD.
Dave.setSalary('123', 3000); // We inserted the newSalary amount
// -> Salary of David is $3000 USD.
//
var Person = function(name){
  var age = 0; //this is private
  this.name = name;
  this.birthday = function(){
    age++
    console.log(name + ' is now' + age + 'years old, happy birthday!');
  }
}
//We can access and manipulate the name property freely 
var tom = new Person('Tom');
tom.name //tom
tom.name = 'Jerry'
tom.name // Jerry
tom.birthday();
tom.age //we cant access the age variable because it is private,so undefined
//getter and setter are opposite from before, 
var Car = function (acceleration) {
  var speed = 0;
  
  this.getSpeed = function () {
    // Implement your code below
    return speed;
    
    
  }
  
  this.accelerate = function () {
    // Implement your code below
    return  speed += acceleration;
    
  }
  
  this.decelerate = function () {
    // Implement your code below
    return speed -= acceleration;
    
  }
}
var honda = new Car(10);
console.log(honda.getSpeed());
// -> 0
honda.accelerate();
console.log(honda.getSpeed());
// -> 10
honda.accelerate();
console.log(honda.getSpeed());
// -> 20
honda.decelerate();
console.log(honda.getSpeed());
// -> 10
//
var circle = {
  radius: 5,
  get diameter () {
    return this.radius * 2;
  },
  get parameter () {
    return 2 * this.radius * Math.PI;
  },
  get area(){
    return Math.PI * this.radius * this.radius;
  }
}
console.log(circle.diameter); // -> 10  return 5 * 2
console.log(circle.parameter); // -> 31.4159~ return 2 * 5 * 3.14
console.log(circle.area); // -> 78.539 return 3.14 * 5 * 5

var circle = {
  radius: 5,
  get diameter () {
    return this.radius * 2;
  },
  set diameter (d) {
    this.radius = d / 2;
  },
  get parameter () {
    return 2 * this.radius * Math.PI;
  },
  get area () {
    return Math.PI * this.radius * this.radius;
  }
}
circle.diameter = 500; //set diameter (d) is this 5 = 500 / 2
console.log(circle.diameter);
// -> 500;
console.log(circle.radius); //
// -> 250;
//
var circle = { //redefine our circle object to add the new set method for diameter
  radius: 5,
  get diameter () {
    return this.radius * 2;
  }
};
Object.defineProperty(circle, 'diameter', { //add new set and get methods for existing objects we can use Object.defineProp
  set: function (d) { this.radius = d / 2; } // Object.defineProperty allows three arguments
});
console.log(circle.diameter);
// -> 10
circle.diameter = 20;
console.log(circle.diameter);
// -> 20

// circle is a constructor
var Circle = function (radius) {
  this.radius = radius;
}
Object.defineProperty(Circle.prototype, 'diameter', {
  get: function () { return this.radius * 2; },
  set: function (d) { this.radius = d / 2; }
});
var circle = new Circle(5);
console.log(circle.diameter);
// -> 10
circle.diameter = 20;
console.log(circle.diameter);
// -> 20
// we call a function, and it returns a new object


//Constructor function

function Circle(radius) { //this: reference to an object in the code
  this.radius = radius; //new property
  this.draw = function(){
    console.log('draw');
  }
  //return this. -  happends under the hood, we do not need to state it
}
var circle = new Circle(1); //new: creates an empty JS object, it will set this. to point to the new empty object, will return a new object from a this.function() 
//
function Person(name, eyeColor, age){ //we have all of the properties of the constructor inside the function parameters
  this.name = name;
  this.eyeColor = eyeColor;
  this.age = age;
  this.updateAge = function(){
    return ++this.age;
  };
}
var person01 = new Person("Sam", "Blue", 21);// answers all of the parameters inside of the costructor function
console.log(person01); //we refer to the outside variable we made outside of the constructor
//this
//method: a method/function inside of an object
//if the function is a method in an object, THIS. references the object itself

//if the function is a regular function, THIS. references the global obect 

var video = {
  title: 'a',
  play(){//a method - a function inside an object
    console.log(this);//since play() is a method in the video object, THIS. references the entire inner object itself
  }
};
video.stop = function(){ //nothing changes when adding another method to the video object because it is a part of the video obj
  console.log(this);
}
video.play();

function Option(a, b) {
  this.option1 = a,
  this.option2 = ['a','b','c'],
  this.option3 = function(){
    this.option2.forEach(function(o3){
      console.log(this.option1, option2);
    }, this);
  }
}
var optionB = new Option('An apple');
console.log(optionB);
//
var user = { // we made a short-hand function with the fullName function and its THIS. property re
  firstName: "John",
  lastName: "Smith",
  fullName: function(){
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
user.fullName();

var user = { // we made a short-hand function with the fullName function and its THIS. property re
  firstName: "John",
  lastName: "Smith",
  race: ['white', 'black', 'brown'],
  listType(){
    this.race.forEach(function(races){
      console.log(`${this.firstName} is ${races}`)
    }, this);//THIS. refers to the object - but lists each race as johns
  }
}
user.listType();

function Fruit(name) {
  this.name = name;
  console.log(this);
}
var newFruit = new Fruit('Apple');

//Object.defineProperty

var person = {
  name: 'Sam'
}
Object.defineProperty(person, 'id', {
  value: 1
})
console.log(person);
//getters and setters

var identity = {
  firstN: 'Sam',
  lastN: 'Doll',
  fullName(){ //this replaces function fullName(){}
    return console.log(`${identity.firstN} ${identity.lastN}`);
  }
};
console.log(identity.fullName());

//getters -> access properties
//setter -> change or mutate properties

var brand = {
  os: 'Andriod',
  device: 'Samsung',
  get deviceName(){ //put the get in front of the method we want
    return (`${brand.os} ${brand.device}`);
  },
  set deviceName(namedAnything){ // we need to set the name of the setter to the same as method and name the parameter anything
    var newName = namedAnything.split(' ');
    this.os = newName[0]; //redefine the parameter 
    this.device = newName[1];
  }
}
brand.deviceName = 'IOS iPhone'; //define new parameter names
console.log(brand);

var gamer = {
  firstType: 'PC',
  secondType: 'Console',
  get findType(){
    return (`${gamer.firstType} ${gamer.secondType}`);
  },
  set findType(newValue){
    var extra = newValue.split(' ');
    this.firstType = extra[0];
    this.secondType = extra[1];
  }
}
gamer.findType = 'Undecided Uninterested';
console.log(gamer);
console.log(gamer.firstType);
//call
var obj = {num:2};
var addToThis = function(a){
  return this.num + a;
};
console.log(addToThis.call(obj, a));//add two arguments //

var obj = {num:2};
var addToThis = function(a,b,c){
  return this.num + a + b + c; //1 + 2 + 3 + 2
};
console.log(addToThis.call(obj, 1,2,3));//add two arguments // 

//apply
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr)); //also get 8
var numbers = [8, 4, 3, 10, 2];
var max = Math.max.apply(null, numbers);
// -> Equivalent to Math.max(8, 4, 3, 10, 2)
var min = Math.min.apply(null, numbers);
console.log(max, min);
// -> 10 2

//bind
var speak = function (line) {
  console.log(this.name + " says '" + line + "'");
}
speak.apply({ name: 'Peter Lee' }, ['It is a fine day.']);
// -> Peter Lee says 'It is a fine day.'
var makeSandwich = function (bread, protein, fibre) {
  console.log(this.name + " wants a sandwich with " + bread + ", " + protein + ", and " + fibre);
}
makeSandwich.apply({name: 'Tommy'}, ['sourdough', 'chicken breast', 'spinach']);
// -> Tommy wants a sandwich with sourdough, chicken breast, and spinach

/*
call: executes the function immediately and allows adding inputs separated by comma
apply: executes the function immediately and allows adding inputs as an array
bind: is the same as call, but doesn't execute the function, it returns a new function with an object binding and predefined inputs
*/

//output chest pieces
function createGrid(height, width) {
	var output = '';
	for (var i = 0; i < height; i++) {
	  for ( var j = 0; j < width; j++) {
	   if (i % 2 === 0) {
	     if (j % 2=== 0) {
	       output += " ";
	     } else {
	       output += "#";
	     }
	   } else {
	     if (j % 2 === 0) {
	       output += "#";
	     } else {
	       output += " ";
	     }
	   }
	  }
	  if (i < height -1) {
	    output += "\n";
	  }
	}
	return output;
}
console.log(createGrid(8, 8));
console.log(createGrid(3, 3) === " # \n# #\n # ");
console.log(createGrid(4, 3) === " # \n# #\n # \n# #");
//
var account = Object.create(null); //incase we want to create the account object without a prototype
account.balance = 100;
Object.prototype.drain = function () {
  this.balance = 0;
}
console.log(account.drain);
// -> undefined
//Prototype inheritance - shape hierarchy
var Shape = function(name){
  this.name = name
}
var Circle = function(name, radius){
  Shape.call(this, name); //with call, we can execute the constructor function of the prototype we want to inherit from
  this.radius = radius;

  Object.defineProperties(this, {
    area: {
      get: function(){return Math.PI * this.radius * this.radius;}
    }
  })
}
var Rectangle = function (name, length, width){
  Shape.call(this, name);
  this.length = length;
  this.width = width;

  Object.defineProperties(this,{
    area: { // we find the area of the rectangle
      get: function() {return this.length * this.width;}
    }
  })
}
var Square = function(name, length){
  Rectangle.call(this, name, length, length);
}

var circle = new Circle('CirlceName', 12);
var rectangle = new Rectangle('RectangleName', 5, 10);
var square = new Square('SquareName', 2);
console.log(circle.name);
// -> golden circle
console.log(circle.area);
// -> 78.53981633974483
console.log(rectangle.area);
// -> 50
console.log(square.area);
// -> 25