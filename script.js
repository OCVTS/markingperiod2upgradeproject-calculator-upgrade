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

  //exponent addon
  if (result.indexOf('^') >= 0) {
    result = result.replace ('^', '**') // Replaces the ^ with **, still keeps the ^ in the result and in the equation, in javascript ** does exponents
  }

  // absolute value addon
  if (result.indexOf('|') >= 0) {
    // Regular expression to find content between absolute value bars
    result = result.replace(/\|([^|]+)\|/g, (match, inside) => { //the symbols in the replace string i got from chat gpt because i could not find out exactly how to do it from w3 schools
        return `Math.abs(${inside})`; // Replace with Math.abs()
    });
}

//hidden button

// Checks if the result is the number 244, 244 is the number code for "bee", shows a link to the bee movie script
if (result.indexOf("244") !== -1) {
    //Shows the button when the code is unlocked
    document.getElementById("sec").style.display = "block";

  //both of the objects and arrays i got from w3 schools so the array and cars have car related things in them

    //object "me"
    const car = {type:"Me", model:"500", color:"white"};
    
    //array "click"
    const cars = [];
    cars[0]= "Click";
    cars[1]= "Volvo";
    cars[2]= "BMW";
    document.getElementById("sec").innerHTML = `<a href="https://courses.cs.washington.edu/courses/cse163/20wi/files/lectures/L04/bee-movie.txt" target="_blank">${cars[0]} ${car.type}</a>`;
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

//Parentheses


//Keyboard Typing is on another js file


//Pi is at lines 11-13


//Square Root is done in the calculate file, lines 18-21


//Exponents is done at lines 23-26