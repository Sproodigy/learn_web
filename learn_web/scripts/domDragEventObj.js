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
  document.getElementsByClassName("replace")[0].innerHTML = "Started dragging text!";
  document.getElementsByClassName("replace")[2].innerHTML = "";
}

function eventOndragoverFunc(event) {
  event.preventDefault();
  document.getElementsByClassName("replace")[1].innerHTML = "The text is above the target point!";
  document.getElementsByClassName("replace")[2].innerHTML = "";
}

function eventOndragleaveFunc(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementsByClassName("replace")[3].innerHTML = "Entered the dropzone";
    event.target.style.border = "3px dotted green";
  }
}

function eventOndragenterFunc(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementsByClassName("replace")[3].innerHTML = "Left the dropzone";
    event.target.style.border = "";
  }
}

function eventOndropFunc(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  document.getElementsByClassName("replace")[0].innerHTML = "Text dropped!";
}

function eventOndragendFunc(event) {
  document.getElementsByClassName("replace")[1].innerHTML = "";
  document.getElementsByClassName("replace")[2].innerHTML = "Finished dragging an element.";
}
