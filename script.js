var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.querySelector("body");

function setgradient(){
    body.style.background="linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);