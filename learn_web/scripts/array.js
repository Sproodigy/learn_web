var colors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet"];
var primes = [2, 3, 5, 7, 9, 11, 13];
var primesString = "23579";

function JSShowFrame(btnId, frameId) {
  var i;
  var framesList = document.getElementsByClassName('JSFrame');
  var btn = document.getElementById(btnId);
  var offset = btn.offsetTop;
  var length = framesList.length;
  var frame = document.getElementById(frameId);

  for (i = 0; i<=length; i++) {
    framesList[i].style.display = "none";
    frame.style.display = "block";
    frame.style.top = (offset - 17) + "px";
    frame.scrollIntoView();
  }
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

function setNumber() {
  var num = document.getElementById('everyNum').value;
  return num;
}

function checkNumbers(prime) {
  return prime >= setNumber();
}

function checkPrimes() {
  var res = primes.every(checkNumbers);
  document.getElementById("everyReplace").innerHTML = res;
}

function fillChangeArray() {
  var value = document.getElementById("fillTarget").value;
  var start = document.getElementById("fillStart").value;
  var end = document.getElementById("fillEnd").value;
  var res = colors.fill(value, start, end);
  document.getElementById("fillReplace").innerHTML = res;
}

function resetFill() {
  colors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet"];
  document.getElementById("fillReplace").innerHTML = colors;
}

function filterSetNumber() {
  var num = document.getElementById('filterNum').value;
  return num;
}

function filterCheckNumbers(prime) {
  return prime >= filterSetNumber();
}

function filterCheckPrimes() {
  var res = primes.filter(filterCheckNumbers);
  document.getElementById("filterReplace").innerHTML = res;
}

function findGetNumber(prime) {
  var num = document.getElementById('findNum').value;
  return prime >= num;
}

function findShowResult() {
  var res = primes.find(findGetNumber);
  document.getElementById("findReplace").innerHTML = res;
}

function findIndexGetNumber(prime) {
  var num = document.getElementById('findIndexNum').value;
  return prime >= num;
}

function findIndexShowResult() {
  var res = primes.findIndex(findIndexGetNumber);
  document.getElementById("findIndexReplace").innerHTML = res;
}

function forEachParseData(item, index) {
  var target = document.getElementById("forEachReplace");
  target.innerHTML += "index[" + index + "]: " + item + "<br>";
}

function forEachShowResult() {
  primes.forEach(forEachParseData);
}

function fromParseData(item, ind) {
  var res = (ind += (this + item));
  return res;
}

function fromShowResult() {
  var target = document.getElementById("fromReplace");
  target.innerHTML = Array.from(primesString, fromParseData, " index of ");
}
