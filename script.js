let result = ''; // Starts off blank

/********************** clear function *********************/
function clearResult() {
  result = ''; // Reset the input
  document.getElementById('result').value = ''; // Clears the result
}

/********************** calculate function *********************/
function calculate() {
  const display = document.getElementById('result');

  // Check if the input matches two numbers and one operator
  const parts = result.split(/([+\-*/])/); // Split into num1, operator, num2
  if (parts.length !== 3) {
    display.value = 'Error'; // Show error if the input is invalid
    result = ''; // Reset the result
    return;
  }

  const num1 = parts[0]; //num1
  const operator = parts[1]; // 
  const num2 = parts[2]; //num2


  if (isNaN(num1) || isNaN(num2)) {
    display.value = 'Error'; // Show error if numbers are invalid
    result = ''; // Reset the result
    return;
  }

  //Adding subtracting multiplying dividing
  let calculatedValue = 0;
  if (operator === '+') {
    calculatedValue = Number(num1) + Number(num2);
  } else if (operator === '-') {
    calculatedValue = Number(num1) - Number(num2);
  } else if (operator === '*') {
    calculatedValue = Number(num1) * Number(num2);
  } else if (operator === '/') {
    if (Number(num2) === 0) {
      display.value = 'Cannot divide by zero';
      result = ''; // Reset the result
      return;
    }
    calculatedValue = Number(num1) / Number(num2);
  }

  result = calculatedValue.toString(); // Store the result
  display.value = calculatedValue; // Update the display
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
