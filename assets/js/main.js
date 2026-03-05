
// Collection Js
var flkty = new Flickity('#burger-carousel', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons:false
});

// Progress bar
var progressBar = document.querySelector('.collection-progress-bar');

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = (progress * 100) + '%';
});

// Arrows
document.querySelector('.flickity-prev').addEventListener('click', function() {
  flkty.previous();
});

document.querySelector('.flickity-next').addEventListener('click', function() {
  flkty.next();
});















