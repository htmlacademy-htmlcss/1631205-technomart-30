const map = document.querySelector('.modal-map');
const mapOpenButton = document.querySelector('.contacts__map');
const mapCloseButton = map.querySelector('.modal-close');

mapOpenButton.addEventListener('click', function (e) {
  e.preventDefault();
  blackout.classList.add('active');

  map.classList.add('modal-show');
});

mapCloseButton.addEventListener('click', function (e) {
  blackout.classList.remove('active');

  map.classList.remove('modal-show');
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (map.classList.contains('modal-show')) {
      e.preventDefault();
      blackout.classList.remove('active');

      map.classList.remove('modal-show');
    }
  }
});
