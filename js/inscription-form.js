import { courses } from "./courses.js";
import { placesRestantes } from "./rules.js";

const selectCours = document.getElementById("champ-cours");

export function remplirCours() {
  // Niveaux uniques, dans l'ordre de la liste des cours
  const niveaux = [...new Set(courses.map((c) => c.niveau))];

  const groupes = niveaux.map((niveau) => {
    const options = courses
      .filter((c) => c.niveau === niveau)
      .map((c) => {
        const places = placesRestantes(c.id);
        const complet = places <= 0;
        const etiquette = complet ? "complet" : `${places} place${places > 1 ? "s" : ""}`;
        return `<option value="${c.id}" ${complet ? "disabled" : ""}>${c.matiere} — ${c.centre} — ${etiquette}</option>`;
      })
      .join("");
    return `<optgroup label="${niveau}">${options}</optgroup>`;
  });

  selectCours.innerHTML = `<option value="">Choisir un cours</option>${groupes.join("")}`;
}