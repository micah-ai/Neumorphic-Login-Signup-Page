let login = document.querySelector(".login"),
create = document.querySelector(".create"),
signin = document.querySelector(".signin"),
signup = document.querySelector(".signup");

login.onclick = () =>{
    signin.style.display="flex";
    signup.style.display ="none";
}
create.onclick = () =>{
    signin.style.display="none";
    signup.style.display ="flex";
}