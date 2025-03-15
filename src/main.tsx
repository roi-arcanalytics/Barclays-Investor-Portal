import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// Conditionally import and initialize Tempo Devtools
if (import.meta.env.VITE_TEMPO === "true") {
  try {
    const { TempoDevtools } = await import("tempo-devtools");
    TempoDevtools.init();
  } catch (e) {
    console.warn("Tempo devtools not available", e);
  }
}

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
);
