function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if(elUsername.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    }
    else{
        elMsg.textContent = '';
    }
    
    var elPassword = document.getElementById('password');
    if(elPassword.value.length <8){
        elMsg.textContent = 'password must be more than 8 characters long';
    }
    else{
        elMsg.textContent = '';
    }
}