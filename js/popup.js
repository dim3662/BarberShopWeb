var link = document.querySelector(".login");
var popupLogin = document.querySelector(".fromLogin");
var closePopup = document.querySelector(".fromLoginClose");
var overlay = document.querySelector(".overlay");
var log = document.querySelector(".loginPopup");
var pass = document.querySelector(".passPopup");
var send = document.querySelector(".popupSend");
link.addEventListener("click", function (event) {
    event.preventDefault();
    popupLogin.classList.add("showPopup");
    overlay.classList.add("showPopup");
    if (localStorage.getItem("login")) {
        log.value = localStorage.getItem("login");
        pass.focus();
    } else {
        log.focus();
    }
})
closePopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupLogin.classList.remove("showPopup");
    overlay.classList.remove("showPopup");
    log.classList.remove("error");
    pass.classList.remove("error");
})

function removeError() {
    log.classList.remove("error");
    pass.classList.remove("error");
}

send.addEventListener("click", function (event) {
    event.preventDefault();
    if (!log.value || !pass.value) {
        if (!log.value) log.classList.add("error");
        if (!pass.value) pass.classList.add("error");
        setTimeout(removeError, 600);
    } else {
        localStorage.setItem("login", log.value);
    }
})
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popupLogin.classList.contains("showPopup")) {
            popupLogin.classList.remove("showPopup");
            overlay.classList.remove("showPopup");
        }
    }
})