//Regular Expression
var re_1 = /abc/; //when using a regex literal, enclose the pattern between to forward slashed
var re_2 = new RegExp('abc');

console.log(/abc/.test('abc 123')); // -> true
console.log(/abc/.test('Happy crab sunday'))// -> false
var str = 'hello world';
var str2 = str.replace(/hello/, 'goodbye'); //replace hello with goodbye
console.log(str2); // -> goodbye world 
console.log(str); // -> hello world

var re = /ab*c/;//* means that zero or more occurances of the previous item and the one after 
console.log(re.test('abc')); //-> true // true because it has an a and c
console.log(re.test('abbc'));//-> true
console.log(re.test('ac'));//-> true
console.log(re.test('aba'));//-> false //false because it does not have c

// /x backslash that preceeds a non-special character indicates that the next character IS special NOT interp literally
// /* backslash that preceeds a special character indicates the next character is NOT special and interp literally
console.log(/ab*c/.test('abc')); //-> true 
console.log(/ab\*c/.test('abc'));//-> false //mo special character so false
console.log(/ab\*c/.test('ab*c'));//-> true //there is a special character so true

//Caret ^ used in beginning of a pattern will match only if it is at beginning of the string [not match anything inside bracket]
console.log(/^hello/.test('hello world')); // -> true
console.log(/^hello/.test('say hello to tom'))// -> false // not at beginning of string

//Dollar Sign $ used to match something at the end of a string
console.log(/world$/.test('hello world')); // -> true
console.log(/faggot$/.test('He is a faggot'));// -> true
//combine ^ and $ to match exact strings
console.log(/^He died$/.test('He died'));

//plus sign+ will match the previous item one or more times
console.log(/ab*c/.test('ac')); //->true
console.log(/ab+c/.test('ac')); //->false
console.log(/ab+c/.test('abc'));//->true
console.log(/ab+c/.test('abbbbbbc'));//->true//previous item is b

//period. matches any single character except the newline character

console.log(/a.c/.test('abc'));//-> true
console.log(/a.c/.test('abbc'));//->false
console.log(/a.c/.test('a0c'));//->true

//Matching ranged characters - .+,* are not special characters that can be matched in ranged set
var ex = /[012345678]/; //[0-9] is the same
console.log(ex.test('the year is 2021')); //true because 2 is in the set

//Caret inside brackets 
var re = /[^a-c]/;
console.log(re.test('abc'));
// -> false
console.log(re.test('abcd'));
// -> true
// matches d

/*
/g - is a global replace
\d - Matches a digit character. Same as [0-9].
\D - Matches a non-digit character. Same as [^0-9].
\w - Matches a alphanumeric character including underscore. Same as [A-Za-z0-9_].
\W - Matches any non alphanumeric character. Same as [^A-Za-z0-9_].
\s - Matches a white space character, space, tab, newline.
\S - Matches any non white space character.
*/
var skuPattern = /[A-Z]\d-\d\d\d\d[A-Z]\d/;
console.log(skuPattern.test('The sku of apple is A3-8733Z9, can you add 100 quantities for me please?'));
// -> true
console.log(skuPattern.test('The sku of orange is B2-772AZ0, can you check if it is correct because I cannot seem to find it in the system.'));
// -> false
//Global replace
var str = 'I think apples are great, I eat one apple a day, everyday.';
var str2 = str.replace(/apple/g, 'orange');
console.log(str2);
// -> I think oranges are great, I eat one orange a day, everyday.

//Debugging 
var range = function (a, b) {
  var arr = []
  if (a < b) {
    while (a <= b) {//the bug happened here where we changed < to <= and it equals exactly 5 and prints it out
      arr.push(a);
      a++;
    }
  } else if (a > b) { //else if a is less than b inside while a is greater than or equal to b push arr into a and subtract by1
    while (a >= b) {
      arr.push(a);
      a--;
    }
  } else {
    arr.push(a);
  }
  return arr;
}

