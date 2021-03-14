const letter = document.querySelector('.modal-letter');
const letterOpenButton = document.querySelector('.contacts__link');
const letterCloseButton = letter.querySelector('.modal-close');
const letterInputName = letter.querySelector('.letter-form__input--name');
const letterInputEmail = letter.querySelector('.letter-form__input--email');
const letterTextArea = letter.querySelector('.letter-form__textarea');
const letterForm = letter.querySelector('.letter-form');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

letterOpenButton.addEventListener('click', function(e) {
  e.preventDefault();
  blackout.classList.add('active');

  letter.classList.add('modal-show');
  if (storage) {
    letterInputName.value = storage;
    letterInputEmail.focus();
  } else {
    letterInputName.focus();
  }
});

letterCloseButton.addEventListener('click', function(e) {
  blackout.classList.remove('active');

  letter.classList.remove('modal-show');
  letter.classList.remove('modal-error');
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (letter.classList.contains('modal-show')) {
      e.preventDefault();
      blackout.classList.remove('active');
      letter.classList.remove('modal-show');
      letter.classList.remove('modal-error');
    }
  }
});

letterForm.addEventListener('submit', function (e) {
  if (!letterInputName.value || !letterInputEmail.value || !letterTextArea.value) {
    e.preventDefault();
    letter.classList.remove('modal-error');
    letter.offsetWidth = letter.offsetWidth;
    letter.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', letterInputName.value);
    }
  }
});
