import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Context } from "./Component/Context.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Context>
      <App />
    </Context>
  </>
);
