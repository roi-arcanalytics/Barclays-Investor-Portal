// Compatibility layer for Tempo-specific features
// This file provides fallbacks when running outside the Tempo environment

// Empty routes array when not in Tempo environment
export const tempoRoutes = [];

// No-op initialization function for when not in Tempo environment
export const initTempoDevtools = () => {
  // Do nothing when not in Tempo environment
  console.log("Tempo devtools not available in this environment");
};
