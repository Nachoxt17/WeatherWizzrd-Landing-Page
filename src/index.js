import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPage } from "./LandingPage/LandingPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPage />);
