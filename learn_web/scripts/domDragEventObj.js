function clipBoardEventOncopyFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text was copied!";
}

function clipBoardEventOncutFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The text has been cut!";
}

function clipBoardEventOnpasteFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text has been inserted!";
}

function eventOndragstartFunc(event) {
  event.dataTransfer.setData("text", event.target.id);
  event.target.innerText = "Started dragging text!";
}

function eventOndragoverFunc(event) {
  event.preventDefault();
  document.getElementsByClassName("replace")[0].innerHTML = "The text is above the target point!";
}

function eventOndropFunc(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  document.getElementsByClassName("replace")[0].innerHTML = "Text dropped!";
}
