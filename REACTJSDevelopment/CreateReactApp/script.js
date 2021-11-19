/* Create A React App */

// To create a react app go the the file we want load all the files in 
//npx create-react-app name-must-have-dashes
//To create react app using Yarn:
// yarn create react-app insert-name

/* SRC */
/*
App.js: The JS file containing a basic React component. This is also the base component where we can call new components from. The base component is often called App in React.
App.css: The CSS file for the App component.
App.test.js: This file is used to host a number of tests for testing our React application. Currently it only has one test that checks if the App loads without error.
index.js: This file imports the App and injects it into DOM. We tend to keep the injection separate from the React component files for higher clarity.
index.css: We write page wide CSS here, such as font-family, etc.
serviceWorker.js: This is the code that manages caching content for Progressive Web Apps. We won't be covering the use of this.
logo.svg: An image file in the svg format. This file is used in the App component.
Warning! index.js must remain the exact same name and be inside the src folder for the project to build. Do not delete or rename this file.
*/

/* Start the app */
//Use npm start
//Or use yarn start
/* Exporting named object in a module */
var foo = 30;
export const sum = (a, b) => a + b; // we exported these variables - we can take this to another file
export const numbers = [5, 10, 15, 20, 25, foo];
export {sum, numbers};

/* Importing named objects */
//import React from 'react';
//import logo from './logo.svg';
//import './App.css'

//custom import name of file
//import * as math from './math.js' - combine all exports into a math object

//import the two named objects seperately 
//import {sum, numbers} from './math.js'

/* Shut down server */
//ctrl + c 
//add bootstrap
//yarn add bootstrap
//npm install bootstrap

//import 'bootstrap/dist/css/bootstrap.css';


/* Install React Router */ // is a library - allows single page react applications that have multiple routes/pages
//npm install react-router-dom@5
//yarn add react-router-dom@5
