const { p } = require("shelljs");

var div = document.getElementsByTagName('div')[0];
var firstParagraph = document.getElementById('second-inner-par');

function removeNote () {
  if (firstParagraph) {
    div.removeChild(firstParagraph);
  }
}


//DOM Manipulation

var firstHClass = document.querySelector('.new-h1');
var secondButton = document.querySelector('.new-button');

firstHClass.style.color = 'yellow'; //changed color of the font text
firstHClass.style.backgroundColor = 'blue'; //changed color of the background for text

secondButton.classList.add('change');//added 'change' class to .new-button class

firstHClass.classList.add('newest-class');
firstHClass.classList.remove('newest-class');//removes class

secondButton.addEventListener('click', function (){//addEventListener - takes event(like press or scroll), then function
  firstHClass.classList.add('new-button');// changes color of firstHClass when the button is clicked
}) 

var bold = document.querySelector('.bold');//referenced .bold class in html and called it bold var
var activation = document.querySelector('.activation'); 


activation.addEventListener('click', function () { //activation var NOT class, 'click' action then function
  bold.classList.toggle('activation-parameters'); // added activation-parameters to bold var NOT class
//toggle - when button press it activates, when press again, it deactivates
})

const unorderedList = document.querySelectorAll('.unordered-list li'); //returns all of the stuff in the .unordered-list li
console.log(unorderedList);

const firstInput = document.querySelector('.first-input');


for (user of unorderedList) { //for the users of var unorderedList
  user.addEventListener('click', function() { //add an event listener to user upon click with function 
    console.log(this); //resulting in this(each)
    this.style.color = 'blue'; //every times its clicked, it will turn blue
  })
}

console.log(firstInput.value);
const justUnorderedList = document.querySelector('.unordered-list');//defined new name for unordered list
const thirdButton = document.querySelector('.third-button'); //new var for third button in html

thirdButton.addEventListener('click', function () {
  //create an li
  const newLi = document.createElement('LI'); //var newLI = create a new element LI(list)
  const liContent = document.createTextNode(firstInput.value); //createTextNode - creates a string text from spec value
  //add the input value inside the new lu
  newLi.appendChild(liContent);//attached/appended content to the list(newLi)
  //attach the li to list
  justUnorderedList.appendChild(newLi);
})


//Create New Nodes

function addTextNode() {
  var newTextNode = document.createTextNode('Hello World');//created a string argument in the div container 
  document.getElementById('container').appendChild(newTextNode); 
}

function addNewParagraph() {
  var newParagraph = document.createElement('p');
  var newTextNode = document.createTextNode('Hello World');
  newParagraph.appendChild(newTextNode);
  document.getElementById('container').appendChild(newParagraph);
} 

function setContent () {
  var html = '<p>Hello World</p>' + '<p>Hello World x2</p>' + '<p>Hello World x3</p>';
  document.getElementById('container').InnerHTML = html;
  console.log(html);
}

//ClassName and Id Node Attributes

var makeGreen = function () { //set a function makeGreen 
  var paragraph = document.getElementsByTagName('p')[4]; //targeted the specific paragraph in html we wanted, 
  paragraph.className = 'green'; //then, set paragraph className equal to green so that it changed in css
}

var makeBold = function () {
  var paragraph = document.getElementsByTagName('p')[4];
  paragraph.id = 'bold';
}



var someParagraph = document.getElementById('some-paragraph');

someParagraph.classList.add('bold','big-font'); //we can add multiple method calls to the classList
someParagraph.classList.remove('bold');//we removed bold from the class
someParagraph.classList.replace('big-font', 'red-bg'); //we replaced big-font with red background

someParagraph.classList.toggle('red-bg');//toggle will add it if doesn't exist and if it does then it will remove it

console.log(someParagraph.classList.contains('white-text')); //checks if it contains an attribute - true or false

console.log(someParagraph.classList);

function show (index) { //.children - returns only element nodes 
  //.childNodes - returns all node types
  var newParagraphs = document.getElementById('new-paragraphs').children; //only show the element that the user wants to see
  for (var i = 0; i < newParagraphs.length; i++) { //for the length of newParagraphs
    newParagraphs[i].classList.toggle('hidden', index !== i); //newParagraphs of i classlist toggle access hidden and index does not equal i
  }
}

var makeParagraphsBlue = function () {
  paragraph = document.getElementById('paragraphs2').children;
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (paragraph.getAttribute('data-color') === 'blue') {
      paragraph.classList.add('blue');
    }
  }
}
/*
var h1 = document.querySelector("h1");
      // Assign the value of data-color to the color variable //get the color attribute and replace with blue
      var color = h1.getAttribute('data-color','blue');
*/

//Edit Node Styles

var pageTitle = document.getElementById('page-title');
pageTitle.setAttribute('style', 'position: relative;');// we changed the style with set attribute, style, then the change 
pageTitle.setAttribute('style', 'left: 10px;');

pageTitle.style.color = 'orange';
pageTitle.style.backgroundColor = 'black';
pageTitle.style.top = '10px';
//thes two methods will override entire css sheet
var p = document.getElementsByTagName('p')[2];
p.style.cssText = 'color: red; font-size: 12px; background-color: orange'; //we can edit multiple 
p.setAttribute('style', 'font-weight: bold');

//random rgb background 

var randomBackground = function () {
  var rgb = [0, 0, 0].map(function () {
    return Math.floor(Math.random() * 256);
  });

  document.body.style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
};

var clearBackground = function () {
  document.body.style.backgroundColor = '';
}

var addCSSNode = function () {
  var styleNode = document.createElement('style'); //created the style element in html
  styleNode.innerHTML = '#paragraph1 {color: red; font-weight: bold;}'; //changed the color of paragraph1
  document.getElementsByTagName('head')[0].appendChild(styleNode); //appended the changes and styleNode to head element
}


var rules = document.styleSheets[0].cssRules;
for (var i = 0; i < rules.length; i++) {
  console.log(rules[i].selectorText + '{' + rules[i].style.cssText + ' }');
}// -> p { color: yellow; }
// -> button { background-color: yellow; }

//animation
const fancy = document.querySelector('.fancy');
const fancyString = fancy.textContent; //gives the text inside the class
const splitFancy = fancyString.split(''); //gives each indiv letter in array
fancy.textContent = '';

for (var i = 0; i < splitFancy.length; i++) {
  fancy.innerHTML += '<span>' + splitFancy[i] + '</span>'; //add a span each loop in the splitFancy array for each letter(i)
}
let char = 0;
let timer = setInterval(onTick, 50); //timer = a setInterval on the function onTick every 50
function onTick () {
  const span = fancy.querySelectorAll('span')[char]; //getting the spans that are generated above for loop and char from 0 to the finish
  span.classList.add('fade');
  char++;
  //make a break section
  if (char === splitFancy.length) {
    complete(); //finishes animation
    return;
  }
}
function complete () {
  clearInterval(timer);
  timer = null;
}

var left = 0;
var moveBoxRight = function () {
  var box = document.querySelector('#box'); //move the box to the right every time we click the button
  left += 10;
  box.style.left = left + 'px';
}

var angle = 0;
function horizontal () {
  var box = document.querySelector('#box');
  angle += 0.001;
  box.style.left = (Math.abs(Math.sin(angle)) * (document.body.clientWidth - 50)) + 'px';
}

var interval;
function startInterval () {//returns an id that indentifies the timer created
  interval = window.setInterval(horizontal, 10); //start the animation 
}
function stopInterval () {
  if (interval) {
    window.clearInterval(interval);
  }
}
//window.requestAnimationFrame - tells the browser it would like to perform an animation

var lastTime = null;
var request;
function oscillateByStep (time) {
  var box = document.querySelector('#box');
  if (lastTime !== null) {
    angle += (time - lastTime) * 0.001;
  }
  lastTime = time; // we made a program where the square moves to the left based on the efficiency of the system, it will request to run an animation from the computer, it it can, it will run, otherwise, it wont
  box.style.left = (Math.abs(Math.sin(angle)) * (document.body.clientWidth - 50)) + 'px';

  request = requestAnimationFrame(oscillateByStep);
}
function startAnimationRequest () {
  request = requestAnimationFrame(oscillateByStep);
}
function stopAnimationRequest () {
  if (request) {
    window.cancelAnimationFrame(request);
  }
}

//sliding box

function toggleAnimation () {
  var boxSlide =  document.querySelector('.slide');
  boxSlide.style.toggle('sliding');
}





/* //Insert Something after
 var insertAfter = function (parentNode, targetNode, referenceNode) {
  // Implement you insertAfter function
    parentNode.insertBefore(targetNode, referenceNode.nextSibling)
*/

/* //Insert something before
var list = document.getElementsByTagName("ul")[0];
var b = document.querySelector("#b");
var c = document.querySelector("#c");
// Move c to before b
list.insertBefore(c,b);
*/

/* //replace reference with target
var ul = document.querySelector("ul");
var target = document.querySelector("#target");
var reference = document.querySelector("#reference");
// Replace reference with target
ul.replaceChild(target, reference); //parent(replaceChild)(replce reference with target)
*/






/* classList:
add: add(String [, String]) Accepts multiple string values of class names separated by comma to be added to the element. If a class already exists, it will be ignored.
remove: remove(String [, String]) Accepts multiple string values of class names separated by comma to be removed from the element. If a class doesn't exist, it will be ignored.
toggle: toggle(String [, condition]) Toggles the class value on the element. If the class doesn't exist, add it and return true. If the class exists, remove it and return false. Accepts a second optional condition argument. If condition is true, add class value, if condition is false, remove class value.
contains: contains(String) Checks whether the element contains the class value, returns true or false.
replace: replace(oldClass, newClass) Replaces oldClass with newClass.
*/