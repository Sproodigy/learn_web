function eventMouseLeftButFunc(x, size) {
  x.style.fontSize = size;
}

var x = 0;

function eventOnmousePerformFunc() {
  var y = document.getElementsByClassName('replace')[0];
  y.style.background = "olive";
  y.innerHTML = "Count: " + (x += 1);
}

function eventMouseAltKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];

  if (event.altKey) {
    x.innerText = "The ALT key was pressed!";
  } else {
    x.innerText ="The ALT key was not pressed!";
  }
}

function eventMouseButtonFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  x.innerText = "You pressed button: " + event.button;
}

function eventMouseButtonsFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  x.innerText = "You pressed button: " + event.buttons;
}

function eventClientXFunc(event) {
  var txt = "X coords: " + event.clientX;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventClientYFunc(event) {
  var txt = "Y coords: " + event.clientY;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventMouseCtrlKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];

  if (event.ctrlKey) {
    x.innerText = "The CTRL key was pressed!";
  } else {
    x.innerText ="The CTRL key was not pressed!";
  }
}

function eventMouseMetaKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];

  if (event.metaKey) {
    x.innerText = "The Meta key was pressed!";
  } else {
    x.innerText ="The Meta key was not pressed!";
  }
}

function eventOffsetXFunc(event) {
  var txt = "offsetX: " + event.offsetX;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventOffsetYFunc(event) {
  var txt = "offsetY: " + event.offsetY;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventPageXFunc(event) {
  var txt = "X coords: " + event.pageX;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getRelatedElement(event) {
  var x = event.relatedTarget.tagName;
  var txt = "The cursor just exited the " + x + " element.";
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventPageYFunc(event) {
  var txt = "Y coords: " + event.pageY;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventScreenXFunc(event) {
  var txt = "X coords: " + event.screenX;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventScreenYFunc(event) {
  var txt = "Y coords: " + event.screenY;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function eventMouseShiftKeyFunc(event) {
  var x = document.getElementsByClassName("replace")[0];

  if (event.shiftKey) {
    x.innerText = "The SHIFT key was pressed!";
  } else {
    x.innerText ="The SHIFT key was not pressed!";
  }
}

function eventMouseWhichFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  x.innerText = "Caps Lock activated: " + event.which;
}

function eventMouseGetModifierStateFunc(event) {
  var x = document.getElementsByClassName("replace")[0];
  var state = event.getModifierState("CapsLock");
  x.innerText = "Caps Lock activated: " + state;
}
