let result = ''; // Starts off blank

/********************** clear function *********************/
function clearResult() {
  result = ''; // Reset the input
  document.getElementById('result').value = ''; // Clears the result
}

/********************** calculate function *********************/
function calculate() {

  const display = document.getElementById('result');
  
  //pi function addon
  if (result.indexOf('π') >= 0) { 
    result = result.replace('π', Math.PI);
}
const calculatedValue = eval(result);

// Display the result, or "Error" if invalid
display.value = isNaN(calculatedValue) ? 'Error' : calculatedValue;
result = isNaN(calculatedValue) ? '' : calculatedValue.toString(); // Reset if invalid
}

/********************** append value function *********************/
function appendValue(value) {
  const display = document.getElementById('result');
  result += value;
  display.value = result; // Update the display
}

//Project Addons

//Backspace
function backspace() {
  result = result.slice(0, -1); // I got this code from Chat GPT. I did more reseach on this code and I figured out how it works.
  document.getElementById('result').value = result;
}

//Keyboard Typing is on another js file


//Pi is at lines 11-13


// Negative Numbers
function negative() {
  const display = document.getElementById('result');

  // If the input is empty, start with a negative sign.
  if (!result) {
    result = "-";
  } else {
    const lastChar = result[result.length - 1];

    // Adds a - if it ends in a operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
      result += '-';
    } else {
      // Otherwise, toggle the negative sign of the last number
      const numberMatch = result.match(/(\d+\.?\d*)$/);
      if (numberMatch) {
        const number = numberMatch[1];
        result = result.slice(0, -number.length) + (number.startsWith('-') ? number.slice(1) : '-' + number);
      }
    }
  }
}
  display.value = result; // Update the display

//Square Root


//date
const button = document.getElementById('dateButton');
const display = document.getElementById('result');

button.addEventListener('click', function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;  // W3 Schools says that you have to add 1 because they are based at 0 
    const day = today.getDate();

    // Month / Day / Year
    const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
  
    display.value = formattedDate;

    alert(formattedDate)
});
