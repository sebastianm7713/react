// src/feature/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Puedes crear estilos aquí

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <nav>
        <ul>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/ventas">Ventas</Link></li>
          <li><Link to="/productos">Productos</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
