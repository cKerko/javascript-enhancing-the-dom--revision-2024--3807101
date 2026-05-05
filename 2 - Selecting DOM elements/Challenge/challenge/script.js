// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it
console.log("Challenge 1");
console.log(document.getElementById("actionButton"));

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one
console.log("Challenge 2");
let infoClass = document.querySelectorAll('.info');
infoClass.forEach(infoItem => console.log(infoItem));

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one
console.log("Challenge 3");
let tagSelect = document.querySelectorAll('p');
tagSelect.forEach(tagItem => console.log(tagItem));

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one
console.log("Challenge 4");
let comboSelect = document.querySelectorAll('span.highlight');
comboSelect.forEach(comboItem => console.log(comboSelect));