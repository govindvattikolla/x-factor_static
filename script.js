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

// hero section
 const words = ["path", "pace", "potential"];
  let i = 0;
  const wordElement = document.getElementById("changing-word");

  setInterval(() => {
    i = (i + 1) % words.length;
    wordElement.classList.remove("fade-in");
    void wordElement.offsetWidth; // Reset animation
    wordElement.textContent = words[i];
    wordElement.classList.add("fade-in");
  }, 2000);

  // trainers
  const slider = document.getElementById('slider');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
