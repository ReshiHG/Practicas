const d = document;
const $btnHamburger = d.getElementById("btn-menu");
const $iconHamburger = d.querySelector("#btn-menu .svg-hamburguer");
const $iconX = d.querySelector("#btn-menu .svg-x");
const $blockMenu = d.getElementById("block-menu");


$btnHamburger.addEventListener("click", () => {
  $iconHamburger.classList.toggle("hidden");
  $iconX.classList.toggle("hidden");
  $blockMenu.classList.toggle("hidden");
  $blockMenu.classList.toggle("flex");
});

