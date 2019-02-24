function roundBorders() {
  var list = document.getElementsByClassName('round-bord');

  for (var i = 1; i<list.length; i++) {
    list[0].style.borderTopLeftRadius = "20px";
    list[0].style.borderTopRightRadius = "20px";

    if (i % 2 == 0) {
      list[i].style.borderTopRightRadius = "20px";
    } else {
      list[i].style.borderTopLeftRadius = "20px";
    }
  }
}

function isBubbles(event) {
  var x = event.bubbles;
  document.getElementsByClassName("replace")[0].innerHTML = "Bubbles: " + x;
}

function firstLevel(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked) {
    event.cancelBubble = true;
  }
}

function secLevel() {
  alert("DIV 2");
}

function cancelable(event) {
  var x = event.cancelable;
  document.getElementsByClassName("replace")[0].innerHTML = "Cancelable: " + x;
}

function currentTarget(event) {
  var x = event.currentTarget.nodeName;
  document.getElementsByClassName("replace")[0].innerHTML = "Node name: " + x;
}

function eventPhase(event) {
  var x = event.eventPhase;
  document.getElementsByClassName("replace")[0].innerHTML = "Event phase: " + x;
}

function isTrusted(event) {
  var x = event.isTrusted;
  document.getElementsByClassName("replace")[0].innerHTML = "Is trusted: " + x;
}

function target(event) {
  var x = event.target;
  document.getElementsByClassName("replace")[0].innerHTML = "Triggered by a " + x.tagName + " element";
}

function type(event) {
  var x = event.type;
  document.getElementsByClassName("replace")[0].innerHTML = "Event: " + x;
}

function timeStamp(event) {
  var x = event.timeStamp;
  document.getElementsByClassName("replace")[0].innerHTML = "Time stamp: " + x;
}

function createNewEvent(event) {
  var x = document.createEvent("MouseEvent");
  x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  document.getElementById("elemCreateEventP").dispatchEvent(x);
}

function getComposedPath(event) {
  var x = event.composedPath();
  document.getElementsByClassName("replace")[0].innerHTML = "Path: " + x;
}

function cancelPropagation(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked) {
    event.stopPropagation();
  }
}

function printText(event) {
  var x = document.getElementsByClassName("replace")[0];
  x.innerText = "Example text...";

  if (document.getElementById("check").checked) {
    event.stopImmediatePropagation();
  }
}

function addText() {
  var x = document.getElementsByClassName("replace")[0];
  document.getElementsByClassName("replace")[0].innerText += " other text...";
}

function afterprintMessage() {
  document.getElementsByClassName("replace")[0].innerText = "This document is now being printed.";
}

function beforeprintMessage() {
  document.getElementsByClassName("replace")[0].innerText = "You are about to print this document!";
}

function onbeforeunloadMessage() {
  return "Example text...";
}

function oncanplayMessage() {
  document.getElementsByClassName("replace")[0].innerText = "Can start playing video.";
}

function oncanplaythroughMessage() {
  document.getElementsByClassName("replace")[0].innerText = "Can play through video without stopping.";
}

function onchangeData() {
  var x = document.getElementById("eventChangeSelect").value;
  document.getElementsByClassName("replace")[0].innerText = "You selected " + x;
}

function onerrorMessage() {
  document.getElementsByClassName("replace")[0].innerText = "The image could not be loaded.";
}

var elemExFullScr = document.documentElement;
function openFullscreenElem() {
  if (elemExFullScr.requestFullscreen) {
    elemExFullScr.requestFullscreen();
  } else if (elemExFullScr.mozRequestFullScreen) {
    elemExFullScr.mozRequestFullScreen();
  } else if (elemExFullScr.webkitRequestFullscreen) {
    elemExFullScr.webkitRequestFullscreen();
  } else if (elemExFullScr.msRequestFullscreen) {
    elemExFullScr.msRequestFullscreen();
  }
}

function closeFullscreenElem() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function eventOninputFunc() {
  var x = document.getElementById("eventInput").value;
  document.getElementsByClassName("replace")[0].innerText = "You wrote: " + x;
}

function eventOninvalidFunc() {
  var x = document.getElementById("eventOninvalid").value;
  document.getElementsByClassName("replace")[0].innerText = "You must fill out the form!";
}

function eventOnloadFunc() {
  alert("Page is loaded!");
}

function eventOnloadeddataFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Browser has loaded the current frame!";
}

function eventOnloadedmetadataFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Meta data for video loaded!";
}

function goToAnchor(id) {
  var offsetY = document.getElementById(id).offsetTop;
  window.scrollTo(0, offsetY);
}

function eventOnprogressFunc() {
  alert("Downloading video!");
}

function eventOnonlineFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Your browser is working online!";
}

function eventOnofflineFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Your browser is working offline!";
}

function eventOnpauseFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The video was paused!";
}

function eventOnplayFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The video was played!";
}

function eventOnresizeFunc() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementsByClassName("replace")[0].innerText = txt;
}

function setPlaySpeed() {
  var x = document.getElementById("eventOnratechangeVideo");
  x.playbackRate = 0.3;
}

function eventOnratechangeFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The playing speed of the video was changed!";
}

function eventOnresetFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The form was reset!";
}

function eventOnsubmitFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The form was submitted!";
}

function eventOnsearchFunc() {
  var x = document.getElementById("eventSearchInput");
  var text = "You are searching for: " + x.value;
  document.getElementsByClassName("replace")[0].innerText = text;
}

function eventOnscrollFunc() {
  var x = document.getElementById("eventOnscroll");
  var scroll = x.scrollTop;
  if (scroll > 80) {
    x.style.background = "green";
  } else if (scroll < 80) {
    x.style.background = "initial";
  }
  document.getElementsByClassName("replace")[0].innerText = scroll;
}

function eventOnseekedFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Seek operation completed!";
}
