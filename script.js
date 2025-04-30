function sudziba() {
    alert("Paldies par ziņojumu!");
}
const correctUsername = "vistas";
const correctPassword = "cukas";


const errorMessage = document.getElementById("error-message");


function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

   
    if (username === correctUsername && password === correctPassword) {
        errorMessage.textContent = ""; 
        alert("Login successful!");
    } else {
        errorMessage.textContent = "Error: Incorrect username or password."; 
    }
};