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
