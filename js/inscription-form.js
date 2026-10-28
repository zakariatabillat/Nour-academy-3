import { courses } from "./courses.js";
import { isValidNom, isValidTelephone } from "./validation.js";
import { placesRestantes, verifierInscription } from "./rules.js";
import { addInscription } from "./state.js";

const form = document.getElementById("form-inscription");
const inputNom = document.getElementById("champ-nom");
const inputTelephone = document.getElementById("champ-telephone");
const selectCours = document.getElementById("champ-cours");
const selectStatut = document.getElementById("champ-statut");
const message = document.getElementById("message-formulaire");

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

const champs = [
  {
    input: inputNom,
    erreur: document.getElementById("erreur-nom"),
    valider: isValidNom,
    message: "Saisissez un nom valide (lettres, espaces ou tirets).",
  },
  {
    input: inputTelephone,
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

function afficherMessage(texte, type) {
  message.textContent = texte;
  message.className = `text-sm font-medium ${type === "succes" ? "text-green-700" : "text-red-700"}`;
}

function lireFormulaire() {
  const { id: courseId, matiere, niveau, centre, prix } = courses.find(
    (c) => c.id === Number(selectCours.value)
  );

  return {
    nom: inputNom.value.trim().replace(/\s+/g, " "),
    telephoneParent: inputTelephone.value.replace(/\s/g, ""),
    courseId,
    matiere,
    niveau,
    centre,
    prix,
    statut: selectStatut.value,
  };
}

export function initFormulaire() {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // pas de rechargement
    afficherMessage("", "");

    // 1. Regex
    const resultats = champs.map(validerChamp);
    if (resultats.includes(false)) {
      champs[resultats.indexOf(false)].input.focus();
      return;
    }

    // 2. Règles métier : doublon et capacité
    const donnees = lireFormulaire();
    const erreur = verifierInscription(donnees);
    if (erreur) {
      afficherMessage(erreur, "erreur");
      return;
    }

    // 3. Enregistrement
    const nouvelle = addInscription(donnees);
    form.reset();
    afficherMessage(`Inscription ${nouvelle.numeroDossier} enregistrée pour ${nouvelle.nom}.`, "succes");
  });

  form.addEventListener("reset", () => {
    champs.forEach(({ input, erreur }) => {
      erreur.textContent = "";
      input.removeAttribute("aria-invalid");
    });
    afficherMessage("", "");
  });
}