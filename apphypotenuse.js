// for hypotenuse calculator
var hypotenuseSideOne = document.querySelector("#leg-one");
var hypotenuseSideTwo = document.querySelector("#leg-two");
var btnCalculateHypotenuse = document.querySelector("#btn-hypotenuse-calculate");

var outputArea = document.querySelector("#output-hypotenuse");

function calculateHypotenuse() {
var sideOne = parseInt(hypotenuseSideOne.value);
var sideTwo = parseInt(hypotenuseSideTwo.value);

if (sideOne <=0 || sideTwo <= 0 || isNaN(sideOne) === true || isNaN(sideTwo) === true) 
outputArea.innerHTML = "Please enter appropriate input."

 else {
 var hypotenuse = (Math.sqrt((Math.pow(sideOne, 2) + Math.pow(sideTwo,2)))).toFixed(2);
 outputArea.innerHTML = "The length of the hypotenuse is : " + hypotenuse+" unit."
 }
}



btnCalculateHypotenuse.addEventListener("click", calculateHypotenuse)
