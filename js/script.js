const hamburgerButton = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');
const openIcon = document.querySelector('.open-icon');
const closedIcon = document.querySelector('.closed-icon');

hamburgerButton.addEventListener('click', () => {
  // Cambia la visibilidad del menú al hacer clic en el botón de hamburguesa
  menu.classList.toggle('show-menu');
  
  // Alternar la visibilidad de los íconos
  openIcon.style.display = menu.classList.contains('show-menu') ? 'block' : 'none';
  closedIcon.style.display = menu.classList.contains('show-menu') ? 'none' : 'block';
});

const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function highlightNavLink() {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavLink);


