// Clientes.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clientes = () => {
  const navigate = useNavigate(); // ✅ Se agregó esta línea

  return (
    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>Clientes</h1>
      <p>Hola desde clientes</p>
      <button onClick={() => navigate(-1)}>🔙 Volver</button>
    </div>
  );
};

export default Clientes;
