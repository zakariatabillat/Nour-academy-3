import { initInscriptions, resetDemo } from "./state.js";
import { renderDashboard } from "./director-dashboard.js";

const liste = document.getElementById("students-list");
const vueDashboard = document.getElementById("tableau-de-bord");
const btnDashboard = document.getElementById("btn-tableau-de-bord");

const actions = `
  <div class="flex flex-wrap gap-3 mb-6">
    <button type="button" id="btn-retour-liste"
      class="rounded-lg border border-slate-300 bg-white px-4 py-2 hover:bg-slate-100">← Retour aux inscriptions</button>
    <button type="button" id="btn-reset-demo"
      class="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">Réinitialiser les données de démo</button>
  </div>`;

function afficherDashboard() {
  initInscriptions(); // relit les données enregistrées par la liste (ajouts, modifications, suppressions)
  renderDashboard(vueDashboard);
  vueDashboard.insertAdjacentHTML("afterbegin", actions);
  liste.classList.add("hidden");
  vueDashboard.classList.remove("hidden");
  btnDashboard.setAttribute("aria-current", "page");
}

function afficherListe() {
  vueDashboard.classList.add("hidden");
  liste.classList.remove("hidden");
  btnDashboard.removeAttribute("aria-current");
}

btnDashboard.addEventListener("click", afficherDashboard);

vueDashboard.addEventListener("click", (e) => {
  if (e.target.closest("#btn-retour-liste")) afficherListe();

  if (e.target.closest("#btn-reset-demo")) {
    if (confirm("Réinitialiser les données de démo ? Toutes les modifications seront perdues.")) {
      resetDemo();
      location.reload(); // la liste et le tableau de bord repartent des données fictives
    }
  }
});