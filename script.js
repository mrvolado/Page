document.addEventListener("DOMContentLoaded", () => {
  // ===== Menú hamburguesa + scroll suave =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // ===== Toast al descargar =====
  const descargarBtn = document.getElementById('descargarBtn');
  const toast = document.getElementById('mensaje-toast');

  if (descargarBtn && toast) {
    descargarBtn.addEventListener('click', () => {
      toast.style.display = 'block';
      setTimeout(() => toast.style.display = 'none', 3000);
    });
  }

  
  // ===== Swiper Carrusel =====
  const swiperContainer = document.querySelector('.swiper');
  if (swiperContainer) {
    new Swiper(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // ===== Fade-in scroll =====
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => observer.observe(fader));

  // ===== Lightbox Galería =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const galeriaImgs = document.querySelectorAll('.galeria-img');

  if (lightbox && lightboxImg) {
    galeriaImgs.forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show');
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
      lightboxImg.src = '';
    });
  }
});



