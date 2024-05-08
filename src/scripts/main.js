import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

//burger-menu-buttons
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('burger-menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('active');
});
//burger-menu-buttons end

//swiper

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18,
      loop: true,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: true,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
    },
  },

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },
});

//swiper end