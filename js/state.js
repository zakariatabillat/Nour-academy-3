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