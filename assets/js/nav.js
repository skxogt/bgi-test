/* Header: transparent at the very top of a page, solid white once you scroll.
   Without this script the header simply stays solid white. */
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var menu = header.querySelector(".mnav");
  function update() {
    var atTop = window.scrollY < 8 && !(menu && menu.open);
    header.classList.toggle("is-top", atTop);
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
  if (menu) menu.addEventListener("toggle", update);
})();
