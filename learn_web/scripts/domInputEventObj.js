function dataFunc(event) {
  document.getElementsByClassName("replace")[0].innerHTML = event.data;
}

function inputTypeFunc(event) {
  document.getElementsByClassName("replace")[0].innerHTML = event.inputType;
}

function oninputFunc() {
  var x = document.getElementById("oninputValue").value;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}
