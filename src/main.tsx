// src/main.tsx
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // 1. Added this import
import App from "./App";
import "./index.css";

// 2. Wrap <App /> with <HelmetProvider>
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);