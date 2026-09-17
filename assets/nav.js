(function () {
  var toggle = document.getElementById('nav-toggle');
  var panel = document.getElementById('nav-panel');
  if (!toggle || !panel) return;

  // Progressive enhancement: el panel se sirve VISIBLE en el HTML — si este
  // script no llega a ejecutarse por cualquier motivo, el menú queda
  // simplemente desplegado (nunca inaccesible). Aquí lo colapsamos.
  panel.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');

  function closeMenu(returnFocus) {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (returnFocus) toggle.focus();
  }
  function openMenu() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) { closeMenu(false); } else { openMenu(); }
  });

  document.addEventListener('click', function (e) {
    if (!panel.hidden && e.target !== toggle && !panel.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu(false);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closeMenu(true);
  });
})();
