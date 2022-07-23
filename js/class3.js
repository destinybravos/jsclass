// Event Driven Programs
// Declare All elements as variables
var box = document.querySelector('#box');
let btnBlue = document.querySelector('#btnBlue');
let btnRed = document.querySelector('#btnRed');
let btnGreen = document.querySelector('#btnGreen');
// box.title = "My Box"
// box.setAttribute('title', 'My Box'); //Preferrable
box.style.backgroundColor = "lightgray";

btnBlue.addEventListener('click', function(){ 
    box.style.backgroundColor = "blue";
});

btnRed.addEventListener('click', () => { 
    box.style.backgroundColor = "red";
});

btnGreen.addEventListener('click', () => { 
    box.style.backgroundColor = "green";
});

// Testing Other Events
let inputBox = document.querySelector('#inp');
inputBox.addEventListener('keyup', function() {
    // let value = inputBox.value;
    let value = this.value; // this keyword refer to the current context (In this case; The element the triggers the event)

    box.innerText = value;
});