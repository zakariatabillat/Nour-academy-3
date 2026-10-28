import { courses } from "./courses.js";
import { isValidNom, isValidTelephone } from "./validation.js";
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
const form = document.getElementById("form-inscription");

const champs = [
  {
    input: document.getElementById("champ-nom"),
    erreur: document.getElementById("erreur-nom"),
    valider: isValidNom,
    message: "Saisissez un nom valide (lettres, espaces ou tirets).",
  },
  {
    input: document.getElementById("champ-telephone"),
    erreur: document.getElementById("erreur-telephone"),
    valider: isValidTelephone,
    message: "Numéro invalide : 10 chiffres commençant par 05, 06 ou 07.",
  },
  {
    input: selectCours,
    erreur: document.getElementById("erreur-cours"),
    valider: (valeur) => valeur !== "",
    message: "Choisissez un cours.",
  },
];

function validerChamp({ input, erreur, valider, message }) {
  const ok = valider(input.value);
  erreur.textContent = ok ? "" : message;
  input.setAttribute("aria-invalid", String(!ok));
  return ok;
}

export function initFormulaire() {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // pas de rechargement

    const resultats = champs.map(validerChamp);

    if (resultats.includes(false)) {
      champs[resultats.indexOf(false)].input.focus();
      return;
    }

    console.log("Formulaire valide"); // l'enregistrement arrive à l'étape suivante
  });
}