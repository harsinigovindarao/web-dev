var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carousel = document.querySelector('.carousel-items');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = carousel.children[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
