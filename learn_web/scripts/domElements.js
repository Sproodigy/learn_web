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

function getTextContent() {
  var x = document.getElementById("elemTextContentP").textContent;
  var txt = "Text content: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = txt;
}

function getTitle() {
  var x = document.getElementById("elemTitleP").title;
  var txt = "Title: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function performActionsOnElem() {
  if (elem.addEventListener) {
    elem.addEventListener("click", changeColorListener);
    elem.addEventListener("click", performAlert);
    elem.addEventListener("mouseover", mouseOver);
    elem.addEventListener("click", function(){
      elem.style.backgroundColor = "rgba(20, 255, 0, 0.55)";
    });
  } else if (elem.attachEvent) {
    elem.attachEvent("onclick", changeColorListener);
    elem.attachEvent("onclick", performAlert);
    elem.attachEvent("onmouseover", mouseOver);
    elem.attachEvent("onclick", function(){
      elem.style.backgroundColor = "rgba(20, 255, 0, 0.55)";
    });
  }
}

function performAlert() {
  alert("Color changed.");
}

function changeColorListener() {
  var elem = document.getElementById('elemAddEventListenerP');
  elem.color = "yellow";
}

function mouseOver() {
  var elem = document.getElementById('elemAddEventListenerP');
  let rand = Math.random();
  document.getElementsByClassName("replace")[0].innerHTML = rand;
}

function removeHandler() {
  var elem = document.getElementById('elemAddEventListenerP');
  if (elem.addEventListener) {
    elem.removeEventListener("mouseover", mouseOver);
  } else {
    elem.detachEvent("onmouseover", mouseOver);
  }
}

function addChild() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Kiwi");
  node.appendChild(textnode);
  document.getElementById("elemAppendChildUl").appendChild(node);
}

function getFocus() {
  document.getElementById("elemBlurA").focus();
}

function loseFocus() {
  document.getElementById("elemBlurA").blur();
}

function simulateClick() {
  document.getElementById("elemClickA").click();
}

function performCloning() {
  var item = document.getElementById("elemCloneNodeUl2").lastElementChild;
  var cln = item.cloneNode(true);
  document.getElementById("elemCloneNodeUl1").appendChild(cln);
}

function compareDocPos() {
  var p1 = document.getElementById("elemCompareDocPosUl1").lastElementChild;
  var p2 = document.getElementById("elemCompareDocPosUl2").lastElementChild;
  var x = p1.compareDocumentPosition(p2);
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function containsOrNot() {
  var para = document.getElementById("elemContainsP");
  var div = document.getElementById("elemContainsDiv").contains(para);
  document.getElementsByClassName("replace")[0].innerHTML = div;
}

var elemExFullScr = document.documentElement;
function openFullscreenElem() {
  if (elemExFullScr.requestFullscreen) {
    elemExFullScr.requestFullscreen();
  } else if (elemExFullScr.mozRequestFullScreen) {
    elemExFullScr.mozRequestFullScreen();
  } else if (elemExFullScr.webkitRequestFullscreen) {
    elemExFullScr.webkitRequestFullscreen();
  } else if (elemExFullScr.msRequestFullscreen) {
    elemExFullScr.msRequestFullscreen();
  }
}

function closeFullscreenElem() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

function getAttr() {
  var x = document.getElementsByTagName("P")[1].getAttribute("class");
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function getAttrNode() {
  var x = document.getElementsByTagName("P")[1];
  var attr = x.getAttributeNode("class").value;
  document.getElementsByClassName("replace")[0].innerHTML = attr;
}

function getBoundClientRect() {
  var para = document.getElementById("elemGetBoundClientRectP");
  var rect = para.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  r = rect.right;
  b = rect.bottom;
  x2 = rect.x;
  y2 = rect.y;
  w = rect.width;
  h = rect.height;
  document.getElementsByClassName("replace")[0].innerHTML =
  "Left: " + x + ",<br>Top: " + y + ",<br>Right: " + r + ",<br>Bottom: " + b +
  ",<br> Width: " + w + ",<br> Height: " + h + ",<br> X: " + x2 + ",<br> Y: " + y2;
}

function getElemByClassName() {
  var list = document.getElementsByClassName("fruit");
  var num = prompt("Input item number:");
  var text = list[num].innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = text;
}

function getElemByTagName() {
  var list = document.getElementsByTagName("li");
  var num = prompt("Input item number:");
  var text = list[num].innerHTML;
  document.getElementsByClassName("replace")[0].innerHTML = text;
}

function hasAttr() {
  var check = document.getElementById("elemHasAttrP").hasAttribute("class");
  document.getElementsByClassName("replace")[0].innerHTML = check;
}

function hasAttrs() {
  var check = document.getElementsByTagName("div")[10].hasAttributes();
  document.getElementsByClassName("replace")[0].innerHTML = check;
}

function checkChildNodes() {
  var check = document.getElementById("elemHasChildNodesUl").hasChildNodes();
  document.getElementsByClassName("replace")[0].innerHTML = check;
}

function insAdjacentElement(place) {
  var elem1 = document.getElementsByClassName("fruit")[0];
  var elem2 = document.getElementsByClassName("fruit")[1];
  elem1.insertAdjacentElement(place, elem2);
}

function insAdjacentHTML(place) {
  var elem = document.getElementsByClassName("fruit")[1];
  elem.insertAdjacentHTML(place, "<span> Grape </span>");
}

function insAdjacentText(place) {
  var elem = document.getElementsByClassName("fruit")[1];
  elem.insertAdjacentText(place, " Grape ");
}

function addBefore() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("Kiwi");
  newItem.appendChild(textnode);

  var list = document.getElementById("elemInsertBeforeUl");
  list.insertBefore(newItem, list.childNodes[0]);
}

function isDefaultNamesp() {
  var d = document.documentElement;
  var x = d.isDefaultNamespace("http://www.w3.org/1999/xhtml");
  var text = "Is default namespace? " + x;
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function compareNodes() {
  var item1 = document.getElementById("list1").firstElementChild;
  var item2 = document.getElementById("list2").firstElementChild;
  var x = item1.isEqualNode(item2);
  var text = "Are the nodes equal? " + x;
  document.getElementsByClassName("replace")[0].innerHTML = text;
}

function sameNodes() {
  var item1 = document.getElementById("list1");
  var item2 = document.getElementById("list2");
  var x = item1.isSameNode(item2);
  var text = "Are the nodes the same? " + x;
  document.getElementsByClassName("replace")[0].innerHTML = text;
}

function isSupported() {
  var item = document.getElementsByTagName("UL")[0];
  var x = item.isSupported("Core", "2.0");
  document.getElementsByClassName("replace")[0].innerHTML = x;
}

function addTextNode() {
  var x = document.createTextNode(" Click again.");
  var y = document.getElementById("elementNormalizeP");
  y.appendChild(x);
  var x = document.getElementsByClassName("replace")[0];
  x.innerHTML = y.childNodes.length;
}

function normPara() {
  document.normalize();
  var x = document.getElementById("elementNormalizeP");
  var y = document.getElementsByClassName("replace")[0];
  y.innerHTML = x.childNodes.length;
}

function showQuerySelectorElem() {
  document.querySelector(".example").style.color = "red";
}

function showQuerySelectorAllElem() {
  document.querySelectorAll("p")[2].style.color = "red";
}

function removeAttr() {
  document.getElementById("elemRemoveAttrP").removeAttribute("class");
}

function removeAttrNode() {
  var elmnt = document.getElementById("elemRemoveAttrNodeP");
  var attr = elmnt.getAttributeNode("class");
  elmnt.removeAttributeNode(attr);
}

function rmvChild() {
  var list = document.getElementById("elemRemoveChildUl");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstElementChild);
  }
}

function replcChild() {
  var textnode = document.createTextNode("Grape");
  var item = document.getElementById("elemReplaceChildUl").firstElementChild;
  item.replaceChild(textnode, item.firstChild);
}

function setAttr() {
  let elem = document.getElementById("elemSetAttrP");
  elem.setAttribute("class", "olive");
}

function setAttrNode() {
  var attr = document.createAttribute("class");
  attr.value = "olive";
  var target = document.getElementById("elemSetAttrP");
  target.setAttributeNode(attr);
}

function elemScrollIntoView(boolean) {
  var elmnt = document.getElementById("elemScrollIntoViewP");
  elmnt.scrollIntoView(boolean);
  document.getElementsByClassName("replace")[0].innerHTML = boolean;
}
