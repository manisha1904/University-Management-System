const element = document.getElementById('login_button')

element.addEventListener("click",login);

function login(){
    document.getElementById('demo').innerHTML = "Login Detected"
    alert("Log in successfully");
}