import React from "react";
import { createRoot } from "react-dom/client";
import { App } from './App.js';
import { BrowserRouter } from "react-router-dom";

const rootElement = createRoot(document.getElementById("root"));

rootElement?.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)