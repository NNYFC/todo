var resultText = document.getElementById("resultText");
resultText.innerHTML = "Enter your email to sign-up for this app";


function submitFunction(){
    const correct_email = "derick@gmail.com";
    const correct_password = "testingLoginform2024";
    var user_email = document.getElementById("email").value;
    var user_password = document.getElementById("password").value;
    console.log(user_email, user_password);
 
    // both email and password verification
    if(correct_email !== user_email && correct_password !== user_password){
        resultText.style.color = "red";
        resultText.innerHTML = "The email and password are incorrect";
    }
    if (correct_email != user_email && correct_password == user_password) {
        resultText.style.color = "red";
        resultText.innerHTML = "The email is incorrect";
    }
    if (correct_email == user_email && correct_password != user_password) {
        resultText.style.color = "red";
        resultText.innerHTML = "The password is incorrect";
    }
    if(correct_email == user_email && correct_password == user_password){
        resultText.innerHTML = "Succefull Authentication !";
        window.location.href = "homepage.html";
    }
 }