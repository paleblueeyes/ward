const docBody = document.getElementById("wholeBody");
const btnSizeTog = document.getElementById("switchSize");
const btnMore = document.getElementById("btn-more");
const htmlHeader = document.getElementById("head-intro");
const navigation = document.getElementById("navigation");
const headItem = document.getElementById("headItem");
const hRight = document.getElementById("hRight");

let toggle = true;

window.onresize = () => {
  
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if(w < 830 && !toggle) {
    navigation.style.position = "initial";
    htmlHeader.style.paddingTop = "10%";
    hRight.style.width = "80%";
  } else {
    navigation.style.position = "initial";
    htmlHeader.style.paddingTop = "10%";
  }
}




function switchBetween() {
  if(toggle) {
    docBody.style.fontSize = "1.8em";
    btnMore.style.fontSize = "20px"
  } else {
    docBody.style.fontSize = "1em";
  }
  
  toggle = !toggle;
}

window.onload = btnSizeTog.style.display = "inline";


