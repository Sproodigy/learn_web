function changePart() {
  location.hash = "newPart";
}

function getURLsFunc(event) {
  var text = "Previous URL: " + event.oldURL + "<br><br>New URL: " + event.newURL;
  document.getElementsByClassName("replace")[0].innerHTML = text;
}
