import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { cpSync } from "node:fs";

export default defineConfig(({ mode }) => ({
  // En ligne, le site est dans le sous-dossier /Nour-academy-3/ ; en local, à la racine
  base: mode === "production" ? "/Nour-academy-3/" : "/",
  plugins: [
    tailwindcss(),
    {
      // Les scripts de la Partie 1 ne sont pas des modules : Vite ne les copie pas tout seul
      name: "copier-scripts-partie-1",
      apply: "build",
      closeBundle() {
        cpSync("js", "dist/js", { recursive: true });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        cart: "cart.html",
        form: "form.html",
        dashboard: "dashboard.html",
      },
    },
  },
}));