//
const audioContainers = document.querySelectorAll('[data-audio="audio-container"]');
const iframe = audioContainers[0].querySelector('iframe');

// Формируем ссылку для аудио
function generateAudioURL(id) {
  return 'https://music.yandex.ru/iframe/album/' + id;
}

// Формируем аудио iframe
function createAudioIframe() {
  iframe.setAttribute('src', generateAudioURL(audioContainers[0].dataset.id));
  iframe.style.zIndex = '10';
}

// Удаляем аудио iframe при перелистывании слайда
function deleteAudioIframe() {
  iframe.removeAttribute('src', generateAudioURL(audioContainers[0].dataset.id));
  iframe.style.zIndex = '0';
}


export {createAudioIframe, generateAudioURL, deleteAudioIframe};
