
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
  const element = document.querySelector("#feature-area");
  const offsetPosition = element.offsetTop - headerOffset + 320;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
});


// Timer Js
const __days = document.querySelector("#days");
const __hours = document.querySelector("#hours");
const __minutes = document.querySelector("#minutes");
const __seconds = document.querySelector("#seconds");

const newYearEnd = "Nov 30 2025 00:00:00";

function countdown() {
  const newYearEndDate = new Date(newYearEnd);
  const currentDate = new Date();

  let totalSeconds = Math.floor((newYearEndDate - currentDate) / 1000);

  if (totalSeconds <= 0) {
    __days.textContent = "00";
    __hours.textContent = "00";
    __minutes.textContent = "00";
    __seconds.textContent = "00";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = totalSeconds % 60;

  __days.textContent = formatDays(days);
  __hours.textContent = formatTime(hours);
  __minutes.textContent = formatTime(minutes);
  __seconds.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function formatDays(days) {
  const lastTwo = days % 100; 
  return lastTwo.toString().padStart(2, "0");
}

countdown();
const timer = setInterval(countdown, 1000);


// Cookie Js
document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("cookie-main-wrapper");
  const accepted = localStorage.getItem("cookiesAccepted");

  if (!accepted) {
    banner.style.display = "block";
  }

  document.querySelector(".cookie-btn").onclick = function() {
    localStorage.setItem("cookiesAccepted", true);
    banner.style.display = "none";
  };

  document.querySelector(".cookie-close").onclick = function() {
    banner.style.display = "none";
  };
});








