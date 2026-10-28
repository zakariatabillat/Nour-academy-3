// Regex de la Partie 1, regroupées dans un module réutilisable
export const regex = {
  nom: /^[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/,
  telephone: /^0[5-7]\d{8}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const isValidNom = (valeur) => regex.nom.test(valeur.trim());
export const isValidTelephone = (valeur) => regex.telephone.test(valeur.replace(/\s/g, ""));
export const isValidEmail = (valeur) => regex.email.test(valeur.trim());