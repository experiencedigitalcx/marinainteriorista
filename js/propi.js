

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