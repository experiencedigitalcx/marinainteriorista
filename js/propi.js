

  const menu = document.getElementById("menu");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Scroll cap avall → ocultar MARINA/ROMERO + pujar els altres
      menu.classList.add("hide-links");
    } else {
      // Scroll cap amunt → mostrar MARINA/ROMERO + baixar els altres
      menu.classList.remove("hide-links");
    }

    lastScroll = currentScroll;
  });

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu_projecte');
  if (!menu) {
    console.warn('menu_projecte no trobat al DOM.');
    return;
  }

  // funció que aplica la classe segons scrollTop
  function updateMenuColor() {
    const y = window.scrollY || window.pageYOffset;
    if (y === 0) {
      menu.classList.remove('scrolled');
      // backup: si algun altre CSS posa style inline, forcem també color
      menu.querySelectorAll('a').forEach(a => { a.style.color = 'white'; });
      console.log('MENU: al top -> blanc');
    } else {
      menu.classList.add('scrolled');
      menu.querySelectorAll('a').forEach(a => { a.style.color = 'black'; });
      console.log('MENU: scroll -> negre (scrollY=' + y + ')');
    }
  }

  // crida inicial per establir l'estat correcte en carregar la pàgina
  updateMenuColor();

  // escoltem scroll (passive per millorar rendiment)
  window.addEventListener('scroll', updateMenuColor, { passive: true });

  // també escoltem resize per si el navegador canvia coses
  window.addEventListener('resize', updateMenuColor);
});
