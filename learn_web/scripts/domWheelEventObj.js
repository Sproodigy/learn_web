function eventDeltaXFunc(event) {
  var x = event.deltaX;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventDeltaYFunc(event) {
  var x = event.deltaY;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventDeltaZFunc(event) {
  var x = event.deltaZ;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventDeltaModeFunc(event) {
  var x = event.deltaMode;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}
