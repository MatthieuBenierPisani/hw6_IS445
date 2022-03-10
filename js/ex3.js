function changeElems() {
  body = document.getElementsByTagName("body")[0];
  myBodyElements = body.getElementsByTagName("p");
  firstP = myBodyElements[0];
  firstP.style.background = "rgb(255,255,0)";
  firstP.style.fontWeight = 900
  secondP = myBodyElements[1];
  secondP.style.background = "rgb(255,255,0)";
  secondP.style.fontWeight = 900
}