import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Conditionally import tempo if available
let tempoPlugin = () => null;
let tempoSwcPlugin = null;

// Only try to import Tempo plugins in Tempo environment
if (process.env.TEMPO === "true") {
  try {
    const tempoModule = require("tempo-devtools/dist/vite");
    tempoPlugin = tempoModule.tempo;
    tempoSwcPlugin = ["tempo-devtools/swc", {}];
  } catch (e) {
    console.warn("Tempo plugins not available");
  }
}

const conditionalPlugins: any[] = [];
if (process.env.TEMPO === "true" && tempoSwcPlugin) {
  conditionalPlugins.push(tempoSwcPlugin);
}

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
    // Only include tempobook in Tempo environment
    ...(process.env.TEMPO === "true"
      ? { include: ["src/tempobook/**/*"] }
      : {}),
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    // Only add tempo plugin in Tempo environment
    process.env.TEMPO === "true" ? tempoPlugin() : null,
  ].filter(Boolean),
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // Only set allowedHosts in Tempo environment
    ...(process.env.TEMPO === "true" ? { allowedHosts: true } : {}),
  },
  build: {
    // Exclude tempobook from production builds
    rollupOptions: {
      external: process.env.TEMPO !== "true" ? [/\/tempobook\//] : [],
    },
  },
});
