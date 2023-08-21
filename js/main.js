const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("nav__menu--visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav__menu--visible");
})