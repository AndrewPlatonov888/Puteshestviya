//
const mainHeader = document.querySelector('[data-header]');
const menuHeader = document.querySelector('[data-menu]');
const burgerIcon = mainHeader.querySelector('.main-header__burger-icon');
const closeBurgerIcon = mainHeader.querySelector('.main-header__burger-close');
const heroSection = document.querySelector('[data-hero]');

const burgerClassObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type !== 'attributes' && mutation.attributeName !== 'class') {
      return;
    }
    menuHeader.classList.toggle('is-open');
    burgerIcon.classList.toggle('disabled');
    closeBurgerIcon.classList.toggle('enabled');
    heroSection.classList.toggle('in-shadow');
  });
});

// Скрипт Лиги вешает is-open на mainHeader по клику на burger, следим за этим событием
function watchBurger() {
  burgerClassObserver.observe(mainHeader, {attributes: true});
}

export {watchBurger};
