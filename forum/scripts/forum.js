document.forms['frm_register']['email'].addEventListener('keyup', () => {
    let email = document.forms['frm_register']['email'].value;
    let atPosition = email.indexOf('@');
    let dotPosition = email.lastIndexOf('.'); // lastIndexOf() returns the position of the last occurrence of a specified value in a string.
    if(atPosition < (dotPosition - 1) && atPosition > 0 && email.length > (dotPosition + 2)) {
        document.getElementById('email_error').innerText = '';
    }else{
        document.getElementById('email_error').innerText = 'Enter valid email';
    }
});

document.forms['frm_register']['password'].addEventListener('keyup', () => {
    let password = document.forms['frm_register']['password'].value;
    let lenght = password.length;
    // if(lenght < 5) {
    //     document.forms['frm_register']['password'].style.backgroundColor = 'red';
    //     document.getElementById('password_error').innerText = 'Password must be strong';
    //     document.getElementById('password_error').style.color = 'red';
    // }else if(lenght >= 5 && lenght <= 10) {
    //     document.forms['frm_register']['password'].style.backgroundColor = 'orange';
    //     document.getElementById('password_error').innerText = 'Password is weak';
    //     document.getElementById('password_error').style.color = 'orange';
    // }else{
    //     document.forms['frm_register']['password'].style.backgroundColor = 'green';
    //     document.getElementById('password_error').innerText = '';
    // }

    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let hasNumber = false;

    for (let i = 0; i < lenght; i++) {
        let character = password[i];
        if(numbers.includes(parseInt(character))) {
            hasNumber = true;
        }
    }
    if(lenght < 5){
        document.forms['frm_register']['password'].style.backgroundColor = 'red';
        document.getElementById('password_error').innerText = 'Password must be strong';
        document.getElementById('password_error').style.color = 'red';
    }else if (lenght >= 5 && hasNumber == false) {
        document.forms['frm_register']['password'].style.backgroundColor = 'orange';
        document.getElementById('password_error').innerText = 'Password is weak';
        document.getElementById('password_error').style.color = 'orange';
    }else{
        document.forms['frm_register']['password'].style.backgroundColor = 'white';
        document.getElementById('password_error').innerText = '';
    }
});

document.forms['frm_register']['cpassword'].addEventListener('keyup', () => {
    let password = document.forms['frm_register']['password'].value;
    let cpassword = document.forms['frm_register']['cpassword'].value;
    if(password == cpassword) {
        document.getElementById('cpassword_error').innerText = '';
    }else{
        document.getElementById('cpassword_error').innerText = 'Password does not match';
    }
});

document.getElementById('toggle_btn').addEventListener('click', () => {
    let type = document.querySelector('#cpassword').getAttribute('type');
    
    if (type == 'password') {
        document.querySelector('#cpassword').setAttribute('type', 'text');
        // Change the Icon
        document.getElementById('toggle_btn').innerHTML = '<i class="fas fa-eye-slash"></i>';
    }else{
        document.querySelector('#cpassword').setAttribute('type', 'password');
        document.getElementById('toggle_btn').innerHTML = '<i class="fas fa-eye"></i>';
    }
});