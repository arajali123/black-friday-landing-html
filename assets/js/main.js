
// Card Block Js
var flkty = new Flickity('#pesto-card-block-carousel', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  pageDots: false,
  prevNextButtons:false
});

var progressBar = document.querySelector('.pesto-card-block-progress-bar');

flkty.on('scroll', function(progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = (progress * 100) + '%';
});

document.querySelector('.flickity-prev').addEventListener('click', function() {
  flkty.previous();
});

document.querySelector('.flickity-next').addEventListener('click', function() {
  flkty.next();
});















