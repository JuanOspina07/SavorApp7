import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./Components/App";
import Login from "./Components/Login";
import "./index.css";
import Registro from "./Components/Registro"; // Importamos Registro

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/registro" element={<Registro />} />
            <Route path="*" element={<Login setAuth={setIsAuthenticated} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<App setAuth={setIsAuthenticated} />} />
            <Route path="*" element={<App setAuth={setIsAuthenticated} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
