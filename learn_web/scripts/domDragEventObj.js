function clipBoardEventOncopyFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text was copied!";
}

function clipBoardEventOncutFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The text has been cut!";
}

function clipBoardEventOnpasteFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text has been inserted!";
}



function ondragstartFunc(event) {
  event.dataTransfer.setData("text", event.target.id);
  document.getElementsByClassName("replace")[0].innerHTML = "Started dragging text!";
}

function ondragFunc(event, text) {
  document.getElementsByClassName("replace")[1].innerHTML = text;
}

function ondragoverFunc(event, text) {
  event.preventDefault();
  document.getElementsByClassName("replace")[2].innerHTML = text;
}

function ondragleaveFunc(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementsByClassName("replace")[3].innerHTML = "Left the dropzone!";
  }
}

function ondragenterFunc(event) {
  if ( event.target.className == "droptarget" ) {
    document.getElementsByClassName("replace")[3].innerHTML = "Entered the dropzone!";
  }
}

function ondropFunc(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  document.getElementsByClassName("replace")[1].innerHTML = "Text dropped!";
  document.getElementsByClassName("replace")[2].innerHTML = "";
}

function ondragendFunc(event) {
  document.getElementsByClassName("replace")[0].innerHTML = "Finished dragging text!";
}
