console.log(encodeURIComponent('name@test.com'));
console.log(encodeURIComponent('name%40test.com'));
/* XHR - XMLHttpRequest */
var httpRequest = new XMLHttpRequest(); //make an xhr request 
httpRequest.open('GET', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/78?api_key=1', false);//GET - requests to retrieve information from the youtube database
httpRequest.send(null);
console.log(httpRequest.responseText);

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'www.youtube.com', false);
httpRequest.send(null); //accessing status code and content-type
console.log(httpRequest.status); //-> 200 - success
console.log(httpRequest.getResponseHeader('content-type'));//application/json; charset=utf-8

/* AJAX - Asynchronous JS and XML */
var httpRequest = new XMLHttpRequest(); //created an XML request
httpRequest.onload = function() {
//process the server repsonse if no server ocurred
}
httpRequest.onerror = function() {
//process the server response if no error ocurred
}
//onload - check 5 possible states 0 (UNSENT, client has been created)
//1 (OPENED, open() has been called)
//2 (HEADERS_RECEIVED, send() has been called)
//3 (LOADING, downloading)
//4 (DONE, operation complete)

var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('GET', 'https://www.omdbapi.com/?t=frozen&apikey=b7da8d63', true);
httpRequest.send();

/*JSON - JS Object Notation */
var movie = JSON.stringify({Title: "Frozen", Year: "2013"});
console.log(movie); //-> {"Title": "Frozen", "Year": "2013"}
console.log(JSON.parse(movie).Title);// -> Frozen - we need to use parse() to turn it into a javascript object

var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movie = JSON.parse(httpRequest.responseText);
      document.getElementById("title").innerHTML = movie.Title;
      document.getElementById("year").innerHTML = movie.Year; //this will all be pushed to the webiste and into the html
      document.getElementById("actors").innerHTML = movie.Actors;
      document.getElementById("plot").innerHTML = movie.Plot;
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('GET', 'https://www.omdbapi.com/?t=frozen&plot=short&apikey=b7da8d63');
httpRequest.send();

var searchMovie = function () {
  var input = document.querySelector('input').value; //searches for the inputted value and returns an image with result
  if (input) {
    httpRequest.open('GET', 'https://www.omdbapi.com/?t=' + input + '&plot=short&apikey=b7da8d63');
    httpRequest.send();
  }
}

response.items.forEach(function (item) { //gives us object-like data based on the search
  var htmlString = "";
  for (var key in item) {
    htmlString += key + ": " + item[key] + "<br/>";
  }
  $('body').append("<p>" + htmlString + "</p>");
});

var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText).Search; //search a movie and result in its movie details
      var results = document.getElementById("results");
      var htmlContent = ''
      response.forEach(function (element) {
        var movie = "<div>" +
        "<img src="+element.Poster+"/>" +
        "<p>Title: <a href = 'https://www.imdb.com/title/"+element.imdbID+"' >"+element.Title+ "</a></p>" +
        "<p>Year: "+element.Year+"</p>" +
        "<p>Type: "+element.Type+"</p>" +
        "</div>";
        htmlContent += movie;
      });
      results.innerHTML = htmlContent;
    } else {
      console.log(httpRequest.statusText);
    }
  }
};
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
};
var searchMovie = function () {
  var input = document.querySelector('input').value;
  if (input) {  
          
    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + input + '&plot=short&apikey=b7da8d63');
    httpRequest.send(null);
        
  }
};

/* CRUD - create read update delete */
/*POST	INSERT	Create something: Ex. Create a new user account
GET	SELECT	Read (get) something: Ex. Get a user profile
PUT/PATCH	UPDATE	Update (modify) something: Ex. Edit a user post
DELETE	DELETE	Delete (destroy) something: Ex. Delete a user comment
*/

//GET/tasks

var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('GET', 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1');//getting list of all the tasks
httpRequest.send();
console.log(JSON.parse(httpRequest.responseText)['tasks']); //parse to make it readable in JS

/* GET /tasks/:id */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('GET', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/2?api_key=1'); //difference being url
httpRequest.send();

/* Post/tasks */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('POST', 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1'); //posted tasks
httpRequest.setRequestHeader("Content-Type", "application/json");
httpRequest.send(JSON.stringify({ //post this message
  task: {
    content: "Wash laundry"
  }
}));

/* PUT/tasks/:id */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}
httpRequest.open('PUT', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/73?api_key=1');
httpRequest.setRequestHeader("Content-Type", "application/json"); //same as POST request, but change it to PUT
httpRequest.send(JSON.stringify({
  task: {
    content: "Wash dirty laundry"
  }
}));

/* PUT /tasks/:id/mark_complete */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText); //result, it will change the completed value to true
    }
  }
}//since we are not sending any data, we do not need to .setRequestHeader()
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
} //we marked it as completed
httpRequest.open('PUT', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/73/mark_complete?api_key=1');
httpRequest.send();

/* PUT/tasks/:id/mark_active */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}//                                                                            mark_actiive changed complete to false
httpRequest.open('PUT', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/73/mark_active?api_key=1');
httpRequest.send();

/* Delete/tasks/:id */
var httpRequest = new XMLHttpRequest();
httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
}
httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}//will delete specific tasks selected by the id
httpRequest.open('DELETE', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/73?api_key=1');
httpRequest.send();

/* jQuery Ajax */
$.ajax({ //this accepts an object argument containing all the strings of the request
  type: 'GET',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1',
  dataType: 'json',
  success: function (response, textStatus) {
    console.log(response);
    // response is a parsed JavaScript object instead of raw JSON
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});
/* arguments 
type: Request type, GET, POST, PUT, DELETE.
url: The request URL you are trying to make the request to.
dataType: The type of response data you are expecting, xml, json, script, html. We are expecting json from ATDAPI. jQuery will format the response data based on the property. You can also omit this property to let jQuery intelligently guess the response data type.
success: The call back function to be called if the request succeeds. The call back function is passed two arguments, the response data, and the request textStatus. The response would be formatted by jQuery into a JavaScript object instead of raw JSON.
error: the call back function to be called if the request failed. The call back function is passed three arguments, the jQuery request object, the request textStatus, and the error string.
*/

/* Post put delete */
$.ajax({ //setup a POST request to create a new task
  type: 'POST',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1',
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({
    task: {
      content: 'Wash dirty dishes'
    }
  }),
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});

$.ajax({ //same for PUT, except we change the type and url to the correct path
  type: 'PUT',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/78?api_key=1',
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({
    task: {
      content: 'Wash very dirty dishes!'
    }
  }),
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});

$.ajax({ //delete path
  type: 'DELETE',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/78?api_key=1',
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});


/* pets example */
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn"); //made a button for every time we press it adds in the data

btn.addEventListener("click", function() {//added eventListener for when we click a button
  var ourRequest = new XMLHttpRequest();//JSON request
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');//every time we load, it adds in pageCounter++ from 1 - 3 with the for loop below
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) { //exception handling
      var ourData = JSON.parse(ourRequest.responseText); //parse the data so that it can be readable
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");//when the presses are greater than 3, access the .hide-me class and hide the btn
  }
});

function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    for (ii = 0; ii < data[i].foods.likes.length; ii++) {//while i us greater than the length of the data it increments 
      if (ii == 0) { // prints out the food the pets like
        htmlString += data[i].foods.likes[ii]; // i or j prints out the second nested array
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }
    htmlString += ' and dislikes '; //we print out the dislikes
    for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.dislikes[ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[ii];
      }
    }
    htmlString += '.</p>';
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

/* Handlebars */

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};
ourRequest.onerror = function() {
  console.log("Connection error");
};
ourRequest.send();

Handlebars.registerHelper("calculateAge", function(birthYear) { //first arg name, sec arg is function
  var age = new Date().getFullYear() - birthYear;
  if (age < 0) {
    return age + " years old.";
  } else {
    return "less than a year old.";
  }
});

function createHTML(petsData) {
  var rawTemplate = document.getElementById('petsTemplate').innerHTML;//selects the template code in script line 40-42
  var compiledTemplate = Handlebars.compile(rawTemplate);//we use Handlebars to take text and create a template function and 
  var ourGeneratedHTML = compiledTemplate(petsData);//pass in our JSON data

  var petsContainer = document.getElementById('pets-container');//
  petsContainer.innerHTML = ourGeneratedHTML;//we add the data into the DOM
}
 