const letter = document.querySelector('.modal-letter');
const letterOpenButton = document.querySelector('.contacts__link');
const letterCloseButton = document.querySelector('.modal-close');
const letterInputName = document.querySelector('.letter-form__input--name');

letterOpenButton.addEventListener('click', function(e) {
  e.preventDefault();
  letter.classList.add('modal-show');
  letterInputName.focus();
});

letterCloseButton.addEventListener('click', function(e) {
  letter.classList.remove('modal-show');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (letter.classList.contains("modal-show")) {
      e.preventDefault();
      letter.classList.remove("modal-show");
    }
  }
});
