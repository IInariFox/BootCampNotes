const { set } = require("shelljs");

const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//setup click event listener on the granparent
grandparent.addEventListener('click', (e) => {//takes 3 parameters: first is type of event that we want, second is a callback
  console.log('granparent 1 capture');
},{capture: true})

grandparent.addEventListener('click', (e) => {//takes 3 parameters: first is type of event that we want, second is a callback
  console.log('granparent 1 bubble');
})

parent.addEventListener('click', (e) => {
  console.log('parent bubble');
},{once: true})//will only run the sequence once

parent.addEventListener('click', (e) => { //bubble event: prints out child, parent then grandparent
  e.stopPropagation();//stops the event, so it will no longer print in the console
  console.log('child capture');
})
setTimeout(() => {
  parent.removeEventListener('click', printHi) //removes the evenListener 
}, 2000) //will remove itself after 2000ms or 2 seconds
function printHi() {
  console.log("HI")
}

var divs = document.querySelector('div');
divs.forEach((div) => { //for each div, add an event listener
  div.addEventListener('click', () => {
    console.log('hi');
  })
}) 
var newDiv = document.createElement('div');
newDiv.style.color = 'red';
document.body.append(newDiv);

//

function paragraphClicked () {
  console.log('paragraph clicked');
}
function inputHasFocus () {
  console.log('Input is focused');
}

var paragraph = document.querySelector('p'); //on attribute is accessed as properties of element object 
paragraph.onclick = () => { //changing the onclick handler of the above paragraph and add an onkeypress handler to input eleme
  console.log('--Paragraph clicked--');
};
var input = document.querySelector('input');
input.onkeypress = () => {
  console.log('Trying in input');
};

//AddEventListener

var button = document.querySelector('#button'); //attach handlers to button upon click it will print out text
button.addEventListener('click', () => {
  console.log('button has been clicked');//a string rep the event we want to target 
});
button.addEventListener('click', () => {
  console.log('Button was clicked again'); //handler function 
});

//RemoveEventListener
function clickOnce () {
  console.log('Button clicked once');
  button.removeEventListener('click', clickOnce); //removeEventListener is executed inside handler func and removes handler after running once
};
button.addEventListener('click', clickOnce);


//EventObject

button.addEventListener('click', (event) => { //event to check which button on the mouse is clicked
  if (event.button === 0) {
    console.log('Primary Button'); //but does not work with middle and second buttons
  } else if (event.button === 1) {
    console.log('Middle Button');
  } else if (event.button === 2) {
    console.log('Secondary button');
  }
});
button.addEventListener('mousedown', (event) => { //this program works as intended
  if (event.button === 0) {
    console.log('Primary Button'); 
  } else if (event.button === 1) {
    console.log('Middle Button');
  } else if (event.button === 2) {
    console.log('Secondary button');
  }
  console.log(event);
});

//Event Propagation

var thirdButton = document.getElementById('third-button'); //will print out child > parent > granparent > window
thirdButton.addEventListener('click', () => {
  console.log('clicked third button');
});
var secondParagraph = document.getElementById('second-paragraph');
secondParagraph.addEventListener('click', () => {
  console.log('clicked second paragraph');
});

document.addEventListener('click', () => {
  console.log('clicked document');
});
window.addEventListener('click', () => {
  console.log('clicked other document');
});

//instead of giving each button an event selector

document.body.addEventListener('click', (event) => {
  if (event.target.matches('.button')) {
    console.log('we selected only the targeted button')
  }
});

//Prevent Default
var preventDefault = document.getElementById('unamed-link');
preventDefault.addEventListener('click', (e) => {
  console.log('Not taking you there.');
  e.preventDefault();//prevents us from going to the website
});


//Mouse Events 

var log = document.getElementById('log');
var prependChild = (newNode) => {
  this.insertBefore(newNode, this.firstChild); //logs the newNode('text')  before the first child
}
var appendMessageToLog =  (message) => {
  var newP = document.createElement('p');
  var newTextNode = document.createTextNode(message);
  newP.appendChild(newTextNode);
  prependChild.call(log, newP);//calls the method of the object substituting log for newP
}

var containerOne = document.getElementById('container-one');
window.addEventListener('click', (event) => { //made an event listener for 'click
  if (event.target.matches('#container-one') || event.target.matches('#box-one') || event.target.matches('#box-two')) {
    appendMessageToLog(event.target.id + ': click');
  }
});

window.addEventListener('mousedown', (event) => { // made an event listener for mousedown
  if (event.target.matches('#container-one') || event.target.matches('#box-one') || event.target.matches('#box-two')) {
    appendMessageToLog(event.target.id + ': mousedown');
  }
});

window.addEventListener('mouseup', (event) => {
  if (event.target.matches('#container-one') || event.target.matches('#box-one') || event.target.matches('#box-two')) {
    appendMessageToLog(event.target.id + ': mouseup');//targets the id of the event, giving us what it does
  }
});

window.addEventListener('dblclick', (event) => {
  if (event.target.matches('#container-one') || event.target.matches('#box-one') || event.target.matches('#box-two')) {
    appendMessageToLog(event.target.id + ': dblclick');
  }
});

//Mouse Movements

var blob = document.querySelector('#blob');
window.addEventListener('mousemove', (event) => {
  blob.style.left = event.pageX + 'px'; //gives the position of the pointer in relation to the top left corner of the entire page
  blob.style.top = event.pageY + 'px';
});

var log = document.getElementById('log');
function prependChild (event) {
  this.insertBefore(newNode, this.firstChild);
}

function appendMessageToLog (message) {
  var newP = document.createElement('p');
  var newTextNode = document.createTextNode(message);
  newP.appendChild(newTextNode);
  prependChild.call(log, newP);
}

var boxOne = document.getElementById('box-one');
var boxTwo = document.getElementById('box-two');
var boxThree = document.getElementById('box-three');

boxOne.addEventListener('mouseenter', (event) => {
  appendMessageToLog(event.target.id + ': mouseenter');
});
boxTwo.addEventListener('mouseenter', (event) => {
  appendMessageToLog(event.target.id + ': mouseenter');
});
boxThree.addEventListener('mouseenter', (event) => {
  appendMessageToLog(event.target.id + ': mouseenter');
});

boxOne.addEventListener('mouseleave', (event) => {
  appendMessageToLog(event.target.id + ': mouseleave')// this is a long way of doing this, instead, use :hover pseudocode in css
});
boxTwo.addEventListener('mouseleave', (event) => {
  appendMessageToLog(event.target.id + ': mouseleave')
});
boxThree.addEventListener('mouseleave', (event) => {
  appendMessageToLog(event.target.id + ': mouseleave')
});

boxOne.addEventListener('mouseover', (event) => {
  appendMessageToLog(event.target.id + ': mouseover');
});
boxTwo.addEventListener('mouseover', (event) => {
  appendMessageToLog(event.target.id + ': mouseover');
});
boxThree.addEventListener('mouseover', (event) => {
  appendMessageToLog(event.target.id + ': mouseover');
});

//draggable bar
var prevPage;
window.addEventListener('mousemove', (event) => {
  if (prevPage) {
    var distanceMoved = event.pageX - prevPage;
    var newBarWidth = Math.max(20, bar.offsetWidth + distanceMoved); //offsetWidth - read=only property returns the layout width of an element
    bar.style.width = newBarWidth + 'px'; //the bar will move whenever we move the mouse
  }
  prevPage = event.pageX;
});

var prevPage;
var bar = document.querySelector('#bar');
function resizeBar (event) {
  if (event.buttons !== 1) {
    window.removeEventListener('mousemove', resizeBar);
  } else {
    var distanceMoved = event.pageX - prevPage;
    var newBarWidth = Math.max(20, bar.offsetWidth + distanceMoved);
    bar.style.width = newBarWidth + 'px';
    prevPage = event.pageX;
  }
};

bar.addEventListener('mousedown', (event) => {
  if (event.buttons === 1) { //event.buttons: accurately returns the current pressed state of the mouse buttons
    //event.button - will only indicate the button that triggered the event for mousedown mouseup click etc
    prevPage = event.pageX;
    window.addEventListener('mousemove', resizeBar);
  /* mouseevent.button values
  0 : No button or un-initialized
  1 : Primary button (usually left)
  2 : Secondary button (usually right)
  4 : Auxilary button (usually middle or mouse wheel button)
  8 : 4th button (typically the "Browser Back" button)
  16 : 5th button (typically the "Browser Forward" button)
  */
  }
});

//Scroll Events
var progress = document.getElementById('progress'); //give percentage of how much is left in vertical scroll 
window.addEventListener('scroll', (event) => {
  var scrollableHeight = document.body.scrollHeight - window.innerHeight; //scrollHeight - full height of the page plus padding content not visible
  var percentage = Math.round((window.pageYOffset / scrollableHeight) * 100); //clientHeight - includes padding but not horizontal  
  progress.innerHTML = percentage + '%'; //window.innerHeight - height of windows viewport including the height of the horizontal scrollbar
});

//Detecting End of Scroll on Element

//when the user has scrolled to the end, the content pops up
var terms = document.getElementById('terms');
var agree = document.getElementById('agree');

function enableCheckBox (event) {
  var scrollableHeight = terms.scrollHeight - terms.clientHeight; //ref images in other file - scrollHeight(biggest) clientHeight(smaller)
  if (scrollableHeight === terms.scrollTop) { //end of the scroll, important for popup at end of scroll
    agree.disabled = false;
    terms.removeEventListener('scroll', enableCheckBox);
  }
}
terms.addEventListener('scroll', enableCheckBox);


var nav = document.body.querySelector('#top-nav'); // changes color of navbar that is fixed 
var hero = document.body.querySelector('#hero');
window.addEventListener('scroll', (event) => {
  if (window.pageYOffset > hero.scrollHeight) { 
    nav.classList.add('inverse'); //apply inverse class to nav only after we scroll passed the hero element
  } else {
    nav.classList.remove('inverse');
  }
});


//Key events 
/*
keydown: when the key is first pressed.
keypress: if the pressed key is not a modifier key alt, shift, ctrl, meta (Command on Mac) this event is fired.
keyup: when the key is released.
*/

var log = document.getElementsByClassName('log');
window.addEventListener('keydown', (event) => { //finds out which key was pressed
  var p = document.createElement('p');
  p.innerHTML = 'keydown: ' + event.key +  "";
  log.appendChild(p);
});

var log = document.body.querySelector('.log'); //finds out which special keys were pressed
window.addEventListener('keydown', function(event) {
  var p = document.createElement('p');
  var message = 'keydown: key="' + event.key + '"';
  var modifiers = [];
  if (event.ctrlKey) {
    modifiers.push("Control");
  }
  if (event.shiftKey) {
    modifiers.push("Shift");
  }
  if (event.altKey) {
    modifiers.push("Alt");
  }
  if (event.metaKey) {
    modifiers.push("Meta");
  }
  if (modifiers.length > 0) {
    message += ' Modifiers="' + modifiers.join(", ") + '"';
  }
  p.innerHTML = message;
  log.appendChild(p);
});


//movePacman
window.addEventListener('keydown', function(event) {
  var pacman = document.getElementById('pacman');
  switch (event.key) {
    case "ArrowUp":
      pacman.style.top = (parseInt(pacman.style.top, 10) - 2) + "px"; //
      break;
    case "ArrowDown":
      pacman.style.top = (parseInt(pacman.style.top, 10) + 2) + "px";
      break;
    case "ArrowLeft":
      pacman.style.left = (parseInt(pacman.style.left, 10) - 2) + "px";
      break;
    case "ArrowRight":
      pacman.style.left = (parseInt(pacman.style.left, 10) + 2) + "px";
      break;
  }
});
/* Gets value on key up: created keyup event listener on the input element and assigned event.key value to key var
 var input = document.querySelector("input");
  var key;
  // Implement your code below
  input.addEventListener('keyup', (event) => {
    key = event.key;
  });
*/

//Focus Events

var input = document.getElementById('second-input');
var label = document.getElementById('label'); // added event listener on focus, which will add in the class displaced
input.addEventListener('focus', () => {
  label.classList.add('displaced');
});
input.addEventListener('blur', () => { //when no longer in focus, it will remove class displaced
  label.classList.remove('displaced');
}); 
//
//Load event
window.addEventListener('load', () => { //load - will fire after everything has loaded
  var h1 = document.querySelector('h1'); //this will turn the text red once the page has loaded
  h1.style.color = 'red';
});

//DOM Content loaded
window.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded - loads before 'load' above
  var h1 = document.querySelector('h1');
  h1.style.color = 'orange';
});

//other load events

function imageLoaded () {
  console.log('image loaded');
}

//Timers
var timer = document.body.querySelector('#timer');
var milliseconds = 0;
var timer = null;

function startTimer () {
  if (!timer) {
    timer = setInterval( () => { //used timer and setInterval to to accept a callback function and delay in number of milliseconds
      timer.span.innerHTML = ++milliseconds;
    }, 1); //executed every 1 millisecond
  }
}
function stopTimer () {
  window.clearInterval(timer);
  timer = null;
};

//window.Data for time

var timer = document.body.getElementById('timer');
var timepassed = 0;
var someTimer = null;
var startTime;

function startTimer () {
  if (!someTimer) {
    startTime = Date.now() - timepassed; //gets us milliseconds between two specified dates in time
    someTimer = setInterval( () => {
      timepassed = Date.now - startTime;
      timer.innerHTML = timepassed;
    }, 20); //executed every 20 milliseconds
  }
};
function stopTimer () {
  window.clearInterval(someTimer);
  someTimer = null;
};
//box animation
var box = document.body.querySelector("#box");
var timer = null;
var previousTime;
var lastPosition = 0;
var startAnimation = function () {
  if (!animationTimer) {
    timer = window.setInterval(function () {
      if (previousTime) {
        var newTime = Date.now();
        var timepassed = newTime - previousTime;
        previousTime = newTime;
        var distanceMoved = Math.round(timepassed / 5);
        var newPosition = lastPosition + distanceMoved;
        var positionX = Math.abs((Math.floor((newPosition) / (document.body.clientWidth - 50)) % 2 === 0 ? 0 : document.body.clientWidth - 50) - Math.round(newPosition % (document.body.clientWidth - 50))) + 'px';
        box.style.left = positionX;
        lastPosition = newPosition;
      } else {
        previousTime = Date.now();
      }
    }, 20);
  }
}
var stopAnimation = function () {
  window.clearInterval(timer);
  timer = null;
}

//Browser Javascript is singlethreaded

function stopTimerWithConfirm () { //browser will only do one thing at a time, timer will not run until confirm is dismissed
  var shouldStop = window.confirm('Are you sure you want to stop the timer?');
  if (shouldStop) {
    stopTimer();
  }
}; 


//setTimeout
//changes the colors of the box after pressing the button 
var box = document.body.querySelector("#box");
var display = document.body.querySelector("#display"); //defined all of our parameters
var newColorSpan = display.children[0];
var timeout = null;
var colors = ["pink", "red", "blue", "green"];
var count = 0;

var changeColor = function () {
  if (!timeout) {
    var newColor = colors[++count % colors.length];
    display.hidden = false;
    newColorSpan.innerHTML = newColor;
    timeout = window.setTimeout(function () { //setTimout - delay timer that will execute a function after a delay in milliseconds
      display.hidden = true;
      box.style.backgroundColor = newColor;
      timeout = null;
    }, 2000);
  }
}

var cancelChange = function () {
  window.clearTimeout(timeout);
  display.hidden = true;
  count--;
  timeout = null;
}



function log (msg) {
  console.log('message');
} //set timeout runs once
setTimeout(log, 1000, 'Hello'); //1000 = 1 second //parameters: function called then time, then whatever string included


//setInterval - runs multiple times

var start = setInterval(log, 500, 'msg');

//setTimeout 
setTimeout(bye, 3000); //after 3 seconds 
console.log('hello'); // but it will print this out first since it is outside and not specified 

function bye() {
  console.log('goodbye'); //it will run this function and print out goodbye
}


var start = setTimeout(go, 5000);

clearTimeout(start);//clearTimeout - will stop the start var or setTimeout from running
function race() {
  console.log('GO!')
}

var count = 0;
var interval = setInterval(counter, 2000);//setInterval is called var interval which will go every 2 seconds on the function counter

function counter () {
  console.log(++count); //adds 1 every 2 seconds
}


//Debouncing events

var valid = document.getElementById('valid');
var input = document.getElementById('username');
var timeout;

input.addEventListener('input', () => { //checks whether a username is available
  clearTimeout(timeout);
  if (input.value.length > 0) {
    valid.innerHTML = 'Checking';
    //debounce
    timeout = setTimeout(() => { //In the setTimeout method, we want to check whether a previous timeout event exists, if it does, cancel it, then create a new timeout event.
      var isAvailable = true;
      if (isAvailable) {
        valid.innerHTML = 'Available';
      } else {
        valid.innerHTML = 'Not available';
      }
    }, 1000);
  } else {
    valid.innerHTML = '';
  }
});


var scrollTop = document.getElementById('scrollTop');
var container = document.getElementsByClassName('container');
var scheduled;

container.addEventListener('scroll', (event) => {
  console.log('non rate limiting log message', Date.now());
  if (!scheduled) {
    window.setTimeout(() => {
      scrollTop.innerHTML = event.target.scrollTop;
      scheduled = false;
      console.log('rate limited log message', Date.now());
    }, 200);
  }
  scheduled = true;
});
//stop from printing click after mutliple clicks 
var debounce = (fn, delay) => { //pass a function and a delay
  let timeoutID;
  return function(...args) {
    if (timeoutID) { //if there was a previously set timeoutid then it would clear it first so 
      clearTimeout(timeoutID);// that it wont execute after that
    }
  timeoutID = setTimeout ( () => {//and it would set a new timeoutid
    fn(...args);
  }, delay);
};
};
document.getElementById('my-id').addEventListener('click', debounce (e => { //pass this function
  console.log('clicked');
}, 2000)) //two arguments: function we want to execute and the time

var debounce = (fn, delay) => { //
  let timer; //created a variable timer
  return function(...args) { //
    clearTimeout(timer);
    timer = setTimeout(() => { //invoke the function that we pass in
      fn(...args)
    }, delay);
  }
}
let increment = (incAmount) => {
  console.log(count++);
}
incrementCount = debounce(incrementCount, 1000); //delay time - time ellapse until the function executes
window.addEventListener('scroll', incrementCount); //debounced version of incrementCount