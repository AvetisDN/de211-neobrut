const burger = document.querySelector(".burger button");
const menuOverlay = document.querySelector(".menu_overlay");
const closeMenuOverlay = document.querySelector(".menu_overlay .close");

burger.addEventListener("click", () => {
  menuOverlay.classList.add("show");
});
closeMenuOverlay.addEventListener("click", () => {
  menuOverlay.classList.remove("show");
});

const showSearch = document.querySelector(".search button");
const closeSearch = document.querySelector(".search_overlay .close");
const searchOverlay = document.querySelector(".search_overlay");

showSearch.addEventListener("click", () => {
  searchOverlay.classList.add("show");
});
closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("show");
});
