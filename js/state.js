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