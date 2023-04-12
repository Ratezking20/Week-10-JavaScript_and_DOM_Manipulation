
// This goes inside the document, grabs the element 'content' by it's id,
// and switchs the 'Hello' from inside the HTML page(index.html) with 'Goodbye'
// using this .innerHTML JavaScript method 
document.getElementById('content').innerHTML = 'Goodbye';

// Created variables to make it easier/shorter to refer to the elements in the HTML page (index.html)
let button = document.getElementById('btn');
let content = document.getElementById('content');

// The .addEventListener takes 2 parameters. The first is the event or what happens.
// The second is the function that executes as a result of the event... This creates a button that switches the paragraph text
button.addEventListener ('click', () => {
    if (content.innerHTML == 'Goodbye'){
        content.innerHTML = 'Hello'
    } else {
        content.innerHTML = 'Goodbye'
    }
});

// Created an Event function. Whenever the button with id='remove' is clicked,
// it will remove the paragraph.
document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    
    elementToRemove.parentNode.removeChild(elementToRemove);
    content.parentNode.removeChild(content)
    document.getElementById('remove-id').value = " "; }); 

    let id = 0


    // In order to completely remove an element, You must remove the child 
    // from it's parent. The child is the content {content variable}


// Created an Event function. Whenever the button with id='add' is clicked,
// It will add a new paragraph.
document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');  // The .createElement creates an element in the html page using JavaScript.
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = "" ;
});

//Create a way to delete new paragraphs