var colors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet"];
var dblColors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet", "Violet", "Blue", "Azure", "Green", "Yellow", "Orange", "Red"];
var primes = [2, 3, 5, 7, 11, 13, 17];
var unsortedPrimes = [17, 3, 5, 13, 11, 2, 7];
var primesString = "2357";

// function placeButtons() {
//   var i, leftOffset, topOffset
//   var buttonsList = document.getElementsByClassName('js-buttons-prop');
//   var availHeight = screen.availHeight - 250;
//   var availWidth = screen.availWidth - 1100;
//   var length = buttonsList.length;
//
//   for (i = 0; i < length; i++) {
//     leftOffset = 100 + Math.random() * availHeight;
//     topOffset = 200 + Math.random() * availWidth;
//     buttonsList[i].style.position = "fixed";
//     buttonsList[i].style.top = parseInt(topOffset) - 50 +"px";
//     buttonsList[i].style.left = parseInt(leftOffset) - 50 + "px";
//
//     console.log("H: " + availHeight, "W: " +  availWidth, "LO: " + parseInt(leftOffset), "TO: " + parseInt(topOffset));
//   }
// }

function JSShowFrameGlobal(btnId, frameId) {
  var i;
  var framesList = document.getElementsByClassName('JSFrameGlobal');
  var length = framesList.length;
  var offset = document.getElementById(btnId).offsetTop;
  var frame = document.getElementById(frameId);

  for (i = 0; i < length; i++) {
    framesList[i].style.display = "none";
    frame.style.display = "block";
    frame.style.top = (offset - 17) + "px";
    frame.scrollIntoView();
  }
}

function breakedLoop() {
  var i;
  var text = "";
  var value = document.getElementById("breakValue").value;
  for (i = 0; i < value; i++) {
    if (i < parseInt(value / 4)) {
      text += "THE number IS " + i + "<br>";
    } else if (i > parseInt(value / 2)) {
      break;
    } else {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("breakTarget").innerHTML = text;
  }
}

function continuedLoop() {
  var i;
  var text = "";
  var value = document.getElementById("continueValue").value;
  for (i = 0; i < value; i++) {
    if (i < parseInt(value / 5)) {
      text += "THE number IS " + i + "<br>";
    } else if (i < parseInt(value / 2) && i > parseInt(value / 4)) {
      continue;
    } else {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("continueTarget").innerHTML = text;
  }
}

function startDoWhileLoop() {
  var value = document.getElementById("doWhileValue").value;
  var text = document.getElementById("doWhileTarget").innerHTML;
  var i = 0;
  do {
    text += "The number is " + i + "<br>";
    i++;
    document.getElementById("doWhileTarget").innerHTML = text;
  }
  while (i < value);
}

function startForLoop() {
  var value = document.getElementById("forValue").value;
  var text = document.getElementById("forTarget").innerHTML;
  var i;
  for (i = 0; i < value; i++) {
    text += "The number is " + i + "<br>";
    document.getElementById("forTarget").innerHTML = text;
  }
}

function startForInLoop() {
  var fruits = {apple: "red", banana: "yellow", kiwi: "green", grape: "black"};

  var colors = "";
  var name;
  for (name in fruits) {
    colors += fruits[name] + " ";
  }
  document.getElementById("forInTarget").innerHTML = colors;
}

function startIfElseLoop() {
  var i;
  var text = "";
  var value = document.getElementById("ifElseValue").value;
  for (i = 0; i < value; i++) {
    if (i < parseInt(value / 4)) {
      text += "THE number IS " + i + "<br>";
    } else if (i > parseInt(value / 2)) {
      text += "The NUMBER is " + i + "<br>";
    } else {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("ifElseTarget").innerHTML = text;
  }
}
