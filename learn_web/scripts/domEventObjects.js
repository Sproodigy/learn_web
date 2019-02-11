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
