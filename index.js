const burger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
    menu.classList.remove("disabled");
})