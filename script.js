// Menu responsive
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }
  
  // Animation au scroll
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-in');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });
  