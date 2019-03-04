function eventDetailFunc(event) {
  var x = event.detail;
  document.getElementsByClassName("replace")[0].innerText = x;
}

function eventViewFunc(event) {
  var x = event.view;
  document.getElementsByClassName("replace")[0].innerText = x;
}
