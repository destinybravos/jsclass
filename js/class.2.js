let name = prompt("What is your name");

let option = confirm("You said your name is " + name);

if(option == true){
    document.querySelector('#msg').innerText = "Welcome " + name;
}else{
    document.querySelector('#msg').innerText = "You don't know your name. It is a shame.";
}