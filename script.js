let result = ''; // Starts off blank

/********************** clear function *********************/
function clearResult() {
  result = ''; // Reset the input
  document.getElementById('result').value = ''; // Clears the result
}

/********************** calculate function *********************/
function calculate() {
  const display = document.getElementById('result');

  //pi addon
  if (result.indexOf('π') >= 0) {
    result = result.replace('π', Math.PI); //Replaces π with math.pi
  }

  // square root addon
  if (result.indexOf('√') >= 0) {
    result = result.replace(/√([\d\.]+)/g, 'Math.sqrt($1)'); // Replaces √ with Math.sqrt
  }

  try {
    const calculatedValue = eval(result);

    // Display the result
    display.value = isNaN(calculatedValue) ? 'Error' : calculatedValue;
    result = isNaN(calculatedValue) ? '' : calculatedValue.toString();
  } catch (e) {
    display.value = 'Error';  
    result = ''; //Reset the result
  }
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

// Negative Numbers
function negative() {
  const display = document.getElementById('result');

  //Starts with a - if the result area is empty
  if (!result) {
    result = "-";
  } else {
    const lastChar = result[result.length - 1];

    // Adds a - if it ends in a operator
    if (['+', '-', '*', '/'].includes(lastChar)) {
      result += '-';
    } else {
      //Adds the negative on the last number
      const numberMatch = result.match(/(\d+\.?\d*)$/);
      if (numberMatch) {
        const number = numberMatch[1];
        result = result.slice(0, -number.length) + (number.startsWith('-') ? number.slice(1) : '-' + number);
      }}}}
      
  display.value = result; // Update the display

//Square Root


//date
function showDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;  //W3 schools adds 1 because the month is based on 0
  const day = today.getDate();

  //Format date Month / Day / Year
  const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

  //Puts the date in the result area
  document.getElementById('result').value = formattedDate;

}

//Keyboard Typing is on another js file


//Pi is at lines 11-13