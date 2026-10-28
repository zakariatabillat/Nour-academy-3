export function initNavigation() {
  const boutons = document.querySelectorAll("[data-view]");
  const panneaux = document.querySelectorAll("[data-view-panel]");

  function afficher(vue) {
    panneaux.forEach((p) => {
      p.hidden = p.dataset.viewPanel !== vue;
    });
    boutons.forEach((b) => {
      if (b.dataset.view === vue) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
  }

  boutons.forEach((b) => b.addEventListener("click", () => afficher(b.dataset.view)));
  afficher("inscriptions");
  return afficher;
}