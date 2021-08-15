// for triangle validator
var inputOne = document.querySelector("#input-one");
var inputTwo = document.querySelector("#input-two");
var inputThree = document.querySelector("#input-three");
var btnCalculate = document.querySelector("#btn-calculate");
var outputArea = document.querySelector("#output-area-calculate");

function validateTriangle(a,b,c) {
if(a+b <= c || b+c <=a || c+a <=b || a<= 0 || b<=0 || c<=0 || isNaN(a) === true || isNaN(b) === true || isNaN(c) === true) 
    return false;
else
    return true;

}

function clickHandler() {
    var sideOne = parseInt(inputOne.value);
    var sideTwo = parseInt(inputTwo.value);
    var sideThree = parseInt(inputThree.value);

    if(validateTriangle(sideOne, sideTwo, sideThree)) {
         var semiPerimeter = (sideOne + sideTwo + sideThree )/2
     var area = (Math.sqrt(semiPerimeter * (semiPerimeter-sideOne) * (semiPerimeter-sideTwo) * (semiPerimeter-sideThree))).toFixed(2);
     outputArea.innerHTML = "The area is : " +area+" sq. unit."
     }

     else
     outputArea.innerHTML = "Please enter appropriate input."
    
    }



btnCalculate.addEventListener("click",clickHandler)