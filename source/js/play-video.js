//
const movieContainers = document.querySelectorAll('[data-video="video-container"]');

// Формируем ссылку для видео
function generateVideoURL(id) {
  let query = '?rel=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&controls=0&autohide=1&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + query;
}

// Формируем видео iframe
function createVideoIframe(id) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateVideoURL(id));
  iframe.classList.add('aboutiframe');
  return iframe;
}

// Удаляем видео iframe по окончанию видео или при перелистывании слайда
function deleteVideoIframe() {
  let videoContainers = document.querySelectorAll('[data-video="video-container"]');
  videoContainers.forEach(
      function (container) {
        if (container.querySelector('iframe') !== null) {
          container.querySelector('button').style.visibility = 'visible';
          container.querySelector('button').style.pointerEvents = 'auto';
          container.querySelector('iframe').remove();
        }
      });
}

// Вставляем видео iframe в DOM и тем самым запускаем видео (на видео включен автозапуск)
function activateVideoIframe(btn) {
  let id = movieContainers[0].dataset.id;
  let iframe = createVideoIframe(id);
  btn.parentNode.appendChild(iframe);
  btn.style.visibility = 'hidden';
  btn.style.pointerEvents = 'none';
  setTimeout(function () {
    iframe.remove();
    btn.style.visibility = 'visible';
    btn.style.pointerEvents = 'auto';
  }, movieContainers[0].dataset.duration);
}

// Ставим листенер на кнопку play Video
function activatePlayButton() {
  movieContainers.forEach(
      function (container) {
        container.querySelector('button').addEventListener('click', (evt) => {
          activateVideoIframe(evt.target);
        });
      }
  );
}

export {activatePlayButton, createVideoIframe, generateVideoURL, deleteVideoIframe, activateVideoIframe};
