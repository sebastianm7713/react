// Ventas.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ventas = () => {
  const navigate = useNavigate(); // <- AQUÍ estaba el detalle

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Ventas</h1>
      <p>Hola desde ventas</p>
      <button onClick={() => navigate(-1)}>🔙 Volver</button>
    </div>
  );
};

export default Ventas;
