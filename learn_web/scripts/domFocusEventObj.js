function relatedTargetFunc(event) {
  var text = "The related element that lost focus was: " + event.relatedTarget.tagName;
  document.getElementsByClassName('replace')[0].innerText = text;
}

function onblurFunc() {
  var x = document.getElementById("example");
  x.value = "Hello, John! :)";
}

function onfocusFunc(x) {
  x.style.color = "green";
}

function onfocusinFunc(x) {
  x.style.color = "green";
}

function onfocusoutFunc() {
  var x = document.getElementById("example");
  x.value = "Hello, John! :)";
}
