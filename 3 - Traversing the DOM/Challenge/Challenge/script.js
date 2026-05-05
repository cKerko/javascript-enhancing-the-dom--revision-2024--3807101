// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
console.log("Challenge Part 1");
let catElement = document.querySelector('#animalFamilyTree li:nth-child(2)');
console.log(catElement.textContent);

// 2. List all the children of the cat’s parent and log them.
console.log("Challenge Part 2");
let parentSelect = catElement.parentNode;
let childArray = parentSelect.children;
for(let i = 0; i < childArray.length; i++) {
    console.log(childArray[i].textContent);
}

// 3. Identify the cat’s parent's next sibling in the tree and log it.
console.log("Challenge Part 3");
let nextSib = parentSelect.nextElementSibling;
console.log(nextSib ? nextSib.textContent : 'No next sibling');
