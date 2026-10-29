# Nour Academy — Partie 2 : back-office du secrétariat

Back-office permettant au secrétariat de gérer les inscriptions et au directeur de suivre les chiffres clés, sans Excel.
Tout fonctionne dans le navigateur (aucun serveur) : les données sont enregistrées dans le `localStorage`.

## Lien de l'application

À compléter après le déploiement.

## Installation

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée par Vite (par défaut `http://localhost:5173/`).

## Architecture des modules

Le code est découpé en modules ES par responsabilité :

| Module | Rôle |
|---|---|
| `js/storage.js` | Lecture et écriture des inscriptions dans le `localStorage` |
| `js/seed.js` | Jeu de 20 inscriptions fictives chargé au premier lancement |
| `js/state.js` | État de l'application : ajout, modification, suppression, réinitialisation, notification des vues (`onChange`) |
| `js/courses.js` | Liste des 76 cours (niveau, matière, centre, horaire, prix) |
| `js/validation.js` | Regex de la Partie 1 réutilisées (nom, téléphone, email) |
| `js/rules.js` | Règles métier : refus des doublons, 15 élèves maximum par groupe |
| `js/stats.js` | Calcul des chiffres du directeur : inscrits, statuts, recettes, taux de remplissage |
| `js/director-dashboard.js` | Affichage du tableau de bord du directeur, recalculé après chaque changement |

### Circulation des données

1. Au démarrage, `initInscriptions()` charge les inscriptions enregistrées, ou le jeu fictif au premier lancement.
2. Toute modification passe par `state.js`, qui enregistre la liste puis prévient les vues abonnées avec `onChange`.
3. Les vues (liste, tableau de bord) se mettent à jour sans rechargement.

## Répartition du travail

| Membre | Travail réalisé |
|---|---|
| Taha Harbouch | Nettoyage du dépôt, modules de données (stockage, état, cours, validation, règles), tableau de bord du directeur (US6), réinitialisation des données de démo |
| [nom du coéquipier] | À compléter |

## Données personnelles (loi 09-08)

Le dépôt ne contient que des données fictives. Le bouton « Réinitialiser les données de démo » restaure le jeu d'inscriptions fictives.

## Captures

À ajouter.

## Sources

- [MDN — Modules JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules)
- [MDN — localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [Documentation Vite](https://vite.dev/guide/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)