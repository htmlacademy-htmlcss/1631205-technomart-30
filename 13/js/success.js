const success = document.querySelector('.modal-success');
const successOpenButton = document.querySelectorAll('.buy');
const successCloseButton = document.querySelector('.modal-close');
const successContinueButton = document.querySelector('.modal-success__button');

for (let i = 0; i < successOpenButton.length; i++) {
  successOpenButton[i].addEventListener('click', function(e) {
    e.preventDefault();
    success.classList.add('modal-show');
  });
}

successCloseButton.addEventListener('click', function(e) {
  success.classList.remove('modal-show');
});

successContinueButton.addEventListener('click', function(e) {
  success.classList.remove('modal-show');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) {
    if (success.classList.contains("modal-show")) {
      e.preventDefault();
      success.classList.remove("modal-show");
    }
  }
});
