let result = ''; // Starts off blank

/********************** clear function *********************/
function clearResult() {
  result = ''; // Reset the input
  document.getElementById('result').value = ''; // Clears the result
  document.getElementById("sec").style.display = "none";
}

/********************** calculate function *********************/
function calculate() {
  const display = document.getElementById('result');

  //pi addon
  if (result.indexOf('π') >= 0) {
    result = result.replace('π', Math.PI); //Replaces π with Math.PI
  }

  // square root addon
  if (result.indexOf('√') >= 0) {
    result = result.replace(/√([\d\.]+)/g, 'Math.sqrt($1)'); // Replaces √ with Math.sqrt
  }

  //exponent addon
  if (result.indexOf('^') >= 0) {
    result = result.replace('^', '**'); // Replaces the ^ with **, still keeps the ^ in the result and in the equation, in JavaScript ** does exponents
  }

  // absolute value addon
  if (result.indexOf('|') >= 0) {
    // Regular expression to find content between absolute value bars
    result = result.replace(/\|([^|]+)\|/g, (match, inside) => { //the symbols in the replace string i got from chat gpt because i could not find out exactly how to do it from w3 schools
      return `Math.abs(${inside})`; // Replace with Math.abs()
    });
  }

 //² addon
 if (result.indexOf('²') >= 0) {
  result = result.replace('²', '**2'); // Replaces the ² with **2
}

//³ addon
if (result.indexOf('³') >= 0) {
  result = result.replace('³', '**3'); // Replaces the ³ with **3
}

  //hidden button
  // Checks if the result is the number 244, 244 is the number code for "bee", shows a link to the bee movie script (changed to rickroll keeping the same number bc i remember it)
  if (result.indexOf("189311") !== -1) {
    //Shows the button when the code is unlocked
    document.getElementById("sec").style.display = "block"; 
    document.getElementById("sec").style.textDecoration = "none";
    

    //objects, arrays, and loop were copy and pasted from w3 schools so the array and cars have car related things in them

    //object "me"
    const car = { type: "Me", model: "500", color: "white" };

    //array "click"
    const cars = [];
    cars[0] = "Click";
    cars[1] = "Volvo";
    cars[2] = "BMW";

    //loop "!!!"
    const cars2 = ["!", "!", "!"];
    let cars2String = '';
    for (let i = 0; i < cars2.length; i++) {
      cars2String += cars2[i]; 
    }
    document.getElementById("sec").innerHTML = `
      <a href="https://www.youtube.com/watch?v=2qBlE2-WL60" target="_blank">
        ${cars[0]} ${car.type}${cars2String}
      </a>`;

  }

//divide by 0 adding error
  if (result.indexOf('/') >= 0) {
    const divCheck = result.split('/');
    // checks for 0 in the equation
    if (divCheck[1] === '0') {
      display.value = 'Cannot Divide By 0'; //error message
      result = '';
    }
  }

const calculatedValue = eval(result); 

  // Check if the result is a number
  if (isNaN(calculatedValue)) {
    display.value = 'Error'; // If the result is not a valid number, show 'Error'
    result = ''; // Reset the result
  } else {
    display.value = calculatedValue; // If valid, display the result
    result = calculatedValue.toString(); // Update the result variable with the new value
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
    }
  }
}
      
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
if (result.indexOf('()') >= 0) {
  // Regular expression to find content between absolute value bars
  result = result.replace(/\|([^|]+)\|/g, (match, inside) => { //the symbols in the replace string i got from chat gpt because i could not find out exactly how to do it from w3 schools
      return `Math.abs(${inside})`; // Replace with Math.abs()
  });
}

//Keyboard Typing is on another js file


//Pi is at lines 11-13


//Square Root is done in the calculate file, lines 18-21


//Exponents is done at lines 23-26