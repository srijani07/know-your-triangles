var inputOne = document.querySelector("#input-one");
var inputTwo = document.querySelector("#input-two");
var inputThree = document.querySelector("#input-three");
var btnCheck = document.querySelector("#btn-check");

var outputArea = document.querySelector("#output-area");
outputArea.style.display = "none";
function clickHandler() {

if(parseInt(inputOne.value) <=0 || parseInt(inputOne.value) >=180 || parseInt(inputTwo.value) <=0 || parseInt(inputTwo.value) >=180 || parseInt(inputThree.value) <=0 || parseInt(inputThree.value) >=180  || inputOne.value === "" || inputTwo.value === "" ||inputThree.value === "" ){ //checking if angles are between 1 and 179 or not
    outputArea.innerHTML = "Please enter a valid input."

}

else {
if(parseInt(inputOne.value) + parseInt(inputTwo.value)  + parseInt(inputThree.value) === 180)
    outputArea.innerHTML = "Yes, these angles can form a triangle.";


else 
    outputArea.innerHTML = "No, these angles cannot form a triangle.";

}
outputArea.style.display = "block";
}
btnCheck.addEventListener("click", clickHandler);
