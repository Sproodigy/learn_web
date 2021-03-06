function changeTableAlign(id, align) {
  document.getElementById(id).align = align;
  document.getElementsByClassName('replaceTableAlign')[0].innerHTML = '"' + align + '"';
}

function changeTableBgcolor(id, bgcolor) {
  document.getElementById(id).bgColor = bgcolor;
  document.getElementsByClassName('replaceTableBgcolor')[0].innerHTML = '"' + bgcolor + '"';
}

function changeTableBorder(id, border) {
  document.getElementById(id).border = border;
  document.getElementsByClassName('replaceTableBorder')[0].innerHTML = '"' + border + '"';
}

function changeTableCellpadding(id, cellpadding) {
  document.getElementById(id).cellPadding = cellpadding;
  document.getElementsByClassName('replaceTableCellpadding')[0].innerHTML = '"' + cellpadding + '"';
}

function changeTableCellspacing(id, cellspacing) {
  document.getElementById(id).cellSpacing = cellspacing;
  document.getElementsByClassName('replaceTableCellspacing')[0].innerHTML = '"' + cellspacing + '"';
}

function changeTableFrame(id, frame) {
  document.getElementById(id).frame = frame;
  document.getElementsByClassName('replaceTableFrame')[0].innerHTML = '"' + frame + '"';
}

function changeTableRules(id, rules) {
  document.getElementById(id).rules = rules;
  document.getElementsByClassName('replaceTableRules')[0].innerHTML = '"' + rules + '"';
}

function changeTableWidth(id, width) {
  document.getElementById(id).width = width;
  document.getElementsByClassName('replaceTableWidth')[0].innerHTML = '"' + width + '"';
}

function changeCaptionAlign(id, align) {
  document.getElementById(id).align = align;
  document.getElementsByClassName('replaceCaptionAlign')[0].innerHTML = '"' + align + '"';
}

function changeThAlign(id, align) {
  document.getElementById(id).align = align;
  document.getElementsByClassName('replaceThAlign')[0].innerHTML = '"' + align + '"';
}

function changeThBgcolor(id, color) {
  document.getElementById(id).bgColor = color;
  document.getElementsByClassName('replaceThBgcolor')[0].innerHTML = '"' + color + '"';
}

function changeThColspan(id, span) {
  document.getElementById(id).colSpan = span;
  document.getElementsByClassName('replaceThColspan')[0].innerHTML = '"' + span + '"';
}

function changeThRowspan(id, span) {
  document.getElementById(id).rowSpan = span;
  document.getElementsByClassName('replaceThRowspan')[0].innerHTML = '"' + span + '"';
}

function changeTdColspan(id, span) {
  document.getElementById(id).colSpan = span;
  document.getElementsByClassName('replaceTdColspan')[0].innerHTML = '"' + span + '"';
}

function changeTdRowspan(id, span) {
  document.getElementById(id).rowSpan = span;
  document.getElementsByClassName('replaceTdRowspan')[0].innerHTML = '"' + span + '"';
}

function changeColSpan(id, span) {
  document.getElementById(id).span = span;
  document.getElementsByClassName('replaceColSpan')[0].innerHTML = '"' + span + '"';
}
