import { getInscriptions } from "./state.js";

export const CAPACITE_MAX = 15;

// "  Adam  EL amrani " et "adam el amrani" doivent être considérés identiques
const normaliser = (texte) => texte.trim().toLowerCase().replace(/\s+/g, " ");

export function estDoublon(nom, courseId, ignorerId = null) {
  return getInscriptions().some(
    (i) =>
      i.id !== ignorerId &&
      i.courseId === courseId &&
      normaliser(i.nom) === normaliser(nom)
  );
}

export function placesRestantes(courseId, ignorerId = null) {
  const inscrits = getInscriptions().filter(
    (i) => i.courseId === courseId && i.id !== ignorerId
  ).length;
  return CAPACITE_MAX - inscrits;
}

// Renvoie un message d'erreur, ou null si l'inscription est acceptée
export function verifierInscription({ nom, courseId }, ignorerId = null) {
  if (estDoublon(nom, courseId, ignorerId)) {
    return "Cet élève est déjà inscrit à ce cours.";
  }
  if (placesRestantes(courseId, ignorerId) <= 0) {
    return "Ce groupe est complet (15 élèves maximum).";
  }
  return null;
}