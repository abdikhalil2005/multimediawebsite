// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Contact form (placeholder — wires up once you pick an email service)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks! This form isn't connected to email yet — let's wire that up next.");
    form.reset();
  });
}

// Trigger the "Manager" typing animation only when it scrolls into view
const typingEl = document.querySelector('.typing-text');
if (typingEl) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typingEl.classList.add('start-typing');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  observer.observe(typingEl);
}

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Gallery arrow carousel
const galleryTrack = document.getElementById('galleryTrack');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
if (galleryTrack && galleryPrev && galleryNext) {
  const scrollAmount = 220; // adjusted for overlapping cards
  galleryPrev.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  galleryNext.addEventListener('click', () => {
    galleryTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Reveal gallery cards (rise from the bottom, staggered) when scrolled into view
if (galleryTrack) {
  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        galleryTrack.classList.add('in-view');
        galleryObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  galleryObserver.observe(galleryTrack);
}