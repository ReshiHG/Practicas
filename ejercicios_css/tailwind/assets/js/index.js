const d = document;
const $btnHamburger = d.getElementById("btn-menu");
const $blockMenu = d.getElementById("block-menu");


$btnHamburger.addEventListener("click", () => {
  $blockMenu.classList.toggle("hidden");
  $blockMenu.classList.toggle("flex");
});

