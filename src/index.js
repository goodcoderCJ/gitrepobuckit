import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
const Homes = lazy(() => import("../src/components/Home"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="fallback-container">
            <div className="fallback"></div>
          </div>
        }
      >
        {Homes}
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
