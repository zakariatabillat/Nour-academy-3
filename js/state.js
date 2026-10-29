import { loadInscriptions, saveInscriptions } from "./storage.js";
import { seedInscriptions } from "./seed.js";

let inscriptions = [];
const listeners = [];

// Seul endroit qui modifie la liste : met à jour, sauvegarde, prévient les vues
function commit(nouvelleListe) {
  inscriptions = nouvelleListe;
  saveInscriptions(inscriptions);
  listeners.forEach((fn) => fn(getInscriptions()));
}

export function onChange(fn) {
  listeners.push(fn);
}

export function initInscriptions() {
  const saved = loadInscriptions();

  if (saved) {
    inscriptions = saved;
  } else {
    inscriptions = [...seedInscriptions];
    saveInscriptions(inscriptions);
  }
}

export function getInscriptions() {
  return [...inscriptions];
}

export function addInscription(data) {
  const nextId = inscriptions.length
    ? Math.max(...inscriptions.map((i) => i.id)) + 1
    : 1;

  const nouvelle = {
    statut: "En attente",
    ...data,
    id: nextId,
    numeroDossier: `DOS-${new Date().getFullYear()}-${String(nextId).padStart(3, "0")}`,
    dateInscription: new Date().toISOString().slice(0, 10),
  };

  commit([...inscriptions, nouvelle]);
  return nouvelle;
}

export function updateInscription(id, changes) {
  const existe = inscriptions.some((i) => i.id === id);
  if (!existe) return null;

  // id, numéro de dossier et date ne se modifient jamais
  const { id: _id, numeroDossier: _num, dateInscription: _date, ...autorisees } = changes;

  commit(inscriptions.map((i) => (i.id === id ? { ...i, ...autorisees } : i)));
  return inscriptions.find((i) => i.id === id);
}

export function removeInscription(id) {
  const supprimee = inscriptions.find((i) => i.id === id);
  if (!supprimee) return null;

  commit(inscriptions.filter((i) => i.id !== id));
  return supprimee;
}
export function resetDemo() {
  commit([...seedInscriptions]);
}