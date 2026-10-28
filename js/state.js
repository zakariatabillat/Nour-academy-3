import { loadInscriptions, saveInscriptions } from "./storage.js";
import { seedInscriptions } from "./seed.js";

let inscriptions = [];

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

  inscriptions = [...inscriptions, nouvelle];
  saveInscriptions(inscriptions);
  return nouvelle;
}
export function updateInscription(id, changes) {
  const existe = inscriptions.some((i) => i.id === id);
  if (!existe) return null;

  // id, numéro de dossier et date ne se modifient jamais
  const { id: _id, numeroDossier: _num, dateInscription: _date, ...autorisees } = changes;

  inscriptions = inscriptions.map((i) =>
    i.id === id ? { ...i, ...autorisees } : i
  );
  saveInscriptions(inscriptions);
  return inscriptions.find((i) => i.id === id);
}