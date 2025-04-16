// Menu toggle functionality
document.getElementById('menu-toggle').addEventListener('click', () => {
  alert('Menu toggle clicked - implement menu functionality here.');
});

// Search toggle functionality
document.getElementById('search-toggle').addEventListener('click', () => {
  alert('Search toggle clicked - implement search functionality here.');
});

// Client logos carousel - simple auto scroll
const carousel = document.querySelector('.client-logos-carousel');
let scrollAmount = 0;
const scrollStep = 2;
const maxScroll = carousel.scrollWidth - carousel.clientWidth;

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
  }
  carousel.scrollLeft = scrollAmount;
}

setInterval(autoScroll, 30);

// Smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
