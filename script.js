function generatePassword() {
    var characterString = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+}{|:"?><~'"`;
    var passwordLength = 20;
    var password = "";


    for(var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characterString.length);

        password = password + characterString.charAt(randomNumber);
        document.getElementById('password').value = password;
    }
}

function copyPassword() {
    var abc = document.getElementById('password');

    abc.select();

    document.execCommand("copy");
}