// Productos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Productos = () => {
  const navigate = useNavigate(); // ✅ Se agregó esta línea

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Productos</h1> 
      <p>Hola desde productos</p>
      <button onClick={() => navigate(-1)}>🔙 Volver</button>
    </div>
  );
};

export default Productos;
