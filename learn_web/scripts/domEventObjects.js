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
