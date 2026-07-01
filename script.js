const messages = [
"Initializing Falcon Protocol...",
"Connecting To Secure Network...",
"Decrypting Mission Files...",
"Access Granted..."
];

let currentMessage = 0;
let currentChar = 0;

const typingElement = document.getElementById("typing");

function typeText() {

if(currentMessage < messages.length){

if(currentChar < messages[currentMessage].length){

typingElement.innerHTML +=
messages[currentMessage].charAt(currentChar);

currentChar++;

setTimeout(typeText,50);

}
else{

typingElement.innerHTML += "<br>";

currentMessage++;
currentChar = 0;

setTimeout(typeText,500);

}

}

}

window.onload = function(){

typeText();

setTimeout(() => {

alert(
"ACCESS GRANTED\n\nWelcome Agent."
);

},1000);

};

const button = document.querySelector(".btn");

setInterval(() => {

button.style.boxShadow =
"0 0 25px red";

setTimeout(() => {

button.style.boxShadow =
"0 0 5px red";

},500);

},1500);