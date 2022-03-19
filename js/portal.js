const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("user");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.uername;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}

function rememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.emailInput = "";
    }
}

function login() {
    window.document.title = "login...";
}