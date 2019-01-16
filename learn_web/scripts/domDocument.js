function getElemInFocus() {
  var x = document.activeElement.tagName;
  document.getElementById("documentActiveElemP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getAnchors() {
  var x = document.anchors.length;
  document.getElementById("documentAnchorsP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getApplets() {
  var x = document.applets.length;
  document.getElementById("documentAppletsP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getBaseURI() {
  var x = document.baseURI;
  document.getElementById("documentBaseURIP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function changeBodyStyle() {
  document.getElementById("docBody1").style.display = "block";
  document.getElementById("docBody2").style.display = "none";
  document.body.style.backgroundColor = "rgb(220, 238, 105)";
  document.getElementById("documentBodyP").innerHTML = '';
  document.getElementsByClassName("replace")[0].innerHTML = '';
}

function showBodyStyle() {
  document.getElementById("docBody1").style.display = "none";
  document.getElementById("docBody2").style.display = "block";
  document.getElementById("documentBodyP").innerHTML = document.body;
  document.getElementsByClassName("replace")[0].innerHTML = document.body;
}

function createCookie() {
  document.getElementById("docCookie1").style.display = "block";
  document.getElementById("docCookie2").style.display = "none";
  document.body.cookie = "username=Evgen";
  document.getElementById("documentCookieP").innerHTML = '';
  document.getElementsByClassName("replace")[0].innerHTML = '';
}

function showCookie() {
  document.getElementById("docCookie1").style.display = "none";
  document.getElementById("docCookie2").style.display = "block";
  document.getElementById("documentCookieP").innerHTML = document.cookie;
  document.getElementsByClassName("replace")[0].innerHTML = document.cookie;
}

function showDefaultView() {
  let view = document.defaultView;
  let width = view.innerWidth;
  let height = view.innerHeight;
  document.getElementById("documentDefaultViewP").innerHTML = `innerWidth: ${width}<br>innerHeight: ${height}`;
  document.getElementsByClassName("replace")[0].innerHTML = `innerWidth: ${width}<br>innerHeight: ${height}`;
}

function showDesignMode() {
  document.getElementById("docDesignMode1").style.display = "block";
  document.getElementById("docDesignMode2").style.display = "none";
  document.getElementById("documentDesignModeP").innerHTML = document.designMode;
  document.getElementsByClassName("replace")[0].innerHTML = document.designMode;
}

function changeDesignMode(state) {
  document.getElementById("docDesignMode1").style.display = "none";
  document.getElementById("docDesignMode2").style.display = "block";
  document.designMode = state;
  document.getElementById("documentDesignModeP").innerHTML = '';
  document.getElementsByClassName("replace")[0].innerHTML = '';
  document.getElementsByClassName("replace")[1].innerHTML = '"' + state + '"';
}

function getDoctype() {
  var x = document.doctype;
  document.getElementById("documentDoctypeP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
  document.getElementsByClassName("replace")[1].innerHTML = 'document.doctype';
}

function getDoctypeName() {
  var x = document.doctype.name;
  document.getElementById("documentDoctypeP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
  document.getElementsByClassName("replace")[1].innerHTML = 'document.doctype.name';
}

function getDocElem() {
  var x = document.documentElement.nodeName;
  document.getElementById("documentDocElemP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getDocMode() {
  var x = document.documentMode;
  document.getElementById("documentDocModeP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getDocURI() {
  document.getElementById("docDocURI1").style.display = "none";
  document.getElementById("docDocURI2").style.display = "block";
  document.getElementById("docDocURIP").innerHTML = document.documentURI;
  document.getElementsByClassName("replace")[0].innerHTML = document.documentURI;
  document.getElementsByClassName("replace")[1].innerHTML = document.documentURI;
}

function setDocURI(state) {
  document.getElementById("docDocURI1").style.display = "block";
  document.getElementById("docDocURI2").style.display = "none";
  document.documentURI = state;
  document.getElementById("docDocURIP").innerHTML = '';
  document.getElementsByClassName("replace")[0].innerHTML = '';
  document.getElementsByClassName("replace")[1].innerHTML = '"' + state + '"';
}

function getDomain() {
  var x = document.domain;
  document.getElementById("doсDomainP").innerHTML = "Domain: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Domain: " + x;
}

function getEmbeds() {
  var x = document.embeds.length;
  document.getElementById("doсumentEmbedsP").innerHTML = x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}
