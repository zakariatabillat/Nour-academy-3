import { initInscriptions, onChange } from "./state.js";
import { initNavigation } from "./navigation.js";
import { remplirCours, initFormulaire } from "./inscription-form.js";

initInscriptions();
initNavigation();
remplirCours();
initFormulaire();
onChange(remplirCours);