/**
 * @copyright 2025 ayishaafridi
 * @license Apache-2.0
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* sections */
import App from "./App.jsx";

/* CSS links */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
