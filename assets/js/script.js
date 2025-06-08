// slider courses js
var ugSwiper = new Swiper('.course-slider', {
  slidesPerView: 1,
  spaceBetween: 15,
  lazy: true,
  grabCursor: true,
  loop: true, // Set to true if you want infinite looping
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ' .swiper-button-next',
    prevEl: ' .swiper-button-prev',
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// slider faculty js
var swiper = new Swiper('.faculty-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  lazy: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 4
    }
  }
});


// foundation slider js
var swiper = new Swiper(".mySwiperMembers", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,

    },
    1024: {
      slidesPerView: 2,

    },
  },
});

// foalter btns js
document.addEventListener('DOMContentLoaded', function () {
  let menuBtn = document.getElementById('menuBtn');
  let menuLinks = document.getElementById('menuLinks');

  // Get references to the two icon elements
  let toggleIcon = menuBtn.querySelector('.toggle'); // Assumes 'toggle' class is unique to the list icon
  let crossIcon = menuBtn.querySelector('.cross');   // Assumes 'cross' class is unique to the cross icon

  if (menuBtn && menuLinks && toggleIcon && crossIcon) {
    menuBtn.addEventListener('click', function () {
      // Toggle the visibility of the menu links
      menuLinks.classList.toggle('hidden');

      // Toggle the visibility of the icons
      toggleIcon.classList.toggle('d-none'); // Hide the list icon
      crossIcon.classList.toggle('d-none');  // Show the cross icon
    });
  }
});

// header upper hide
window.addEventListener("scroll", function () {
  const header = document.getElementById("upper-header");
  if (window.scrollY > 120) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

