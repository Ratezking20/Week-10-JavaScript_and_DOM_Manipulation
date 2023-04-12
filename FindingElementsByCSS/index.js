
// Finding an element by CSS Selector using JavaScript.
let buttonsByCSS = document.querySelectorAll(".my-button");
let buttonsByCSS2 = document.querySelectorAll("button.my-class")

// Created a button variable for the button in the html.
// If there is an actual element known as ".my-button" or "botton.my-class", 
// The console will return a NodeList, which is an array of elements.
console.log(buttonsByCSS);
console.log(buttonsByCSS2);
