import { initInscriptions, onChange } from "./state.js";
import { initNavigation } from "./navigation.js";
import { remplirCours } from "./inscription-form.js";

initInscriptions();
initNavigation();
remplirCours();
onChange(remplirCours); // les places restantes se mettent à jour après chaque changement