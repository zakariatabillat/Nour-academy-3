import { getInscriptions } from "./state.js";
import { calculerStats, formaterMAD } from "./stats.js";
import { CAPACITE_MAX } from "./rules.js";

const STATUTS = ["En attente", "Validée", "Payée"];

function carte(titre, valeur, detail = "") {
  return `
    <div class="rounded-xl border border-slate-200 bg-white p-5">
      <p class="text-sm text-slate-600">${titre}</p>
      <p class="mt-1 text-3xl font-bold text-slate-900">${valeur}</p>
      ${detail ? `<p class="mt-1 text-sm text-slate-600">${detail}</p>` : ""}
    </div>`;
}

function couleurTaux(taux) {
  if (taux >= 100) return "bg-red-600";
  if (taux >= 80) return "bg-amber-500";
  return "bg-blue-600";
}

function ligneCours({ matiere, niveau, centre, inscrits, taux }) {
  return `
    <tr class="border-t border-slate-200">
      <th scope="row" class="py-3 pr-4 text-left font-medium">${matiere}</th>
      <td class="py-3 pr-4">${niveau}</td>
      <td class="py-3 pr-4">${centre}</td>
      <td class="py-3 pr-4 whitespace-nowrap">${inscrits} / ${CAPACITE_MAX}</td>
      <td class="py-3 min-w-40">
        <div class="flex items-center gap-3">
          <div class="h-2 flex-1 rounded-full bg-slate-200" aria-hidden="true">
            <div class="h-2 rounded-full ${couleurTaux(taux)}" style="width: ${Math.min(taux, 100)}%"></div>
          </div>
          <span class="w-12 text-right">${taux} %</span>
        </div>
      </td>
    </tr>`;
}

export function renderDashboard(container) {
  const { total, parStatut, recettes, remplissage } = calculerStats(getInscriptions());

  const pourcentage = (n) => (total ? `${Math.round((n / total) * 100)} % des inscriptions` : "");

  const cartesStatut = STATUTS
    .map((statut) => carte(statut, parStatut[statut], pourcentage(parStatut[statut])))
    .join("");

  const lignes = remplissage.length
    ? remplissage.map(ligneCours).join("")
    : `<tr><td colspan="5" class="py-3 text-slate-600">Aucune inscription pour le moment.</td></tr>`;

  container.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Tableau de bord</h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      ${carte("Inscrits", total)}
      ${cartesStatut}
      ${carte("Recettes encaissées", formaterMAD(recettes), "Inscriptions payées")}
    </div>

    <div class="mt-8 rounded-xl border border-slate-200 bg-white p-5 overflow-x-auto">
      <table class="w-full text-sm">
        <caption class="text-left text-lg font-bold mb-3">Taux de remplissage par cours</caption>
        <thead>
          <tr class="text-left text-slate-600">
            <th scope="col" class="pb-2 pr-4 font-medium">Cours</th>
            <th scope="col" class="pb-2 pr-4 font-medium">Niveau</th>
            <th scope="col" class="pb-2 pr-4 font-medium">Centre</th>
            <th scope="col" class="pb-2 pr-4 font-medium">Inscrits</th>
            <th scope="col" class="pb-2 font-medium">Remplissage</th>
          </tr>
        </thead>
        <tbody>${lignes}</tbody>
      </table>
    </div>`;
}