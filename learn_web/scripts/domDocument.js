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
  document.getElementById("doсumentEmbedsP").innerHTML = "Embeds: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Embeds: " + x;
}

function getForms() {
  var x = document.forms.length;
  document.getElementById("doсumentFormsP").innerHTML = "Forms: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Forms: " + x;
}

function getFullscreenElem() {
  var x = document.fullscreenElement;
  document.getElementById("doсumentFullscreenElemP").innerHTML = "Fullscreen element: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Fullscreen element: " + x;
}

function getHead() {
  var x = document.head;
  document.getElementById("doсumentHeadP").innerHTML = "Head: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Head: " + x;
  document.getElementsByClassName("replace")[1].innerHTML = "getHead";
  document.getElementsByClassName("replace")[2].innerHTML = "document.head";
}

function getHeadId() {
  var x = document.head.id;
  document.getElementById("doсumentHeadP").innerHTML = "Head id: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Head id: " + x;
  document.getElementsByClassName("replace")[1].innerHTML = "getHeadId";
  document.getElementsByClassName("replace")[2].innerHTML = "document.head.id";
}

function getImagesLength() {
  var x = document.images.length;
  document.getElementById("doсumentImagesP").innerHTML = "Images: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Images: " + x;
  document.getElementById("docImages1").style.display = "block";
  document.getElementById("docImages2").style.display = "none";
}

function getImageSrc() {
  let num = prompt("Input image number:");

  var src = document.images[num].src;
  document.getElementById("doсumentImagesP").innerHTML = "Source: " + src;
  document.getElementsByClassName("replace")[0].innerHTML = "Source: " + src;
  document.getElementById("docImages1").style.display = "none";
  document.getElementById("docImages2").style.display = "block";
}

function getImplementationObject() {
  var x = document.implementation;
  document.getElementById("doсumentImplementationP").innerHTML = "Implementation object: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Implementation object: " + x;
  document.getElementById("docImplementation1").style.display = "block";
  document.getElementById("docImplementation2").style.display = "none";
}

function getImplementationFeature() {
  var src = document.implementation.hasFeature("HTML", "1.0");
  document.getElementById("doсumentImplementationP").innerHTML = "Implementation feature: " + src;
  document.getElementsByClassName("replace")[0].innerHTML = "Implementation feature: " + src;
  document.getElementById("docImplementation1").style.display = "none";
  document.getElementById("docImplementation2").style.display = "block";
}

function getInputEncoding() {
  var x = document.inputEncoding;
  document.getElementById("doсumentInputEncodingP").innerHTML = "Encoding: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Encoding: " + x;
}

function getLastModified() {
  var x = document.lastModified;
  document.getElementById("doсumentLastModifiedP").innerHTML = "Last modified: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Last modified: " + x;
}

function getLinksLength() {
  var x = document.links.length;
  document.getElementById("documentLinksP").innerHTML = "Links length: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Links length: " + x;
}

function getReadyState() {
  var x = document.readyState;
  document.getElementById("documentReadyStateP").innerHTML = "Ready state: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Ready state: " + x;
}

function getReferrer() {
  var x = document.referrer;
  document.getElementById("documentReferrerP").innerHTML = "Referrer: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Referrer: " + x;
}

function getScriptsLength() {
  var x = document.scripts.length;
  document.getElementById("documentScriptsP").innerHTML = "Scripts length: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Scripts length: " + x;
}

function getStrictErrorChecking() {
  var x = document.strictErrorChecking;
  document.getElementById("documentStrictErrorCheckingP").innerHTML = "Strict error checking: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Strict error checking: " + x;
}

function getTitle() {
  var x = document.title;
  document.getElementById("documentTitleP").innerHTML = "Title: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "Title: " + x;
}

function getURL() {
  var x = document.URL;
  document.getElementById("documentURLP").innerHTML = "URL: " + x;
  document.getElementsByClassName("replace")[0].innerHTML = "URL: " + x;
}

function performActions() {
  if (document.addEventListener) {
    document.addEventListener("click", performAlert);
    document.addEventListener("click", changeColor);
    document.addEventListener("mouseover", mouseOver);
    document.addEventListener("click", function(){
      document.body.style.backgroundColor = "rgba(20, 255, 0, 0.55)";
    });
  } else if (document.attachEvent) {
    document.attachEvent("onclick", performAlert);
    document.attachEvent("onclick", changeColor);
    document.attachEvent("onmouseover", mouseOver);
    document.attachEvent("onclick", function(){
      document.body.style.backgroundColor = "rgba(20, 255, 0, 0.55)";
    });
  }
}

function performAlert() {
  alert("Color changed.");
}

function changeColor() {
  document.body.color = "yellow";
}

function mouseOver() {
  let rand = Math.random();
  document.getElementById("documentAddEventListenerP").innerHTML = rand;
  document.getElementsByClassName("replace")[0].innerHTML = rand;
}

function removeHandler() {
  if (document.addEventListener) {
    document.removeEventListener("mouseover", mouseOver);
  } else {
    document.detachEvent("onmouseover", mouseOver);
  }
}

function replaceText() {
  let text = document.getElementsByTagName("figcaption")[0];
  let node = document.adoptNode(text);
  document.getElementById("documentAdoptNodeP").appendChild(node);
}

function closeDocumentInWindow() {
  let w = window.open("","", "width=200, height=200");
  w.document.open();
  w.document.write("<h1>Here I'm!</h1>");
  w.document.close();
}

function openDocument() {
  document.open("text/html", "replace");
  document.write("<html><body><p>Here I'm!</p></body></html>");
  document.close();
}
