var countToThree = function(count) {
  if (count == 3) {
    console.log("3 Finished Counting");
  } else {
    console.log(count);
    countToThree(count + 1); // Recursive call to itself
    //countToThree(0)
    //countToThree(0 + 1)
    //countToThree(1 + 1)
    //countToThree(2 + 1) // count == 3 so end
  }
}
countToThree(0);

var onlyWhenEven = function (number, then){
  if (!(number % 2)) {
    then(); //Anonymous function - a function without a name
  }
}
onlyWhenEven(4, function() {
  console.log("4 is even");
})

var onlyWhenEven = function(number, then){
  if (!(number % 2)){
    then(number);// number argument will be passed to the callback function then when it is executed 
  }
}
var evenNumberArray = [];
var addToArray = function(num) { // we only add even numbers into the array
  evenNumberArray.push(num);
}
onlyWhenEven(4, addToArray);
onlyWhenEven(9, addToArray);
onlyWhenEven(14, addToArray);
console.log(evenNumberArray);
//
function range(start, end, step) { //two arguments from start to end and returns an array containg all number from start - end
  var arr = [];
  if (step > 0) {
    for (i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  } else if (step < 0) {
    for (i = start; i >= end; i = i + step) {// sum function that takes away an array of number and returns the sum of the numb
      arr.push(i);
    }
  } else {
    for (i = start; i <= end; i++) {
      arr.push(i);
    }
  }
  return arr;
}
function sum(arr) {
 var sum = 0;
 for (i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
 return sum;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [ ] , this is my result ********
console.log(sum(range(1, 10)));
// → 55
//
var friends = ["John", "Sam", "Pat"];
for (var i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
var forEach = function (array, callback) { // abstract forEach accepts an array amd callback function as its argument
  for (var i = 0; i < array.length; i++){
    callback(array[i]);
}
}
forEach(friends, console.log); // we used forEach to print out our friends name
//console.log is passed to the forEach function as a callback function 

friends.forEach(function(value, index, array){
  console.log('Index ' + index + ' of ' + array + ' has value ' + value);
}) //array.foreach will pass three arguments to the callback function, currentvalue, index and og array

var originalArray = [1, 2, 3];
var newArray = originalArray.forEach(function(value) {
  var newValue = value + 1;
  console.log(newValue);
  return newValue;
}); // array.foreach doesnt return anything and it doesnt mutate the original array 
// -> 2
// -> 3
// -> 4

console.log(originalArray);
// -> [1, 2, 3]

console.log(newArray);
// -> undefined

var numbers = [1, 2, 3, 4, 5];
var squaredNumbers = [];
for (var i = 0; i < numbers.length; i++){
  squaredNumbers.push(numbers[i] * numbers[i]);
}
console.log(numbers);
console.log(squaredNumbers);

var map = function (array, callback) { //abstract functionality into map - maps out array - it accepts an array and callback
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
var squaredNumbers = map(numbers, function (number) {
  return number * number;
})

var squaredNumbers = numbers.map(function(number) { //map does not mutate og array
  return number * number
})
console.log(numbers);
console.log(squaredNumbers);

var filter = function(array, test){ // new array of numbers larger than 50 filtered from an array of numbers
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    if (test(array[i])){
      newArray.push(array[i])
    }
  }
  return newArray;
}
var numbers = [1, 10, 20, 30, 40, 50, 100, 120, 1239, 5349]; // returns numbers larger than 50
var numbersLarger50 =  filter(numbers, function(numbers){
  return numbers > 50;
})
console.log(numbersLarger50);

var numbersSmaller50 = numbers.filter(function (numbers){ //returns numbers smaller than 50
  return numbers < 50;
})
console.log(numbersSmaller50);

var reduce =  function(array, callback, start) {
  var accumulator = start;
  for (var i = 0; i < array.length; i++){
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

var numbers = [1, 2, 3, 4, 5]; // reduce passes one extra argument to the callback function which is accumulator
var sum = reduce(numbers, function (sum, number){
  return sum + numbers;
}, 0); // added in 0 as a third argument
console.log(sum);

var numbers = [1, 2, 3, 4, 5];
var sum = reduce(numbers, function (sum, number){
  return sum * numbers;
}, 1); // product of all numbers
console.log(sum);

var list = [3, 1, 5, 5, 6, 1, 7, 98, 12, 19, 3, 57, 10]; // lists the numbers in ascending order
var ascending = list.sort(function(a, b){
  if (a < b){
    return -1;// -1 if want a to come before b
  } else if (a > b) {
    return 1; //1 if want a to come after b
  }
  return 0;// 0 if want them to stay in place
})
console.log(ascending);

//array.every: tests whether all elements in an array passes the test callback - only true if all elements pass
//array.some: tests all elements, returns true as long as one element passes otherwise false]

var largerThan = function(target){
  return function(number){
    return number > target;
  }
}
var numbers = [10, 20, 30, 40];
console.log(numbers.every(largerThan(20))); // -> false - some are larger but not all
console.log(numbers.some(largerThan(30))); // -> true - true because some are larger

//
var obj1 = { num: 10 };
var obj2 = obj1;
var obj3 = { num: 10 };

console.log(obj1 == obj2);
// -> true
console.log(obj1 == obj3);
// -> false

obj1.num = 20;
console.log(obj2.num);
// -> 20
console.log(obj3.num);
// -> 10

var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, i, array) {
  array[i] = array[i] * array[i];
});

console.log(numbers);
// -> [1, 4, 9, 16, 25]

var oldFriends = ['Tom', 'Peter', 'Mary']; // We cloned an array here
var changeFriends = function (friends, friend) {
  var newFriends = friends.slice();
  newFriends.pop();
  newFriends.push(friend);
  return newFriends;
}
var newFriends = changeFriends(oldFriends, 'Celine');
console.log(oldFriends);
// -> ['Tom', 'Peter', 'Mary']
console.log(newFriends);
// -> ['Tom', 'Peter', 'Celine']

//
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Normal way of doing stuff -
for (let i = 0; i < companies.length; i++){
  console.log(companies[i]); //Gives us the name of the companies and their information - instead do below
}
//forEach
companies.forEach(function(company){ //Used forEach to get the name of each company (company.name) - function takes 3 values
  console.log(company.name);
})
//filter
 var canDrink = [];
 for(var i = 0; i < ages.length; i++){
  if(ages[i] >= 21){  //if index is >= 21 then canDrink can push/add to it ages[i] //long
    canDrink.push(ages[i]);
  }
}


var canDrink = ages.filter(function(age){ //same thing but instead using filter //medium
  if(age >= 21){
    return true;
  }
})
var canDrink = ages.filter(age => age >= 21) //short method of writing the ages

//filter retail companies
var retailCompanies = companies.filter(function(company){
  if(company.category == 'Retail') {
    return true;
  }
})
//                        (only one parameter)company is parameter  condition is company.category - thing we look into index
var retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
//filter companies from the 80's
//                                      look into company -> then company.start between 1980 && company start 1990
var eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990));
console.log(eightiesCompanies);
//filter companies atleast 10 years
//                          company  -> company end date minus company start is greater than 10
var atL10 = companies.filter(company => (company.end - company.start > 10));
console.log(atL10);

var financeCompany = companies.filter(companies => companies.category === ('Finance'));
console.log(financeCompany);

//map
//array of company names 
var companyNames = companies.map(function(company){ 
  return company.name; //maps out the index of companies
})
console.log(companyNames);

var something = companies.map(function(company){ 
  return 1; //mapped out 1s based on the company names
})
console.log(something);

var testMap = companies.map(function(company){ 
  return `${company.name} [${company.start} - ${company.end}]`; //mapped out start and end date of company.names
})
console.log(testMap);

var secondTest = companies.map(company => `${company.name} [${company.start} -  ${company.end}]`);
console.log(secondTest); //same as before but shorter

var ageSquare = ages.map(age => Math.sqrt(age));// array of ages squared
console.log(ageSquare);

//sort
var sortedCompanies = companies.sort(function(company1, company2){
  if (company1.start > company2.start){
    return 1;
  } else {
    return -1;
  }
})
console.log(sortedCompanies);

relativeCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));// companies a and b if a.start is greater than b.start then return? 1 else: return -1
console.log(relativeCompanies);

sortAges = ages.sort(); //works initially, but does not print full number when only single digit, to fix ->
console.log(sortAges);

sortedAges = ages.sort((a, b) => a - b); //b -a for descending order
console.log(sortedAges); // now 5 is sorted to the beginning from least to greatest

//reduce 

var ageSum = 0;
for (var i = 0; i < ages.length; i++){ //long version of reduce - adding all ages together
  ageSum += ages[i];
}
console.log(ageSum);

var ageTotal = ages.reduce(function(total, age){ //reduce need total and some other function name
  return total + age;
},0) //reduce also needs a 0 at the end

console.log(ageTotal);

var ageMax = ages.reduce((total, age) => total + age, 0); //reduced reduce function
console.log(ageMax);

//total years for all companies 
var totalYears = companies.reduce(function(total, company){
  return total + (company.end - company.start);
},0) //without the zero we get a weird object name, useless
console.log(totalYears);

var maxYears = companies.reduce((total, company) => total + (company.end - company.start), 0); //shorter method reduce
console.log(maxYears);

//combined methods

var combined = ages
  .map(age => age * 2) //all the ages multiplied by 2
  .filter(age => age >= 40) //combined with last method, filters out any age greater than or equal to 40
  .sort((a,b) => a - b) //sorts them in ascending order
  .reduce((a, b) => a + b, 0); //adds the all together
console.log(combined);
