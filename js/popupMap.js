var map = document.querySelector(".formMap");
var openMap = document.querySelector(".mapOpen");
var fromMapClose = document.querySelector(".fromMapClose");
openMap.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.add("showPopup");
    overlay.classList.add("showPopup");
})
fromMapClose.addEventListener("click", function (event) {
    event.preventDefault();
    map.classList.remove("showPopup");
    overlay.classList.remove("showPopup");

})
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (map.classList.contains("showPopup")) {
            map.classList.remove("showPopup");
            overlay.classList.remove("showPopup");
        }
    }
})