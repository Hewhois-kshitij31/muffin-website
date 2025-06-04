// Select the button element
const button = document.querySelector('button');



// Add a mouseover event listener to change button color
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'lightblue';
});

// Add a mouseout event listener to reset button color
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#';
});
let name;
// Select the input element
const emailInput = document.querySelector('.footer-email-input');

// Add an input event listener to store the value in the name variable
emailInput.addEventListener('input', (event) => {
    name = event.target.value;
});
