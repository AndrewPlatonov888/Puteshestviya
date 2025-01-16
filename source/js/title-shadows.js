// Функция установки теней на все заголовки с классами title и subtitle

function setTitleShadow() {
  document.querySelectorAll('[data-title-shadow="shadow"]').forEach((title) => {
    let titleShadow = document.createElement('span');
    let shadowText = document.createTextNode(title.textContent);
    titleShadow.appendChild(shadowText);
    title.appendChild(titleShadow);
  });
}

export {setTitleShadow};
