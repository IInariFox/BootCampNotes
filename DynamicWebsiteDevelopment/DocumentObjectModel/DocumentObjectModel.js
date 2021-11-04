const body = document.body
body.append("New Words", "Bye Words")
//appendChild - only append elements like div, p, header etc
//apend - append elements and strings 

const div = document.createElement('div')
div.innerText = "New Text" 
div.textContent = 'Hello world two'
div.innerHTML = '<strong> Bolded Text </strong>' //innerHTML - reads the html inside of the quotations
/*const strong = document.createElement('strong');
strong.innerText = 'Hello world 2' //this code is the same as line 9 **preferred**
div.append(strong) */

body.append(div) //this is how we add an JS to the html file

const newDiv = document.querySelector('div')

console.log(div.textContent) //copies from HTML, so it will look how it appears on file page (indentation and spacing)
console.log(div.innerText) // displays test how it normally displays text

const secondDiv = document.querySelector('div')
const spanHi = document.querySelector('#hi')
const spanBye = document.querySelector('#bye')
spanBye.remove() //remove - removes the span element from existence
secondDiv.append(spanBye) //adds span back

secondDiv.removeChild(spanHi)// removes spanHi but as a child of our div //other one is better


//modifying element attributes
console.log(spanHi.getAttribute('id'))
console.log(spanHi.id)//does the same thing as above
console.log(spanHi.title)// same thing as above
console.log(spanHi.setAttribute('id', 'daqwd')) //changes the id from hi to dawqd
spanHi.id = 'awdawd'//does the same as above
spanHi.removeAttribute('title') //it no longer has a title

console.log(spanHi.dataset)//dataset - has our test property name and 'this is a test' 
console.log(spanHi.dataset.test)//prints out 'this is a test'
spanHi.dataset.newName = 'dsNewName' // creates new name for the data set

//modifying element classes

spanBye.classList.add('new-class') //.add - adds a new class to element
spanBye.classList.remove('bye1') //.remove - removes a class from the element
spanBye.classList.toggle('bye3') //.toggle - remove it if it exists or add it if it doesn't
spanBye.classList.toggle('bye3', true) // boolean, automatically remove it if we pass false or add if true

//modifying element style
spanHi.style.color = 'red' //turns text color into red
spanHi.style.backgroundColor = 'blue' //turns background color of text into blue

//Trees and Nodes
console.log(document.nodeType);
console.log(document.body.nodeType)


function printNodeTypes () {
  var children = document.body.childNodes;
  for (i = 0; i < children.length; i++) { //look at console on chrome under console
    console.log(children[i].nodeType + ': ' + children[i].nodeName);
  }
}
printNodeTypes();
//Traversing the DOM
/*
parentNode: Returns a Node that is the parent of this node. If there is no such node, this property returns null.
childNodes: Returns an array like NodeList of all children of this node.
firstChild: Returns the first direct child of this node
lastChild Returns the last direct child of this node
nextSibling: Returns the next node in the tree
previousSibling: Returns the previous node in the tree
*/
//document.body.childNodes: contains h1, a and p - access through bracket notation[0 is h1][1 is a][2 is p]

const parentList = document.getElementById('fruitList'); //got the element by id 'fruitList'
const childrenList = parentList.children; //children property to get the children in list

for (var i = 0; i < childrenList.length; i++) {
  console.log(childrenList[i]);
}

const addedOrange = document.createElement('li');
addedOrange.textContent = 'Oranges'; //added orange to the list

parentList.appendChild(addedOrange);

console.log(childrenList);
//
//Finding Elements
var foundParagraphs = document.getElementsByTagName('p'); //.getElementsByTagName - gives us element via tag name
console.log(foundParagraphs.length); //gives us 3 or however many p's are in the document

var insideDiv = document.getElementsByTagName('div')[1]; //the second div in document [starts at 0]
var divParagraphs = insideDiv.getElementsByTagName('p')[2]; //dot variable insideDiv
console.log(divParagraphs.length);
//
var paragraphClass = document.getElementsByClassName('first-class');
console.log(paragraphClass.length); //gets us 1

var secondParagraphClass = document.getElementsByTagName('div')[2].getElementsByClassName('second-class');
console.log(secondParagraphClass.length);//gets us 1, but we have two classes with the 'second-class' name

//Query Selectors

//goal: get the second and third span
var secondAndThirdSpan = [].splice(document.getElementsByTagName('div')[3].children).filter(function(a) {
  return a.tagName === 'span'; //long poopy method
});
console.log(secondAndThirdSpan); 

var querySecondAndThirdSpan = document.querySelectorAll('body > div > div > span');
console.log(querySecondAndThirdSpan);

var secondQuerySecondAndThirdSpan = querySelector('body > div > div > span'); //sister method works similairly but it will only return the first matching element or null
console.log(secondQuerySecondAndThirdSpan);


var Peter = document.querySelector("ul > li > ul > li:first-child > ul > li:first-child");
var Priscilla = document.querySelector("ul > li > ul > li:first-child > ul > li:last-child");
var Judy = document.querySelector("ul > li > ul > li:last-child > ul > li:nth-child(2)");
var BenAndLiza = document.querySelector("ul > li > ul > li:last-child > h3");
var FamilyTree = document.querySelector("#familyTree");
console.log(Peter.textContent);
console.log(Priscilla.textContent);
console.log(Judy.textContent);
console.log(BenAndLiza.textContent);