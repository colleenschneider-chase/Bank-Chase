// var loginHeader = document.querySelector('[data-button="gs-neumorphic-login"]');
// const loginHeader = document.querySelector('')
// var signupHeader = document.querySelector('[data-button="gs-neumorphic-signup"]');
// var loginContainer = loginHeader.parentElement;
// var signupContainer = signupHeader.parentElement;
const username = document.querySelector('.username');
const password = document.querySelector('.password');

// loginHeader.addEventListener('click', function handleClick(event) {
//     loginContainer.classList.add("gs-open");
//     loginHeader.classList.add("gs-open");
//     signupHeader.classList.remove("gs-open");

//     loginContainer.classList.add("gs-form-open");
//     signupContainer.classList.remove("gs-form-open");
// });

// signupHeader.addEventListener('click', function handleClick(event) {
//     loginContainer.classList.remove("gs-open");
//     loginHeader.classList.remove("gs-open");
//     signupHeader.classList.add("gs-open");

//     loginContainer.classList.remove("gs-form-open");
//     signupContainer.classList.add("gs-form-open");
// });
const btn = document.querySelector(".submit");
let submit= (e)=>{
    e.preventDefault();
    if(username.value == "")
    {
        alert("username can not be empty");
    }
    else{
        console.log("welcome")
        if(password.value=="")
        {
            alert("password can not be empty"); 
        }
        else{
            console.log("hello");
             window.location.replace("page.html");
        }
    }
}

btn.addEventListener("click", submit)











