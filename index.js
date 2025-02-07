document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector('.card');
  const attribution = document.querySelector('.attribution');
  
  card.classList.add('slide-in');
  
  setTimeout(function () {
    attribution.classList.add('breathe');
  }, 1000);
});