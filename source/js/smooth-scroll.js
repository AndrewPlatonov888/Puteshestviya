// Плавный Scroll к smooth-якорям (в разметке их имена начинаются со "#smooth-")

function setSmoothScroll() {
  document.querySelectorAll('a[href^="#smooth-"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      // eslint-disable-next-line no-invalid-this
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

export {setSmoothScroll};
