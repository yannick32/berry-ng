// const { url } = require("inspector");

function validatePassword(){
    let password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords don't match");
  } else {
    confirm_password.setCustomValidity('');
  }
}