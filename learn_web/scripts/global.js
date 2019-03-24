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

function arrayGetConstructor() {
  document.getElementById('arrayConstructorReplace').innerHTML = colors.constructor;
}

function arraySetLength() {
  var length = document.getElementById('arraySetLength').value;
  colors.length = length;
  document.getElementById('arrayLengthReplace').innerHTML =
  "Array length: " + colors.length + "<br><br>" + "Array: " + colors;
}

Array.prototype.upperCase = function() {
  var i;
  var len = this.length;
  for (i = 0; i < len; i++) {
    this[i] = this[i].toUpperCase();
  }
};

function upperCaseArray() {
  colors.upperCase();
  document.getElementById("prototypeReplace").innerHTML = colors;
}

function createArray(data1, data2, targetNum) {
  var x = document.getElementsByTagName('input')[data1].value;
  var y = document.getElementsByTagName('input')[data2].value;
  document.getElementsByClassName('replace')[targetNum].innerHTML = '"' + x + '"' + ", " + '"' + y + '"';
}

function concatArrays() {
  var y = document.getElementById('concatReplace');
  var z = document.getElementsByClassName('replace');
  var text = z[0].innerText + ', ' + z[1].innerText + ', ' + z[2].innerText;
  var changedText = text.replace(/"/g, "");
  y.innerHTML = "Result: " + changedText;
}

function JSEntriesFunc() {
  var colors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet"];
  var data = colors.entries();
  var target = document.getElementById("entriesReplace");

  for (var i=0; i<colors.length; i++) {
    target.innerHTML += (data.next().value + "&nbsp;&nbsp;&nbsp;&nbsp;");
  }
}
