const choicesElmCont = document.getElementById("choices-container");
const btnSignUp = document.getElementById("btn-sign-up");
const btnLogin = document.getElementById("btn-login");

btnSignUp.addEventListener("click", function () {
  choicesElmCont.classList.remove("login-step");
});

btnLogin.addEventListener("click", function () {
  choicesElmCont.classList.add("login-step");
});