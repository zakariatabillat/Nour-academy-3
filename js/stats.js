import { courses } from "./courses.js";
import { CAPACITE_MAX } from "./rules.js";

// Le cours d'une inscription = même matière, même niveau, même centre
const estDuCours = (inscription, cours) =>
  inscription.matiere === cours.matiere &&
  inscription.niveau === cours.niveau &&
  inscription.centre === cours.centre;

export function calculerStats(inscriptions) {
  const total = inscriptions.length;

  // Répartition par statut : { "En attente": 6, "Validée": 6, "Payée": 8 }
  const parStatut = inscriptions.reduce(
    (acc, { statut }) => ({ ...acc, [statut]: (acc[statut] ?? 0) + 1 }),
    { "En attente": 0, "Validée": 0, "Payée": 0 }
  );

  // Recettes encaissées : uniquement les inscriptions payées
  const recettes = inscriptions
    .filter((i) => i.statut === "Payée")
    .reduce((somme, i) => somme + Number(i.prix), 0);

  // Taux de remplissage des cours qui ont au moins un élève, du plus rempli au moins rempli
  const remplissage = courses
    .map((c) => {
      const inscrits = inscriptions.filter((i) => estDuCours(i, c)).length;
      return { ...c, inscrits, taux: Math.round((inscrits / CAPACITE_MAX) * 100) };
    })
    .filter((c) => c.inscrits > 0)
    .sort((a, b) => b.taux - a.taux);

  return { total, parStatut, recettes, remplissage };
}

// 12600 → "12 600 MAD"
export const formaterMAD = (montant) =>
  `${new Intl.NumberFormat("fr-FR").format(montant)} MAD`;