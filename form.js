let name = document.querySelector("#name");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let mobile = document.querySelector("#mobile");
let password = document.querySelector("#pass");
let form = document.querySelector("#form");

//add event listener
form.addEventListener("submit", checkForm);

function checkForm(e) {
    e.preventDefault();

    if(name.value === "" || name.value == null) {
        name.placeholder = "You Must Enter Name Here!";
    }
    if(email.value === "" || email.value == null){
        email.placeholder = "You Must Enter Email Here!";
    }
    if(city.value === "" || city.value == null){
        city.placeholder = "You Should Enter City Here!";
    }
    if(mobile.value === "" || mobile.value == null){
        mobile.placeholder = "You Should Enter Mobile Here!";
    }
    if(password.value === "" || password.value == null){
        password.placeholder = "You Must Enter Password Here!";
    }
}