// Mobile menü fonksiyonalitesi
document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  burgerMenu?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
  
  // Sayfa dışına tıklandığında menüyü kapat
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 