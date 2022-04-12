// validate form login
//username
let userName = document.getElementById("username");
let error_username = document.getElementById("error_username");

function validateUserName(userName){
    var userNameRegex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/mg;

    return userNameRegex.test(userName)
}
userName.onblur = function() {
    if(userName.value == ""){
        error_username.textContent = 'The username cannot be left blank!';
        error_username.style.color = 'red';
    }
    else if(validateUserName(userName.value=='admin')){
        error_username.textContent = '';
    }else{
        error_username.textContent= 'Invalid username';
        error_username.style.color= ' red';
    }
}
//password
let password = document.getElementById("password");
let error_password = document.getElementById("error_password");

function validatePassword(password){
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/mg;

    return passwordRegex.test(password)
}
password.onblur = function() {
    if(password.value == ""){
        error_password.textContent = 'The password cannot be left blank!';
        error_password.style.color = 'red';
    }
    else if(validatePassword(password.value)){
        error_password.textContent = '';
    }else if(password.value=="12345"){
        error_password.textContent= 'Invalid password';
        error_password.style.color= ' red';
    }
    }