function changeStyle() {
    // Challenge Instructions:
    let daText = document.getElementById('dynamicText');
    let boldStyle = false;
    // 1. When the button is clicked, change the background color of 'dynamicText' to 'lightblue'.
    daText.style.backgroundColor = 'lightblue';
    // 2. Change the font size of 'dynamicText' to '18px'.
    daText.style.fontSize = '18px';
    // 3. Toggle the font weight of 'dynamicText' between 'normal' and 'bold' on each button click.
    daText.style.fontWeight =
  daText.style.fontWeight === 'bold' ? 'normal' : 'bold';
    // 4. Change the text color of 'dynamicText' to 'green'.
    daText.style.color = 'green';
}
