import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import QuestionsProvider from "./context/QuestionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuestionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuestionsProvider>
);
