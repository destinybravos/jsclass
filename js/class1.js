// document.write("Hello World");
// window.alert("Hello Word");
// console.log("Hello World");
// console.warn("Hello World");
// console.error("Hello World");


// Variable Declarations
// var a;
// let b;

// a = 5;
// b =7.6;

// console.log(a + b);
// Constants Declaration
// const name = "Destiny";


// let element = document.getElementsByTagName('h1')[3];
// document.getElementById('hd').innerText = "<h1> Hello World </h1>";
document.getElementById('hd').innerHTML = "<h1> Hello World </h1>";

document.getElementById('inp').value = "Hello World";

// ES5 (ECMA Script Version 5)
// function greet(){
//     window.alert("Good Evening to you!");
// }

// ES6 (ECMA Script Version 6) and Above
let greet = () => {
    window.alert("Good Evening to you!");
}

// Invoking the greet method
greet();
