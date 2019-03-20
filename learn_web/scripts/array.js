var colors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet"];
var dblColors = ["Red", "Orange", "Yellow", "Green", "Azure", "Blue", "Violet", "Violet", "Blue", "Azure", "Green", "Yellow", "Orange", "Red"];
var primes = [2, 3, 5, 7, 11, 13, 17];
var primesString = "2357";

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
  target.innerHTML =
  "Array: " + Array.from(primesString) +
  "<br>Result: " + Array.from(primesString, fromParseData, " index of ");
}

function isIncludesOneParam() {
  var searchValue = document.getElementById('includesSearchOneParam').value;
  var target = document.getElementById('includesReplaceOneParam');
  var result = colors.includes(searchValue);

  target.innerHTML = "Result: " + result;
}

function isIncludes() {
  var searchValue = document.getElementById('includesSearch').value;
  var startValue = document.getElementById('includesStart').value;
  var target = document.getElementById('includesReplace');
  var result = colors.includes(searchValue, startValue);

  target.innerHTML = "Result: " + result;
}

function isIndexOfOneParam() {
  var searchValue = document.getElementById('indexOfSearchOneParam').value;
  var target = document.getElementById('indexOfReplaceOneParam');
  var result = colors.indexOf(searchValue);

  target.innerHTML = "Result: " + result;
}

function isIndexOf() {
  var searchValue = document.getElementById('indexOfSearch').value;
  var startValue = document.getElementById('indexOfStart').value;
  var target = document.getElementById('indexOfReplace');
  var result = colors.indexOf(searchValue, startValue);

  target.innerHTML = "Result: " + result;
}

function isLastIndexOfOneParam() {
  var searchValue = document.getElementById('lastIndexOfSearchOneParam').value;
  var target = document.getElementById('lastIndexOfReplaceOneParam');
  var result = dblColors.lastIndexOf(searchValue);

  target.innerHTML = "Result: " + result;
}

function isLastIndexOf() {
  var searchValue = document.getElementById('lastIndexOfSearch').value;
  var startValue = document.getElementById('lastIndexOfStart').value;
  var target = document.getElementById('lastIndexOfReplace');
  var result = dblColors.lastIndexOf(searchValue, startValue);

  target.innerHTML = "Result: " + result;
}

function arrIsArray() {
  var target = document.getElementById('isArrayReplace');
  var result = Array.isArray(colors);

  target.innerHTML = "Result: " + result;
}

function arrJoin() {
  var separator = document.getElementById('separator').value;
  var target = document.getElementById('joinReplace');
  var result = colors.join(separator);

  target.innerHTML = "Result: " + result;
}

function arrKeys() {
  var target = document.getElementById('keysReplace');
  var result = colors.keys().next().value;

  target.innerHTML = "Result: " + result;
}
