// Swiper 8.4.7
import './vendor/swiper';
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';
// import {initTabs} from './vendor/init-tabs'; // подтягиваем Табы
// import {initAccordions} from './vendor/init-accordion'; // подтягиваем Аккордеон
import {Form} from './vendor/form-validate/form'; // подтягиваем Валидацию
import {deleteVideoIframe} from './play-video';
import {createAudioIframe, deleteAudioIframe} from './play-audio';
import {Burger} from './vendor/burger';


// Swiper на секцию Hero
// const heroSwiper = new Swiper('.hero__swiper', {
//   cssMode: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   mousewheel: true,
//   keyboard: true,
//   // breakpoints: {
//   //   // when window width is >= 320px
//   //   320: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 20,
//   //     initialSlide: 3,
//   //   },
//   //   // when window width is >= 768px
//   //   768: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 32,
//   //     initialSlide: 3,
//   //   },
//   //   // when window width is >= 1200px
//   //   1200: {
//   //     slidesPerView: 1,
//   //     spaceBetween: 40,
//   //     initialSlide: 0,
//   //   },
//   // },
// });


// Swiper на секцию Hero
const heroSwiper = new Swiper('.hero__swiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  initialSlide: 0,
  effect: 'fade',
  loop: 'true',
  autoplay: {
    delay: 650000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
  },
});

heroSwiper.on('slideChange', function () {
  // eslint-disable-next-line no-invalid-this
  let activeIndex = this.activeIndex;
  deleteVideoIframe();
  if (activeIndex === 3 || activeIndex === 0) {
    createAudioIframe();
  } else {
    deleteAudioIframe();
  }
});

// Swiper на секцию Tours
const toursSwiper = new Swiper('.tours__swiper', {
  spaceBetween: 30,
  slidesPerView: 3,
  direction: 'horizontal',
  navigation: {
    prevEl: '.tours__prev',
    nextEl: '.tours__next',
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 0,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      initialSlide: 0,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 0,
    },
  },
});

const trainingSwiper = new Swiper('.training__swiper', {
  spaceBetween: 20,
  slidesPerView: 4,
  direction: 'horizontal',
  navigation: {
    prevEl: '.training__prev',
    nextEl: '.training__next',
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 0,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
      // navigation: {
      //   prevEl: '.training__prev',
      //   nextEl: '.training__next',
      // },
      initialSlide: 0,
    },
  },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  loop: 'true',
  spaceBetween: 120,
  slidesPerView: 2,
  direction: 'horizontal',
  navigation: {
    prevEl: '.reviews__prev',
    nextEl: '.reviews__next',
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      // initialSlide: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 120,
    },
  },
});

const advantagesSwiper = new Swiper('.advantages__swiper', {
  freeMode: true,
  loop: 'true',
  spaceBetween: 30,
  slidesPerView: 5,
  direction: 'horizontal',
  navigation: {
    prevEl: '.advantages__prev',
    nextEl: '.advantages__next',
  },
});

function destroyAdvantagesSwiper() {
  advantagesSwiper.destroy(true, true);
}

function initAdvantagesSwiper() {
  advantagesSwiper.init();
}

const gallerySwiper = new Swiper('.gallery__swiper', {
  loop: 'true',
  spaceBetween: 5,
  slidesPerView: 'auto',
  direction: 'horizontal',
  navigation: {
    prevEl: '.gallery__prev',
    nextEl: '.gallery__next',
  },
  breakpoints: {
    // when window width is >= 1px
    1: {
      slidesPerView: 2,
      spaceBetween: 4,
      initialSlide: 0,
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      // initialSlide: 0,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    const burger = new Burger();
    // eslint-disable-next-line no-unused-expressions
    window.burger = burger;
    burger.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});


export {heroSwiper, toursSwiper, trainingSwiper, reviewsSwiper, advantagesSwiper, gallerySwiper, destroyAdvantagesSwiper, initAdvantagesSwiper};
