import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/App.css"
function App({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Eliminar autenticación
    setAuth(false); // Actualizar estado de autenticación
    navigate("/"); // Redirigir al login
  };

  return (
    <div>
      <h1>Bienvenido a Savora</h1>
      <button onClick={() => navigate("/otra")}>Ir a otra página</button>
      <button onClick={handleLogout} style={{ marginLeft: "10px", backgroundColor: "red", color: "white" }}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default App;
