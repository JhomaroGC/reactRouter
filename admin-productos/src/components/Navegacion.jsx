import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div className="nav-bg">
      <nav className="navegacion-principal contenedor">
        <Link to="/">Inicio</Link>
        <Link to="productos">Lista Productos</Link>
        <Link to="contactos">Lista Contactos</Link>
      </nav>
    </div>
  );
};

export default Navegacion;
