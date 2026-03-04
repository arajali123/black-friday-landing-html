
// Mobile Menu Js
$(".mobile-bar").on("click", function () {
  $(".mobile-menu-area").addClass("opened");
  $(".body-overlay").addClass("opened");
});
$(".close-btn").on("click", function () {
  $(".mobile-menu-area").removeClass("opened");
  $(".body-overlay").removeClass("opened");
  $(".mobile-bar").removeClass("on");
});
$(".body-overlay").on("click", function () {
  $(".mobile-menu-area").removeClass("opened");
  $(".body-overlay").removeClass("opened");
  $(".mobile-bar").removeClass("on");
});

// Scroll JS
document.querySelector(".banner-scroll").addEventListener("click", function(e) {
  e.preventDefault();
  const headerOffset = 10;
  const element = document.querySelector("#studies-area");
  const offsetPosition = element.offsetTop - headerOffset + 40;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
});

// Counter JS
function animateCounter(counter, target, duration) {
  const isDecimal = target % 1 !== 0;
  let start = 0;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      start = target;
      clearInterval(timer);
    }

    counter.textContent = isDecimal
      ? start.toFixed(1)
      : Math.floor(start);
  }, stepTime);
}

let hasAnimated = false;

document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector("#counter-item");

  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute("data-target"));
          animateCounter(counter, target, 2000);
        });
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(section);
});

// Feature Slider Js
if ($(".feature-slider").length > 0) {
  var testimonial = new Swiper(".feature-slider", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".feature-pagination",
      clickable: true,
    }
  });
}

// Testimonial Slider Js
if ($(".testimonial-slider").length > 0) {
  var testimonial = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
      },
    }
  });
}

// Wow Js
$(window).on("load", function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
});















