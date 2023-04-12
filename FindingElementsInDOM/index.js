
// Finding an element by id using JavaScript.
let button = document.getElementById("my-button");

// Created a button variable for the button in the html.
// If there is an actual element known as "my-button", the console will
// log out the element <button id="my-button>Button#1</button> as a result."
console.log(button);

// Finding an element by tag using JavaScript.
let buttonsByTag = document.getElementsByTagName('button');

// When this gets logged out, we'll be able to see all 5 buttons on a page.
// In the console, we'll get back an HTMLCollection, which is an array. 
// Inside of the HTMLcollection, will be all of the buttons from the index.html
// You'll also be able to see the attributes of each element in the array.  
console.log(buttonsByTag);

// You can search for multiple elements
// Finding an element by class name using JavaScript. 
let buttonsByClass = document.getElementsByClassName('my-class');

// This will return an HTMLCollection(array) with only the bottons 
// with a class name of "my-class".
console.log(buttonsByClass);
