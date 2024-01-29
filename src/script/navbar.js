const close = document.querySelector(".close-nav");
const open = document.querySelector(".open-nav");
const header = document.querySelector("header");

open.addEventListener("click", () => {
    header.classList.add("nav-opened");
});

close.addEventListener("click", () => {
    header.classList.remove("nav-opened");
});
