const letter = document.querySelector('.modal-letter');
const letterOpenButton = document.querySelector('.contacts__link');
const letterCloseButton = letter.querySelector('.modal-close');
const letterInputName = letter.querySelector('.letter-form__input--name');
// const blackout = document.querySelector('.blackout');

letterOpenButton.addEventListener('click', function(e) {
  e.preventDefault();
  blackout.classList.add('active');

  letter.classList.add('modal-show');
  letterInputName.focus();
});

letterCloseButton.addEventListener('click', function(e) {
  blackout.classList.remove('active');

  letter.classList.remove('modal-show');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (letter.classList.contains("modal-show")) {
      e.preventDefault();
      blackout.classList.remove('active');

      letter.classList.remove("modal-show");
    }
  }
});
