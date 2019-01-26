function setAccessKey() {
  var key = prompt("Input access key:");
  document.getElementById("elemAccessKeyLink").accessKey = key;
  document.getElementsByClassName("replace")[0].innerHTML = "Access key: " + key;
}

function elemGetAttributesLength() {
  var butNum = prompt("Input button number:");
  var but = document.getElementsByTagName("button")[butNum];
  txt = "";

  for (var i=0; i<but.attributes.length; i++) {
    txt = txt + but.attributes[i].name + " = " + but.attributes[i].value + "<br>";
    txt2 = "Attributes length: " + but.attributes.length;
    document.getElementsByClassName("replace")[0].innerHTML = txt2 + "<br><br>" + txt;
  }
}

function getChildElemCount() {
  var childElem = document.getElementById("elemChildElemCountDiv").childElementCount;
  var txt = "Amount of elements: " + childElem;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getChildNodes() {
  var n = document.getElementById("elemChildNodesDiv").childNodes;
  var len = n.length;
  n[5].style.color = "red";
  var txt = "Amount of nodes: " + len;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getChildren() {
  var n = document.getElementById("elemChildrenDiv").children;
  var len = n.length;
  n[3].style.color = "red";
  var txt = "Amount of elements: " + len;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getClasses(id) {
  let x = document.getElementsByClassName("change");
  var list = document.getElementById("elemClassListP").classList;
  txt = list + "<br><br> List length: " + list.length;
  document.getElementById("elemClassListP").innerHTML = txt;

  for (var i=0; i<=x.length; i++) {
    document.getElementById(id).style.display = "block";
    x[i].style.display = "none";
  }
}

function addClasses(id) {
  let x = document.getElementsByClassName("change");
  var list = document.getElementById("elemClassListP").classList;
  list.add("border", "padding", "maroon", "yellowBackgr");

  for (var i=0; i<=x.length; i++) {
    document.getElementById(id).style.display = "block";
    x[i].style.display = "none";
  }
}

function toggleBetwenClasses(id) {
  let x = document.getElementsByClassName("change");
  var list = document.getElementById("elemClassListP").classList;
  list.toggle("blueBackgr");

  for (var i=0; i<=x.length; i++) {
    document.getElementById(id).style.display = "block";
    x[i].style.display = "none";
  }
}

function removeClasses(id) {
  let x = document.getElementsByClassName("change");
  var list = document.getElementById("elemClassListP").classList;
  list.remove("padding", "maroon", "yellowBackgr", "blueBackgr");

  for (var i=0; i<=x.length; i++) {
    document.getElementById(id).style.display = "block";
    x[i].style.display = "none";
  }
}

function getClassName(id) {
  var name = document.getElementById("elemClassNameP").className;
  txt ="Class name: " + name;
  document.getElementById("elemClassNameP").innerHTML = txt;
  document.getElementById("getClassName").style.display = "block";
  document.getElementById("setClassName").style.display = "none";
  document.getElementById("removeClassName").style.display = "none";
}

function setClassName(id) {
  txt = "padding border";
  document.getElementById("elemClassNameP").className = txt;
  document.getElementById("elemClassNameP").innerHTML = txt;
  document.getElementById("getClassName").style.display = "none";
  document.getElementById("setClassName").style.display = "block";
  document.getElementById("removeClassName").style.display = "none";
}

function removeClassName(id) {
  txt = "";
  document.getElementById("elemClassNameP").className = txt;
  document.getElementById("elemClassNameP").innerHTML = "No more class name.";
  document.getElementById("getClassName").style.display = "none";
  document.getElementById("setClassName").style.display = "none";
  document.getElementById("removeClassName").style.display = "block";
}

function getClientHeight() {
  var text1 = prompt("Input any text:");
  var text2 = prompt("Input any text:");
  var elmnt = document.getElementById("elemClientHeightP1");
  elmnt.innerHTML = text1 + "<br>" + text2;
  var txt = "";
  txt = "Height including padding: " + elmnt.clientHeight + "px";
  document.getElementById("elemClientHeightP2").innerHTML = txt;
}

function getClientLeft() {
  var borderWidth = prompt("Input border left width:");
  var elmnt = document.getElementById("elemClientLeftP1");
  var txt = "";
  elmnt.style.borderLeftWidth = borderWidth + "px";
  txt = "Border left width: " + elmnt.clientLeft + "px";
  document.getElementById("elemClientLeftP2").innerHTML = txt;
}

function getClientTop() {
  var borderWidth = prompt("Input border top width:");
  var elmnt = document.getElementById("elemClientTopP1");
  var txt = "";
  elmnt.style.borderTopWidth = borderWidth + "px";
  txt = "Border top width: " + elmnt.clientTop + "px";
  document.getElementById("elemClientTopP2").innerHTML = txt;
}

function getClientWidth() {
  var text = prompt("Input any text:");
  var elmnt = document.getElementById("elemClientWidthP1");
  elmnt.innerHTML = text;
  var txt = "";
  txt = "Width including padding: " + elmnt.clientWidth + "px";
  document.getElementById("elemClientWidthP2").innerHTML = txt;
}













function getOffsetHeight() {
  var text1 = prompt("Input any text:");
  var text2 = prompt("Input any text:");
  var elmnt = document.getElementById("elemOffsetHeightP1");
  elmnt.innerHTML = text1 + "<br>" + text2;
  var txt = "";
  txt = "Height including padding and border: " + elmnt.offsetHeight + "px";
  document.getElementById("elemOffsetHeightP2").innerHTML = txt;
}

function getOffsetWidth() {
  var text = prompt("Input any text:");
  var elmnt = document.getElementById("elemOffsetWidthP1");
  elmnt.innerHTML = text;
  var txt = "";
  txt = "Width including padding and border: " + elmnt.offsetWidth + "px";
  document.getElementById("elemOffsetWidthP2").innerHTML = txt;
}
