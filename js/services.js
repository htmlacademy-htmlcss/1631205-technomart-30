const servicesItems = document.querySelectorAll('.tabs-caption__item');
const servicesItemsContent = document.querySelectorAll('.tabs-content__item');

for (let i = 0; i < servicesItems.length; i++) {
  servicesItems[i].addEventListener('click', function (e) {
    e.preventDefault();

    servicesItems.forEach(element => {
      element.classList.remove('tabs-caption__item--active');
    });
    servicesItems[i].classList.add('tabs-caption__item--active');

    servicesItemsContent.forEach(element => {
      element.classList.remove('tabs-content__item--active');
    });
    servicesItemsContent[i].classList.add('tabs-content__item--active');
  });
}
