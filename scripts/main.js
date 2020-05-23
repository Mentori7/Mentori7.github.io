var myImage = document.querySelector("img");

myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src")
    if(mySrc === "bilder/Bruce_Lee_1973.jpg") {
        myImage.setAttribute ("src","bilder/Bruce_Lee_1973_2.jpg");
    } else {
        myImage.setAttribute ("src","bilder/Bruce_Lee_1973.jpg")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Tach Keule, geb doch mal deinen Namen ein.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "(Bruce Lee), Hey " + myName;
}
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "(Bruce Lee), Tach " + storedName;
}
myButton.onclick = function() {
    setUserName();
}
"(Bruce Lee), Hey " + myName;

