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

function changeEditContent(button) {
  var x = document.getElementById("elemContentEditableP");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    button.innerHTML = "Enable content editing";
  } else {
    x.contentEditable = "true";
    button.innerHTML = "Disable content editing";
  }
}

function elemDirRtl() {
  document.getElementById("elemDirP").dir = "rtl";
  document.getElementById("elemDirRtlDesc").style.display = "block";
  document.getElementById("elemDirLtrDesc").style.display = "none";
  document.getElementById("elemDirAutoDesc").style.display = "none";
}

function elemDirLtr() {
  document.getElementById("elemDirP").dir = "ltr";
  document.getElementById("elemDirRtlDesc").style.display = "none";
  document.getElementById("elemDirLtrDesc").style.display = "block";
  document.getElementById("elemDirAutoDesc").style.display = "none";
}

function elemDirAuto() {
  document.getElementById("elemDirP").dir = "ltr";
  document.getElementById("elemDirRtlDesc").style.display = "none";
  document.getElementById("elemDirLtrDesc").style.display = "none";
  document.getElementById("elemDirAutoDesc").style.display = "block";
}

function getFirstChild() {
  var node = document.getElementById("elemFirstChildDiv").firstChild;
  var text = node.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = node + " — " + text;
}

function getFirstElementChild() {
  var node = document.getElementById("elemFirstElementChildDiv").firstElementChild;
  var text = node.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = node + " — " + text;
}

function getId() {
  var x = document.getElementsByClassName("replace")[0].id;
  document.getElementById("example1").innerHTML = x;
}

function getInnerHTML(id) {
  var x = document.getElementById(id).innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getInnerText() {
  var x = document.getElementById("elemInnerText");
  document.getElementsByClassName('replace')[0].innerText = "Inner HTML: " +  x.innerHTML + "\nInner text: " + x.innerText;
}

function isContentEdit() {
  var x = document.getElementById("elemIsContentEditable").isContentEditable;
  document.getElementsByClassName("replace")[0].innerHTML = "Content editable? " + x;
}

function getLang() {
  var x = document.getElementById("elemLang").lang;
  document.getElementsByClassName("replace")[0].innerHTML = "Language: " + x;
}

function getLastChild() {
  var node = document.getElementById("elemLastChildDiv").lastChild.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Last child: " + node;
}

function getLastElementChild() {
  var node = document.getElementById("elemLastElementChildDiv").lastElementChild.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Last element child: " + node;
}

function getNamespaseURI() {
  var x = document.documentElement.namespaceURI;
  document.getElementById("elemNamespaseURIP").innerHTML = x;
}

function getNextSibling() {
  var x = document.getElementById("elem1").nextSibling.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Next sibling: " + x;
}

function getNextElementSibling() {
  var x = document.getElementById("elem1").nextElementSibling.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Next element sibling: " + x;
}

function getNodeName() {
  var x = document.getElementById("elemNodeNameDiv").nodeName;
  document.getElementsByClassName("replace")[0].innerHTML = "Node name: " + x;
}

function getNodeType() {
  var x = document.getElementById("elemNodeTypeDiv").nodeType;
  document.getElementsByClassName("replace")[0].innerHTML = "Node type: " + x;
}

function getNodeValue() {
  var c = document.getElementById("elemNodeValueDiv");
  var x = c.children[0].childNodes[0].nodeValue;
  document.getElementsByClassName("replace")[0].innerHTML = "Node value: " + x;
}

function getOffsetHeight() {
  var text1 = prompt("Input any text:");
  var text2 = prompt("Input any text:");
  var elmnt = document.getElementById("elemOffsetHeightP1");
  elmnt.innerHTML = text1 + "<br>" + text2;
  var txt = "Height including padding and border: " + elmnt.offsetHeight + "px";
  document.getElementById("elemOffsetHeightP2").innerHTML = txt;
}

function getOffsetLeft() {
  var text = prompt("Input any text:");
  var elmnt = document.getElementById("elemOffsetLeftP1");
  elmnt.innerHTML = text;
  var txt = "Left offset: " + elmnt.offsetLeft + "px";
  document.getElementById("elemOffsetLeftP2").innerHTML = txt;
}

function getOffsetParent() {
  var elmnt = document.getElementById("elemOffsetParentP1");
  var txt = "Parent offset is: " + elmnt.offsetParent;
  document.getElementById("elemOffsetParentP2").innerHTML = txt;
}

function getOffsetTop() {
  var elmnt = document.getElementById("elemOffsetTopP1");
  var txt = "Top offset: " + elmnt.offsetTop + "px";
  document.getElementById("elemOffsetTopP2").innerHTML = txt;
}

function getOffsetWidth() {
  var text = prompt("Input any text:");
  var elmnt = document.getElementById("elemOffsetWidthP1");
  elmnt.innerHTML = text;
  var txt = "Width including padding and border: " + elmnt.offsetWidth + "px";
  document.getElementById("elemOffsetWidthP2").innerHTML = txt;
}

function getOwnerDocument() {
  var x= document.getElementById("elemOwnerDocumentDiv").ownerDocument.nodeType;
  document.getElementsByClassName("replace")[0].innerHTML = "Owner document: " + x;
}

function getParentNode() {
  var x = document.getElementById("elemParentNodeP").parentNode.nodeName;
  document.getElementsByClassName("replace")[0].innerHTML = "Parent node name: " + x;
}

function getParentElement() {
  var x = document.getElementById("elemParentElementP").parentElement.nodeName;
  document.getElementsByClassName("replace")[0].innerHTML = "Parent element name: " + x;
}

function getPreviousSibling() {
  var x = document.getElementById("elem2").previousSibling.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Previous sibling: " + x;
}

function getPreviousElementSibling() {
  var x = document.getElementById("elem2").previousElementSibling.innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = "Previous element sibling: " + x;
}

function getScrollHeight() {
  var x = document.getElementById("elemScrollHeightP").scrollHeight;
  var txt = "Scroll height: " + x + "px";
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getScrollPoint(id) {
  var elmnt = document.getElementById(id);
  var x = elmnt.scrollLeft;
  var y = elmnt.scrollTop;
  document.getElementsByClassName("replace")[0].innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
}

function getScrollWidth() {
  var x = document.getElementById("elemScrollWidthP").scrollWidth;
  var txt = "Scroll width: " + x + "px";
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function setBorderStyle(id) {
  var list = document.getElementsByClassName('list');
  var x = document.getElementById("elemStyleP").style.border = "2px solid green";

  for (var i=0; i<=list.length; i++) {
    document.getElementById(id).style.display = "block";
    list[i].style.display = "none";
  }
}

function changeColorStyle(id) {
  var list = document.getElementsByClassName('list');
  var x = document.getElementById("elemStyleP").style.color = "red";

  for (var i=0; i<=list.length; i++) {
    document.getElementById(id).style.display = "block";
    list[i].style.display = "none";
  }
}

function clearStyle(id) {
  var list = document.getElementsByClassName('list');
  var x = document.getElementById("elemStyleP").style.border = "";
  var x = document.getElementById("elemStyleP").style.color = "initial";

  for (var i=0; i<=list.length; i++) {
    document.getElementById(id).style.display = "block";
    list[i].style.display = "none";
  }
}

function setTabOrder() {
  document.getElementById("elemTabIndexA1").tabIndex = "3";
  document.getElementById("elemTabIndexA2").tabIndex = "2";
  document.getElementById("elemTabIndexA3").tabIndex = "1";
}

function getTagName() {
  var x = document.getElementById("elemTagNameP").tagName;
  var txt = "Tag name: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}
