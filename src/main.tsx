import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // ✅ TailwindCSS styles
// import { ThemeProvider } from "@material-tailwind/react/theme";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
