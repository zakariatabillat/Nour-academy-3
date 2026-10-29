import { getInscriptions } from "./state.js";
import { calculerStats, formaterMAD } from "./stats.js";

const STATUTS = ["En attente", "Validée", "Payée"];

function carte(titre, valeur, detail = "") {
  return `
    <div class="rounded-xl border border-slate-200 bg-white p-5">
      <p class="text-sm text-slate-600">${titre}</p>
      <p class="mt-1 text-3xl font-bold text-slate-900">${valeur}</p>
      ${detail ? `<p class="mt-1 text-sm text-slate-600">${detail}</p>` : ""}
    </div>`;
}

export function renderDashboard(container) {
  const { total, parStatut, recettes } = calculerStats(getInscriptions());

  const pourcentage = (n) => (total ? `${Math.round((n / total) * 100)} % des inscriptions` : "");

  const cartesStatut = STATUTS
    .map((statut) => carte(statut, parStatut[statut], pourcentage(parStatut[statut])))
    .join("");

  container.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Tableau de bord</h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      ${carte("Inscrits", total)}
      ${cartesStatut}
      ${carte("Recettes encaissées", formaterMAD(recettes), "Inscriptions payées")}
    </div>`;
}