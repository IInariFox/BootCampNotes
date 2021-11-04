$(document).ready(function () {
  $("#first-h1").hover(function() { //if we hover over the code, with the ID first-h1, do the function
    $(this).css("color", "yellow"); //when we hover over it, it turns yellow
  },
  function () {
    $(this).hide(); //hide method hides the element by setting its display property to none
  });
});

//$ - dollar sign is how we reference the jQuery code
//('')parenthasis quotes is how we target our selector
//.ready - when this is ready this is what is going to happen
$('document').ready(function(){ //target the entire document, when ready, create a callback function that targets the body and appends(pushes) a new h2 to the html
  $("body").append('<h2>I love jQuery</h2>');
});

/* Selectors and filters */
$('document').ready(function() { 
  $('.jp-class').css('border', '1px solid orange'); //targeted the .jp-class and edited as css
});

$('document').ready(function() { 
  $('p:last').css('border', '1px solid black'); //we targeted the second <p> by using a colon: last
});

/* Replacing content */
$('document').ready(function() {
  var textBox = $('<p>');//replace anything with this paragraph - textBox var is equal to a new paragraph element
  textBox.append('<h2>This replaced the lorem ipsum</h2>');//push the h2 and replace the div element
  $('#text-box').html(textBox); //target div id/html with the <p> element and append textBox
});

/* Handling Events */
$('document').ready(function() {
  $('#second-box').on('click', whenMouseIsClicked);//kind of like addEventListener - on the click, when the mouse is clicked
  $('#second-box').on('mouseleave', whenMouseLeaves);//second event, mouseleave, when a mouse leaves
  function whenMouseIsClicked() { //callback the first event
    $('#second-box').html('<p>You clicked me and changed something</p>');//when clicked, target the html and change it to <p>
  }
  function whenMouseLeaves() {
    $('#second-box').html('<p>Leaves mouse</p>');//when the mouse leaves the hover, it changes to this text <-
  }
});

/* Hover Effects */
$('document').ready(function() {
  $('#first-show').on('click', function() { //created a function on the #first-show id
    $('#second-box').show(); //when it is clicked, show the #second-box
  });
  $('#first-hide').on('click', function() {  //targeted the #first-hide and on click, it hides 
    $('#second-box').hide();//hides the copy
  }); 
  });

/* Hide/show events */
$('document').ready(function() {
  $('.textCopy').hover(highlightCopy);//target the .text-copy class, on hover reference highlightCopy function
  function highlightCopy () {
    $(this).toggleClass('highlight');//toggle a change when the text is hovered over and change it to class highlight in css - does not exist in html
  }
});

/* Fading */
$('document').ready(function() {
  $('#fade-in').on('click', function() { //created id of #fade-in and on click access function 
    $('#third-box').fadeIn(3000, function() { //that accesses anything within #third-box we want to fade in 3 seconds and 
      alert('Im done fading in'); // alert us when it is done
    }); 
  });
  $('#fade-out').on('click', function() { //on the click, it will access function that targets #third-box and fades out fast
    $('#third-box').fadeOut('fast', function() { // which gives us function that alerts us when done
      alert('Im done fading out'); 
    }); 
  });
});

/* Slide */
$('document').ready(function() {
  
  $('#slide-up').click(function() { //when we press button #slide-up, it will access function
    $('#fourth-box').slideUp('2000', 'linear'); //which will make the #fourth-box slide up in 2 sec in linear motion
  });
  $('#slide-down').click(function() { // when press #slide-down, it will access function
    $('#fourth-box').slideDown('2000', 'linear'); //which will slidedown in 2 sec in linear motion
  });
  $('#toggle-slide').click(function() { //then, press #toggle-slide which will access function
    $('#fourth-box').slideToggle('2000', function() { // that targets #fourth-box to slideToggle in 2 seconds which will alert us is is done
      alert('Done toggle-sliding');
    });
  });
});

/* Toggle */
$('document').ready(function() {
  $('#fourth-toggle').click(function() { //when #fourth-toggle is clicked, it will make the #fifth-box toggle swing
    $('#fifth-box').toggle(4000,'swing');//swing option - is a long fade that swings from right to left
  });
});

/* Animate */
$('document').ready(function() {
  $('#grow-button').click(function() {//target the #grow-button, when pressed, it activates function in the #sixth-box 
    $('#sixth-box').animate({width: '500px'}, 2000);//the #sixth-box will animate to a width of 500px in 2 sec
  });
  $('#move-button').click(function() {//when animating, the style needs to look like css in one line and in camelCase
    $('#sixth-box').animate({marginLeft: '200px'}, 1000);
  });
  $('#bigger-button').click(function() {
    $('#sixth-box').animate({fontSize: '25px'}, 3000);//when #bigger-button is pressed, it increases the size of the font
  });
  $('#many-button').click(function() {//when the #many-button is pressed, we do all of the below parameters
    $('#sixth-box').animate({marginLeft: '50px', color: 'purple'}, 3000);
  });
});

/* Selectors */
$('document').ready(function() {
  $('p').css('backgroundColor','orange');//anything that is a paragraph, a backgroundcolor of orange
  $('#header-top').css('border', '1px white dashed'); //selected these specific classes and IDs to be targeted to do stuff
  $('.green-border').css('border', '2px green dashed');
});

/* Filters */
$('document').ready(function() {
  $('.container p:first').css('textAlign', 'center'); //targeted the first paragraph element within the container and made it align center
  $('.container p:even').css('textDecoration', 'underline'); //every even paragraph within the .container is underlined
});

/* Advanced Selectors */
$('document').ready(function() {
  $('div > p').css('fontWeight', 'bold'); //anything that is within the div element - and is parent of paragraph element - the paragraphs within the div
  $('div > p#fourth-paragraph').css('color','blue');// anything that is in the div that is a paragraph with the #fourth-paragraph will turn yellow
  $('#selector-box + ul').css('border', '2px dashed blue');//anything that is part of the #selector-box plus/and is an unordered list ul
});

/* Creating Content  - advanced filters*/
$('document').ready(function() {
  $('span:first-child').css('border','3px solid black');//selects the first-child of the span 
  $('span:last-of-type').css('border','3px solid white');//selects the last-type-of, or the one in last of the spans
  $("span:contains('Lorem')").css('color', 'white');//searches for the word 'lorem' in each span class - every span that contains lorem, chang to white
  $("span:parent").css('color', 'black');// the parent class will be changed to black
  $("span:nth-child(3)").css('border', '3px solid yellow');// nth-child(x) - we get to select which one we want to highlight
});

/* Inserting Content */
$('document').ready(function() {
  $('#first-button').click(function() {
    $('p:first').append('Just appended something'); //appended text to the paragraph 
  });
  $('#prepend').click(function() { //prepended something else
    $('p:first').prepend('Just appended something');
  });
});

$('document').ready(function() {
  $('#appendTo').appendTo('div'); //moves first par to the end, so order becomes 2,3,1
  $('#insertBefore').insertBefore('#ex1 p:eq(1)'); //moves the second para to before the first index so order becomes 1,1,2,2,1
});
/*
.appendTo(), .append()
.prependTo(), .prepend()
.insertBefore(), .before()
.insertAfter(), .after()
*/
/*
 var newParagraphs = [];
      for (var i = 1; i < 6; i++) { //made a loop of 5 paragraphs into the div and numbered them
        newParagraphs.push("<p>Paragraph " + i + "</p>");
      }
      $('#firstDiv').after(newParagraphs.join(""));
      
      console.log($('p').length);
      // 5
      console.log($('#firstDiv').next().text());
      // Paragraph 1
      console.log($('#secondDiv').prev().text());
      // Paragraph 5
*/

/* Modifying Content */
$('document').ready(function() {
  $('#second-container p').wrap("<div id='color-box'>"); //all of the paragraphs within the #second-container will be wrapped by a div class #color-box
  $('#second-container p:first').wrap("<div id='second-color'>"); //targeted the first parapraph 
  $('<div>Container</div>').replaceAll('#second-container');//first part will be replace the second part
  $('#selector-box').replaceWith('<p>#selector-box JUST GOT REPLACED</p>');//the first part, replace with the second part
});

/* Modifying CSS */
$('document').ready(function() {
  $('#add-class').click(function() {//when we click on the #add-class button
    $("#third-container p:first").addClass('container-color');//target the first paragraph and add the class with the addClass method, add .container-color
  });
  $('#remove-class').click(function() {//when we press #remove-class button
    $("#third-container p:first").removeClass('container-color');//we target the #third-container first paragraph and remove the class
  }); //.detach() - will keep the event handlers attached
  $('#toggle-class').click(function() {//
    $("#third-container p:first").toggleClass('container-color');//toggle the specific style we have chosen
  });
  $('#increase-class').click(function() {//target the #increase-size button
    $("#third-container p:first").css('fontSize', '+=1px');//button targets #third-container first paragraph and increases font-size +1 every time we click
  });
  $('#decrease-class').click(function() {//target the #increase-size button
    $("#third-container p:first").css('fontSize', '-=1px');//-1px each time we click the button
  });
});

function dog() {
  console.log('woof');
}
function cat() {
  console.log('Meow');
}
$('document').ready(function() {
  $('p').on('click', dog).on('click', cat); //works the same as removeEventListener
  $('p').off('click', cat); //.off() - the handler function needs to be stored in a variable so we can pass it to the .off() method
});

/* Selecting certain attributes in document */
/*
$("p").has("span");
// p elements that have a span element
$("p").not(".foo");
// p elements that don't have the .foo class
$("p").filter(".red");
// p elements that have .red class
$("p").eq(2);
// Select index 2 which is the third element in the matched elements, p with .foo class
*/

/* Parent */

$('document').ready(function() {
  $('p.grandchild');
  //returns [div.child]
  $('p.grandchild').parents(); //parents() - accepts a css selector and returns all matching parents of the target element, if no string, returns all par
  //returns [div.child, div.parent, div.grandparent]
  $('p.grandchild').parents('.parent'); //returns [div.parent]
  $('p.grandchild').parentsUntil('.grandparent');// .parentsUntil() - will select all the parents up to, but not including the matched parent of the target
  //returns [div.child, div.parent]
  $('p.grandchild').closest('div');//.closest() - will search for the closest parent that matches the css selector, however the target itself is also part of the search // returns [div.child]
  $('div.child').closest('div');
  //returns [div.child] the target itself is part of the search
  $('div.grandparent').find("div");
  //returns [div.child, div.parent, div.first-godparent, div.second-godparent]
  $("div.parent").next();
// returns [div.godParent1], works like `.nextSibling`
  $("div.parent").prev();
  // returns [], works like `.previousSibling`
  $("div.parent").nextAll();
  // returns [div.godParent1, div.godParent2], gets all next siblings
  $("div.parent").nextAll().first();
  // returns [div.godParent1]
  $("div.second-godparent").prevAll();
  // returns [div.godParent1, div.parent]
  $("div.second-godparent").prevAll().last();
  // returns [div.parent]
  $("div.parent").siblings();
  // returns [div.godParent1, div.godParent2], gets all siblings
  $("div.first-godparent").siblings(".parent");
  // returns [div.parent], gets all siblings that match .parent
});

/* Clone Elements */
$('document').ready(function() {
  $('#clone-base').clone().appendTo('#base-element p:eq(0)'); //we cloned the #clone-base para and inserted it after itself
  //accepts two arguments default (false, false) - if we want it copy event handlers and second if we want to copy children as well
});

/* Manipulate Attributes */

$('document').ready(function() {
  $('#man-att').attr('href'); //returns www.google.com
  $('#man-att').attr('href', 'www.xxx.com'); //changed href and takes us to www.xxx.com
  $('#man-att').attr({ //changes the id and changes the href back to og
    'id': 'very-manipulated',
    'href': 'www.google.com'
  });
});
$('document').ready(function() {
$("input [type='checkbox']").prop('checked'); //returns false
$("input [type='checkbox']").prop('disabled'); //returns false
$("input [type='checkbox']").prop({ //.prop() - access and changes the properties of the checkbox
  checked: true,
  disabled: true
});
});

/* DOM Load Events */
$('document').ready(function() {
  console.log('Document ready', Date.now()); //Did this above - check line 35
});
$(window).on('load', function() {
  console.log('window loaded', Date.now()); 
});

/* each */
$('document').ready(function() {
$('#each-div p').each(function(index, element) { //adds a .foo class to each paragraph in the #each-div div
  $(element).addClass('foo');//getter methods like .attr(), .css(), .val(), .scrollTop() would require each
});
});
 

/* map */
$('document').ready(function() {
  $('#map p').map(function() {//.get() - iterates and execute a function we extract specific info from elements
    return $(this).text();
  }).get().join(' ');
});

$('document').ready(function(){
  var arrayMap = []; //we create an empty array so that we can place the text in the ul
  $('#stinky li').each(function(index, element) {
    arrayMap.push($(element).text());//we get the element in the index, and push them into the arrayMap var
    console.log(arrayMap);
  });
});
$('document').ready(function(){
  $('#stinky li').map(function(index, element) {
    return $(element).text();
  }).get();//get() - gets the elements in the index and converts it to text
});

/* _underscore shuffle */
var nameArr = [
  {
  hair: 'brown',
  height: "5'11",
  weight: "256llbs",
  name: 'Bryan',
  },
{ 
  hair: 'black',
  height: "5'3",
  weight: '125llbs',
  name: 'walter'
}
]
var shuffledName = _.shuffle(nameArr);//underscore deals with data rather than DOM manipulation
console.log(shuffledName);

/* _.range */
_.range(10);//accepts three param - start val, stop val, step val
//[0,1,2,3,4,5,6,7,8,9]
_.range(1,8);
//[1,2,3,4,5,6,7]
_.range(1,10,2);//start at 1, stop at 10, and increment by 2
//[1,3,5,7,9]
_.range(5,0,1);
//[5,4,3,2,1]
_.range(0);
//[]

var starters = _.range().map(String).concat(['J','A','S','M','U','X']);
var names = ['Jasmine', 'Aaron', 'Sam', 'Max', 'Umandy', 'Xavier'];

var choices = names.map(function(name) {
  return starters.map(function(start){
    return{
      start: start,
      name: name
    }
  });
});
console.log(choices);

/* _.flatten */

var choices = _.flatten(names.map(function(name){ //accepts two parameters - array we want to flatten, second optional true/false if want shallow or flatten
  return starters.map(function(start){
    return {
      start: start,
      name: name
    }
  });
}));
console.log(choices);

var shuffledChoices = _.shuffle(choices);
console.log(shuffledChoices);

/* first and last underscore */
var optionOne = _.first(shuffledChoices, 2); //_.first(array, [n]) - chosen array then the number of values we want returned
var optionTwo = _.last(shuffledChoices, 2);
console.log(shuffledChoices.length);
console.log(optionOne);

/* Sample underscore */
var randomDraw = _.sample(shuffledChoices, 5);//randomly draws out n cards from the array
console.log(randomDraw);

/* group by underscore */
var groupByLetter = _.groupBy(shuffledChoices, function(letter) {return letter.start});
console.log(groupByLetter); //groups the array by specified param - takes array, and iteratee, in this case, iteratee is start

/*countBy underscore */
var sampleChoices = _.sample(shuffledChoices, 10);
var options = _.countBy(sampleChoices, 'name'); //counts how many are in a sampled array - like how much stuff and what is in the array

/* pluck underscore */
var pluckedSamples = _.pluck(sampleChoices, 'start'); //extracts a list of property values
console.log(pluckedSamples);//gives us the starters array - all of the letters

/* some and every */
_.some(sampleChoices, function (sample){return sample.start === '20';}); //returns either true or false if it meets the parameters - if the starters are equal to 10 - true

_.every(sampleChoices, function(sample){return sample.name === 'Bryan';});//true or false if every samppleChoices return a name equal to bryan

/* union underscore */
var removesDuplicates = _.union([1,2,3,4,5,6], [3,4,65,2,1,6], [8,90,1,2,7,912,2]);
console.log(removesDuplicates); //removes all of the duplicates in the array and in order of ascension

/* intersection underscore */
var commonNumber = _.intersection([1,2,3,4,5,6], [3,4,65,2,1,6], [8,90,1,2,7,912,2]);
console.log(commonNumber);//returns most promminent number(s)

/* difference underscore */
var firstArrOnly = _.difference([1,2,3,4,5,6], [3,4,65,2,1,6], [8,90,1,2,7,912,2]);
console.log(firstArrOnly);//brings out value unique to only the first array