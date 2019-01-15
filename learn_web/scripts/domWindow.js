let myWindow;

function openWindow() {
  myWindow = window.open("", "myWindow", "width=400, height=150");
}

function closeWindow() {
  if (myWindow) {
    myWindow.close();
  }
}

function checkWindow() {
  if (myWindow.closed) {
    document.getElementById('windowClosedP').innerHTML = 'The window was closed.'
    document.getElementsByClassName('replace')[0].innerHTML = 'The window was closed.'
  } else {
    document.getElementById('windowClosedP').innerHTML = 'The window was open.';
    document.getElementsByClassName('replace')[0].innerHTML = 'The window was open.'
  }
}

function checkFrameElement() {
  let frame = window.frameElement;
  console.log(frame);

  if (frame) {
    frame.src = "https://www.w3schools.com/";
  } else {
    document.getElementById('windowFrameElementP').innerHTML = 'Frames don\'t exist.';
    document.getElementsByClassName('replace')[0].innerHTML = 'Frames don\'t exist.';
  }
}

function replaceFrameData() {
  window.frames[0].location = "https://liquimoly.ru/";
  document.getElementsByClassName('replace')[0].innerHTML = '"https://liquimoly.ru/"';
}

function showInnerHeight() {
  let h = window.innerHeight;
  document.getElementById("windowInnerHeightP").innerHTML = "Inner height: " + h + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Inner height: " + h + "px";
}

function showInnerWidth() {
  let w = window.innerWidth;
  document.getElementById("windowInnerWidthP").innerHTML = "Inner width: " + w + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Inner width: " + w + "px";
}

function showWindowsLength() {
  let len = window.length;
  document.getElementById("windowLengthP").innerHTML = "Number of windows: " + len;
  document.getElementsByClassName("replace")[0].innerHTML = "Number of windows: " + len;
}

function showWindowName() {
  let winName = myWindow.name;
  document.getElementById("windowNameP").innerHTML = "Window name: " + winName;
  document.getElementsByClassName("replace")[0].innerHTML = "Window name: " + winName;
}

function workWindowOpener() {
  let myWindow = window.open("", "myWindow", "width=200, height=150");
  myWindow.document.write("This is 'myWindow'");
  myWindow.opener.document.write("<p>This is the source window!</p>");
}

function showOuterHeight() {
  let h = window.outerHeight;
  document.getElementById("windowOuterHeightP").innerHTML = "Outer height: " + h + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Outer height: " + h + "px";
}

function showOuterWidth() {
  let w = window.outerWidth;
  document.getElementById("windowOuterWidthP").innerHTML = "Outer width: " + w + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Outer width: " + w + "px";
}

function showPageXOffset() {
  document.getElementById("windowPageXOffsetP").innerHTML = "pageXOffset: " + window.pageXOffset;
  document.getElementsByClassName("replace")[0].innerHTML = "pageXOffset: " + window.pageXOffset;
}

function showPageYOffset(height) {
  document.getElementById("windowPageYOffsetP").innerHTML = "pageYOffset: " + window.pageYOffset;
  document.getElementsByClassName("replace")[0].innerHTML = "pageYOffset: " + window.pageYOffset;
}

function showWindowParent() {
  document.getElementById("windowParentP").innerHTML = "Show parent window: " + window.parent.location;
  document.getElementsByClassName("replace")[0].innerHTML = "Show parent window: " + window.parent.location;
}

function showWindowScreenLeft() {
  let windowScreenLeftPos = window.open("", "myWin", "width=200, height=300");
  document.getElementById("windowScreenLeftP").innerHTML = "Move the window and press the button.";
  document.getElementById("windowScreenLeftP2").innerHTML = "The position of the window to the left: " + windowScreenLeftPos.screenLeft;
  document.getElementsByClassName("replace")[0].innerHTML = "The position of the window to the left: " + windowScreenLeftPos.screenLeft;
}

function showWindowScreenTop() {
  let windowScreenTopPos = window.open("", "myWin", "width=200, height=300");
  document.getElementById("windowScreenTopP").innerHTML = "Move the window and press the button.";
  document.getElementById("windowScreenTopP2").innerHTML = "The position of the window to the top: " + windowScreenTopPos.screenTop;
  document.getElementsByClassName("replace")[0].innerHTML = "The position of the window to the top: " + windowScreenTopPos.screenTop;
}

function showWindowScreenX() {
  let windowScreenXPos = window.open("", "myWin", "width=200, height=300");
  document.getElementById("windowScreenXP").innerHTML = "Move the window and press the button.";
  document.getElementById("windowScreenXP2").innerHTML = "The position of the window to the left: " + windowScreenXPos.screenX;
  document.getElementsByClassName("replace")[0].innerHTML = "The position of the window to the left: " + windowScreenXPos.screenX;
}

function showWindowScreenY() {
  let windowScreenYPos = window.open("", "myWin", "width=200, height=300");
  document.getElementById("windowScreenYP").innerHTML = "Move the window and press the button.";
  document.getElementById("windowScreenYP2").innerHTML = "The position of the window to the top: " + windowScreenYPos.screenY;
  document.getElementsByClassName("replace")[0].innerHTML = "The position of the window to the top: " + windowScreenYPos.screenY;
}

function compareWindows(id) {
  if (window.top != window.self)  {
    document.getElementById(id).innerHTML = "This window is not the topmost window! Am I in a frame?";
    document.getElementsByClassName("replace")[0].innerHTML = "This window is not the topmost window! Am I in a frame?";
  } else {
    document.getElementById(id).innerHTML = "This window is the topmost window!";
    document.getElementsByClassName("replace")[0].innerHTML = "This window is the topmost window!";
  }
}

function performAnAlert(data) {
  alert(data);
}

function performAToB() {
  let str = "SGVsbG8gV29ybGQh";
  let dec = window.atob(str);
  document.getElementById("windowAToBP").innerHTML = "Decoded string: " + dec;
  document.getElementsByClassName("replace")[0].innerHTML = "Decoded string: " + dec;
}

function performBToA() {
  let str = "Hello world!";
  let enc = window.btoa(str);
  document.getElementById("windowBToAP").innerHTML = "Encoded string: " + enc;
  document.getElementsByClassName("replace")[0].innerHTML = "Encoded string: " + enc;
}

function setWindowBlur() {
  let myWindow = window.open("", "", "width=200, height=100");
  myWindow.document.write("<p>A new window!</p>");
  myWindow.blur();
}

function setWindowFocus() {
  let myWindow = window.open("", "", "width=200, height=100");
  myWindow.document.write("<p>A new window!</p>");
  myWindow.focus();
}

function performConfirm(msg) {
  let a = confirm(msg);
  document.getElementsByClassName("replace")[1].innerHTML = "'" + msg + "'";

  if (a == true) {
    document.getElementById("windowConfirmP").innerHTML = "Good!";
    document.getElementsByClassName("replace")[0].innerHTML = "Good!";
  } else {
    document.getElementById("windowConfirmP").innerHTML = "Very bad!";
    document.getElementsByClassName("replace")[0].innerHTML = "Very bad!";
  }
}

function moveWindowBy() {
  myWindow.moveBy(300, 300);
  myWindow.focus();
}

function moveWindowTo() {
  myWindow.moveTo(300, 300);
  myWindow.focus();
}

function openWindowWithControl() {
  window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=400,height=400");
}

function printWindow() {
  window.print();
}

function performPrompt() {
  let fruit = prompt("Please enter your favorite fruit:", "Banana");
  if (fruit != null) {
    document.getElementById("windowPromptP").innerHTML = fruit + " is a good choise!";
    document.getElementsByClassName("replace")[0].innerHTML = fruit + " is a good choise!";
  }
}

function resizeWindowBy() {
  myWindow.resizeBy(300, 300);
  myWindow.focus();
}

function resizeWindowTo() {
  myWindow.resizeTo(300, 300);
  myWindow.focus();
}

let anotherWindow;

function openAnotherWindow() {
  anotherWindow = window.open("", "", "top=400, left=400, width=200, height=200");
}

function scrollAnotherWindowTo() {
  anotherWindow.scrollTo(100, 0);
}

function scrollAnotherWindowBy() {
  window.scrollBy(300, 0);
}

let myInterval = setInterval(windowSetIntervalColor, 1000);

function windowSetIntervalColor() {
  let x = document.getElementById('windowSetIntervalDiv');
  x.style.backgroundColor = x.style.backgroundColor == "green" ? "chartreuse" : "green";
}

let myTimeout = setTimeout(windowSetTimeoutColor, 7000);

function windowClearIntervalColor() {
  clearInterval(myInterval);
}

function windowSetTimeoutColor() {
  let x = document.getElementById('windowSetTimeoutDiv');
  x.style.backgroundColor = "green";
}

function windowClearTimeoutColor() {
  clearInterval(myTimeout);
}

function windowGetComputedStyle(propValue){
  let elem = document.getElementById("windowGetComputedStyleP");
  let theCSSprop = window.getComputedStyle(elem, null).getPropertyValue(propValue);
  document.getElementById("windowGetComputedStyleP").innerHTML = theCSSprop;
  document.getElementsByClassName("replace")[0].innerHTML = theCSSprop;
  document.getElementsByClassName("replace")[1].innerHTML = "\"" + propValue + "\"";
}

function myFunction(maxWidth) {
  if (maxWidth.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

let maxWidth = window.matchMedia("(max-width: 1000px)");
myFunction(maxWidth); // Call listener function at run time
maxWidth.addListener(myFunction); // Attach listener function on state changes
