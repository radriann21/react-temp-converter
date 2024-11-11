import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConverterContextProvider } from "./context/ConverterContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConverterContextProvider>
      <App />
    </ConverterContextProvider>
  </StrictMode>
);
