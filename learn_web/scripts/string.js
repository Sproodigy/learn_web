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

function JSStrFrameHoverFunc(descNum, tableNum, noteNum) {
  var x = document.getElementsByClassName('descriptionJSFrame')[descNum];
  var z = document.getElementsByClassName('tablejsAttr')[tableNum];
  var y = document.getElementsByClassName('noteJSFrame')[noteNum];

  x.style.transitionProperty = "transform";
  x.style.transitionDuration = "2s";
  x.style.transform = "rotateX(360deg)";
  x.style.background = "rgba(222, 209, 42, 0.59)";

  z.style.transitionProperty = "transform";
  z.style.transitionDuration = "2s";
  z.style.transform = "rotateY(360deg)";

  y.style.transitionProperty = "transform";
  y.style.transitionDuration = "2s";
  y.style.transform = "rotateX(-360deg)";
  y.style.background = "rgba(247, 230, 5, 0.59)";
}

function JSStrFrameLeaveFunc(descNum, tableNum, noteNum) {
  var x = document.getElementsByClassName('descriptionJSFrame')[descNum];
  var z = document.getElementsByClassName('tablejsAttr')[tableNum];
  var y = document.getElementsByClassName('noteJSFrame')[noteNum];

  x.style.transitionProperty = "transform";
  x.style.transitionDuration = "2s";
  x.style.transform = "rotateX(-360deg)";
  x.style.background = "rgba(251, 137, 4, 0.59)";

  z.style.transitionProperty = "transform";
  z.style.transitionDuration = "2s";
  z.style.transform = "rotateY(-360deg)";
  y.style.transitionProperty = "transform";
  y.style.transitionDuration = "2s";
  y.style.transform = "rotateX(360deg)";
  y.style.background = "rgba(215, 62, 22, 0.92)";
}

function getCharAt() {
  var inputValue = document.getElementById('charAtValue').value;
  var string = document.getElementById('charAtText').innerText;
  var target = document.getElementById('charAtReplace');

  target.innerHTML = "Character: " + string.charAt(inputValue);
}

function getCharCodeAt() {
  var inputValue = document.getElementById('charCodeAtValue').value;
  var string = document.getElementById('charCodeAtText').innerText;
  var target = document.getElementById('charCodeAtReplace');

  target.innerHTML = "Character: " + string.charAt(inputValue) + "<br>Character code: " + string.charCodeAt(inputValue);
}

function createString(id, index) {
  var x = document.getElementById(id).value;
  document.getElementsByClassName('replace')[index].innerHTML = '"' + x + '"';
}

function concatStrings() {
  var y = document.getElementById('concatReplace');
  var z = document.getElementsByClassName('replace');
  var text = z[0].innerText + z[1].innerText + z[2].innerText;
  var changedText = text.replace(/"/g, "");
  y.innerHTML = "Result: " + changedText;
}

function isEndsWithOneParam() {
  var searchValue = document.getElementById('endsWithSearchOneParam').value;
  var string = document.getElementById('endsWithText').innerHTML;
  var target = document.getElementById('endsWithReplaceOneParam');
  var result = string.endsWith(searchValue);

  target.innerHTML = "Result: " + result;
}

function isEndsWith() {
  var searchValue = document.getElementById('endsWithSearch').value;
  var lengthValue = document.getElementById('endsWithLength').value;
  var string = document.getElementById('endsWithText').innerHTML;
  var target = document.getElementById('endsWithReplace');
  var result = string.endsWith(searchValue, lengthValue);

  target.innerHTML = "Result: " + result;
}

function getFromCharCode() {
  var value1 = document.getElementById('fromCharCodeValue1').value;
  var value2 = document.getElementById('fromCharCodeValue2').value;
  var string = document.getElementById('fromCharCodeText').innerHTML;
  var target = document.getElementById('fromCharCodeReplace');
  var charCode1 = string.charCodeAt(value1);
  var charCode2 = string.charCodeAt(value2);
  var char = String.fromCharCode(charCode1, charCode2);

  target.innerHTML = "Characters code: " + charCode1 + ", " + charCode2 + "<br>Characters: " + char;
}

function isIncludesOneParam() {
  var searchValue = document.getElementById('includesSearchOneParam').value;
  var string = document.getElementById('includesText').innerHTML;
  var target = document.getElementById('includesReplaceOneParam');
  var result = string.includes(searchValue);

  target.innerHTML = "Result: " + result;
}

function isIncludes() {
  var searchValue = document.getElementById('includesSearch').value;
  var startValue = document.getElementById('includesStart').value;
  var string = document.getElementById('includesText').innerHTML;
  var target = document.getElementById('includesReplace');
  var result = string.includes(searchValue, startValue);

  target.innerHTML = "Result: " + result;
}

function isIndexOfOneParam() {
  var searchValue = document.getElementById('indexOfSearchOneParam').value;
  var string = document.getElementById('indexOfText').innerHTML;
  var target = document.getElementById('indexOfReplaceOneParam');
  var result = string.indexOf(searchValue);

  target.innerHTML = "Result: " + result;
}

function isIndexOf() {
  var searchValue = document.getElementById('indexOfSearch').value;
  var startValue = document.getElementById('indexOfStart').value;
  var string = document.getElementById('indexOfText').innerHTML;
  var target = document.getElementById('indexOfReplace');
  var result = string.indexOf(searchValue, startValue);

  target.innerHTML = "Result: " + result;
}

function isLastIndexOfOneParam() {
  var searchValue = document.getElementById('lastIndexOfSearchOneParam').value;
  var string = document.getElementById('lastIndexOfText').innerHTML;
  var target = document.getElementById('lastIndexOfReplaceOneParam');
  var result = string.lastIndexOf(searchValue);

  target.innerHTML = "Result: " + result;
}

function isLastIndexOf() {
  var searchValue = document.getElementById('lastIndexOfSearch').value;
  var startValue = document.getElementById('lastIndexOfStart').value;
  var string = document.getElementById('lastIndexOfText').innerHTML;
  var target = document.getElementById('lastIndexOfReplace');
  var result = string.lastIndexOf(searchValue, startValue);
  target.innerHTML = "Result: " + result;
}

function compareStrings() {
  var y = document.getElementById('compareReplace');
  var z = document.getElementsByClassName('replace');
  var str1 = z[3].innerText;
  var str2 = z[4].innerText;
  var compare = str1.localeCompare(str2);
  y.innerHTML = "Result: " + compare;
}

function getRepeat() {
  var count = document.getElementById('repeatCount').value;
  var string = document.getElementById('repeatText').innerHTML;
  var target = document.getElementById('repeatReplace');
  var result = string.repeat(count);
  target.innerHTML = result;
}

function replaceString() {
  var string = document.getElementById('replaceText').innerHTML;
  var target = document.getElementById('replaceReplace');
  var values = document.getElementsByClassName('replace');
  var str1 = values[5].innerHTML.replace(/"/g, "");
  var str2 = values[6].innerHTML.replace(/"/g, "");
  var replace = string.replace(str1, str2);
  target.innerHTML = "Result: " + replace;
}

function replaceStringWithFunc() {
  var string = document.getElementById('replaceText').innerHTML;
  var target = document.getElementById('replaceReplace');
  var values = document.getElementsByClassName('replace');
  var str1 = values[7].innerHTML.replace(/"/g, "");
  var replace = string.replace(str1, function (x) {
    return x.toUpperCase();
  });
  target.innerHTML = "Result: " + replace;
}

function replaceStringWithRegexp() {
  var string = document.getElementById('replaceText').innerHTML;
  var target = document.getElementById('replaceReplace');
  var values = document.getElementsByClassName('replace');
  var str1 = values[8].innerHTML.replace(/"/g, "");
  var replace = string.replace(/e|o/g, str1);
  target.innerHTML = "Result: " + replace;
}

function searchString() {
  var string = document.getElementById('searchText').innerHTML;
  var target = document.getElementById('searchReplace');
  var values = document.getElementsByClassName('replace');
  var str1 = values[9].innerHTML.replace(/"/g, "");
  var replace = string.search(str1);
  target.innerHTML = "Result: " + replace;
}

function searchStringWithRegexp() {
  var string = document.getElementById('searchText').innerHTML;
  var target = document.getElementById('searchReplace');
  var replace = string.search(/e|o/g);
  target.innerHTML = "Result: " + replace;
}
