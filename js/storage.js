const STORAGE_KEY = "eleve";
export function loadInscriptions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveInscriptions(inscriptions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inscriptions));
}

export function clearInscriptions() {
  localStorage.removeItem(STORAGE_KEY);
}