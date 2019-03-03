function persistedFunc(event) {
  if (event.persisted) {
    document.getElementsByClassName('replace')[0].innerText = "The page was cached by the browser.";
  } else {
    document.getElementsByClassName('replace')[0].innerText = "The page was not cached by the browser.";
  }
}

function onpagehideFunc() {
  alert("You are leaving the page!");
}
