function eventAltKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  if (event.altKey) {
    x.innerHTML = "The ALT key was pressed!";
  } else {
    x.innerHTML = "The ALT key was not pressed!";
  }
}

function eventCtrlKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  if (event.ctrlKey) {
    x.innerHTML = "The CTRL key was pressed!";
  } else {
    x.innerHTML = "The CTRL key was not pressed!";
  }
}

function eventShiftKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  if (event.shiftKey) {
    x.innerHTML = "The SHIFT key was pressed!";
  } else {
    x.innerHTML = "The SHIFT key was not pressed!";
  }
}

function eventMetaKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  if (event.metaKey) {
    x.innerHTML = "The META key was pressed!";
  } else {
    x.innerHTML = "The META key was not pressed!";
  }
}

function eventCodeFunc(event) {
  var x = event.code;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventKeyFunc(event) {
  var x = event.key;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventKeyCodeFunc(event) {
  var x = event.keyCode || event.which;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventCharCodeFunc(event) {
  var x = event.charCode;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventLocationFunc(event) {
  var x = event.location;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function eventLocationFunc(event) {
  var x = event.getModifierState("CapsLock");
  document.getElementsByClassName("replace")[0].innerHTML = "Caps Lock activated: " + x;
}
