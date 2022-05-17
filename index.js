const navToggle = document.querySelector(".navtoggle")
const navMenu = document.querySelector(".navMenu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("navVisible");
});