//1
document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
      appendValue(1)
    }
  });

//2
document.addEventListener("keydown", function(event) {
  if (event.key === "2") {
    appendValue(2)
  }
});

//3
document.addEventListener("keydown", function(event) {
  if (event.key === "3") {
    appendValue(3)
  }
});

//4
document.addEventListener("keydown", function(event) {
  if (event.key === "4") {
    appendValue(4)
  }
});

//5
document.addEventListener("keydown", function(event) {
  if (event.key === "5") {
    appendValue(5)
  }
});

//6
document.addEventListener("keydown", function(event) {
  if (event.key === "6") {
    appendValue(6)
  }
});

//7
document.addEventListener("keydown", function(event) {
  if (event.key === "7") {
    appendValue(7)
  }
});

//8
document.addEventListener("keydown", function(event) {
  if (event.key === "8") {
    appendValue(8)
  }
});

//9
document.addEventListener("keydown", function(event) {
  if (event.key === "9") {
    appendValue(9)
  }
});

//0
document.addEventListener("keydown", function(event) {
  if (event.key === "0") {
    appendValue(0)
  }
});

//+
document.addEventListener("keydown", function(event) {
  if (event.key === "+") {
    appendValue('+')
  }
});

//-
document.addEventListener("keydown", function(event) {
  if (event.key === "-") {
    appendValue('-')
  }
});

//x
document.addEventListener("keydown", function(event) {
  if (event.key === "x") {
    appendValue('*')
  }
});

//*
document.addEventListener("keydown", function(event) {
  if (event.key === "*") {
    appendValue('*')
  }
});

// /
document.addEventListener("keydown", function(event) {
  if (event.key === "/") {
    appendValue('/')
  }
});

//enter
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calculate();
  }
});

//backspace
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    backspace();
  }
});

// c
document.addEventListener("keydown", function(event) {
    if (event.key === "c") {
      clearResult();
    }
  });

  // del
  document.addEventListener("keydown", function(event) {
    if (event.key === "Delete") {
      clearResult();
    }
  });

  // .
  document.addEventListener("keydown", function(event) {
    if (event.key === ".") {
      appendValue('.');
    }
  });

  //^
  document.addEventListener("keydown", function(event) {
    if (event.key === "^") {
      appendValue('^');
    }
  });

  //=
document.addEventListener("keydown", function(event) {
  if (event.key === "=") {
    calculate();
  }
});