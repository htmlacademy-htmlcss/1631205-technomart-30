const map = document.querySelector(".modal-map");
const mapOpenButton = document.querySelector(".contacts__map");
const mapCloseButton = map.querySelector(".modal-close");

mapOpenButton.addEventListener("click", function (e) {
  e.preventDefault();
  map.classList.add("modal-show");
});

mapCloseButton.addEventListener("click", function (e) {
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (map.classList.contains("modal-show")) {
      e.preventDefault();
      map.classList.remove("modal-show");
    }
  }
});
