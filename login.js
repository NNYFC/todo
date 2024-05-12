var resultText = document.getElementById("resultText");
resultText.innerHTML = "Please fill in your information";


var correct_email = "derick@gmail.com";
var correct_password = "testingLoginform2024";

function submitFunction(){
    var user_email = document.getElementById("email").value;
    var user_password = document.getElementById("password").value;
    // email verification
    if(correct_email == user_email){
        resultText.innerHTML = "The email is correct";
    }else if (correct_email != user_email){
        resultText.innerHTML = "The email is incorrect";
    }
    // password verification
    if(correct_password == user_password){
        // resultText.innerHTML = "The password is correct";
    }else if (correct_password != user_password){
        resultText.innerHTML = "The password is incorrect";
    }
    // both email and password verification
    // resultText.innerHTML = "The email and password are correct";
    //}else if (correct_email != user_email){
       // resultText.innerHTML = "The email is incorrect";
    //}
 }