export function navUp() {
  const menu = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  // const mobileBack = document.querySelector('.mobile-back');
  const overlay = document.querySelector('.overlay');

  const lockScroll = () => {
    document.body.classList.add('lock');
  };

  const unlockScroll = () => {
    document.body.classList.remove('lock');
  };

  const initialMenu = () => {
    document.querySelector('.nav__list--dropdown').classList.remove('transformation');
    document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
    scrollTop();
  }

  const scrollTop = () => {
    menu.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  burger.addEventListener('click', () => {
    burger.classList.add('open');
    menu.classList.add('open');
    overlay.classList.add('open');
    lockScroll();
    initialMenu();
  });

  overlay.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('open');
    unlockScroll();
  });

  menu.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('nav__link--drop')) {
      e.preventDefault();
      e.target.closest('.nav__list').classList.add('transformation');
      e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
      scrollTop();
    };

    if (e.target.classList.contains('mobile-back__link')) {
      e.preventDefault();
      e.target.closest('.nav__list--dropdown').classList.remove('transformation');
      e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
      scrollTop();
    };
    if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--drop')) {
      // e.preventDefault();
      menu.classList.remove('open');
      overlay.classList.remove('open');
      unlockScroll();
    }

  });
}