/*typeof: tells us the type of value we have
console.log(typeof 10) -> number
console.log(typeof 'abc') -> string
console.log(tyoeof true) -> boolean
//
console.log(): prints out the function
//
boolean: we can have an outcome of true or false
console.log(10 > 0) -> true
console.log('A' < 'a') -> true
console.log('Apple' < 'Orange') -> true 
console.log(15 >= 15)-> true
console.log(15 >= 14)-> true
console.log('abc' == 'abc')-> true
console.log(123 != 'abc') -> true
&&(and): only true if both are true
console.log(joe && joe) -> true
||(or): only if both of the values are false 
console.log(12 || 4) -> false
!not: will always give the opposite boolean value
console.log(!true) -> false
//
ternary operator-conditional operator: written with a question mark?(decides which of the values are used) and a colon(kind of like an or):
console.log(true ? "a" : "b") -> "a" 
//
Weird Results: JS is a literal language so it will take every function literally
console.log(10 * null)→ 0
console.log("10" - 1)→ 9
console.log("10" + 1)→ 101
console.log("ten" * 2)→ NaN
console.log(false == 0)→ true
//
console.log(null == undefined) → true - will only show true if there is a null or an undefined 
console.log(null == 0)→ false - no null or undefined so it's false
== or !=: use when we want to find out if a value has a real value
=== or !==: use when we want to find out if two values are precicely equal to eachother *use this *
//
Manual type conversions:
console.log(String(123)) -> '123'
console.log(Number('123')) -> 123
Converting one type to another - first letter capitalized followed with parenthasis with value inside
//
Truthy: all numbers except 0, all non-empty strings, everything else
Falsey: 0, NaN, empty string"", null,undefined
// **List of variable names we CANT use **
(break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import in
instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield)
 */
console.log("I");
console.log("am");
console.log("20");
//
var weather = "sunny";
if (weather == "sunny"){
  console.log("I will go outside and play"); /* The statement is true so it executes */
}
var weather = "foggy";
if (weather == "humid"){
  console.log("It is sunny and hot"); /* The variable is foggy to it executes the else if statement */
} else if (weather == "foggy") {
  console.log("It is foggy!");
} else{
  console.log("Let\'s just stay inside.");
}
//
var count = 0;
while (count < 5) { /* We created a while loop that printed something 5 times */
  count++;
  console.log(count);
}
var count = 1;
do {
  count+=1;
  console.log(count); // do loop: will always execute once before checking the while statement
} while (count < 0);
//
for (var count = 0; count < 4; count+=1){ // for loops need semicolons inside them (create counter, condition, update counter)
  console.log(count);
}
for (var i = 0; i < 10; i++){ //i is 0, while i is less than 10 add 1, and if the remainder of i is 0 log the number
  if (i % 3 == 0){
    console.log(i);
  }
}
var word = "Hi"; //We repeated a word 5 times
var rep = 5;
var total = ""
for (var i = 0; i < rep; i++){
  total = total + word;
}
console.log(total);

for (var i = 0; i < 100; i++){
  if ( i == 10){
    break; //We stopped the program from continuing once it reached 10
  }
}
console.log(i);

for (var i = 0; i < 10; i++){
  if (i === 5){
    continue; //Continue does not read the condition we set and continues after it
  }
  console.log(i);
}
//
var name = "John"; //We made a switch statement 
switch (name) { //Switch var name to hold
  case "Sam": //the case we use as an example 
    console.log("Hi. my name is Sam"); //and the result we will print if the statement is true
    break; //And a break to seperate it from the others
  case ("John"):
    console.log("Hi, my name is John"); 
    break;
  case "Damian":
    console.log("My name is Damian");
    break;
  default:
    console.log("Unsure of the person\'s name");
    break;
}
var result = 100;
switch (result){
  case (25):
    console.log("That is not a good test score");
    break;
  case (100):
    console.log("Good Job") //Since we didn't add a break in here, it read the following statement as well
  case (100):
    console.log("You passed!")
    break;
}
var weather = "sun";
var feeling;
var yourFeeling;
switch (weather){
  case ("rain"):
    console.log("A little depressed");
    break;
  case ("cloud"):
    console.log("Don\'t want to get out of bed");
    break;
  case ("sun"):
    console.log("A picnic would be good.");
    break;
  default:
    console.log("meh");
    break;
  console.log(yourFeeling);
}



