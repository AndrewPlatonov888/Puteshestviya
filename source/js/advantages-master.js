//
const advantagesSection = document.querySelector('.advantages');
const advantagesSlides = advantagesSection.querySelectorAll('.advantages__swiper-slide');
const advantagesSwiperWrapper = advantagesSection.querySelector('.advantages__swiper-wrapper');
const advantagesInlineStyles = advantagesSlides[0].style.cssText; // запоминаем инлайновые стили слайдов
const divContainer = document.createElement('div');

let isActive = false;
let slidesAmount = 0;


// Используем ResizeObserver для отслеживания ширины вьюпорта по ширине секции advantages (ее width = 100%)
const advantagesObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const currentValue = entry.contentRect;

    if (currentValue.width >= (1200 - getScrollbarWidth())) { // следим за наступлением resize с поправкой на ширину скрола
      if (advantagesSection.querySelector('.advantages__list')) {
        isActive = false;
        backUsedSlidesToSwiper();
        destroyAdvantagesList();
      }
    } else {
      if (isActive) {
        return;
      } else {
        isActive = true;
        detectBodyScroll();
        createAdvantagesList();

      }
    }
  }
});

// Функция создания списка оригинальных слайдов в контейнере под VP < 1200
// далее этот список настраиваем через css
function createAdvantagesList() {
  divContainer.classList.add('advantages__list');
  if (advantagesSlides.length <= 12) { // отделяем оригинальные слайды от виртуальных
    slidesAmount = advantagesSlides.length / 3;
  } else {
    slidesAmount = advantagesSlides.length - 10;
  }
  for (let i = 0; i < slidesAmount; i++) {
    advantagesSlides[i].style = ''; // обнуляем инлайновые стили слайдов
    divContainer.appendChild(advantagesSlides[i]);
  }
  advantagesSection.appendChild(divContainer);
}

// Функция удаления списка преимуществ для vp < 1200
function destroyAdvantagesList() {
  advantagesSection.querySelector('.advantages__list').remove();
}

// Функция возвращения использованных для списка слайдов в слайдер
function backUsedSlidesToSwiper() {
  let advantages = divContainer.querySelectorAll('.advantages__swiper-slide');
  for (let i = 0; i < advantages.length; i++) {
    advantages[i].style.cssText = advantagesInlineStyles; // возвращаем инлайновые стили на использованные для списка слайды
    advantagesSwiperWrapper.appendChild(advantages[i]);
  }
}

// Функция слежения за шириной секции advantages, которая равна 100%;
function watchAdvantages() {
  advantagesObserver.observe(advantagesSection);
}

// Функция определения наличия скрола на body
function detectBodyScroll() {
  const scrollHeight = document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const hasVerticalScrollbar = scrollHeight > clientHeight;
  return hasVerticalScrollbar;
}

// Функция вычисления ширины скрола
function getScrollbarWidth() {
  if (detectBodyScroll()) {
    if ((window.innerWidth - document.documentElement.clientWidth) <= 2 || detectMobileDevice()) {
      return 0;
    }
    return (window.innerWidth - document.documentElement.clientWidth);
  } else {
    return 0;
  }
}

// Функция определения мобильного Клиента
function detectMobileDevice() {
  let isMobile = window.matchMedia || window.msMatchMedia;
  if (isMobile) {
    let matchMobile = isMobile('(pointer:coarse)');
    return matchMobile.matches;
  }
  return false;
}


export {watchAdvantages, createAdvantagesList};
