document.addEventListener('DOMContentLoaded', () => {
  // 1. Filter logic (Midterms / Finals only)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const activityCards = document.querySelectorAll('.activity-card');

  function applyFilter(filterValue) {
    activityCards.forEach(card => {
      const cardTerm = card.getAttribute('data-term');
      card.style.display = cardTerm === filterValue ? 'flex' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');
      applyFilter(filterValue);
    });
  });

  // Default to showing Midterms on initial page load
  applyFilter('midterms');

  // 2. Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // 3. Slideshow Logic
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot-indicator');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  let currentIndex = 0;
  let autoTimer = null;

  function showSlide(index) {
    if (!slides.length) return;

    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides.forEach((slide, i) => {
      slide.style.display = i === currentIndex ? 'block' : 'none';
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function resetAutoPlay() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, 3500);
  }

  if (nextBtn) {
    nextBtn.onclick = function (e) {
      e.preventDefault();
      nextSlide();
      resetAutoPlay();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = function (e) {
      e.preventDefault();
      prevSlide();
      resetAutoPlay();
    };
  }

  dots.forEach(dot => {
    dot.onclick = function (e) {
      e.preventDefault();
      const dotIndex = parseInt(this.getAttribute('data-index'), 10);
      showSlide(dotIndex);
      resetAutoPlay();
    };
  });

  // Start with first slide and auto-advance
  showSlide(0);
  autoTimer = setInterval(nextSlide, 3500);
});