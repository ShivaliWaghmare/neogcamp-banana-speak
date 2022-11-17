var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickEventHandler(){
   console.log("clicked!");
   console.log("input", txtInput.value) ;
   outputDiv.innerText = "fdflirgyugffhiu " +  txtInput.value
}





btnTranslate.addEventListener("click", clickEventHandler)
