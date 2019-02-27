function clipBoardEventOncopyFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text was copied!";
}

function clipBoardEventOncutFunc() {
  document.getElementsByClassName("replace")[0].innerText = "The text has been cut!";
}

function clipBoardEventOnpasteFunc() {
  document.getElementsByClassName("replace")[0].innerText = "Text has been inserted!";
}
