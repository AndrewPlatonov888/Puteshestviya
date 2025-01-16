import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {setSmoothScroll} from './smooth-scroll';
import {setTitleShadow} from './title-shadows';
import {activatePlayButton} from './play-video';
import {watchBurger} from './burger-watcher';
import {watchAdvantages} from './advantages-master';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  watchBurger(); // Следим за состоянием бургера; и исходя из него включаем/выключаем мобильное меню
  setSmoothScroll(); // Делает переходы на #smooth-..якоря плавными
  setTitleShadow(); // Ставит тени на заголовки
  activatePlayButton(); // Вешает хендлер на кнопку "смотреть видео"
  watchAdvantages(); // следит за resize блока Advantages
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});


