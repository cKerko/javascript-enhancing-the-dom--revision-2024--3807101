document.addEventListener('DOMContentLoaded', () => {
    // Task: React to a button click by changing text in the paragraph with id 'para1'.
    // Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.
    document.getElementById("changeTextButton").addEventListener('click', () => {
         document.getElementById('para1').textContent = 'Changed!';
    });
    // Task: Change the style of 'para1' on mouseover and mouseout.
    // Add mouseover and mouseout event listeners to 'para1' and change its style.
    let hoverArea = document.getElementById('para1');
    hoverArea.addEventListener('mouseover', () => {
        hoverArea.style.color = "red";
    });
    hoverArea.addEventListener('mouseout', () => {
        hoverArea.style.color = "black";
    });
    // Task: Use event delegation on 'itemList' to display which item was clicked.
    // Add click event listener to 'itemList' and identify the clicked list item.
    let itemList = document.getElementById('itemList');
    itemList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            alert(e.target.textContent + ' item was clicked');
        }
    });
    // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
    // Add click event listener to 'preventLink' and prevent default action.
    document.getElementById('preventLink').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('para2').textContent = 'No no, not going there';
    });
});