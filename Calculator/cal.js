// Get references to the HTML elements where the input and result will be displayed
let valEl = document.getElementById("val");
let resEl = document.getElementById("res");

// Function to clear the input and result fields
function clearer(){
    valEl.innerText = ""; // Clears the input field
    resEl.innerText = ""; // Clears the result field
}

// Function to add a character to the input field
function adder(k){
    valEl.innerText += k; // Append the key pressed to the input string

    // If the key is an operator, try to compute the result immediately
    if(k === '*' || k === '+' || k === '-' || k === '/'){
        compute(0); // Calls the compute function with a flag 0 to just calculate
    }
}

// Function to handle keyboard input
function AddbyKeyboard() {
    document.addEventListener('keydown', function(e) {
        // Valid keys for the calculator input
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

        // Check if the key pressed is valid
        if (validKeys.includes(e.key)) {
            if (e.key === 'Enter') {
                // Call compute when Enter is pressed to calculate
                compute(1);
            } else if (e.key === 'Backspace') {
                // Remove last character on Backspace
                valEl.innerText = valEl.innerText.slice(0, -1);
            } else {
                // Pass the key to adder function
                adder(e.key);
            }
        }
    });
}

// Function to compute the result of the calculation
function compute(is){
    let temp = valEl.innerText;
    let i;
    let t = temp[temp.length-1];

    // Find the operator in the input string
    for(i=0; i<temp.length-1; i++){
        if((temp[i] === '*' || temp[i] === '+' || temp[i] === '-' || temp[i] === '/') && i !== 0){
            break;
        }
    }

    // If a valid operator was found, perform the calculation
    if(i !== temp.length-1){
        let part1 = parseFloat(temp.substring(0, i)); // First operand
        let part2 = parseFloat(temp.substring(i+1)); // Second operand
        let operator = temp[i]; // The operator

        // Perform calculation based on the operator
        if(operator === '+'){
            resEl.innerText = (part1 + part2);
        } else if(operator === '-'){
            resEl.innerText = (part1 - part2);
        } else if(operator === '*'){
            resEl.innerText = (part1 * part2);
        } else {
            resEl.innerText = (part1 / part2);
        }

        resEl.innerText = '= ' + resEl.innerText; // Show the result in the format "= result"

        // If we aren't just computing in the background, update the input field with the result
        if(!is){
            valEl.innerText = resEl.innerText + t;
            if(valEl.innerText[0] === '='){
                valEl.innerText = valEl.innerText.substring(1); // Remove the equal sign
            }
        }
    }
}

// Initialize the keyboard input functionality
window.onload = function() {
    AddbyKeyboard();
};
