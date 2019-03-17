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

function getConstructor() {
  var string = document.getElementById('constructorText').innerHTML;
  var target = document.getElementById('constructorReplace');
  var result = string.constructor;

  target.innerHTML = "Result: " + result;
}

function getLength() {
  var string = document.getElementById('lengthText').innerHTML;
  var target = document.getElementById('lengthReplace');
  var result = string.length;

  target.innerHTML = "Result: " + result;
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

function matchString() {
  var string = document.getElementById('matchText').innerHTML;
  var target = document.getElementById('matchReplace');
  var replace = string.match(/i/g);
  target.innerHTML = "Result: " + replace;
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

function sliceStrOneParam() {
  var index = document.getElementById('value10').value;
  var string = document.getElementById('sliceText').innerHTML;
  var target = document.getElementById('sliceReplace');
  var result = string.slice(index);

  target.innerHTML = "Result: " + result;
}

function sliceStr() {
  var index1 = document.getElementById('value11').value;
  var index2 = document.getElementById('value12').value;
  var string = document.getElementById('sliceText').innerHTML;
  var target = document.getElementById('sliceReplace');
  var result = string.slice(index1, index2);

  target.innerHTML = "Result: " + result;
}

function splitStrOneParam() {
  var separator = document.getElementById('value13').value;
  var string = document.getElementById('splitText').innerHTML;
  var target = document.getElementById('splitReplace');
  var result = string.split(separator);

  target.innerHTML = "Result: " + result;
}

function splitStr() {
  var index1 = document.getElementById('value14').value;
  var index2 = document.getElementById('value15').value;
  var string = document.getElementById('splitText').innerHTML;
  var target = document.getElementById('splitReplace');
  var result = string.split(index1, index2);

  target.innerHTML = "Result: " + result;
}

function isStartsWithOneParam() {
  var searchValue = document.getElementById('startsWithSearchOneParam').value;
  var string = document.getElementById('startsWithText').innerHTML;
  var target = document.getElementById('startsWithReplaceOneParam');
  var result = string.startsWith(searchValue);

  target.innerHTML = "Result: " + result;
}

function isStartsWith() {
  var searchValue = document.getElementById('startsWithSearch').value;
  var lengthValue = document.getElementById('startsWithLength').value;
  var string = document.getElementById('startsWithText').innerHTML;
  var target = document.getElementById('startsWithReplace');
  var result = string.startsWith(searchValue, lengthValue);

  target.innerHTML = "Result: " + result;
}

function getSubstrOneParam() {
  var index = document.getElementById('value16').value;
  var string = document.getElementById('substrText').innerHTML;
  var target = document.getElementById('substrReplace');
  var result = string.substr(index);

  target.innerHTML = "Result: " + result;
}

function getSubstr() {
  var index1 = document.getElementById('value17').value;
  var index2 = document.getElementById('value18').value;
  var string = document.getElementById('substrText').innerHTML;
  var target = document.getElementById('substrReplace');
  var result = string.substr(index1, index2);

  target.innerHTML = "Result: " + result;
}

function getSubstringOneParam() {
  var index = document.getElementById('value19').value;
  var string = document.getElementById('substringText').innerHTML;
  var target = document.getElementById('substringReplace');
  var result = string.substring(index);

  target.innerHTML = "Result: " + result;
}

function getSubstring() {
  var index1 = document.getElementById('value20').value;
  var index2 = document.getElementById('value21').value;
  var string = document.getElementById('substringText').innerHTML;
  var target = document.getElementById('substringReplace');
  var result = string.substring(index1, index2);

  target.innerHTML = "Result: " + result;
}

function setToLocaleLowerCase() {
  var string = document.getElementById('toLocaleLowerCaseText').innerText;
  var target = document.getElementById('toLocaleLowerCaseReplace');
  var result = string.toLocaleLowerCase();

  target.innerHTML = "Result: " + result;
}

function setToLocaleUpperCase() {
  var string = document.getElementById('toLocaleUpperCaseText').innerText;
  var target = document.getElementById('toLocaleUpperCaseReplace');
  var result = string.toLocaleUpperCase();

  target.innerHTML = "Result: " + result;
}

function setToLowerCase() {
  var string = document.getElementById('toLowerCaseText').innerText;
  var target = document.getElementById('toLowerCaseReplace');
  var result = string.toLowerCase();

  target.innerHTML = "Result: " + result;
}

function changeToString() {
  var number = 1234567890;
  var target = document.getElementById('toStringReplace');
  var result = number.toString();
  var typeOfResult = typeof(result);

  target.innerHTML = "Result: " + result + "<br>Type: " + typeOfResult;
}

function setToUpperCase() {
  var string = document.getElementById('toUpperCaseText').innerText;
  var target = document.getElementById('toUpperCaseReplace');
  var result = string.toUpperCase();

  target.innerHTML = "Result: " + result;
}

function getTrim() {
  var string = "   We animals are the most complicated things in the known universe.   ";
  var target = document.getElementById('trimReplace');
  var result = string.trim();

  target.innerHTML = "Result: " + result;
}

function getValueOf() {
  var string = document.getElementById('valueOfText').innerText;
  var target = document.getElementById('valueOfReplace');
  var result = string.valueOf();

  target.innerHTML = "Result: " + result;
}
