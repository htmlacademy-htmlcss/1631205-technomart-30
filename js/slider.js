const sliderPrevButton = document.querySelector('.advantages-controls__item:first-child');
const sliderNextButton = document.querySelector('.advantages-controls__item:last-child');
const sliderItems = document.querySelectorAll('.advantages-slide');
const sliderPagination = document.querySelectorAll('.advantages-pagination__item');

sliderPrevButton.addEventListener('click', function () {
  for (let i = 0; i < sliderItems.length; i++) {
    // Если нажать назад при нахождении на первом слайде
    if (i == 0 && sliderItems[0].classList.contains('advantages-slide--active')) {
      sliderItems[0].classList.remove('advantages-slide--active');
      sliderItems[sliderItems.length - 1].classList.add('advantages-slide--active');

      sliderPagination[0].classList.remove('advantages-pagination__item--active');
      sliderPagination[sliderPagination.length - 1].classList.add('advantages-pagination__item--active');
      break;
    }

    if (sliderItems[i].classList.contains('advantages-slide--active')) {
      sliderItems[i].classList.remove('advantages-slide--active');
      sliderItems[i - 1].classList.add('advantages-slide--active');

      sliderPagination[i].classList.remove('advantages-pagination__item--active');
      sliderPagination[i - 1].classList.add('advantages-pagination__item--active');
      break;
    }
  }
});

sliderNextButton.addEventListener('click', function () {
  for (let i = 0; i < sliderItems.length; i++) {
    // Если нажать вперед при нахождении на последнем слайде
    if (i == sliderItems.length - 1 && sliderItems[sliderItems.length - 1].classList.contains('advantages-slide--active')) {
      sliderItems[sliderItems.length - 1].classList.remove('advantages-slide--active')
      sliderItems[0].classList.add('advantages-slide--active');

      sliderPagination[sliderPagination.length - 1].classList.remove('advantages-pagination__item--active');
      sliderPagination[0].classList.add('advantages-pagination__item--active');
      break;
    }

    if (sliderItems[i].classList.contains('advantages-slide--active')) {
      sliderItems[i].classList.remove('advantages-slide--active');
      sliderItems[i + 1].classList.add('advantages-slide--active');

      sliderPagination[i].classList.remove('advantages-pagination__item--active');
      sliderPagination[i + 1].classList.add('advantages-pagination__item--active');
      break;
    }
  }
});

for (let i = 0; i < sliderPagination.length; i++) {
  sliderPagination[i].addEventListener('click', function () {
    sliderPagination.forEach(element => {
      element.classList.remove('advantages-pagination__item--active');
    });
    sliderPagination[i].classList.add('advantages-pagination__item--active');

    sliderItems.forEach(element => {
      element.classList.remove('advantages-slide--active');
    });
    sliderItems[i].classList.add('advantages-slide--active');
  });
}
