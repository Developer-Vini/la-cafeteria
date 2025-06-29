const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
