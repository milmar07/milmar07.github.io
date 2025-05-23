// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});
