const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');

let position = 0;
const cardWidth = 300; // Approx card width + gap

nextBtn.addEventListener('click', () => {
  if (Math.abs(position) < (track.scrollWidth - track.clientWidth)) {
    position -= cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (position < 0) {
    position += cardWidth;
    track.style.transform = `translateX(${position}px)`;
  }
});
