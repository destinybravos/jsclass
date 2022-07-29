// Coding/Programming the Add Button
document.querySelector('#btnAdd').addEventListener('click', () => {
    // Get the inital value/Text on the result div
    let initialValue = document.querySelector('#result').innerText;
    // Convert/Parse the string value to integer
    let convertedValue = parseInt(initialValue);
    // Increement the value and re-assing to the  result div
    document.querySelector('#result').innerText = convertedValue + 1;
})

// Coding/Programming the subtract button
document.querySelector('#btnMinus').addEventListener('click', () => {
    // Get the inital value/Text on the result div
    let initialValue = document.querySelector('#result').innerText;
    // Convert/Parse the string value to integer
    let convertedValue = parseInt(initialValue);
    // Increement the value and re-assing to the  result div
    document.querySelector('#result').innerText = convertedValue - 1;
})

// Coding/Programming the reset button
document.querySelector('#btnReset').addEventListener('click', () => {
    document.querySelector('#result').innerText = 0;
})

// Side Bar Toggler
// Close the Sidebar
// document.querySelector('#closeSideBar').addEventListener('click', ()=> {
    // let isOpen = document.querySelector('#sidemenu').classList.contains('open');
    // if(isOpen == true){
    //     document.querySelector('#sidemenu').classList.remove('open');
    // }
    // toggleSideMenu();
// })

// Open the Sidebar
// document.querySelector('#openSideBar').addEventListener('click', ()=> {
    // let isOpen = document.querySelector('#sidemenu').classList.contains('open');
    // if(isOpen == false){
    //     document.querySelector('#sidemenu').classList.add('open');
    // }
    // toggleSideMenu();
// })

let toggler = document.querySelectorAll('.toggleSideMenu');
for (let i = 0; i < toggler.length; i++) {
    let element = toggler[i];
    element.addEventListener('click', ()=> {
        let isOpen = document.querySelector('#sidemenu').classList.contains('open');
        if(isOpen == true){
            document.querySelector('#sidemenu').classList.remove('open');
        }else{
            document.querySelector('#sidemenu').classList.add('open');
        }
    });
}

function toggleSideMenu(){
    let isOpen = document.querySelector('#sidemenu').classList.contains('open');
    if(isOpen == true){
        document.querySelector('#sidemenu').classList.remove('open');
    }else{
        document.querySelector('#sidemenu').classList.add('open');
    }
}
