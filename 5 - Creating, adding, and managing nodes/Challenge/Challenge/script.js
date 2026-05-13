// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.
let contentArea = document.getElementById('contentArea');
let addButton = document.createElement('button');
addButton.textContent = "Add Btn";
contentArea.appendChild(addButton);
// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.
let taskList = document.getElementById('taskList');
let newItem = document.createElement('li');
newItem.textContent = "This is the Item";
taskList.appendChild(newItem);
// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.
let clonedItem = newItem.cloneNode(true);
clonedItem.textContent = 'Cloned Item';
taskList.appendChild(clonedItem);
// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.
let oldParagraph = contentArea.querySelector('p');
let newParagraph = document.createElement('p');
newParagraph.textContent = "Replacement Paragraph";
contentArea.replaceChild(newParagraph, oldParagraph);
// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.
let puppyImage = document.getElementById('puppyImage');
puppyImage.parentNode.removeChild(puppyImage);