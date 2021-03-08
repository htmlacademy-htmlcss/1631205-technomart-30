const success = document.querySelector('.modal-success');
const successOpenButton = document.querySelectorAll('.buy');
const successCloseButton = success.querySelector('.modal-close');
const successContinueButton = success.querySelector('.modal-success__button');
const blackout = document.querySelector('.blackout');

const cart = document.querySelector('.header__cart');
let cartNum = 0;

const bookmarks = document.querySelector('.header__bookmarks');
const bookmarksButton = document.querySelectorAll('.bookmarks');
let bookmarksNum = 0;

for (let i = 0; i < successOpenButton.length; i++) {
  successOpenButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    blackout.classList.add('active');

    success.classList.add('modal-show');

    cartNum++;
    cart.textContent = 'Корзина: ' + cartNum;
    cart.classList.add('header__cart--active');
  });
}

successCloseButton.addEventListener('click', function(e) {
  blackout.classList.remove('active');

  success.classList.remove('modal-show');
});

successContinueButton.addEventListener('click', function(e) {
  blackout.classList.remove('active');

  success.classList.remove('modal-show');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (success.classList.contains("modal-show")) {
      e.preventDefault();
      blackout.classList.remove('active');

      success.classList.remove("modal-show");
    }
  }
});

for (let i = 0; i < bookmarksButton.length; i++) {
  bookmarksButton[i].addEventListener('click', function (e) {
    e.preventDefault();
    bookmarksNum++;
    bookmarks.textContent = 'Закладки: ' + bookmarksNum;
  });
}
